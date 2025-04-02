import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function Developers() {
  return (
    <section id="developers" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">For Developers</h2>
        <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-xl font-mono mb-4">Simple Integration</h3>
          <div className="bg-black/50 rounded-lg overflow-hidden">
            <SyntaxHighlighter
              language="typescript"
              style={atomDark}
              customStyle={{
                margin: 0,
                padding: '1rem',
                background: 'transparent',
              }}
            >
              {`// Import from CDN
import { load } from 'https://cdn.jsdelivr.net/npm/vibatar@latest';

// Load a player's avatar
const avatar = await load('player-name');
scene.add(avatar.model);`}
            </SyntaxHighlighter>
          </div>
          <p className="mt-4 text-gray-400">
            Just a few lines of code to integrate Vibatar into your game. We
            handle the optimization, loading, and caching.
          </p>
        </div>
      </div>
    </section>
  )
}
