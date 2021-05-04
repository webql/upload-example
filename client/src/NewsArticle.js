import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({id, name, photo}) => (
  <div key={id} className="newsarticle">
    <span className="name">{name}</span>
    {photo ? <img alt="" src={photo.url} /> : null}
  </div>
)

export default NewsArticle;