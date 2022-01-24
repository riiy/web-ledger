import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bpchar: any;
  date: any;
  jsonb: any;
  lquery: any;
  ltree: any;
  ltxtquery: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/**
 * web ledger account, not user login account
 *
 *
 * columns and relationships of "accounts"
 *
 */
export type Accounts = {
  __typename?: 'accounts';
  alias_name?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  currency?: Maybe<Currency>;
  default_commodity?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  name?: Maybe<Scalars['ltree']>;
  /** fetch data from the table: "postings" */
  postings: Array<Postings>;
  updated_at: Scalars['timestamptz'];
};


/**
 * web ledger account, not user login account
 *
 *
 * columns and relationships of "accounts"
 *
 */
export type AccountsPostingsArgs = {
  distinct_on?: InputMaybe<Array<Postings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Postings_Order_By>>;
  where?: InputMaybe<Postings_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  alias_name?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<Currency_Bool_Exp>;
  default_commodity?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<Ltree_Comparison_Exp>;
  postings?: InputMaybe<Postings_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey'
}

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  alias_name?: InputMaybe<Scalars['String']>;
  default_commodity?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['ltree']>;
  postings?: InputMaybe<Postings_Arr_Rel_Insert_Input>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** input type for inserting object relation for remote table "accounts" */
export type Accounts_Obj_Rel_Insert_Input = {
  data: Accounts_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** on conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  alias_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Currency_Order_By>;
  default_commodity?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  postings_aggregate?: InputMaybe<Postings_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AliasName = 'alias_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultCommodity = 'default_commodity',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  alias_name?: InputMaybe<Scalars['String']>;
  default_commodity?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AliasName = 'alias_name',
  /** column name */
  DefaultCommodity = 'default_commodity'
}

/** columns and relationships of "basic_auth.profile" */
export type Basic_Auth_Profile = {
  __typename?: 'basic_auth_profile';
  id: Scalars['uuid'];
  name: Scalars['String'];
  user_id: Scalars['uuid'];
};

/** Boolean expression to filter rows from the table "basic_auth.profile". All fields are combined with a logical 'AND'. */
export type Basic_Auth_Profile_Bool_Exp = {
  _and?: InputMaybe<Array<Basic_Auth_Profile_Bool_Exp>>;
  _not?: InputMaybe<Basic_Auth_Profile_Bool_Exp>;
  _or?: InputMaybe<Array<Basic_Auth_Profile_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "basic_auth.profile" */
export enum Basic_Auth_Profile_Constraint {
  /** unique or primary key constraint */
  ProfilePkey = 'profile_pkey',
  /** unique or primary key constraint */
  ProfileUidKey = 'profile_uid_key'
}

/** input type for inserting data into table "basic_auth.profile" */
export type Basic_Auth_Profile_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "basic_auth.profile" */
export type Basic_Auth_Profile_Mutation_Response = {
  __typename?: 'basic_auth_profile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Basic_Auth_Profile>;
};

/** on conflict condition type for table "basic_auth.profile" */
export type Basic_Auth_Profile_On_Conflict = {
  constraint: Basic_Auth_Profile_Constraint;
  update_columns?: Array<Basic_Auth_Profile_Update_Column>;
  where?: InputMaybe<Basic_Auth_Profile_Bool_Exp>;
};

/** Ordering options when selecting data from "basic_auth.profile". */
export type Basic_Auth_Profile_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: basic_auth_profile */
export type Basic_Auth_Profile_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "basic_auth.profile" */
export enum Basic_Auth_Profile_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "basic_auth.profile" */
export type Basic_Auth_Profile_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "basic_auth.profile" */
export enum Basic_Auth_Profile_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
};

/** columns and relationships of "currency" */
export type Currency = {
  __typename?: 'currency';
  code: Scalars['String'];
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  /** fetch data from the table: "postings" */
  postings: Array<Postings>;
  symbol: Scalars['String'];
};


