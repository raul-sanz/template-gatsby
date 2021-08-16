import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import Layout from '../components/Layout';

export const wrapRootElement = ({ element, props  }) => (
  <ApolloProvider client={client}><Layout {...props}>{element}</Layout></ApolloProvider>
);