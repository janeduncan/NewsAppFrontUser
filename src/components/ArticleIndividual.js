import React from 'react'
import moment from 'moment';

const ArticleIndividual = (props) => {

  let date = new Date(props.data.date);
  let formattedDate = moment(date).format("DD/MM/YYYY HH:mm");

  console.log(props);

  return (
    <div className="article-individual">
      <div className="blah">
      <p>{formattedDate}</p>
      {/* <p>{props.data.journalist.name}</p> */}
      <p>{props.data.title}</p>
      <img src={props.data.image} alt={props.data.name} width="650px"></img>
      <p>{props.data.text}</p>
    </div>
    </div>
  )
}

export default ArticleIndividual;
