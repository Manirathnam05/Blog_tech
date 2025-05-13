'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { articles } from '../lib/articles';
import { Button } from 'antd';

function Features({ searchQuery = "" }) {
  const router = useRouter();
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArticles(filtered);
    }
  }, [searchQuery]);

  const handleReadPost = async (title, id) => {
    router.push(`/blog/${id}`);
  };

  return (
    <section className="py-8 px-4 mt-4 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Articles</h2>

        {filteredArticles.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No articles found matching "{searchQuery}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-4 flex flex-col hover:scale-105 transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="font-mono mb-2">By {item.author} {item.date}</p>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                <Button
                  type="link"
                  onClick={() => handleReadPost(item.title, item.id)}
                  className="mt-auto p-0 text-blue-500 font-medium text-sm"
                >
                  Read Post →
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center items-center m-8 font-bold font-serif text-lg">
        <Button
          id="FeatureButton"
          type="default"
          className="bg-gray-200 cursor-pointer text-black px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          Read more
        </Button>
      </div>
    </section>
  );
}

export default Features;
