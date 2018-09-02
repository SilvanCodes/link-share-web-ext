/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = any
> = {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
};

export type DateTime = any;
/** An object with an ID */
export interface Node {
  id: string /** The id of the object. */;
}

export interface Query {
  info: string;
  websites: Website[];
  website?: Website | null;
}

export interface Website extends Node {
  id: string;
  createdAt: DateTime;
  url: string;
  belongsTo?: User | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  websites: Website[];
}

export interface Mutation {
  addWebsite: Website;
  signup?: AuthPayload | null;
  login?: AuthPayload | null;
}

export interface AuthPayload {
  token?: string | null;
  user?: User | null;
}

export interface Subscription {
  newWebsite?: WebsiteSubscriptionPayload | null;
}

export interface WebsiteSubscriptionPayload {
  mutation: MutationType;
  node?: Website | null;
  updatedFields?: string[] | null;
  previousValues?: WebsitePreviousValues | null;
}

export interface WebsitePreviousValues {
  id: string;
  createdAt: DateTime;
  url: string;
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | null /** Logical AND on all given filters. */;
  OR?: UserWhereInput[] | null /** Logical OR on all given filters. */;
  NOT?:
    | UserWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */;
  id?: string | null;
  id_not?: string | null /** All values that are not equal to given value. */;
  id_in?: string[] | null /** All values that are contained in given list. */;
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  id_lt?: string | null /** All values less than the given value. */;
  id_lte?: string | null /** All values less than or equal the given value. */;
  id_gt?: string | null /** All values greater than the given value. */;
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  id_contains?: string | null /** All values containing the given string. */;
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  id_ends_with?: string | null /** All values ending with the given string. */;
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  name?: string | null;
  name_not?: string | null /** All values that are not equal to given value. */;
  name_in?: string[] | null /** All values that are contained in given list. */;
  name_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  name_lt?: string | null /** All values less than the given value. */;
  name_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  name_gt?: string | null /** All values greater than the given value. */;
  name_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  name_contains?: string | null /** All values containing the given string. */;
  name_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  name_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  name_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  name_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  name_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  email?: string | null;
  email_not?:
    | string
    | null /** All values that are not equal to given value. */;
  email_in?:
    | string[]
    | null /** All values that are contained in given list. */;
  email_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  email_lt?: string | null /** All values less than the given value. */;
  email_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  email_gt?: string | null /** All values greater than the given value. */;
  email_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  email_contains?: string | null /** All values containing the given string. */;
  email_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  email_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  email_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  email_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  email_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  password?: string | null;
  password_not?:
    | string
    | null /** All values that are not equal to given value. */;
  password_in?:
    | string[]
    | null /** All values that are contained in given list. */;
  password_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  password_lt?: string | null /** All values less than the given value. */;
  password_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  password_gt?: string | null /** All values greater than the given value. */;
  password_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  password_contains?:
    | string
    | null /** All values containing the given string. */;
  password_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  password_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  password_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  password_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  password_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  websites_every?: WebsiteWhereInput | null;
  websites_some?: WebsiteWhereInput | null;
  websites_none?: WebsiteWhereInput | null;
}

export interface WebsiteWhereInput {
  AND?: WebsiteWhereInput[] | null /** Logical AND on all given filters. */;
  OR?: WebsiteWhereInput[] | null /** Logical OR on all given filters. */;
  NOT?:
    | WebsiteWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */;
  id?: string | null;
  id_not?: string | null /** All values that are not equal to given value. */;
  id_in?: string[] | null /** All values that are contained in given list. */;
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  id_lt?: string | null /** All values less than the given value. */;
  id_lte?: string | null /** All values less than or equal the given value. */;
  id_gt?: string | null /** All values greater than the given value. */;
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  id_contains?: string | null /** All values containing the given string. */;
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  id_ends_with?: string | null /** All values ending with the given string. */;
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */;
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */;
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */;
  createdAt_lt?: DateTime | null /** All values less than the given value. */;
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */;
  createdAt_gt?: DateTime | null /** All values greater than the given value. */;
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */;
  url?: string | null;
  url_not?: string | null /** All values that are not equal to given value. */;
  url_in?: string[] | null /** All values that are contained in given list. */;
  url_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  url_lt?: string | null /** All values less than the given value. */;
  url_lte?: string | null /** All values less than or equal the given value. */;
  url_gt?: string | null /** All values greater than the given value. */;
  url_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  url_contains?: string | null /** All values containing the given string. */;
  url_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  url_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  url_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  url_ends_with?: string | null /** All values ending with the given string. */;
  url_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  belongsTo?: UserWhereInput | null;
}
export interface WebsiteQueryArgs {
  id: string;
}
export interface BelongsToWebsiteArgs {
  where?: UserWhereInput | null;
}
export interface AddWebsiteMutationArgs {
  url: string;
}
export interface SignupMutationArgs {
  email: string;
  password: string;
  name: string;
}
export interface LoginMutationArgs {
  email: string;
  password: string;
}

