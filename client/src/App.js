import React, { Component } from "react";
import "./App.css";
import CreateNewsArticle from "./CreateNewsArticle";
import NewsArticles from "./NewsArticles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News Articles</h1>
        </header>
        <div>
          <div className="create-news-article">
            <CreateNewsArticle />
          </div>
          <div className="news-articles">
            <NewsArticles />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
