import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import "./CreateNewsArticle.css";

const CreateNewsArticleMutation = gql`
  mutation CreateNewsArticle ($input: CreateNewsArticleInput!) {
    createNewsArticle (input:$input) {
      newsArticle {
        id
        name
        link
        description
      }
    }
  }
`;

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

const CreateNewsArticle = () => {
  return (
    <Mutation
      mutation={CreateNewsArticleMutation}
      onCompleted={data => {
        document.getElementsByTagName("form")[0].reset();
      }}
      refetchQueries={[{ query: GetAllNewsArticles }]}
    >
      {(createNewsArticle, { data, loading, error }) => (
        <div>
          <span className="create-news-article-header">Create News Article</span>
          <form
            className={loading ? "locked" : undefined}
            onSubmit={event => {
              event.preventDefault();
              const fd = new FormData(event.target);
              const name = fd.get("name");
              const description = fd.get("description");
              const photoUpload = fd.get("photoUpload");
              createNewsArticle({
                variables: {
                  input: {
                    newsArticle: {
                      name,
                      description,
                      photoUpload
                    }
                  }
                }
              });
            }}
          >
            <label htmlFor="name">name</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="description"> description</label>
            <textarea id="description" name="description" required />


            <label>Image</label>

            <label
              className="input"
              htmlFor="photoUpload"
              id="photoUpload_label"
            >
              <button type="button" className="select-file">
                <input
                  disabled
                  id="photoUpload_filename"
                  defaultValue="Select File"
                />
              </button>
              <input
                type="file"
                id="photoUpload"
                name="photoUpload"
                accept="image/*"
                required
                onChange={event => {
                  const filename =
                    event.target.files.length > 0
                      ? event.target.files[0].name
                      : "";
                  document.getElementById(
                    `${event.target.id}_filename`
                  ).value = filename;
                }}
              />
            </label>

            <button
              type="submit"
              className="spinner"
            >
              Submit
            </button>
          </form>
          {error && <p>Error :( Please try again</p>}
        </div>
      )}
    </Mutation>
  );
};

export default CreateNewsArticle;
