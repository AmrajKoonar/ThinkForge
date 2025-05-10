import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';



export const metadata = {
  title: 'QuizGenius - Learn Smarter with AI-Generated Quizzes',
  description: 'Create personalized study quizzes on any subject.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
