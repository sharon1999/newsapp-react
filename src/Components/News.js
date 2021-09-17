import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)}- NewsMonkey`
  }
  async updateNews(){
    this.props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=4552ba05ed194a87bc9cc33fcdee28b3&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews()
  }
    state = {
        items: Array.from({ length: 20 })
      };
    fetchMoreData = async() => {
        this.setState({page:this.state.page+1})
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=4552ba05ed194a87bc9cc33fcdee28b3&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          articles: this.state.articles.concat(parsedData.articles),
          totalResults: parsedData.totalResults,
          loading: false,
        });
      };
  render() {
    return (
        <>
            <h1 style={{ textAlign: "center", padding: "10px" }}>
                News Monkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
            </h1>
            {this.state.loading && <Spinner />}
            <InfiniteScroll 
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
            >
            <div className="container">  
                <div className="row">
                    {
                        this.state.articles.map((element) => {
                        return (
                            <div key={element.url} className="col-md-4">
                                <NewsItem
                                    title={element.title}
                                    description={element.description}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    date={element.publishedAt}
                                    author={element.author}
                                    source= {element.source}
                                />
                            </div>
                        );
                        })}
                </div>
            </div>
                </InfiniteScroll>
        </>
    );
  }
}
