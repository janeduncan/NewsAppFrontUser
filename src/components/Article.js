import React from 'react';
import moment from 'moment';

const Article = (props) => {

  let date = new Date(props.article.date);
  let formattedDate = moment(date).format("DD/MM/YYYY HH:mm");

  const url = '/articles/' + (props.index + 1);

  return (
    <div>
      <img src={props.article.image} width="200px"/>
      <p>{formattedDate}</p>
      <p>{props.article.journalist.name}</p>
      <p>{props.article.title}</p>
      <p>{props.article.summary}</p>
      <p><a href={url}>View</a></p>
      <p></p>
    </div>
  )
}

export default Article;
