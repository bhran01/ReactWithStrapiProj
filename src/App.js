//Import area
import Register from  './pages/Register'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import AdminPage from './pages/admin/AdminPage'
import TeacherPage from './pages/teacher/TeacherPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './component/Layout'

//function definition area
export default function App(){

  //2.1 Hook area

  //2.2 Function Definition area



  //2.3 Return statement,every function return something
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Login />}></Route>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="register" element={<Register />}></Route>
                    <Route path="admin" element={<AdminPage />}></Route>
                    <Route path="teacher" element={<TeacherPage />}></Route>
                </Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
  )
}


//export area
