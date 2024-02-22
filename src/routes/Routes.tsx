import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from '../pages/Home/index';

const AppRoutes: React.FC = () => {
  return (
    <Router>
        <Routes>
            <Route path='/'  element={<Home />}></Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes;