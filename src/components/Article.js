import React from 'react';
import moment from 'moment';

const Article = (props) => {

  let date = new Date(props.article.date);
  let formattedDate = moment(date).format("DD/MM/YYYY HH:mm");

  const url = '/articles/' + (props.article.id);

  return (
    <div className="article-container-item">
      <img src={props.article.image} width="320px"/>
      <p>{formattedDate}</p>
      <p>{props.article.journalist.name}</p>
      <p>{props.article.title}</p>
      <p>{props.article.summary}</p>
      <div className="article-link"><a href={url}>Continue reading></a></div>
      <p></p>
    </div>
  )
}

export default Article;
