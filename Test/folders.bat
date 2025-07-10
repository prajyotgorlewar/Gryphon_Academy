@echo off
REM Set root folder name
set "PROJECT_NAME=my-app"

REM Create main project directory
mkdir %PROJECT_NAME%
cd %PROJECT_NAME%

REM Create folders
mkdir config
mkdir controllers
mkdir models
mkdir services

REM Create files
echo // MongoDB connection setup > config\database.js
echo // Controller logic > controllers\sampleController.js
echo // Mongoose model > models\sampleModel.js
echo // Business logic > services\sampleService.js
echo // Express app entry point > app.js
echo # Environment variables > .env
echo { } > package.json

echo Folder structure created successfully in %PROJECT_NAME%
pause
