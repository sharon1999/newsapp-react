import React from "react";

const NewsItem = (props) =>{
    let { title, description, imageUrl, newsUrl, date, author, source } = props;
    return (
      <div>
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">{source.name}</span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <h6 className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </h6>
            <a href={newsUrl} className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    )}
export default NewsItem