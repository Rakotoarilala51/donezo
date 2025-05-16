import AuthLayout from './layouts/AuthLayout'
import Login from './components/auth/Login'
import Singup from './components/auth/Singup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import Dashboard from './components/Main/Dashboard'
import Inbox from './components/Main/Inbox'
import AiAssistance from './components/Main/AiAssistance'
import Setting from './components/Main/Setting'
import Shared from './components/Main/Shared'
import Private from './components/Main/Private'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/auth' element={<AuthLayout/>}>
            <Route path='/auth/login' element={<Login/>}/>
            <Route path='/auth/signup' element={<Singup/>}/>
          </Route>
          <Route path="/main" element={<MainLayout/>}>
            <Route path='/main/dashboard' element={<Dashboard/>}/>
            <Route path='/main/inbox' element={<Inbox/>}/>
            <Route path='/main/aiassistance' element={<AiAssistance/>}/>
            <Route path='/main/setting' element={<Setting/>}/>
            <Route path='/main/sharedpage/' element={<Shared/>}/>
            <Route path='/main/privatepage/' element={<Private/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
