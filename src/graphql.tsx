import { gql } from '@apollo/client';

const QUERY_ACCOUNTS = gql`
  query ACCOUNTS {
    accounts {
      id
      alias_name
      name
      default_commodity
      postings {
        quantity
        updated_at
      }
    }
  }
`;
const INSERT_TRANSACTIONS = gql`
  mutation insertTransaction($comment: String = "", $payee_payer: String = "", $status: bpchar = "", $tags: jsonb = "", $trans_date: date = "", $postings: postings_arr_rel_insert_input = {data: {account_id: "", currency_id: "", quantity: ""}, on_conflict: {constraint: postings_pkey, update_columns: account_id}}) {
    insert_transactions(objects: {comment: $comment, payee_payer: $payee_payer, tags: $tags, status: $status, trans_date: $trans_date, postings: $postings}) {
      affected_rows
      returning {
        id
        trans_date
      }
    }
  }
`;
