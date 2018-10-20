import React, {Component} from 'react';

const ArticleListContainer = (props) => {

  console.log(props.articles);
  return (
    <div className="articles-container">
      <h3 className="heading">heading</h3>
        <div>
          <p>hello article</p>
        </div>
    </div>
  )
}

export default ArticleListContainer;
