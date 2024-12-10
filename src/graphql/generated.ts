import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BigDecimal: { input: any; output: any }
  BigInt: { input: any; output: any }
  Bytes: { input: any; output: any }
  Int8: { input: any; output: any }
  Timestamp: { input: any; output: any }
}

export type Admin = {
  __typename?: 'Admin'
  appointedAt: Scalars['BigInt']['output']
  id: Scalars['ID']['output']
}

export type Admin_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Admin_Filter>>>
  appointedAt?: InputMaybe<Scalars['BigInt']['input']>
  appointedAt_gt?: InputMaybe<Scalars['BigInt']['input']>
  appointedAt_gte?: InputMaybe<Scalars['BigInt']['input']>
  appointedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  appointedAt_lt?: InputMaybe<Scalars['BigInt']['input']>
  appointedAt_lte?: InputMaybe<Scalars['BigInt']['input']>
  appointedAt_not?: InputMaybe<Scalars['BigInt']['input']>
  appointedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_gt?: InputMaybe<Scalars['ID']['input']>
  id_gte?: InputMaybe<Scalars['ID']['input']>
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>
  id_lt?: InputMaybe<Scalars['ID']['input']>
  id_lte?: InputMaybe<Scalars['ID']['input']>
  id_not?: InputMaybe<Scalars['ID']['input']>
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>
  or?: InputMaybe<Array<InputMaybe<Admin_Filter>>>
}

export enum Admin_OrderBy {
  AppointedAt = 'appointedAt',
  Id = 'id'
}

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type AllocatedToken = {
  __typename?: 'AllocatedToken'
  amount: Scalars['BigInt']['output']
  claimedAmount: Scalars['BigInt']['output']
  claimedTimeStamp?: Maybe<Scalars['BigInt']['output']>
  id: Scalars['ID']['output']
  round: Round
  timestamp: Scalars['BigInt']['output']
  token: Scalars['String']['output']
  user: User
}

export type AllocatedToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  amount?: InputMaybe<Scalars['BigInt']['input']>
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>
  amount_not?: InputMaybe<Scalars['BigInt']['input']>
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  and?: InputMaybe<Array<InputMaybe<AllocatedToken_Filter>>>
  claimedAmount?: InputMaybe<Scalars['BigInt']['input']>
  claimedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>
  claimedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>
  claimedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  claimedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>
  claimedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>
  claimedAmount_not?: InputMaybe<Scalars['BigInt']['input']>
  claimedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  claimedTimeStamp?: InputMaybe<Scalars['BigInt']['input']>
  claimedTimeStamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  claimedTimeStamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  claimedTimeStamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  claimedTimeStamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  claimedTimeStamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  claimedTimeStamp_not?: InputMaybe<Scalars['BigInt']['input']>
  claimedTimeStamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_gt?: InputMaybe<Scalars['ID']['input']>
  id_gte?: InputMaybe<Scalars['ID']['input']>
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>
  id_lt?: InputMaybe<Scalars['ID']['input']>
  id_lte?: InputMaybe<Scalars['ID']['input']>
  id_not?: InputMaybe<Scalars['ID']['input']>
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>
  or?: InputMaybe<Array<InputMaybe<AllocatedToken_Filter>>>
  round?: InputMaybe<Scalars['String']['input']>
  round_?: InputMaybe<Round_Filter>
  round_contains?: InputMaybe<Scalars['String']['input']>
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>
  round_ends_with?: InputMaybe<Scalars['String']['input']>
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  round_gt?: InputMaybe<Scalars['String']['input']>
  round_gte?: InputMaybe<Scalars['String']['input']>
  round_in?: InputMaybe<Array<Scalars['String']['input']>>
  round_lt?: InputMaybe<Scalars['String']['input']>
  round_lte?: InputMaybe<Scalars['String']['input']>
  round_not?: InputMaybe<Scalars['String']['input']>
  round_not_contains?: InputMaybe<Scalars['String']['input']>
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  round_starts_with?: InputMaybe<Scalars['String']['input']>
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  timestamp?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  token?: InputMaybe<Scalars['String']['input']>
  token_contains?: InputMaybe<Scalars['String']['input']>
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_ends_with?: InputMaybe<Scalars['String']['input']>
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_gt?: InputMaybe<Scalars['String']['input']>
  token_gte?: InputMaybe<Scalars['String']['input']>
  token_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_lt?: InputMaybe<Scalars['String']['input']>
  token_lte?: InputMaybe<Scalars['String']['input']>
  token_not?: InputMaybe<Scalars['String']['input']>
  token_not_contains?: InputMaybe<Scalars['String']['input']>
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_starts_with?: InputMaybe<Scalars['String']['input']>
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  user?: InputMaybe<Scalars['String']['input']>
  user_?: InputMaybe<User_Filter>
  user_contains?: InputMaybe<Scalars['String']['input']>
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>
  user_ends_with?: InputMaybe<Scalars['String']['input']>
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  user_gt?: InputMaybe<Scalars['String']['input']>
  user_gte?: InputMaybe<Scalars['String']['input']>
  user_in?: InputMaybe<Array<Scalars['String']['input']>>
  user_lt?: InputMaybe<Scalars['String']['input']>
  user_lte?: InputMaybe<Scalars['String']['input']>
  user_not?: InputMaybe<Scalars['String']['input']>
  user_not_contains?: InputMaybe<Scalars['String']['input']>
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  user_starts_with?: InputMaybe<Scalars['String']['input']>
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
}

