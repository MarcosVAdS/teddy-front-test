import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Employees from "./pages/Employees"
import AppProviders from "./providers/AppProviders"
import SelectedEmployeesList from "./components/SelectedEmployeesList"

function App() {

  return (
    <AppProviders>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employees">
            <Route index element={<Employees/>}/>
            <Route path="selected" element={<SelectedEmployeesList/>}/>
          </Route>
        </Routes>
      </Router>
    </AppProviders>
  )
}

export default App
