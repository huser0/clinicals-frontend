import Home from './components/Home/index'
import AddPatient from './components/AddPatient/index'
import AddClinicals from './components/AddClinicals/index'
import { Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/add-clinicals/:patientId" element={<AddClinicals />} />
      </Routes>

    </div>
  )
}

export default App