export enum AllocatedToken_OrderBy {
  Amount = 'amount',
  ClaimedAmount = 'claimedAmount',
  ClaimedTimeStamp = 'claimedTimeStamp',
  Id = 'id',
  Round = 'round',
  RoundCreatedAt = 'round__createdAt',
  RoundEnd = 'round__end',
  RoundId = 'round__id',
  RoundStart = 'round__start',
  Timestamp = 'timestamp',
  Token = 'token',
  User = 'user',
  UserCreatedAt = 'user__createdAt',
  UserId = 'user__id',
  UserTotalScore = 'user__totalScore'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input']
}

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>
  number?: InputMaybe<Scalars['Int']['input']>
  number_gte?: InputMaybe<Scalars['Int']['input']>
}

export type CurrentRound = {
  __typename?: 'CurrentRound'
  id: Scalars['ID']['output']
  round: Round
  updatedAt: Scalars['BigInt']['output']
}

export type CurrentRound_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<CurrentRound_Filter>>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_gt?: InputMaybe<Scalars['ID']['input']>
  id_gte?: InputMaybe<Scalars['ID']['input']>
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>
  id_lt?: InputMaybe<Scalars['ID']['input']>
  id_lte?: InputMaybe<Scalars['ID']['input']>
  id_not?: InputMaybe<Scalars['ID']['input']>
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>
  or?: InputMaybe<Array<InputMaybe<CurrentRound_Filter>>>
  round?: InputMaybe<Scalars['String']['input']>
  round_?: InputMaybe<Round_Filter>
  round_contains?: InputMaybe<Scalars['String']['input']>
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>
  round_ends_with?: InputMaybe<Scalars['String']['input']>
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  round_gt?: InputMaybe<Scalars['String']['input']>
  round_gte?: InputMaybe<Scalars['String']['input']>
  round_in?: InputMaybe<Array<Scalars['String']['input']>>
  round_lt?: InputMaybe<Scalars['String']['input']>
  round_lte?: InputMaybe<Scalars['String']['input']>
  round_not?: InputMaybe<Scalars['String']['input']>
  round_not_contains?: InputMaybe<Scalars['String']['input']>
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  round_starts_with?: InputMaybe<Scalars['String']['input']>
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['BigInt']['input']>
  updatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>
  updatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  updatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>
  updatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>
  updatedAt_not?: InputMaybe<Scalars['BigInt']['input']>
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
}

export enum CurrentRound_OrderBy {
  Id = 'id',
  Round = 'round',
  RoundCreatedAt = 'round__createdAt',
  RoundEnd = 'round__end',
  RoundId = 'round__id',
  RoundStart = 'round__start',
  UpdatedAt = 'updatedAt'
}

export type Donation = {
  __typename?: 'Donation'
  amount: Scalars['BigInt']['output']
  id: Scalars['ID']['output']
  timestamp: Scalars['BigInt']['output']
  token: Scalars['String']['output']
  user: User
}

export type Donation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  amount?: InputMaybe<Scalars['BigInt']['input']>
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>
  amount_not?: InputMaybe<Scalars['BigInt']['input']>
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  and?: InputMaybe<Array<InputMaybe<Donation_Filter>>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_gt?: InputMaybe<Scalars['ID']['input']>
  id_gte?: InputMaybe<Scalars['ID']['input']>
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>
  id_lt?: InputMaybe<Scalars['ID']['input']>
  id_lte?: InputMaybe<Scalars['ID']['input']>
  id_not?: InputMaybe<Scalars['ID']['input']>
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>
  or?: InputMaybe<Array<InputMaybe<Donation_Filter>>>
  timestamp?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  token?: InputMaybe<Scalars['String']['input']>
  token_contains?: InputMaybe<Scalars['String']['input']>
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_ends_with?: InputMaybe<Scalars['String']['input']>
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_gt?: InputMaybe<Scalars['String']['input']>
  token_gte?: InputMaybe<Scalars['String']['input']>
  token_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_lt?: InputMaybe<Scalars['String']['input']>
  token_lte?: InputMaybe<Scalars['String']['input']>
  token_not?: InputMaybe<Scalars['String']['input']>
  token_not_contains?: InputMaybe<Scalars['String']['input']>
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_starts_with?: InputMaybe<Scalars['String']['input']>
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  user?: InputMaybe<Scalars['String']['input']>
  user_?: InputMaybe<User_Filter>
  user_contains?: InputMaybe<Scalars['String']['input']>
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>
  user_ends_with?: InputMaybe<Scalars['String']['input']>
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  user_gt?: InputMaybe<Scalars['String']['input']>
  user_gte?: InputMaybe<Scalars['String']['input']>
  user_in?: InputMaybe<Array<Scalars['String']['input']>>
  user_lt?: InputMaybe<Scalars['String']['input']>
  user_lte?: InputMaybe<Scalars['String']['input']>
  user_not?: InputMaybe<Scalars['String']['input']>
  user_not_contains?: InputMaybe<Scalars['String']['input']>
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  user_starts_with?: InputMaybe<Scalars['String']['input']>
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
}

