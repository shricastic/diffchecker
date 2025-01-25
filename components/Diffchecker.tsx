"use client"

import React, { useState } from 'react';
import { diffLines, Change } from 'diff';

const DiffChecker = () => {
  const [originalText, setOriginalText] = useState('');
  const [modifiedText, setModifiedText] = useState('');
  const [diff, setDiff] = useState<Change[]>([]);

  const compareTexts = () => {
    const differences = diffLines(originalText, modifiedText, { 
      ignoreWhitespace: false 
    });
    setDiff(differences);
  };

  const renderDiffLine = (part: Change, index: number) => {
    if (part.added) {
      return (
        <tr key={index} className="bg-green-100">
          <td className="w-8 bg-green-300 text-right pr-2 text-gray-500">+</td>
          <td className="pl-2 text-black">{part.value}</td>
        </tr>
      );
    }
    if (part.removed) {
      return (
        <tr key={index} className="bg-red-100">
          <td className="w-8 bg-red-300 text-right pr-2 text-gray-500">-</td>
          <td className="pl-2 text-black">{part.value}</td>
        </tr>
      );
    }
    return (
      <tr key={index}>
        <td className="w-8 text-right pr-2 text-gray-500">·</td>
        <td className="pl-2">{part.value}</td>
      </tr>
    );
  };

  return (
    <div className="container w-full mx-auto p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-200">Diff-Checker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col group">
          <label className="text-sm font-medium text-gray-300 mb-2 text-center">Original Text</label>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-900 via-fuchsia-800 to-purple-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            <textarea
              className="relative w-full border border-gray-700 rounded-lg p-4 min-h-[20rem] bg-gray-900 text-gray-200 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none transition-all duration-300"
              value={originalText}
              onChange={(e) => setOriginalText(e.target.value)}
              placeholder="Paste your original text here..."
            />
          </div>
        </div>
        <div className="flex flex-col group">
          <label className="text-sm font-medium text-gray-300 mb-2 text-center">Modified Text</label>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-900 via-fuchsia-800 to-purple-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            <textarea
              className="relative w-full border border-gray-700 rounded-lg p-4 min-h-[20rem] bg-gray-900 text-gray-200 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none transition-all duration-300"
              value={modifiedText}
              onChange={(e) => setModifiedText(e.target.value)}
              placeholder="Paste your modified text here..."
            />
          </div>
        </div>
      </div>
      
      <button 
        onClick={compareTexts}
        className="relative group bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-6 py-3 rounded-lg font-medium mx-auto block transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40"
      >
        <span className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></span>
        <span className="relative">Compare</span>
      </button>

      {diff.length > 0 && (
        <div className="mt-8">
          <div className="border border-gray-700 rounded-lg shadow-sm overflow-hidden bg-gray-900">
            <table className="w-full text-sm font-mono">
              <thead>
                <tr>
                  <th className="w-8 bg-gray-800 text-gray-400 py-2"></th>
                  <th className="text-left bg-gray-800 text-gray-400 py-2 text-center">Line Content</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {diff.map(renderDiffLine)}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiffChecker;