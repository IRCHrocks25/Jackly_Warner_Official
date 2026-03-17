import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Redirect naked domain to www (neurochangefamily.com → www.neurochangefamily.com)
app.use((req, res, next) => {
  const host = (req.get('host') || '').toLowerCase();
  if (host === 'neurochangefamily.com') {
    const path = req.originalUrl || '/';
    return res.redirect(301, `https://www.neurochangefamily.com${path}`);
  }
  next();
});

// Serve static files from the build directory
app.use(express.static(join(__dirname, 'build')));

// Redirect all non-root paths to the landing page (canonical URL)
app.get('*', (req, res, next) => {
  if (req.path !== '/') {
    return res.redirect(301, '/');
  }
  next();
});

// Serve landing page at root
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


