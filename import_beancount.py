import requests
from beancount import loader
from beancount.core import display_context
from beancount.core.data import filter_txns, Posting, Transaction, Entries

from dataclasses import dataclass, asdict

from requests.models import HTTPBasicAuth

HASURA_URL = "https://web-ledger.acquirecord.top/v1/graphql"
HASURA_HEADERS = {"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InpiIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXVzZXItaWQiOiI3ZTdlMzYzMS0yZTAxLTQ0OGMtODkwOC04ZjhhMWQ2NmRkYmUifX0.ERNzwH8J4leA1OmCJwZTYGehrbl76eGw-M05msjyvvE"}

################
# GRAPHQL CLIENT
################

@dataclass
class Client:
    url: str
    headers: dict

    def run_query(self, query: str, variables: dict, extract=False):
        request = requests.post(
            self.url,
            headers=self.headers,
            json={"query": query, "variables": variables},
        )
        assert request.ok, f"Failed with code {request.status_code}"
        return request.json()

    find_user_by_email = lambda self, email: self.run_query(
        """
            query UserByEmail($email: String!) {
                basic_auth_users(where: {email: {_eq: $email}}, limit: 1) {
                    id
                    email
                    password
                }
            }
        """,
        {"email": email},
    )
    get_account = lambda self: self.run_query(
        """
        query MyQuery {
        accounts {
            id
            name
          }
        }
        """,
        {}
    )
    add_transaction = lambda self, trans: self.run_query(
        """
        mutation insertTransaction($comment: String = "", $payee_payer: String = "", $status: bpchar = "", $tags: jsonb = "", $trans_date: date = "",
        $postings: postings_arr_rel_insert_input = {data: {account_id: "", currency_id: "", quantity: ""}, on_conflict: {constraint: postings_pkey, update_columns: account_id}}) {
        insert_transactions(objects: {comment: $comment, payee_payer: $payee_payer, tags: $tags, status: $status, trans_date: $trans_date, postings: $postings}) {
            affected_rows
            returning {
                id
                trans_date
            }
          }
        }
        """,
        trans
    )



if __name__ == '__main__':
    file_path = 'journal_2022-01-31T23_31_42.beancount'
    dcontext = display_context.DisplayContext()
    entries, _, __ = loader.load_file(file_path)
    client = Client(url=HASURA_URL, headers=HASURA_HEADERS)
    account = client.get_account()
    account = account['data']['accounts']
    account = {a['name'].replace('.', ':'): a['id'] for a in account}
    for entry  in filter_txns(entries):
        trans = {}
        trans['comment'] = entry.narration
        trans['payee_payer'] = entry.payee
        trans['status'] = entry.flag
        trans['tags'] = {i: None for i in entry.tags}
        trans['trans_date'] = str(entry.date)
        p = []
        for posting in entry.postings:
            p.append({"account_id": account[posting.account], "currency_id": '4be49371-7ade-44b4-8aaf-3c2491bdc1d5', "quantity": posting.units[0]})
        trans['postings'] = {"data": p}
        res = client.add_transaction(trans=trans)

        print(res)
