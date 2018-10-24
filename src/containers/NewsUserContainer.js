import React, {Component} from 'react';
import ArticleListContainer from './ArticleListContainer.js';


class NewsUserContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }
  // fetch articles and store in state with component did mount in here
  componentDidMount(){
    // console.log("articles");
    fetch('/articles')
    .then((res) => res.json ())
    .then((data) => {
      console.log(data);
      this.setState({articles: data._embedded.articles})
    })
  }

  render(){
    console.log(this.state);
    return (
      <div className="newsusercontainer">
          <ArticleListContainer articles={this.state.articles} />
      </div>
    )
  }
}

export default NewsUserContainer;
