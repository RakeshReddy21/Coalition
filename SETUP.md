# Setup Instructions

If you encounter the `react-refresh/runtime.js` error, follow these steps:

1. **Clean install:**
```bash
rm -rf node_modules package-lock.json
npm install
```

2. **Clear webpack cache:**
```bash
rm -rf node_modules/.cache
rm -rf build
```

3. **Start the app:**
```bash
npm start
```

## Alternative Solution

If the error persists, try using a directory path without spaces. The project path:
`/home/gridlex/Rakesh-Reddy/Events/signin sheet updated version/cot`

Contains spaces which can sometimes cause webpack module resolution issues.

You can:
- Rename the directory to remove spaces (e.g., `signin-sheet-updated-version`)
- Or move the project to a path without spaces

