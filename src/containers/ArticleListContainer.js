import React, {Component} from react;
import Article from './Article.js/';

const ArticleList (props) => {


  const newsUser =
  props.newsUser.map (newsUser) => {
    return(
      <li key={newsUser.id} className="component-item">
        <ArticleList newsUser={newsUser} />
      </li>
    )
  }

  return (
    <ol className="component-list">
      {newsUser}
    </ol>
  )

}

export default ArticleListContainer.js;
