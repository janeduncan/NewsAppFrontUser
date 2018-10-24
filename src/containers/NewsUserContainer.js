import React, {Component} from 'react';
import ArticleListContainer from './ArticleListContainer.js';


class NewsUserContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      searchText: ""
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
    this.setState({ searchText: event.target.value})
  }

  render(){
    let { searchText } = this.state;
    // console.log('newsusercontainer', this.state);
    const articlesToShow = this.state.articles.filter(article => {
      return article.title.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
      <div className="newsusercontainer">
        {/* {console.log(this.state.articles)}  */}
        <input type="text" placeholder="Search..."  id="searchbox" onChange={this.handleSearch}>

        </input>
        <ArticleListContainer articles={articlesToShow} />
      </div>
    )
  }
}

export default NewsUserContainer;
