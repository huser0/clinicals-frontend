import { useState } from 'react'
import axios from 'axios'
import './index.css'
import type { IPatient } from '../../interfaces/IPatient'
import { useNavigate} from 'react-router-dom'

function AddPatient(){
  const [firstName, setFirstName] = useState<IPatient['firstName']>('');
  const [lastName, setLastName] = useState<IPatient['lastName']>('');
  const [age, setAge] = useState<IPatient['age']>();
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    const patientData = {
      firstName,
      lastName,
      age,
    }

    if (!firstName || !lastName || !age) {
      alert('Please fill in all fields')
      return
    }

    axios.post('http://localhost:8000/clinicalsapi/patients', patientData).then((res) => {
      console.log('Patient created:', res.data)
      navigate('/')
    }).catch((err) => {
      console.error("Erro ao criar paciente:", err);
    })
  }

  return (
    <div className="form-container">
      <h2>Create Patient:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(Number(e.target.value))}/>
        <button type="submit">Confirmar</button>
      </form>
    </div>
  )
}

export default AddPatient
