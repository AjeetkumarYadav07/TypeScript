// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DashBoardLayout from "./Layout/DashBoardLayout";
import StudentPage from "./pages/StudentPage";
import TeacherPage from "./pages/TeacherPage";
import FeesPage from "./pages/FeesPage";
import ComplaintPage from "./pages/ComplaintPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoardLayout />}>
          <Route index element={<Home />} />
          <Route path="students" element={<StudentPage/>}  />
          <Route path="teachers" element={<TeacherPage/>} />
          <Route path="fees" element={<FeesPage/>} />
          <Route path="complaints" element={<ComplaintPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
