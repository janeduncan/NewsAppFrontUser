import React, {Component} from 'react';
import ArticleListContainer from './ArticleListContainer.js';


class NewsUserContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }

    this.handleSearch = this.handleSearch.bind(this);
  }
  // fetch articles and store in state with component did mount in here
  componentDidMount(){
    // console.log("articles");
    fetch('/articles')
    .then((res) => res.json ())
    .then((data) => {
      this.setState({articles: data._embedded.articles})
    })
  }

  handleSearch(event){
      const newArticles = this.state.articles.filter(article => {
        console.log('article', article);
        console.log(event.target.value);
        console.log(article.title.includes(event.target.value));
        return article.title.includes(event.target.value)
      })
      // console.log('newARticles', newArticles);

      this.setState({ articles: newArticles})
    }

    render(){
      // console.log('newsusercontainer', this.state);
      console.log(this.state);
      return (
        <div className="newsusercontainer">
          {/* {console.log(this.state.articles)}  */}
          <input type="text" placeholder="Search..."  id="searchbox" onChange={this.handleSearch}
            // onChange={this.class.location.reload(false)}

            >

          </input>
          <ArticleListContainer articles={this.state.articles} />
        </div>
      )
    }
  }

export default NewsUserContainer;