export enum Donation_OrderBy {
  Amount = 'amount',
  Id = 'id',
  Timestamp = 'timestamp',
  Token = 'token',
  User = 'user',
  UserCreatedAt = 'user__createdAt',
  UserId = 'user__id',
  UserTotalScore = 'user__totalScore'
}

export type GlobalStats = {
  __typename?: 'GlobalStats'
  id: Scalars['ID']['output']
  timesAlloted: Scalars['BigInt']['output']
  timesClaimed: Scalars['BigInt']['output']
  totalUsers: Scalars['BigInt']['output']
}

export type GlobalStats_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<GlobalStats_Filter>>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_gt?: InputMaybe<Scalars['ID']['input']>
  id_gte?: InputMaybe<Scalars['ID']['input']>
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>
  id_lt?: InputMaybe<Scalars['ID']['input']>
  id_lte?: InputMaybe<Scalars['ID']['input']>
  id_not?: InputMaybe<Scalars['ID']['input']>
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>
  or?: InputMaybe<Array<InputMaybe<GlobalStats_Filter>>>
  timesAlloted?: InputMaybe<Scalars['BigInt']['input']>
  timesAlloted_gt?: InputMaybe<Scalars['BigInt']['input']>
  timesAlloted_gte?: InputMaybe<Scalars['BigInt']['input']>
  timesAlloted_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timesAlloted_lt?: InputMaybe<Scalars['BigInt']['input']>
  timesAlloted_lte?: InputMaybe<Scalars['BigInt']['input']>
  timesAlloted_not?: InputMaybe<Scalars['BigInt']['input']>
  timesAlloted_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timesClaimed?: InputMaybe<Scalars['BigInt']['input']>
  timesClaimed_gt?: InputMaybe<Scalars['BigInt']['input']>
  timesClaimed_gte?: InputMaybe<Scalars['BigInt']['input']>
  timesClaimed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timesClaimed_lt?: InputMaybe<Scalars['BigInt']['input']>
  timesClaimed_lte?: InputMaybe<Scalars['BigInt']['input']>
  timesClaimed_not?: InputMaybe<Scalars['BigInt']['input']>
  timesClaimed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  totalUsers?: InputMaybe<Scalars['BigInt']['input']>
  totalUsers_gt?: InputMaybe<Scalars['BigInt']['input']>
  totalUsers_gte?: InputMaybe<Scalars['BigInt']['input']>
  totalUsers_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  totalUsers_lt?: InputMaybe<Scalars['BigInt']['input']>
  totalUsers_lte?: InputMaybe<Scalars['BigInt']['input']>
  totalUsers_not?: InputMaybe<Scalars['BigInt']['input']>
  totalUsers_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
}

export enum GlobalStats_OrderBy {
  Id = 'id',
  TimesAlloted = 'timesAlloted',
  TimesClaimed = 'timesClaimed',
  TotalUsers = 'totalUsers'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query'
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>
  admin?: Maybe<Admin>
  admins: Array<Admin>
  allocatedToken?: Maybe<AllocatedToken>
  allocatedTokens: Array<AllocatedToken>
  currentRound?: Maybe<CurrentRound>
  currentRounds: Array<CurrentRound>
  donation?: Maybe<Donation>
  donations: Array<Donation>
  globalStats?: Maybe<GlobalStats>
  globalStats_collection: Array<GlobalStats>
  round?: Maybe<Round>
  roundMetadata?: Maybe<RoundMetadata>
  roundMetadata_collection: Array<RoundMetadata>
  rounds: Array<Round>
  score?: Maybe<Score>
  scoreType?: Maybe<ScoreType>
  scoreTypes: Array<ScoreType>
  scores: Array<Score>
  tokenBalance?: Maybe<TokenBalance>
  tokenBalances: Array<TokenBalance>
  user?: Maybe<User>
  users: Array<User>
}

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>
}

export type QueryAdminArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryAdminsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Admin_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Admin_Filter>
}

export type QueryAllocatedTokenArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryAllocatedTokensArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<AllocatedToken_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<AllocatedToken_Filter>
}

export type QueryCurrentRoundArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryCurrentRoundsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<CurrentRound_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<CurrentRound_Filter>
}

