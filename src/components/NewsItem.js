import React from "react";

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card mx-4" >

                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: "0" }}>
                    <span className="badge rounded-pill bg-danger" >{source} </span>

                </div>
                <img src={!imageUrl ? "https://images.wondershare.com/repairit/aticle/2021/07/resolve-images-not-showing-problem-1.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}... </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target='_blank' rel='noreferrer ' className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}


export default NewsItem