export enum MutationType {
  CREATED = "CREATED",
  UPDATED = "UPDATED",
  DELETED = "DELETED"
}

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    info?: InfoResolver<string, any, Context>;
    websites?: WebsitesResolver<Website[], any, Context>;
    website?: WebsiteResolver<Website | null, any, Context>;
  }

  export type InfoResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type WebsitesResolver<
    R = Website[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type WebsiteResolver<
    R = Website | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, WebsiteArgs>;
  export interface WebsiteArgs {
    id: string;
  }
}

export namespace WebsiteResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    createdAt?: CreatedAtResolver<DateTime, any, Context>;
    url?: UrlResolver<string, any, Context>;
    belongsTo?: BelongsToResolver<User | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type BelongsToResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, BelongsToArgs>;
  export interface BelongsToArgs {
    where?: UserWhereInput | null;
  }
}

export namespace UserResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    name?: NameResolver<string, any, Context>;
    email?: EmailResolver<string, any, Context>;
    websites?: WebsitesResolver<Website[], any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type EmailResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type WebsitesResolver<
    R = Website[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = any> {
    addWebsite?: AddWebsiteResolver<Website, any, Context>;
    signup?: SignupResolver<AuthPayload | null, any, Context>;
    login?: LoginResolver<AuthPayload | null, any, Context>;
  }

  export type AddWebsiteResolver<
    R = Website,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddWebsiteArgs>;
  export interface AddWebsiteArgs {
    url: string;
  }

  export type SignupResolver<
    R = AuthPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SignupArgs>;
  export interface SignupArgs {
    email: string;
    password: string;
    name: string;
  }

  export type LoginResolver<
    R = AuthPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, LoginArgs>;
  export interface LoginArgs {
    email: string;
    password: string;
  }
}

export namespace AuthPayloadResolvers {
  export interface Resolvers<Context = any> {
    token?: TokenResolver<string | null, any, Context>;
    user?: UserResolver<User | null, any, Context>;
  }

  export type TokenResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UserResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace SubscriptionResolvers {
  export interface Resolvers<Context = any> {
    newWebsite?: NewWebsiteResolver<
      WebsiteSubscriptionPayload | null,
      any,
      Context
    >;
  }

  export type NewWebsiteResolver<
    R = WebsiteSubscriptionPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace WebsiteSubscriptionPayloadResolvers {
  export interface Resolvers<Context = any> {
    mutation?: MutationResolver<MutationType, any, Context>;
    node?: NodeResolver<Website | null, any, Context>;
    updatedFields?: UpdatedFieldsResolver<string[] | null, any, Context>;
    previousValues?: PreviousValuesResolver<
      WebsitePreviousValues | null,
      any,
      Context
    >;
  }

  export type MutationResolver<
    R = MutationType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Website | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedFieldsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousValuesResolver<
    R = WebsitePreviousValues | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace WebsitePreviousValuesResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    createdAt?: CreatedAtResolver<DateTime, any, Context>;
    url?: UrlResolver<string, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace MyWebsites {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";
    websites: Websites[];
  };

  export type Websites = {
    __typename?: "Website";
    id: string;
    url: string;
  };
}

export namespace NewWebsite {
  export type Variables = {};

  export type Subscription = {
    __typename?: "Subscription";
    newWebsite?: NewWebsite | null;
  };

  export type NewWebsite = {
    __typename?: "WebsiteSubscriptionPayload";
    node?: Node | null;
  };

  export type Node = {
    __typename?: "Website";
    url: string;
  };
}

import { Injectable } from "@angular/core";

import * as Apollo from "apollo-angular";

import gql from "graphql-tag";

@Injectable({
  providedIn: "root"
})
export class MyWebsitesGQL extends Apollo.Query<
  MyWebsites.Query,
  MyWebsites.Variables
> {
  document: any = gql`
    query MyWebsites {
      websites {
        id
        url
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class NewWebsiteGQL extends Apollo.Subscription<
  NewWebsite.Subscription,
  NewWebsite.Variables
> {
  document: any = gql`
    subscription NewWebsite {
      newWebsite {
        node {
          url
        }
      }
    }
  `;
}
