import React from 'react'
import { Header } from './Header'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-violet-900 text-white overflow-x-hidden">
      <Header />
      <main>{children}</main>
      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Vibatar. Building the future of cross-game avatars.</p>
        </div>
      </footer>
    </div>
  )
}
