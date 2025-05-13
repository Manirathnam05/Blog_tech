'use client';
import React from 'react';
import Link from 'next/link';

const techResources = [
  {
    title: 'MIT Technology Review',
    description: 'In-depth coverage of emerging tech and scientific innovation.',
    url: 'https://www.technologyreview.com/',
  },
  {
    title: 'ArXiv.org',
    description: 'Access to the latest research papers in AI, physics, computing, and more.',
    url: 'https://arxiv.org/',
  },
  {
    title: 'Coursera – Technology Courses',
    description: 'Online courses on AI, cybersecurity, blockchain, and more from top universities.',
    url: 'https://www.coursera.org/',
  },
  {
    title: 'edX – Learn Technology',
    description: 'Technology and data science programs from MIT, Harvard, and others.',
    url: 'https://www.edx.org/',
  },
  {
    title: 'TechCrunch',
    description: 'Latest tech news, startups, gadgets, and venture capital updates.',
    url: 'https://techcrunch.com/',
  },
  {
    title: 'Wired',
    description: 'Covers how emerging tech is changing culture, economy, and politics.',
    url: 'https://www.wired.com/',
  },
  {
    title: 'Stack Overflow',
    description: 'Q&A community for developers and technologists.',
    url: 'https://stackoverflow.com/',
  },
  {
    title: 'LinkedIn Learning – Tech',
    description: 'Professional development and technical skills training.',
    url: 'https://www.linkedin.com/learning/',
  },
];

const TechnologyResourcesPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">🌐 Technology Resources</h1>
      <p className="mb-6 text-gray-600">
        Explore top platforms, publications, and tools to stay up-to-date with modern technology trends.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {techResources.map((resource, index) => (
          <div key={index} className="border p-5 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-1">{resource.title}</h2>
            <p className="text-gray-700 mb-2">{resource.description}</p>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Visit →
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TechnologyResourcesPage;
