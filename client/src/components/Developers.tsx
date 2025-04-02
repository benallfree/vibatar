import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function Developers() {
  return (
    <section id="developers" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">For Developers</h2>
        <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-xl font-mono mb-4">Simple Integration</h3>

          <div className="mb-8">
            <h4 className="text-lg font-mono mb-2">A simple URL to load Vibatars across the Vibeverse</h4>

            <pre className="bg-black/50 rounded-lg p-4">
              <code>https://vibatar.io/benallfree.gltf</code>
            </pre>
          </div>

          {/* LLM Prompt Version */}
          <div className="mb-8">
            <h4 className="text-lg font-mono mb-2">Using LLM Prompt</h4>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300">
              Check for a URL parameter like ?vibatar=username. If it exists, replace the default player mesh with a
              Vibatar model loaded from vibatar.io/&lt;username&gt;.gltf. The model should be loaded using GLTFLoader
              and added to the scene in place of the default mesh. If loading fails, fall back to the default mesh.
            </blockquote>
            <p className="mt-4 text-gray-400">
              Let the LLM handle the integration by describing what you want in plain English.
            </p>
          </div>

          {/* Direct GLTF Version */}
          <div>
            <h4 className="text-lg font-mono mb-2">Using Direct GLTF Loading</h4>
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
                {`// Get username from URL parameter
const params = new URLSearchParams(window.location.search);
const username = params.get('vibatar');

// Load the model if username exists
if (username) {
  const loader = new GLTFLoader();
  loader.load(
    \`https://vibatar.io/\${username}.gltf\`,
    (gltf) => {
      scene.add(gltf.scene);
    }
  );
}`}
              </SyntaxHighlighter>
            </div>
            <p className="mt-4 text-gray-400">
              Just add a URL parameter to load any user's Vibatar model. Try it with{' '}
              <code className="bg-black/30 px-2 py-1 rounded">?vibatar=username</code>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
