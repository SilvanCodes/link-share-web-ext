import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {split} from 'apollo-link';
import {WebSocketLink} from 'apollo-link-ws';
import {getMainDefinition} from 'apollo-utilities';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {environment} from '../../environments/environment';

const uriHttp = environment.graphQLHttp;
const uriWebSocket = environment.graphQLWebSocket;

interface Definintion {
  kind: string;
  operation?: string;
}

export function createApollo(httpLink: HttpLink) {
  return {
    link: split(
      // split based on operation type
      ({ query }) => {
        const { kind, operation }: Definintion = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      new WebSocketLink({
        uri: uriWebSocket,
        options: {
          reconnect: true
        },
      }),
      httpLink.create({uri: uriHttp}),
    ),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
