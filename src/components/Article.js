import React from 'react';

const Article = (props) => {

  return (
    <div>
      <p>{props.article.date}</p>
      <p>{props.article.journalist.name}</p>
      <p>{props.article.title}</p>
      <p>{props.article.text}</p>
      <p></p>
    </div>
  )
}

export default Article;
