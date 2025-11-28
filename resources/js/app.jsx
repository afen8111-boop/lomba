import React from 'react';
import {createRoot} from 'react-dom/client';

function App() {
    return <h1>Hello dari reak</h1>;
}

const root = createroot(document.getElementById('app'));
root.render(<App />);