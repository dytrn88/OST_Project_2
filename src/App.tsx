import { useState } from 'react'

import './App.css'

import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import { Checkin, Dashboard, Form, Home } from './pages'






function App() {

  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Gym</h1>
          <NavLink to="/checkin">Checkin</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/form">Form</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkin" element={<Checkin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<Form />} />
        </Routes>

      </main>
    </BrowserRouter>

  )
}

export default App
