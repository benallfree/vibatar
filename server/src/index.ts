import express, { NextFunction, Request, Response } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { createServer as createViteServer } from 'vite';

const CLIENT_ROOT = path.join(__dirname, '../../client');
const PROFILES_ROOT = CLIENT_ROOT + '/public/profiles';

const app = express();
const isProd = process.env.NODE_ENV === 'production';

async function createServer() {
  // Profile model middleware
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.url);
    const match = req.url?.match(/^\/([^/]+)\.gltf$/);
    if (match) {
      const username = match[1];
      const modelPath = path.join(PROFILES_ROOT, username, 'default.gltf');

      console.log(modelPath);
      if (fs.existsSync(modelPath)) {
        console.log(`found`);
        const content = fs.readFileSync(modelPath);
        res.setHeader('Content-Type', 'model/gltf+json');
        res.end(content);
        return;
      }
    }
    next();
  });

  if (isProd) {
    // Development mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
      root: CLIENT_ROOT,
    });
    app.use(vite.middlewares);
  } else {
    // Production mode
    app.use(express.static(CLIENT_ROOT + '/dist'));
  }

  // Handle SPA routing in production
  if (isProd) {
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(CLIENT_ROOT + '/dist/index.html');
    });
  }

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

createServer();
