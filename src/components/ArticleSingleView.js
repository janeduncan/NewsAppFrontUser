import React from 'react';
import moment from 'moment';

const ArticleSingleView = (props) => {

  let date = new Date(props.article.date);
  let formattedDate = moment(date).format("DD/MM/YYYY HH:mm");

  return (
    <div>
      <p>{formattedDate}</p>
      <p>{props.article.journalist.name}</p>
      <p>{props.article.image}</p>
      <option>{props.article.category}</option>
      <p>{props.article.title}</p>
      <p>{props.article.text}</p>
    </div>
  )
}

export default ArticleSingleView;
