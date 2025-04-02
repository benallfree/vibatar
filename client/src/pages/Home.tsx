import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Developers } from '../components/Developers';
import { Features } from '../components/Features';
import { ModelViewer } from '../components/ModelViewer';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    // Check if we have a scroll target in the location state
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      // Small delay to ensure components are mounted
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.state]);

  return (
    <>
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Your Avatar, Every Game
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Create once, play everywhere. Vibatar lets you use your custom 3D avatar across multiple games in the
            vibeverse, with automatic optimization and instant distribution.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Link
              to="/demo"
              className="border border-purple-500 hover:bg-purple-500/10 px-6 py-3 rounded-lg font-semibold"
            >
              View Demo
            </Link>
          </div>
          <ModelViewer />
        </div>
      </div>
      <Features />
      <Developers />
    </>
  );
}
