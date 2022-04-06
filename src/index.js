import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
	const root = ReactDOMClient.createRoot(rootElement);
	root.render(<App/>)
} else {
	alert('Корневой элемент ReactDOMClient не найден')
}