/** columns and relationships of "currency" */
export type CurrencyPostingsArgs = {
  distinct_on?: InputMaybe<Array<Postings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Postings_Order_By>>;
  where?: InputMaybe<Postings_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "currency". All fields are combined with a logical 'AND'. */
export type Currency_Bool_Exp = {
  _and?: InputMaybe<Array<Currency_Bool_Exp>>;
  _not?: InputMaybe<Currency_Bool_Exp>;
  _or?: InputMaybe<Array<Currency_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  postings?: InputMaybe<Postings_Bool_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "currency". */
export type Currency_Order_By = {
  code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  postings_aggregate?: InputMaybe<Postings_Aggregate_Order_By>;
  symbol?: InputMaybe<Order_By>;
};

/** select columns of table "currency" */
export enum Currency_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Symbol = 'symbol'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** Boolean expression to compare columns of type "ltree". All fields are combined with logical 'AND'. */
export type Ltree_Comparison_Exp = {
  /** is the left argument an ancestor of right (or equal)? */
  _ancestor?: InputMaybe<Scalars['ltree']>;
  /** does array contain an ancestor of `ltree`? */
  _ancestor_any?: InputMaybe<Array<Scalars['ltree']>>;
  /** is the left argument a descendant of right (or equal)? */
  _descendant?: InputMaybe<Scalars['ltree']>;
  /** does array contain a descendant of `ltree`? */
  _descendant_any?: InputMaybe<Array<Scalars['ltree']>>;
  _eq?: InputMaybe<Scalars['ltree']>;
  _gt?: InputMaybe<Scalars['ltree']>;
  _gte?: InputMaybe<Scalars['ltree']>;
  _in?: InputMaybe<Array<Scalars['ltree']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['ltree']>;
  _lte?: InputMaybe<Scalars['ltree']>;
  /** does `ltree` match `lquery`? */
  _matches?: InputMaybe<Scalars['lquery']>;
  /** does `ltree` match any `lquery` in array? */
  _matches_any?: InputMaybe<Array<Scalars['String']>>;
  /** does `ltree` match `ltxtquery`? */
  _matches_fulltext?: InputMaybe<Scalars['ltxtquery']>;
  _neq?: InputMaybe<Scalars['ltree']>;
  _nin?: InputMaybe<Array<Scalars['ltree']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "postings" */
  delete_postings?: Maybe<Postings_Mutation_Response>;
  /** delete single row from the table: "postings" */
  delete_postings_by_pk?: Maybe<Postings>;
  /** delete data from the table: "transactions" */
  delete_transactions?: Maybe<Transactions_Mutation_Response>;
  /** delete single row from the table: "transactions" */
  delete_transactions_by_pk?: Maybe<Transactions>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "basic_auth.profile" */
  insert_basic_auth_profile?: Maybe<Basic_Auth_Profile_Mutation_Response>;
  /** insert a single row into the table: "basic_auth.profile" */
  insert_basic_auth_profile_one?: Maybe<Basic_Auth_Profile>;
  /** insert data into the table: "postings" */
  insert_postings?: Maybe<Postings_Mutation_Response>;
  /** insert a single row into the table: "postings" */
  insert_postings_one?: Maybe<Postings>;
  /** insert data into the table: "transactions" */
  insert_transactions?: Maybe<Transactions_Mutation_Response>;
  /** insert a single row into the table: "transactions" */
  insert_transactions_one?: Maybe<Transactions>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "basic_auth.profile" */
  update_basic_auth_profile?: Maybe<Basic_Auth_Profile_Mutation_Response>;
  /** update single row of the table: "basic_auth.profile" */
  update_basic_auth_profile_by_pk?: Maybe<Basic_Auth_Profile>;
  /** update data of the table: "postings" */
  update_postings?: Maybe<Postings_Mutation_Response>;
  /** update single row of the table: "postings" */
  update_postings_by_pk?: Maybe<Postings>;
  /** update data of the table: "transactions" */
  update_transactions?: Maybe<Transactions_Mutation_Response>;
  /** update single row of the table: "transactions" */
  update_transactions_by_pk?: Maybe<Transactions>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PostingsArgs = {
  where: Postings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Postings_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TransactionsArgs = {
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transactions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Basic_Auth_ProfileArgs = {
  objects: Array<Basic_Auth_Profile_Insert_Input>;
  on_conflict?: InputMaybe<Basic_Auth_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Basic_Auth_Profile_OneArgs = {
  object: Basic_Auth_Profile_Insert_Input;
  on_conflict?: InputMaybe<Basic_Auth_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostingsArgs = {
  objects: Array<Postings_Insert_Input>;
  on_conflict?: InputMaybe<Postings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Postings_OneArgs = {
  object: Postings_Insert_Input;
  on_conflict?: InputMaybe<Postings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionsArgs = {
  objects: Array<Transactions_Insert_Input>;
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transactions_OneArgs = {
  object: Transactions_Insert_Input;
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Basic_Auth_ProfileArgs = {
  _set?: InputMaybe<Basic_Auth_Profile_Set_Input>;
  where: Basic_Auth_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Basic_Auth_Profile_By_PkArgs = {
  _set?: InputMaybe<Basic_Auth_Profile_Set_Input>;
  pk_columns: Basic_Auth_Profile_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PostingsArgs = {
  _inc?: InputMaybe<Postings_Inc_Input>;
  _set?: InputMaybe<Postings_Set_Input>;
  where: Postings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Postings_By_PkArgs = {
  _inc?: InputMaybe<Postings_Inc_Input>;
  _set?: InputMaybe<Postings_Set_Input>;
  pk_columns: Postings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionsArgs = {
  _append?: InputMaybe<Transactions_Append_Input>;
  _delete_at_path?: InputMaybe<Transactions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Transactions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Transactions_Delete_Key_Input>;
  _prepend?: InputMaybe<Transactions_Prepend_Input>;
  _set?: InputMaybe<Transactions_Set_Input>;
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transactions_By_PkArgs = {
  _append?: InputMaybe<Transactions_Append_Input>;
  _delete_at_path?: InputMaybe<Transactions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Transactions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Transactions_Delete_Key_Input>;
  _prepend?: InputMaybe<Transactions_Prepend_Input>;
  _set?: InputMaybe<Transactions_Set_Input>;
  pk_columns: Transactions_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "postings" */
export type Postings = {
  __typename?: 'postings';
  /** An object relationship */
  account: Accounts;
  account_id: Scalars['uuid'];
  comment?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  currency: Currency;
  currency_id: Scalars['uuid'];
  id: Scalars['uuid'];
  quantity: Scalars['numeric'];
  /** An object relationship */
  transaction: Transactions;
  transaction_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** order by aggregate values of table "postings" */
export type Postings_Aggregate_Order_By = {
  avg?: InputMaybe<Postings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Postings_Max_Order_By>;
  min?: InputMaybe<Postings_Min_Order_By>;
  stddev?: InputMaybe<Postings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Postings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Postings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Postings_Sum_Order_By>;
  var_pop?: InputMaybe<Postings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Postings_Var_Samp_Order_By>;
  variance?: InputMaybe<Postings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "postings" */
export type Postings_Arr_Rel_Insert_Input = {
  data: Array<Postings_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Postings_On_Conflict>;
};

/** order by avg() on columns of table "postings" */
export type Postings_Avg_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "postings". All fields are combined with a logical 'AND'. */
export type Postings_Bool_Exp = {
  _and?: InputMaybe<Array<Postings_Bool_Exp>>;
  _not?: InputMaybe<Postings_Bool_Exp>;
  _or?: InputMaybe<Array<Postings_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<Currency_Bool_Exp>;
  currency_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
  transaction?: InputMaybe<Transactions_Bool_Exp>;
  transaction_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "postings" */
export enum Postings_Constraint {
  /** unique or primary key constraint */
  PostingsPkey = 'postings_pkey',
  /** unique or primary key constraint */
  PostingsTransactionIdAccountIdQuantityKey = 'postings_transaction_id_account_id_quantity_key'
}

/** input type for incrementing numeric columns in table "postings" */
export type Postings_Inc_Input = {
  quantity?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "postings" */
export type Postings_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['uuid']>;
  comment?: InputMaybe<Scalars['String']>;
  currency_id?: InputMaybe<Scalars['uuid']>;
  quantity?: InputMaybe<Scalars['numeric']>;
  transaction?: InputMaybe<Transactions_Obj_Rel_Insert_Input>;
  transaction_id?: InputMaybe<Scalars['uuid']>;
};

/** order by max() on columns of table "postings" */
export type Postings_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "postings" */
export type Postings_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "postings" */
export type Postings_Mutation_Response = {
  __typename?: 'postings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Postings>;
};

/** on conflict condition type for table "postings" */
export type Postings_On_Conflict = {
  constraint: Postings_Constraint;
  update_columns?: Array<Postings_Update_Column>;
  where?: InputMaybe<Postings_Bool_Exp>;
};

/** Ordering options when selecting data from "postings". */
export type Postings_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  account_id?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Currency_Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transactions_Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: postings */
export type Postings_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "postings" */
export enum Postings_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Id = 'id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "postings" */
export type Postings_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  comment?: InputMaybe<Scalars['String']>;
  currency_id?: InputMaybe<Scalars['uuid']>;
  quantity?: InputMaybe<Scalars['numeric']>;
  transaction_id?: InputMaybe<Scalars['uuid']>;
};

/** order by stddev() on columns of table "postings" */
export type Postings_Stddev_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "postings" */
export type Postings_Stddev_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "postings" */
export type Postings_Stddev_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "postings" */
export type Postings_Sum_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "postings" */
export enum Postings_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Comment = 'comment',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  TransactionId = 'transaction_id'
}

/** order by var_pop() on columns of table "postings" */
export type Postings_Var_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "postings" */
export type Postings_Var_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "postings" */
export type Postings_Variance_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "basic_auth.profile" */
  basic_auth_profile: Array<Basic_Auth_Profile>;
  /** fetch data from the table: "basic_auth.profile" using primary key columns */
  basic_auth_profile_by_pk?: Maybe<Basic_Auth_Profile>;
  /** fetch data from the table: "currency" */
  currency: Array<Currency>;
  /** fetch data from the table: "currency" using primary key columns */
  currency_by_pk?: Maybe<Currency>;
  /** fetch data from the table: "postings" */
  postings: Array<Postings>;
  /** fetch data from the table: "postings" using primary key columns */
  postings_by_pk?: Maybe<Postings>;
  /** fetch data from the table: "transactions" */
  transactions: Array<Transactions>;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>;
};


export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBasic_Auth_ProfileArgs = {
  distinct_on?: InputMaybe<Array<Basic_Auth_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Basic_Auth_Profile_Order_By>>;
  where?: InputMaybe<Basic_Auth_Profile_Bool_Exp>;
};


export type Query_RootBasic_Auth_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCurrencyArgs = {
  distinct_on?: InputMaybe<Array<Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Currency_Order_By>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Query_RootCurrency_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPostingsArgs = {
  distinct_on?: InputMaybe<Array<Postings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Postings_Order_By>>;
  where?: InputMaybe<Postings_Bool_Exp>;
};


export type Query_RootPostings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Query_RootTransactions_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "basic_auth.profile" */
  basic_auth_profile: Array<Basic_Auth_Profile>;
  /** fetch data from the table: "basic_auth.profile" using primary key columns */
  basic_auth_profile_by_pk?: Maybe<Basic_Auth_Profile>;
  /** fetch data from the table: "currency" */
  currency: Array<Currency>;
  /** fetch data from the table: "currency" using primary key columns */
  currency_by_pk?: Maybe<Currency>;
  /** fetch data from the table: "postings" */
  postings: Array<Postings>;
  /** fetch data from the table: "postings" using primary key columns */
  postings_by_pk?: Maybe<Postings>;
  /** fetch data from the table: "transactions" */
  transactions: Array<Transactions>;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>;
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBasic_Auth_ProfileArgs = {
  distinct_on?: InputMaybe<Array<Basic_Auth_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Basic_Auth_Profile_Order_By>>;
  where?: InputMaybe<Basic_Auth_Profile_Bool_Exp>;
};


export type Subscription_RootBasic_Auth_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCurrencyArgs = {
  distinct_on?: InputMaybe<Array<Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Currency_Order_By>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Subscription_RootCurrency_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPostingsArgs = {
  distinct_on?: InputMaybe<Array<Postings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Postings_Order_By>>;
  where?: InputMaybe<Postings_Bool_Exp>;
};


export type Subscription_RootPostings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootTransactions_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "transactions" */
export type Transactions = {
  __typename?: 'transactions';
  code?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  payee_payer?: Maybe<Scalars['String']>;
  /** fetch data from the table: "postings" */
  postings: Array<Postings>;
  status?: Maybe<Scalars['bpchar']>;
  tags?: Maybe<Scalars['jsonb']>;
  trans_date?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "transactions" */
export type TransactionsPostingsArgs = {
  distinct_on?: InputMaybe<Array<Postings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Postings_Order_By>>;
  where?: InputMaybe<Postings_Bool_Exp>;
};


/** columns and relationships of "transactions" */
export type TransactionsTagsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Transactions_Append_Input = {
  tags?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export type Transactions_Bool_Exp = {
  _and?: InputMaybe<Array<Transactions_Bool_Exp>>;
  _not?: InputMaybe<Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Transactions_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  payee_payer?: InputMaybe<String_Comparison_Exp>;
  postings?: InputMaybe<Postings_Bool_Exp>;
  status?: InputMaybe<Bpchar_Comparison_Exp>;
  tags?: InputMaybe<Jsonb_Comparison_Exp>;
  trans_date?: InputMaybe<Date_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "transactions" */
export enum Transactions_Constraint {
  /** unique or primary key constraint */
  TransactionsPkey = 'transactions_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Transactions_Delete_At_Path_Input = {
  tags?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Transactions_Delete_Elem_Input = {
  tags?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Transactions_Delete_Key_Input = {
  tags?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "transactions" */
export type Transactions_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  payee_payer?: InputMaybe<Scalars['String']>;
  postings?: InputMaybe<Postings_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['bpchar']>;
  tags?: InputMaybe<Scalars['jsonb']>;
  trans_date?: InputMaybe<Scalars['date']>;
};

/** response of any mutation on the table "transactions" */
export type Transactions_Mutation_Response = {
  __typename?: 'transactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transactions>;
};

/** input type for inserting object relation for remote table "transactions" */
export type Transactions_Obj_Rel_Insert_Input = {
  data: Transactions_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};

/** on conflict condition type for table "transactions" */
export type Transactions_On_Conflict = {
  constraint: Transactions_Constraint;
  update_columns?: Array<Transactions_Update_Column>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "transactions". */
export type Transactions_Order_By = {
  code?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payee_payer?: InputMaybe<Order_By>;
  postings_aggregate?: InputMaybe<Postings_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  trans_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transactions */
export type Transactions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Transactions_Prepend_Input = {
  tags?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "transactions" */
export enum Transactions_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PayeePayer = 'payee_payer',
  /** column name */
  Status = 'status',
  /** column name */
  Tags = 'tags',
  /** column name */
  TransDate = 'trans_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "transactions" */
export type Transactions_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  payee_payer?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['bpchar']>;
  tags?: InputMaybe<Scalars['jsonb']>;
  trans_date?: InputMaybe<Scalars['date']>;
};

/** update columns of table "transactions" */
export enum Transactions_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Comment = 'comment',
  /** column name */
  PayeePayer = 'payee_payer',
  /** column name */
  Status = 'status',
  /** column name */
  Tags = 'tags',
  /** column name */
  TransDate = 'trans_date'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type AccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountsQuery = { __typename?: 'query_root', accounts: Array<{ __typename?: 'accounts', id: any, alias_name?: string | null | undefined, name?: any | null | undefined, default_commodity?: any | null | undefined, postings: Array<{ __typename?: 'postings', quantity: any, updated_at: any }> }> };

export type InsertTransactionMutationVariables = Exact<{
  comment?: InputMaybe<Scalars['String']>;
  payee_payer?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['bpchar']>;
  tags?: InputMaybe<Scalars['jsonb']>;
  trans_date?: InputMaybe<Scalars['date']>;
  postings?: InputMaybe<Postings_Arr_Rel_Insert_Input>;
}>;


export type InsertTransactionMutation = { __typename?: 'mutation_root', insert_transactions?: { __typename?: 'transactions_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'transactions', id: any, trans_date?: any | null | undefined }> } | null | undefined };


export const AccountsDocument = gql`
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

/**
 * __useAccountsQuery__
 *
 * To run a query within a React component, call `useAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAccountsQuery(baseOptions?: Apollo.QueryHookOptions<AccountsQuery, AccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountsQuery, AccountsQueryVariables>(AccountsDocument, options);
      }
export function useAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountsQuery, AccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountsQuery, AccountsQueryVariables>(AccountsDocument, options);
        }
export type AccountsQueryHookResult = ReturnType<typeof useAccountsQuery>;
export type AccountsLazyQueryHookResult = ReturnType<typeof useAccountsLazyQuery>;
export type AccountsQueryResult = Apollo.QueryResult<AccountsQuery, AccountsQueryVariables>;
export const InsertTransactionDocument = gql`
    mutation insertTransaction($comment: String = "", $payee_payer: String = "", $status: bpchar = "", $tags: jsonb = "", $trans_date: date = "", $postings: postings_arr_rel_insert_input = {data: {account_id: "", currency_id: "", quantity: ""}, on_conflict: {constraint: postings_pkey, update_columns: account_id}}) {
  insert_transactions(
    objects: {comment: $comment, payee_payer: $payee_payer, tags: $tags, status: $status, trans_date: $trans_date, postings: $postings}
  ) {
    affected_rows
    returning {
      id
      trans_date
    }
  }
}
    `;
export type InsertTransactionMutationFn = Apollo.MutationFunction<InsertTransactionMutation, InsertTransactionMutationVariables>;

/**
 * __useInsertTransactionMutation__
 *
 * To run a mutation, you first call `useInsertTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTransactionMutation, { data, loading, error }] = useInsertTransactionMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *      payee_payer: // value for 'payee_payer'
 *      status: // value for 'status'
 *      tags: // value for 'tags'
 *      trans_date: // value for 'trans_date'
 *      postings: // value for 'postings'
 *   },
 * });
 */
export function useInsertTransactionMutation(baseOptions?: Apollo.MutationHookOptions<InsertTransactionMutation, InsertTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertTransactionMutation, InsertTransactionMutationVariables>(InsertTransactionDocument, options);
      }
export type InsertTransactionMutationHookResult = ReturnType<typeof useInsertTransactionMutation>;
export type InsertTransactionMutationResult = Apollo.MutationResult<InsertTransactionMutation>;
export type InsertTransactionMutationOptions = Apollo.BaseMutationOptions<InsertTransactionMutation, InsertTransactionMutationVariables>;