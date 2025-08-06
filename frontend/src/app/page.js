import Link from 'next/link';


export default function Home() {
  const popularSubjects = [
    { id: 'math', name: 'Mathematics', icon: '📊' },
    { id: 'science', name: 'Science', icon: '🔬' },
    { id: 'history', name: 'History', icon: '🌍' },
    { id: 'literature', name: 'Literature', icon: '📚' },
    { id: 'biology', name: 'Biology', icon: '🧫' },
    { id: 'languages', name: 'Languages', icon: '📝' },
    { id: 'programming', name: 'Programming', icon: '💻' },
    { id: 'music', name: 'Music', icon: '🎵' },
    { id: 'art', name: 'Art & Design', icon: '🎨' },
    { id: 'health', name: 'Health', icon: '❤️' }
  ];

  const recentQuizzes = [
    { id: 1, title: 'World History: Ancient Civilizations', category: 'History', difficulty: 'Medium', questions: 10, time: '2 hours ago' },
    { id: 2, title: 'Biology: Cell Structure and Function', category: 'Biology', difficulty: 'Hard', questions: 15, time: '3 hours ago' },
    { id: 3, title: 'Mathematics: Algebra Fundamentals', category: 'Math', difficulty: 'Easy', questions: 8, time: '5 hours ago' },
    { id: 4, title: 'Chemistry: Periodic Table', category: 'Chemistry', difficulty: 'Medium', questions: 12, time: '6 hours ago' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 px-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learn Smarter with AI-Generated Quizzes
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            Create personalized study quizzes on any subject. Test your knowledge, 
            track your progress, and boost your learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quiz" className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition flex items-center">
              Create Your Quiz
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="/subjects" className="border border-white px-6 py-3 rounded-md hover:bg-white/10 transition flex items-center">
              Browse Subjects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="w-full py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              How ThinkForge Works
            </h2>
            <p className="text-center text-gray-300 mb-12">
              Our AI-powered platform makes learning engaging and effective.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="mb-4 p-2 w-fit rounded-full bg-gray-800/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Generated</h3>
                <p className="text-gray-300">
                  Our advanced AI creates tailored quizzes based on your selected subject and difficulty level.
                </p>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="mb-4 p-2 w-fit rounded-full bg-gray-800/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Learn Effectively</h3>
                <p className="text-gray-300">
                  Test your knowledge with multiple-choice questions that challenge your understanding.
                </p>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="mb-4 p-2 w-fit rounded-full bg-gray-800/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
                <p className="text-gray-300">
                  Review your results, see explanations, and identify areas for improvement.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Popular Subject Categories */}
        <section className="w-full py-16 px-6 bg-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              Popular Subject Categories
            </h2>
            <p className="text-center text-gray-300 mb-12">
              Choose from a wide range of subjects to create your personalized quiz.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {popularSubjects.map((subject) => (
                <Link 
                  key={subject.id} 
                  href={`/subjects/${subject.id}`}
                  className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 flex flex-col items-center justify-center hover:bg-gray-800/50 transition"
                >
                  <div className="mb-3 h-8 w-8 flex items-center justify-center">
                    {subject.id === 'math' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    )}
                    {subject.id === 'science' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    )}
                    {subject.id === 'history' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {subject.id === 'literature' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                    {subject.id === 'biology' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                    {subject.id === 'languages' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    )}
                    {subject.id === 'programming' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )}
                    {subject.id === 'music' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    )}
                    {subject.id === 'art' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    )}
                    {subject.id === 'health' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-center">{subject.name}</p>
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Link
                href="/create-quiz"
                className="border border-gray-600 text-gray-300 px-6 py-3 rounded-md hover:bg-gray-800 transition flex items-center"
              >
                Create Your Own Quiz
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Recently Generated Quizzes */}
        <section className="w-full py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              Recently Generated <span className="text-cyan-400">Quizzes</span>
            </h2>
            <p className="text-center text-gray-300 mb-12">
              Explore quizzes that other students are using to enhance their learning.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
              {recentQuizzes.map((quiz) => (
                <Link 
                  key={quiz.id} 
                  href={`/quizzes/${quiz.id}`}
                  className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:bg-gray-800/50 transition"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-gray-800 rounded-full">{quiz.category}</span>
                    <span className="text-xs px-2 py-1 bg-gray-800 rounded-full text-cyan-400">
                      {quiz.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{quiz.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {quiz.questions} questions
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {quiz.time}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Student
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="flex justify-center">
              <Link
                href="/create-quiz"
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md transition flex items-center"
              >
                Create Your Own Quiz
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-16 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Boost Your Learning?
            </h2>
            <p className="text-gray-300 mb-8">
              Create your first AI-generated quiz today and take your studying to the next level.
            </p>
            <Link
              href="/quiz"
              className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition inline-flex items-center"
            >
              Get Started Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      
    </div>
  );
}