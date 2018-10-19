import React, {Component} from 'react';
import ArticleList from './ArticleList.js';

class NewsUserContainer extends Component {
  constructor(props){
    super(props);
    this.state = ( newsUsers: [])
  }

  render() {
    return(
     <ArticleList newsUsers={this.state.newsUsers}/>
    )
  }
}

export default NewsUserContainer;
