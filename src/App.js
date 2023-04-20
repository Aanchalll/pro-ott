import './App.css';
import Layout from './Pages/main';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Layout />} />
          <Route path="/home" element={<Layout />} />
          <Route path="/shows" element={<Layout />} />
          <Route path="/movies" element={<Layout />} />
          <Route path="/comedy" element={<Layout />} />
          <Route path="/news" element={<Layout />} />
          <Route path="/channels" element={<Layout />} />
          <Route path="/languages" element={<Layout />} />
          <Route path="/genres" element={<Layout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
