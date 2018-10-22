import React, {Component} from 'react';
import ArticleIndividual from './ArticleIndividual';

class ArticleDetails extends Component {

 constructor(props){
   super(props)
   this.url = props.url;
   this.state = {
     articles: []
   }
 }

 componentDidMount(){
   fetch(this.url)
   .then((res) => res.json())
   .then((data) => {
     this.setState({articles: data})
   })
 }

 render() {
   return (
     <ArticleIndividual data={this.state.articles}/>
   )
 }
}

export default ArticleDetails;
