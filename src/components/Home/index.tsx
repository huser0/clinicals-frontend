import { useEffect, useState } from 'react'
import axios from 'axios'
import RowCreator from '../RowCreator/index'
import type { IPatient } from '../../interfaces/IPatient'
import { Link } from 'react-router-dom'
import './index.css'

function Home(){
  const [patientData, setPatientData] = useState<IPatient[]>([])

  useEffect(() => {
    axios.get('http://localhost:8000/clinicalsapi/patients').then((res) => {
      setPatientData(res.data)
    }).catch((err) => {
      console.error("Erro ao buscar pacientes:", err);
    });
  }, [])

  return (
    <div className="table-container">
      <h2>Patients:</h2>
      <table>
        <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th></th>
            </tr>
        </thead>
        <tbody>
          {patientData.map((patient, index) => <RowCreator key={index} {...patient}/>)}
        </tbody>
      </table>
      <Link to="/add-patient" className="add-link">Add Patient</Link>
    </div>
  )
}



export default Home
