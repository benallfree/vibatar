import React from 'react'
import { Gamepad2, ArrowRight, Github } from 'lucide-react'
import { ModelViewer } from './ModelViewer'

export function Header() {
  return (
    <header className="container mx-auto px-4 py-8 sm:py-12">
      <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-16">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Gamepad2 className="w-8 h-8" />
          <span>Vibatar</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="#features" className="hover:text-purple-300 transition">
            Features
          </a>
          <a href="#developers" className="hover:text-purple-300 transition">
            Developers
          </a>
          <a
            href="https://github.com/vibatar"
            className="flex items-center gap-1 hover:text-purple-300 transition"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Your Avatar, Every Game
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Create once, play everywhere. Vibatar lets you use your custom 3D
          avatar across multiple games in the vibeverse, with automatic
          optimization and instant distribution.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <button className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
          <button className="border border-purple-500 hover:bg-purple-500/10 px-6 py-3 rounded-lg font-semibold">
            View Demo
          </button>
        </div>
        <ModelViewer />
      </div>
    </header>
  )
}
