'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold">
            <span className="text-cyan-400">Quiz</span>Genius
          </span>
        </Link>
        
        <div className="hidden md:flex ml-10 space-x-6">
          <Link href="/" className={`hover:text-gray-300 ${pathname === '/' ? 'font-medium' : ''}`}>
            Home
          </Link>
          <Link href="/quizzes" className={`hover:text-gray-300 ${pathname === '/quizzes' ? 'font-medium' : ''}`}>
            Quizzes
          </Link>
          <Link href="/subjects" className={`hover:text-gray-300 ${pathname === '/subjects' ? 'font-medium' : ''}`}>
            Subjects
          </Link>
          <Link href="/about" className={`hover:text-gray-300 ${pathname === '/about' ? 'font-medium' : ''}`}>
            About
          </Link>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
            />
          </svg>
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">
          Create Quiz
        </button>
      </div>
    </nav>
  );
}