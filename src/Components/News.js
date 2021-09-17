import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) =>{
        const [articles, setArticles] = useState([])
        const [loading, setLoading] = useState(false)
        const [page, setPage] = useState(1)
        const [totalResults, setTotalResults] = useState(0)
        const capitalizeFirstLetter=(string)=> {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
      const updateNews=async()=>{
        props.setProgress(20);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
      }
      useEffect(() => {
        document.title=`${capitalizeFirstLetter(props.category)}- NewsMonkey`
        updateNews();
      }, [])
      
        
        const fetchMoreData = async() => {
            setPage(page+1)
            const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
            setLoading(true);
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            setArticles(articles.concat(parsedData.articles))
            setTotalResults(parsedData.totalResults )
            setLoading(false);
          };
        return (
            <>
                <h1 style={{ textAlign: "center", padding: "10px",marginTop:"90px" }}>
                    News Monkey - Top {capitalizeFirstLetter(props.category)} Headlines
                </h1>
                {loading && <Spinner />}
                <InfiniteScroll 
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}
                >
                <div className="container">  
                    <div className="row">
                        {
                            articles.map((element) => {
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
    )}
    export default News