"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-12 py-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <svg className="w-7 h-7 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5C11 3.89543 10.1046 3 9 3Z" stroke="white" strokeWidth="2"/>
              <path d="M19 3H15C13.8954 3 13 3.89543 13 5V9C13 10.1046 13.8954 11 15 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3Z" stroke="white" strokeWidth="2"/>
              <path d="M9 13H5C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13Z" stroke="white" strokeWidth="2"/>
              <path d="M19 13H15C13.8954 13 13 13.8954 13 15V19C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13Z" stroke="white" strokeWidth="2"/>
            </svg>
            <span className="text-white text-3xl font-bold">DiffChecker</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/shricastic/diffchecker" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <svg className="w-10 h-10 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={() => router.push('/diffchecker')}>
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative px-6">
        <div className="text-center mb-8">
          <Badge
            variant="secondary"
            className="mb-6 bg-gray-800/50 text-gray-300"
          >
            🔒 100% Private & Secure Diff Checking
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Compare Text & Code Effortlessly
          </h1>
          <p className="text-gray-400 text-lg">
            Fast, secure diff checking that keeps your data private - right in your browser.
          </p>
          <Button 
            className="mt-6 bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => router.push('/diffchecker')}
          >
            Click to Get Started
          </Button>
        </div>

        {/* App Preview */}
        <div className="relative max-w-5xl mx-auto mt-10 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
          <div className="relative rounded-lg overflow-hidden bg-gray-900/50 backdrop-blur ring-1 ring-gray-800/50">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-fuchsia-500/10 animate-pulse"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-shine"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent animate-shine-reverse"></div>
            <img src="/app-preview.jpg" alt="App Preview" className="relative w-full h-auto" />
          </div>
        </div>

        {/* Gradient Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-t from-purple-600/30 to-fuchsia-600/30 blur-[120px] rounded-full -z-10" />
      </main>
      
      <footer className="py-8 mt-auto">
        <p className="text-white text-sm font-bold text-center">
          Made With 🖤 by Shri
        </p>
      </footer>
    </div>
  );
}
