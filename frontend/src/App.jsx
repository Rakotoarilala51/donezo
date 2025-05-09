import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/auth' element={<AuthLayout/>}>
            <Route path='/auth/login' element={<Login/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
