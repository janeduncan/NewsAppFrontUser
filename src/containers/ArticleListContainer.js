import React, {Component} from 'react';
import Article from '../components/Article.js'


const ArticleListContainer = (props) => {

// fetch articles and store in state with component did mount in here
  if(!props.articles){
    return null;
  }
  // console.log(props.articles);
  const displayArticles = props.articles.map((article, index) => {
    return (
        <div key={index} className = "list">
          <Article article={article}/>
        </div>
      )
    })
    if (props.articles){
      return (
        <div className="articles-container">
          {displayArticles}
        </div>
      )
    }
    return null;
  }

export default ArticleListContainer;
