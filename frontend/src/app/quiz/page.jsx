'use client';

import { useState } from 'react';

export default function CreateQuiz() {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('academic');
  const [difficulty, setDifficulty] = useState('medium');
  const [questionCount, setQuestionCount] = useState(10);
  const [specificTopic, setSpecificTopic] = useState('');

  const subjects = {
    academic: [
      { id: 'mathematics', name: 'Mathematics', icon: '📊' },
      { id: 'science', name: 'Science', icon: '🔬' },
      { id: 'history', name: 'History', icon: '🌍' },
      { id: 'literature', name: 'Literature', icon: '📚' },
      { id: 'biology', name: 'Biology', icon: '🧫' },
    ],
    skills: [
      { id: 'languages', name: 'Languages', icon: '📝' },
      { id: 'programming', name: 'Programming', icon: '💻' },
      { id: 'music', name: 'Music', icon: '🎵' },
      { id: 'art', name: 'Art & Design', icon: '🎨' },
      { id: 'health', name: 'Health', icon: '❤️' },
    ]
  };

  const handleGenerateQuiz = (e) => {
    e.preventDefault();
    // This would typically make an API call to generate a quiz
    console.log({
      subject: selectedSubject,
      difficulty,
      questionCount,
      specificTopic
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Create Your AI-Generated Quiz</h1>
        <p className="text-gray-300">
          Customize your quiz by selecting a subject, difficulty level, and the number of
          questions. Our AI will generate a personalized quiz to help you learn and
          practice.
        </p>
      </div>

      <form onSubmit={handleGenerateQuiz} className="space-y-8">
        {/* Category Selection */}
        <div>
          <h2 className="text-xl font-medium mb-4">Select a Subject</h2>
          <div className="flex space-x-4 mb-6">
            <button
              type="button"
              className={`px-4 py-2 rounded-md ${
                selectedCategory === 'academic'
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-800 text-gray-300'
              }`}
              onClick={() => setSelectedCategory('academic')}
            >
              Academic
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md ${
                selectedCategory === 'skills'
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-800 text-gray-300'
              }`}
              onClick={() => setSelectedCategory('skills')}
            >
              Skills & Arts
            </button>
          </div>

          {/* Subject Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {subjects[selectedCategory].map((subject) => (
              <button
                key={subject.id}
                type="button"
                onClick={() => setSelectedSubject(subject.id)}
                className={`p-4 rounded-lg border ${
                  selectedSubject === subject.id
                    ? 'border-cyan-500 bg-gray-800'
                    : 'border-gray-700 bg-gray-900'
                } flex flex-col items-center justify-center hover:bg-gray-800 transition`}
              >
                <div className="mb-2 text-2xl">{subject.icon}</div>
                <span>{subject.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Level */}
        <div>
          <h2 className="text-xl font-medium mb-4">Difficulty Level</h2>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-cyan-600"
                name="difficulty"
                value="easy"
                checked={difficulty === 'easy'}
                onChange={() => setDifficulty('easy')}
              />
              <span className="ml-2">Easy</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-cyan-600"
                name="difficulty"
                value="medium"
                checked={difficulty === 'medium'}
                onChange={() => setDifficulty('medium')}
              />
              <span className="ml-2">Medium</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-cyan-600"
                name="difficulty"
                value="hard"
                checked={difficulty === 'hard'}
                onChange={() => setDifficulty('hard')}
              />
              <span className="ml-2">Hard</span>
            </label>
          </div>
        </div>

        {/* Number of Questions */}
        <div>
          <h2 className="text-xl font-medium mb-4">Number of Questions: {questionCount}</h2>
          <input
            type="range"
            min="5"
            max="20"
            step="1"
            value={questionCount}
            onChange={(e) => setQuestionCount(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Specific Topic */}
        <div>
          <h2 className="text-xl font-medium mb-4">Specific Topic (Optional)</h2>
          <input
            type="text"
            placeholder="E.g., Algebra, World War II, Cell Biology..."
            value={specificTopic}
            onChange={(e) => setSpecificTopic(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
          />
        </div>

        {/* Generate Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-white text-black font-medium py-3 px-4 rounded-md hover:bg-gray-200 transition flex items-center justify-center"
            disabled={!selectedSubject}
          >
            Generate Quiz
          </button>
        </div>
      </form>
    </div>
  );
}