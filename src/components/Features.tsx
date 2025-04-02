import React from 'react'
import { Share2, Boxes, Zap } from 'lucide-react'
import { FeatureCard } from './FeatureCard'

export function Features() {
  return (
    <section id="features" className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Vibatar?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Share2 className="w-8 h-8" />}
            title="Cross-Game Compatibility"
            description="One avatar, endless possibilities. Use your Vibatar across any compatible game in the vibeverse."
          />
          <FeatureCard
            icon={<Boxes className="w-8 h-8" />}
            title="Optimized Assets"
            description="Automatically optimize your 3D models for different platforms and performance requirements."
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="Instant Distribution"
            description="Your avatar is instantly available across all games through our global CDN."
          />
        </div>
      </div>
    </section>
  )
}
