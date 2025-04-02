let isInitialized = false
let loader = null
const cache = new Map()

const createInstance = (model) => ({
  model,
  dispose: () => {
    model.traverse((child) => {
      if ('dispose' in child) {
        child.dispose()
      }
    })
  },
})

const optimizeModel = async (model, options) => {
  // In a real implementation, this would handle model optimization
  console.log('Optimizing model with options:', options)
}

const init = async () => {
  if (isInitialized) return

  try {
    // Dynamically import Three.js dependencies
    const [THREE, GLTFLoader] = await Promise.all([
      import('three'),
      import('three/examples/jsm/loaders/GLTFLoader'),
    ])

    loader = new GLTFLoader.GLTFLoader()
    isInitialized = true
  } catch (error) {
    throw new Error('Failed to initialize Vibatar: ' + error.message)
  }
}

export async function load(username, options = {}) {
  if (!isInitialized) {
    await init()
  }

  // Check cache first
  if (cache.has(username)) {
    const cachedModel = cache.get(username)
    return createInstance(cachedModel.clone())
  }

  try {
    // In a real implementation, this would fetch from your CDN
    const url = `https://api.vibatar.com/avatars/${username}`
    const gltf = await loader.loadAsync(url)
    const model = gltf.scene

    // Apply optimization if specified
    if (options.optimization) {
      await optimizeModel(model, options.optimization)
    }

    // Cache the model
    cache.set(username, model)

    return createInstance(model.clone())
  } catch (error) {
    throw new Error(`Failed to load avatar for ${username}: ${error.message}`)
  }
}
