import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainSection from './MainSection';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let userName;
function doSomething() {
  var yourName = prompt("What is your name?");
  userName = yourName
}

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", doSomething);
} else {
  // `DOMContentLoaded` has already fired
  doSomething();
}

let greeting;
let greetingText;
    const d = new Date();
    let hour = d.getHours();
    console.log(hour)
    if (hour < 12) {
        greeting = `Good Morning ${userName},`
        greetingText = `Welcome to my portfolio page`
    } 
    else if (hour >= 12 && hour < 16) {
        greeting = `Good Afternoon ${userName},`
        greetingText = `Welcome to my portfolio page`
    } 
    else if (hour > 16 && hour <= 19) {
        greeting = `Good Evening ${userName},`
        greetingText = `Welcome to my portfolio page`
    }
    else if (hour >= 20 && hour <= 23 ) {
        greeting = `It's almost midnight!`
        greetingText = `You should go to bed soon ${userName}`
    } 
    else if (hour === 0 && hour <= 5 ) {
        greeting = `Why are you awake at this time ${userName}?`
    } 
    console.log(greeting)

root.render(
  <React.StrictMode>
    <MainSection
      greetUser = {greeting}
      engageUser = {greetingText}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
