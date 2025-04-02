import { Twitter } from 'lucide-react';

export function Games() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Games</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <p className="text-lg mb-4">Want to get your Vibatar-compatible game listed here?</p>
        <a
          href="https://x.com/benallfree"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
        >
          <Twitter className="w-5 h-5" />
          Contact @benallfree on X
        </a>
      </div>
    </div>
  );
}
