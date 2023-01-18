import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './yms/App'
import {Redirect} from './pages/Redirect'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path=":id" element={<Redirect/>}/>
    </Routes>
    </BrowserRouter>

   </React.StrictMode>
);
//     /     <App/>
//     /history   <History/>
//     /:id      <Redirect/>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
