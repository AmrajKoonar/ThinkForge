'use client';

import { useState } from 'react';

export default function CreateQuiz() {
  const handleGenerateQuiz = async (e) => {
      const response = await fetch('/api/OpenAI/quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: 'Math', // or use your actual state values
        difficulty: 'easy',
        questionCount: 5
      })
    });
    console.log(response);
  };

  return (
    <div>
      <button onClick={handleGenerateQuiz}>
        Click me!
      </button>
    </div>
  );
}
