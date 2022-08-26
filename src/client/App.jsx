// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import logo from './logo.svg';
// import Counter from './Counter';
// import UserList from "../client/components/userList/UsersList.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UserCreate from './components/userCreate/UserCreate';
import PhotosList from './components/photoList/PhotosList'
import PhotoDetails from './components/photoDetails/photoDetails'
import AddPhoto from './components/addPhoto/addPhoto'


// import UserUpdate from './components/userUpdate/UserUpdate';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<UserCreate />} /> */}
          <Route path="/photo/many" element={<PhotosList />} />
          <Route path="/photo/detail" element={<PhotoDetails />}/>
          <Route path="/photo/" element={<AddPhoto />}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
