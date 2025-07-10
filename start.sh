#!/bin/bash

# Bootstrap Lab Development Server
# This script starts a local development server for the Bootstrap lab

echo "🚀 Starting Bootstrap Layouts and Components Lab"
echo "================================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
fi

echo ""
echo "🌟 Welcome to the Community Connection Hub Lab!"
echo ""
echo "Available commands:"
echo "  npm run serve    - Start development server"
echo "  npm test         - Run all tests"
echo "  npm run test:watch - Run tests in watch mode"
echo ""
echo "📖 Open README.md for exercise instructions"
echo ""

# Ask user what they want to do
echo "What would you like to do?"
echo "1) Start development server (recommended)"
echo "2) Run tests"
echo "3) Run tests in watch mode"
echo "4) Exit"
echo ""
read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo ""
        echo "🌐 Starting development server..."
        echo "   Your site will open at http://localhost:3000"
        echo "   Press Ctrl+C to stop the server"
        echo ""
        npm run serve
        ;;
    2)
        echo ""
        echo "🧪 Running tests..."
        npm test
        ;;
    3)
        echo ""
        echo "🔄 Running tests in watch mode..."
        echo "   Tests will re-run automatically when you save files"
        echo "   Press Ctrl+C to stop watching"
        npm run test:watch
        ;;
    4)
        echo ""
        echo "👋 Happy coding! Remember to check the README.md for exercise instructions."
        exit 0
        ;;
    *)
        echo ""
        echo "❌ Invalid choice. Starting development server by default..."
        npm run serve
        ;;
esac
