"use client"
import Image from "next/image";
import Hero from "@/app/components/Hero"
import Features from "@/app/components/Features"
import SearchBar from "@/app/components/SearchBar"
import { useState } from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated');
    router.push(isAuthenticated === 'true' ? '/' : '/login');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero/>
      <SearchBar
       searchQuery={searchQuery} 
       setSearchQuery={setSearchQuery} />
        <Features searchQuery={searchQuery} />
    </div>
  );
}