export type QueryDonationArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryDonationsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Donation_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Donation_Filter>
}

export type QueryGlobalStatsArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryGlobalStats_CollectionArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<GlobalStats_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<GlobalStats_Filter>
}

export type QueryRoundArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryRoundMetadataArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryRoundMetadata_CollectionArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<RoundMetadata_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<RoundMetadata_Filter>
}

export type QueryRoundsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Round_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Round_Filter>
}

export type QueryScoreArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryScoreTypeArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryScoreTypesArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ScoreType_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<ScoreType_Filter>
}

export type QueryScoresArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Score_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Score_Filter>
}

export type QueryTokenBalanceArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryTokenBalancesArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TokenBalance_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<TokenBalance_Filter>
}

export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<User_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<User_Filter>
}

export type Round = {
  __typename?: 'Round'
  allocatedTokens?: Maybe<Array<AllocatedToken>>
  createdAt: Scalars['BigInt']['output']
  end: Scalars['BigInt']['output']
  id: Scalars['ID']['output']
  metadata: RoundMetadata
  start: Scalars['BigInt']['output']
}

export type RoundAllocatedTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<AllocatedToken_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AllocatedToken_Filter>
}

export type RoundMetadata = {
  __typename?: 'RoundMetadata'
  description: Scalars['String']['output']
  external_url?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  image?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
}

export type RoundMetadata_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<RoundMetadata_Filter>>>
  description?: InputMaybe<Scalars['String']['input']>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  description_gt?: InputMaybe<Scalars['String']['input']>
  description_gte?: InputMaybe<Scalars['String']['input']>
  description_in?: InputMaybe<Array<Scalars['String']['input']>>
  description_lt?: InputMaybe<Scalars['String']['input']>
  description_lte?: InputMaybe<Scalars['String']['input']>
  description_not?: InputMaybe<Scalars['String']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  external_url?: InputMaybe<Scalars['String']['input']>
  external_url_contains?: InputMaybe<Scalars['String']['input']>
  external_url_contains_nocase?: InputMaybe<Scalars['String']['input']>
  external_url_ends_with?: InputMaybe<Scalars['String']['input']>
  external_url_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  external_url_gt?: InputMaybe<Scalars['String']['input']>
  external_url_gte?: InputMaybe<Scalars['String']['input']>
  external_url_in?: InputMaybe<Array<Scalars['String']['input']>>
  external_url_lt?: InputMaybe<Scalars['String']['input']>
  external_url_lte?: InputMaybe<Scalars['String']['input']>
  external_url_not?: InputMaybe<Scalars['String']['input']>
  external_url_not_contains?: InputMaybe<Scalars['String']['input']>
  external_url_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  external_url_not_ends_with?: InputMaybe<Scalars['String']['input']>
  external_url_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  external_url_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  external_url_not_starts_with?: InputMaybe<Scalars['String']['input']>
  external_url_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  external_url_starts_with?: InputMaybe<Scalars['String']['input']>
  external_url_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  id_gt?: InputMaybe<Scalars['ID']['input']>
  id_gte?: InputMaybe<Scalars['ID']['input']>
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>
  id_lt?: InputMaybe<Scalars['ID']['input']>
  id_lte?: InputMaybe<Scalars['ID']['input']>
  id_not?: InputMaybe<Scalars['ID']['input']>
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>
  image?: InputMaybe<Scalars['String']['input']>
  image_contains?: InputMaybe<Scalars['String']['input']>
  image_contains_nocase?: InputMaybe<Scalars['String']['input']>
  image_ends_with?: InputMaybe<Scalars['String']['input']>
  image_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  image_gt?: InputMaybe<Scalars['String']['input']>
  image_gte?: InputMaybe<Scalars['String']['input']>
  image_in?: InputMaybe<Array<Scalars['String']['input']>>
  image_lt?: InputMaybe<Scalars['String']['input']>
  image_lte?: InputMaybe<Scalars['String']['input']>
  image_not?: InputMaybe<Scalars['String']['input']>
  image_not_contains?: InputMaybe<Scalars['String']['input']>
  image_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  image_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  image_starts_with?: InputMaybe<Scalars['String']['input']>
  image_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  name_gt?: InputMaybe<Scalars['String']['input']>
  name_gte?: InputMaybe<Scalars['String']['input']>
  name_in?: InputMaybe<Array<Scalars['String']['input']>>
  name_lt?: InputMaybe<Scalars['String']['input']>
  name_lte?: InputMaybe<Scalars['String']['input']>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  or?: InputMaybe<Array<InputMaybe<RoundMetadata_Filter>>>
}

export enum RoundMetadata_OrderBy {
  Description = 'description',
  ExternalUrl = 'external_url',
  Id = 'id',
  Image = 'image',
  Name = 'name'
}

