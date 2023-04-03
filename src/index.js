import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let dialogs = [
    {id: 1, name: 'Daniil'},
    {id: 2, name: 'Oleg'},
    {id: 3, name: 'Nika'},
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra'},
    {id: 3, message: 'Yo'},
];

let posts = [
    {id: 1, post: 'It\'s my first post!', likes: 5},
    {id: 2, post: 'My name is Daniil!', likes: 15},
    {id: 3, post: 'How are you dude?', likes: 23},
    {id: 4, post: 'Do you like an apple?', likes: 4},
    {id: 5, post: 'Weather is good!', likes: 11},
    {id: 6, post: 'Today i\'ll tell about ReactJS!', likes: 53},
];

root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
