import React from 'react'
import { Header } from './components/Header'
import { Features } from './components/Features'
import { Developers } from './components/Developers'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-violet-900 text-white overflow-x-hidden">
      <Header />
      <Features />
      <Developers />

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Vibatar. Building the future of cross-game avatars.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
