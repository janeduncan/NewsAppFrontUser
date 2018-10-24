import React, {Component} from 'react';
import ArticleIndividual from './ArticleIndividual';
import Article from './Article';

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
     console.log(this.state.articles);
   })
 }

 render() {
   if (this.state.articles.length > 1){
     const articles = this.state.articles.map(article => {
       return <Article article={article}/>
     })
     return articles
   }
   console.log('rendering ad', this.state);
   return (
     <ArticleIndividual data={this.state.articles}/>
   )
 }
}

export default ArticleDetails;
