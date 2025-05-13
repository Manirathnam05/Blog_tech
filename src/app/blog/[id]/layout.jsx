"use client"
import React from 'react'
import { articles } from '../../lib/articles'
import { useRouter } from 'next/navigation';
import { useState} from 'react';

const layout = ({children}) => {
  const router = useRouter();
  const [filteredArticles, setFilteredArticles] = useState(articles);


  const handleReadPost = async(title,id) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div>{children}
    <h2 className='text-center text-xl font-bold uppercase mb-2 underline'>TechTide</h2>
    <section className="py-8 px-4 bg-gray-100">
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
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <button 
                  onClick={() => handleReadPost(item.title,item.id)}
                  className="mt-auto cursor-pointer text-blue-500 hover:underline font-medium text-sm"
                >
                  Read Post →
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
    </div>
  )
}

export default layout