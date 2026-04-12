import React from 'react'
import UserLayout from './Layouts/UserLayout'
import { SidebarProvider } from './contextAPI/SidebarContext'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';

const App = () => {

  return (
    <div>
      <SidebarProvider>
        <Routes>
          {/* Parent Route */}
          <Route path="/" element={<UserLayout />}>
            {/* Child Routes - These render inside the <Outlet /> */}
            <Route index element={<Home />} /> {/* "index" means path="/" */}
            {/* <Route path="shorts" element={<Shorts />} /> */}
          </Route>
        </Routes>
      </SidebarProvider>
    </div>
  );
}

export default App