export type Round_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  allocatedTokens_?: InputMaybe<AllocatedToken_Filter>
  and?: InputMaybe<Array<InputMaybe<Round_Filter>>>
  createdAt?: InputMaybe<Scalars['BigInt']['input']>
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  end?: InputMaybe<Scalars['BigInt']['input']>
  end_gt?: InputMaybe<Scalars['BigInt']['input']>
  end_gte?: InputMaybe<Scalars['BigInt']['input']>
  end_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  end_lt?: InputMaybe<Scalars['BigInt']['input']>
  end_lte?: InputMaybe<Scalars['BigInt']['input']>
  end_not?: InputMaybe<Scalars['BigInt']['input']>
  end_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_gt?: InputMaybe<Scalars['ID']['input']>
  id_gte?: InputMaybe<Scalars['ID']['input']>
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>
  id_lt?: InputMaybe<Scalars['ID']['input']>
  id_lte?: InputMaybe<Scalars['ID']['input']>
  id_not?: InputMaybe<Scalars['ID']['input']>
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>
  metadata?: InputMaybe<Scalars['String']['input']>
  metadata_?: InputMaybe<RoundMetadata_Filter>
  metadata_contains?: InputMaybe<Scalars['String']['input']>
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>
  metadata_ends_with?: InputMaybe<Scalars['String']['input']>
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  metadata_gt?: InputMaybe<Scalars['String']['input']>
  metadata_gte?: InputMaybe<Scalars['String']['input']>
  metadata_in?: InputMaybe<Array<Scalars['String']['input']>>
  metadata_lt?: InputMaybe<Scalars['String']['input']>
  metadata_lte?: InputMaybe<Scalars['String']['input']>
  metadata_not?: InputMaybe<Scalars['String']['input']>
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  metadata_not_ends_with?: InputMaybe<Scalars['String']['input']>
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  metadata_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  metadata_not_starts_with?: InputMaybe<Scalars['String']['input']>
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  metadata_starts_with?: InputMaybe<Scalars['String']['input']>
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  or?: InputMaybe<Array<InputMaybe<Round_Filter>>>
  start?: InputMaybe<Scalars['BigInt']['input']>
  start_gt?: InputMaybe<Scalars['BigInt']['input']>
  start_gte?: InputMaybe<Scalars['BigInt']['input']>
  start_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  start_lt?: InputMaybe<Scalars['BigInt']['input']>
  start_lte?: InputMaybe<Scalars['BigInt']['input']>
  start_not?: InputMaybe<Scalars['BigInt']['input']>
  start_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
}

export enum Round_OrderBy {
  AllocatedTokens = 'allocatedTokens',
  CreatedAt = 'createdAt',
  End = 'end',
  Id = 'id',
  Metadata = 'metadata',
  MetadataDescription = 'metadata__description',
  MetadataExternalUrl = 'metadata__external_url',
  MetadataId = 'metadata__id',
  MetadataImage = 'metadata__image',
  MetadataName = 'metadata__name',
  Start = 'start'
}

export type Score = {
  __typename?: 'Score'
  id: Scalars['ID']['output']
  scoreType: Scalars['String']['output']
  user: User
  value: Scalars['BigInt']['output']
}

export type ScoreType = {
  __typename?: 'ScoreType'
  id: Scalars['ID']['output']
}

export type ScoreType_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<ScoreType_Filter>>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_gt?: InputMaybe<Scalars['ID']['input']>
  id_gte?: InputMaybe<Scalars['ID']['input']>
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>
  id_lt?: InputMaybe<Scalars['ID']['input']>
  id_lte?: InputMaybe<Scalars['ID']['input']>
  id_not?: InputMaybe<Scalars['ID']['input']>
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>
  or?: InputMaybe<Array<InputMaybe<ScoreType_Filter>>>
}

export enum ScoreType_OrderBy {
  Id = 'id'
}

