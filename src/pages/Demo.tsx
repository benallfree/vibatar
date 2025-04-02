import React from 'react'
import { DemoScene } from '../components/DemoScene'

export function Demo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Vibatar Demo</h1>
      <div className="bg-black/20 rounded-lg overflow-hidden">
        <DemoScene />
      </div>
    </div>
  )
}
