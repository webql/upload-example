import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import NewsArticle from './NewsArticle';

const GetAllNewsArticles = gql`
  query NewsArticles {
    newsArticles {
      nodes {
        name
        photo
        link
        description
      }
    }
  }
`;

const NewsArticles = () => (
  <Query query={GetAllNewsArticles}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return (
        data.newsArticles.nodes.map(article => NewsArticle(article))
      )
    }}
  </Query>
)

export default NewsArticles;