export type Score_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Score_Filter>>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_gt?: InputMaybe<Scalars['ID']['input']>
  id_gte?: InputMaybe<Scalars['ID']['input']>
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>
  id_lt?: InputMaybe<Scalars['ID']['input']>
  id_lte?: InputMaybe<Scalars['ID']['input']>
  id_not?: InputMaybe<Scalars['ID']['input']>
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>
  or?: InputMaybe<Array<InputMaybe<Score_Filter>>>
  scoreType?: InputMaybe<Scalars['String']['input']>
  scoreType_contains?: InputMaybe<Scalars['String']['input']>
  scoreType_contains_nocase?: InputMaybe<Scalars['String']['input']>
  scoreType_ends_with?: InputMaybe<Scalars['String']['input']>
  scoreType_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  scoreType_gt?: InputMaybe<Scalars['String']['input']>
  scoreType_gte?: InputMaybe<Scalars['String']['input']>
  scoreType_in?: InputMaybe<Array<Scalars['String']['input']>>
  scoreType_lt?: InputMaybe<Scalars['String']['input']>
  scoreType_lte?: InputMaybe<Scalars['String']['input']>
  scoreType_not?: InputMaybe<Scalars['String']['input']>
  scoreType_not_contains?: InputMaybe<Scalars['String']['input']>
  scoreType_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  scoreType_not_ends_with?: InputMaybe<Scalars['String']['input']>
  scoreType_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  scoreType_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  scoreType_not_starts_with?: InputMaybe<Scalars['String']['input']>
  scoreType_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  scoreType_starts_with?: InputMaybe<Scalars['String']['input']>
  scoreType_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  user?: InputMaybe<Scalars['String']['input']>
  user_?: InputMaybe<User_Filter>
  user_contains?: InputMaybe<Scalars['String']['input']>
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>
  user_ends_with?: InputMaybe<Scalars['String']['input']>
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  user_gt?: InputMaybe<Scalars['String']['input']>
  user_gte?: InputMaybe<Scalars['String']['input']>
  user_in?: InputMaybe<Array<Scalars['String']['input']>>
  user_lt?: InputMaybe<Scalars['String']['input']>
  user_lte?: InputMaybe<Scalars['String']['input']>
  user_not?: InputMaybe<Scalars['String']['input']>
  user_not_contains?: InputMaybe<Scalars['String']['input']>
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  user_starts_with?: InputMaybe<Scalars['String']['input']>
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  value?: InputMaybe<Scalars['BigInt']['input']>
  value_gt?: InputMaybe<Scalars['BigInt']['input']>
  value_gte?: InputMaybe<Scalars['BigInt']['input']>
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  value_lt?: InputMaybe<Scalars['BigInt']['input']>
  value_lte?: InputMaybe<Scalars['BigInt']['input']>
  value_not?: InputMaybe<Scalars['BigInt']['input']>
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
}

export enum Score_OrderBy {
  Id = 'id',
  ScoreType = 'scoreType',
  User = 'user',
  UserCreatedAt = 'user__createdAt',
  UserId = 'user__id',
  UserTotalScore = 'user__totalScore',
  Value = 'value'
}

export type Subscription = {
  __typename?: 'Subscription'
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>
  admin?: Maybe<Admin>
  admins: Array<Admin>
  allocatedToken?: Maybe<AllocatedToken>
  allocatedTokens: Array<AllocatedToken>
  currentRound?: Maybe<CurrentRound>
  currentRounds: Array<CurrentRound>
  donation?: Maybe<Donation>
  donations: Array<Donation>
  globalStats?: Maybe<GlobalStats>
  globalStats_collection: Array<GlobalStats>
  round?: Maybe<Round>
  roundMetadata?: Maybe<RoundMetadata>
  roundMetadata_collection: Array<RoundMetadata>
  rounds: Array<Round>
  score?: Maybe<Score>
  scoreType?: Maybe<ScoreType>
  scoreTypes: Array<ScoreType>
  scores: Array<Score>
  tokenBalance?: Maybe<TokenBalance>
  tokenBalances: Array<TokenBalance>
  user?: Maybe<User>
  users: Array<User>
}

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>
}

export type SubscriptionAdminArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionAdminsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Admin_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Admin_Filter>
}

export type SubscriptionAllocatedTokenArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionAllocatedTokensArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<AllocatedToken_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<AllocatedToken_Filter>
}

export type SubscriptionCurrentRoundArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionCurrentRoundsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<CurrentRound_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<CurrentRound_Filter>
}

export type SubscriptionDonationArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionDonationsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Donation_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Donation_Filter>
}

export type SubscriptionGlobalStatsArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionGlobalStats_CollectionArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<GlobalStats_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<GlobalStats_Filter>
}

export type SubscriptionRoundArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionRoundMetadataArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionRoundMetadata_CollectionArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<RoundMetadata_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<RoundMetadata_Filter>
}

export type SubscriptionRoundsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Round_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Round_Filter>
}

export type SubscriptionScoreArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionScoreTypeArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionScoreTypesArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ScoreType_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<ScoreType_Filter>
}

export type SubscriptionScoresArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Score_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Score_Filter>
}

export type SubscriptionTokenBalanceArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionTokenBalancesArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TokenBalance_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<TokenBalance_Filter>
}

export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<User_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<User_Filter>
}

export type TokenBalance = {
  __typename?: 'TokenBalance'
  amount: Scalars['BigInt']['output']
  id: Scalars['ID']['output']
  token: Scalars['String']['output']
}

