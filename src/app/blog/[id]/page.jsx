"use client"

import React, { useState } from 'react';
import { articles } from "../../lib/articles";
import { Button } from 'antd';

const BlogPost = ({ params }) => {
  const { id } = params;  
  const article = articles.find(a => a.id === id);
  const [expanded, setExpanded] = useState(false);

  if (!article) return <p>Article not found</p>;

  return (
    <>
    <div className="max-w-3xl mx-auto py-10 px-4">
      <img
        src={article.img}
        alt={article.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className='font-mono mb-2'>By {article.author} <span>{article.date}</span></p>
      <p className="text-gray-700 text-lg font-serif">
        {expanded ? article.fullDescription : article.description}
      </p>
      <Button
        type="primary"
        style={{
          backgroundColor: "black",
          color: "white",
          fontWeight: "bold",
          fontSize: "15px",
          margin: "5px"
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </div>   

   </>
  );
};

export default BlogPost;
