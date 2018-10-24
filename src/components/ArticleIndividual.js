import React from 'react'
import moment from 'moment';

const ArticleIndividual = (props) => {
  console.log('ai render', props);
  let date = new Date(props.data.date);
  let formattedDate = moment(date).format("DD/MM/YYYY HH:mm");

  return (
    <div className="article-individual">
      {/* <div className="article-individual-date"><p>{formattedDate}</p></div> */}
      <h3><p>{props.data.title}</p></h3>
      <img src={props.data.image} alt={props.data.name} width="650px"></img>
      <p>{props.data.text}</p>
    </div>
  )
}

export default ArticleIndividual;