export type TokenBalance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  amount?: InputMaybe<Scalars['BigInt']['input']>
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>
  amount_not?: InputMaybe<Scalars['BigInt']['input']>
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  and?: InputMaybe<Array<InputMaybe<TokenBalance_Filter>>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_gt?: InputMaybe<Scalars['ID']['input']>
  id_gte?: InputMaybe<Scalars['ID']['input']>
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>
  id_lt?: InputMaybe<Scalars['ID']['input']>
  id_lte?: InputMaybe<Scalars['ID']['input']>
  id_not?: InputMaybe<Scalars['ID']['input']>
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>
  or?: InputMaybe<Array<InputMaybe<TokenBalance_Filter>>>
  token?: InputMaybe<Scalars['String']['input']>
  token_contains?: InputMaybe<Scalars['String']['input']>
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_ends_with?: InputMaybe<Scalars['String']['input']>
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_gt?: InputMaybe<Scalars['String']['input']>
  token_gte?: InputMaybe<Scalars['String']['input']>
  token_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_lt?: InputMaybe<Scalars['String']['input']>
  token_lte?: InputMaybe<Scalars['String']['input']>
  token_not?: InputMaybe<Scalars['String']['input']>
  token_not_contains?: InputMaybe<Scalars['String']['input']>
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_starts_with?: InputMaybe<Scalars['String']['input']>
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
}

export enum TokenBalance_OrderBy {
  Amount = 'amount',
  Id = 'id',
  Token = 'token'
}

export type User = {
  __typename?: 'User'
  allocatedTokens?: Maybe<Array<AllocatedToken>>
  createdAt: Scalars['BigInt']['output']
  donations?: Maybe<Array<Donation>>
  id: Scalars['ID']['output']
  scores?: Maybe<Array<Score>>
  totalScore: Scalars['BigInt']['output']
}

export type UserAllocatedTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<AllocatedToken_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AllocatedToken_Filter>
}

export type UserDonationsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Donation_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Donation_Filter>
}

export type UserScoresArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Score_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Score_Filter>
}

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  allocatedTokens_?: InputMaybe<AllocatedToken_Filter>
  and?: InputMaybe<Array<InputMaybe<User_Filter>>>
  createdAt?: InputMaybe<Scalars['BigInt']['input']>
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  donations_?: InputMaybe<Donation_Filter>
  id?: InputMaybe<Scalars['ID']['input']>
  id_gt?: InputMaybe<Scalars['ID']['input']>
  id_gte?: InputMaybe<Scalars['ID']['input']>
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>
  id_lt?: InputMaybe<Scalars['ID']['input']>
  id_lte?: InputMaybe<Scalars['ID']['input']>
  id_not?: InputMaybe<Scalars['ID']['input']>
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>
  or?: InputMaybe<Array<InputMaybe<User_Filter>>>
  scores_?: InputMaybe<Score_Filter>
  totalScore?: InputMaybe<Scalars['BigInt']['input']>
  totalScore_gt?: InputMaybe<Scalars['BigInt']['input']>
  totalScore_gte?: InputMaybe<Scalars['BigInt']['input']>
  totalScore_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  totalScore_lt?: InputMaybe<Scalars['BigInt']['input']>
  totalScore_lte?: InputMaybe<Scalars['BigInt']['input']>
  totalScore_not?: InputMaybe<Scalars['BigInt']['input']>
  totalScore_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
}

export enum User_OrderBy {
  AllocatedTokens = 'allocatedTokens',
  CreatedAt = 'createdAt',
  Donations = 'donations',
  Id = 'id',
  Scores = 'scores',
  TotalScore = 'totalScore'
}

export type _Block_ = {
  __typename?: '_Block_'
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>
  /** The block number */
  number: Scalars['Int']['output']
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>
}

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_'
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_
  /** The deployment ID */
  deployment: Scalars['String']['output']
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output']
}

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type CurrentRoundsQueryVariables = Exact<{ [key: string]: never }>

export type CurrentRoundsQuery = {
  __typename?: 'Query'
  currentRounds: Array<{
    __typename?: 'CurrentRound'
    id: string
    updatedAt: any
    round: {
      __typename?: 'Round'
      createdAt: any
      end: any
      id: string
      start: any
      metadata: {
        __typename?: 'RoundMetadata'
        description: string
        external_url?: string | null
        id: string
        image?: string | null
        name: string
      }
    }
  }>
}

export type GetUsersQueryVariables = Exact<{
  orderBy?: InputMaybe<User_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  first?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}>

export type GetUsersQuery = {
  __typename?: 'Query'
  users: Array<{
    __typename?: 'User'
    id: string
    totalScore: any
    createdAt: any
    scores?: Array<{
      __typename?: 'Score'
      id: string
      scoreType: string
      value: any
    }> | null
    donations?: Array<{
      __typename?: 'Donation'
      token: string
      amount: any
    }> | null
    allocatedTokens?: Array<{
      __typename?: 'AllocatedToken'
      token: string
      amount: any
    }> | null
  }>
}

export type MyQueryQueryVariables = Exact<{ [key: string]: never }>

export type MyQueryQuery = {
  __typename?: 'Query'
  scoreTypes: Array<{ __typename?: 'ScoreType'; id: string }>
}

export type TokenBalancesQueryVariables = Exact<{ [key: string]: never }>

