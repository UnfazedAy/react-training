#!/usr/bin/env bash

cd src
shopt -s extglob
rm -r !(index.js|index.css|App.js)
echo "" > index.css
echo "function App() {
  return (
    <div>
      App
    </div>
  );
}

export default App;" > App.js

echo "import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);" > index.js
