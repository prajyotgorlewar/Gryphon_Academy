@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

:: Project Root
SET PROJECT_NAME=campus-resource-backend
mkdir %PROJECT_NAME%
cd %PROJECT_NAME%

:: Base folders
mkdir config
mkdir models
mkdir services
mkdir controllers
mkdir auth
mkdir routes

:: Base files
echo // MongoDB connection >> config\database.js

echo // User schema >> models\User.js
echo // Post schema >> models\Post.js

echo // User service logic >> services\userService.js
echo // Post service logic >> services\postService.js

echo // Auth controller >> controllers\authController.js
echo // Post controller >> controllers\postController.js

echo // Auth service (JWT + bcrypt) >> auth\authService.js
echo // RBAC middleware >> auth\rbac.js

echo // Auth routes >> routes\authRoutes.js
echo // Post routes >> routes\postRoutes.js

echo PORT=5000>> .env
echo MONGO_URI=your_mongodb_uri>> .env
echo JWT_SECRET=your_jwt_secret>> .env

:: Create server.js
echo // Express app entry point >> server.js

:: Initialize npm
call npm init -y

:: Install essential packages
call npm install express mongoose bcryptjs jsonwebtoken dotenv cors

:: Optional: Install nodemon for dev
call npm install --save-dev nodemon

echo.
echo ✅ Backend scaffold complete: %PROJECT_NAME%
echo To run dev server, add to package.json:
echo "scripts": { "dev": "nodemon server.js" }

ENDLOCAL
pause
