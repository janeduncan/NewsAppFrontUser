import React, {Component} from 'react';
import ArticleListContainer from './ArticleListContainer.js';

class NewsUserContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: [
      ]
    }
  }

  render(){
    return (
      <div className="newsUser-container">
          <ArticleListContainer articles={this.state.articles} />
      </div>
    )
  }
}

export default NewsUserContainer;