export type TokenBalancesQuery = {
  __typename?: 'Query'
  tokenBalances: Array<{ __typename?: 'TokenBalance'; id: string; amount: any }>
}

export const CurrentRoundsDocument = gql`
  query CurrentRounds {
    currentRounds {
      id
      updatedAt
      round {
        createdAt
        end
        id
        start
        metadata {
          description
          external_url
          id
          image
          name
        }
      }
    }
  }
`

/**
 * __useCurrentRoundsQuery__
 *
 * To run a query within a React component, call `useCurrentRoundsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentRoundsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentRoundsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentRoundsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CurrentRoundsQuery,
    CurrentRoundsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CurrentRoundsQuery, CurrentRoundsQueryVariables>(
    CurrentRoundsDocument,
    options
  )
}
export function useCurrentRoundsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CurrentRoundsQuery,
    CurrentRoundsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CurrentRoundsQuery, CurrentRoundsQueryVariables>(
    CurrentRoundsDocument,
    options
  )
}
export function useCurrentRoundsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        CurrentRoundsQuery,
        CurrentRoundsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    CurrentRoundsQuery,
    CurrentRoundsQueryVariables
  >(CurrentRoundsDocument, options)
}
export type CurrentRoundsQueryHookResult = ReturnType<
  typeof useCurrentRoundsQuery
>
export type CurrentRoundsLazyQueryHookResult = ReturnType<
  typeof useCurrentRoundsLazyQuery
>
export type CurrentRoundsSuspenseQueryHookResult = ReturnType<
  typeof useCurrentRoundsSuspenseQuery
>
export type CurrentRoundsQueryResult = Apollo.QueryResult<
  CurrentRoundsQuery,
  CurrentRoundsQueryVariables
>
export const GetUsersDocument = gql`
  query GetUsers(
    $orderBy: User_orderBy
    $orderDirection: OrderDirection
    $first: Int
    $skip: Int
  ) {
    users(
      orderBy: $orderBy
      orderDirection: $orderDirection
      first: $first
      skip: $skip
    ) {
      id
      totalScore
      createdAt
      scores {
        id
        scoreType
        value
      }
      donations {
        token
        amount
      }
      allocatedTokens {
        token
        amount
      }
    }
  }
`

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  )
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  )
}
export function useGetUsersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  )
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>
export type GetUsersSuspenseQueryHookResult = ReturnType<
  typeof useGetUsersSuspenseQuery
>
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>
export const MyQueryDocument = gql`
  query MyQuery {
    scoreTypes {
      id
    }
  }
`

/**
 * __useMyQueryQuery__
 *
 * To run a query within a React component, call `useMyQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<MyQueryQuery, MyQueryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MyQueryQuery, MyQueryQueryVariables>(
    MyQueryDocument,
    options
  )
}
export function useMyQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MyQueryQuery, MyQueryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MyQueryQuery, MyQueryQueryVariables>(
    MyQueryDocument,
    options
  )
}
export function useMyQuerySuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<MyQueryQuery, MyQueryQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<MyQueryQuery, MyQueryQueryVariables>(
    MyQueryDocument,
    options
  )
}
export type MyQueryQueryHookResult = ReturnType<typeof useMyQueryQuery>
export type MyQueryLazyQueryHookResult = ReturnType<typeof useMyQueryLazyQuery>
export type MyQuerySuspenseQueryHookResult = ReturnType<
  typeof useMyQuerySuspenseQuery
>
export type MyQueryQueryResult = Apollo.QueryResult<
  MyQueryQuery,
  MyQueryQueryVariables
>
export const TokenBalancesDocument = gql`
  query TokenBalances {
    tokenBalances {
      id
      amount
    }
  }
`

/**
 * __useTokenBalancesQuery__
 *
 * To run a query within a React component, call `useTokenBalancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenBalancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenBalancesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTokenBalancesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    TokenBalancesQuery,
    TokenBalancesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TokenBalancesQuery, TokenBalancesQueryVariables>(
    TokenBalancesDocument,
    options
  )
}
export function useTokenBalancesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TokenBalancesQuery,
    TokenBalancesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TokenBalancesQuery, TokenBalancesQueryVariables>(
    TokenBalancesDocument,
    options
  )
}
export function useTokenBalancesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        TokenBalancesQuery,
        TokenBalancesQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    TokenBalancesQuery,
    TokenBalancesQueryVariables
  >(TokenBalancesDocument, options)
}
export type TokenBalancesQueryHookResult = ReturnType<
  typeof useTokenBalancesQuery
>
export type TokenBalancesLazyQueryHookResult = ReturnType<
  typeof useTokenBalancesLazyQuery
>
export type TokenBalancesSuspenseQueryHookResult = ReturnType<
  typeof useTokenBalancesSuspenseQuery
>
export type TokenBalancesQueryResult = Apollo.QueryResult<
  TokenBalancesQuery,
  TokenBalancesQueryVariables
>

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {}
}
export default result
