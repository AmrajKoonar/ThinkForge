import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-semibold">
                <span className="text-cyan-400">Quiz</span>Genius
              </span>
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              Helping students learn through AI-generated<br />
              quizzes tailored to their needs.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/create" className="hover:text-white">Create Quiz</Link>
                </li>
                <li>
                  <Link href="/subjects" className="hover:text-white">Subject Library</Link>
                </li>
                <li>
                  <Link href="/history" className="hover:text-white">Your History</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">About</Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-white">Support</Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">FAQ</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/terms" className="hover:text-white">Terms</Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">Privacy</Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-white">Cookies</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 QuizGenius. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-white mr-4">Terms</Link>
            <Link href="/privacy" className="hover:text-white mr-4">Privacy</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}