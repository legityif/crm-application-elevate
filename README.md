# CRM Application 
## Includes below features
- login page
- dashboard 
- calendar
- notes 
- add connections
- message connections
- update user profile

# Running server: 
- cd server
- npm install
- npm run devStart

# Running frontend:
- cd crm
- npm install 
- npm run start

# Running development build (frontend & backend):
- Remain in root directory
- npm install
- npm run start-dev

# Deployment to Netlify (Frontend Only - Demo Mode)
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Netlify will automatically detect the build settings from your project structure
4. Set environment variable: `REACT_APP_DEMO_MODE = true`
5. Deploy!
- Login with username: "Skyrider", "demo", or "test" (any password works)
- Mock user data and contacts
- Static messaging interface (no real-time chat)
- All backend-dependent features are mocked for demonstration

Note: This is a static demo. For full functionality, deploy the backend separately.

# Testing
- Remain in root directory
- npm install
- npm test

# Testing Pipeline & Framework
- GitHub CI/CD pipeline through node actions
- Testing through Jest Framework

# Sample Login details (Demo Mode)
- username: Skyrider, demo, or test
- password: any password works

Demo users will see mock contacts: Alice, Bob, Charlie

# Continuous Deployment
- deployed using Google Cloud (App Engine)
- https://cloud.google.com/?hl=en
- Node version for build: v18.13.0
- Implemented using Microservices and Dispatch files (API)

# React Dependencies/Components
- React date time picker
- https://www.npmjs.com/package/react-datetime-picker
- Full calendar API
- https://fullcalendar.io/docs
- Search Bar
- https://www.npmjs.com/package/react-search-box 
