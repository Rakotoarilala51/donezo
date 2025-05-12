import AuthLayout from './layouts/AuthLayout'
import Login from './components/auth/Login'
import Singup from './components/auth/Singup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/auth' element={<AuthLayout/>}>
            <Route path='/auth/login' element={<Login/>}/>
            <Route path='/auth/signup' element={<Singup/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
