import React from 'react';
import moment from 'moment';

const Article = (props) => {
  console.log('a', props);
  let date = new Date(props.article.date);
  let formattedDate = moment(date).format("DD/MM/YYYY HH:mm");

  const url = '/articles/' + (props.article.id);

  return (
    <div className="article-container-item">
      <h3>{props.article.title}</h3>
      <p>by {props.article.journalist.name} <div className="jobtitle">{props.article.journalist.jobTitle}</div></p>
      <img src={props.article.image} width="370px"/>
      <p>{props.article.summary}</p>
      <div className="article-link"><a href={url}>Continue reading ></a></div>
      <p></p>
    </div>
  )
}

export default Article;
