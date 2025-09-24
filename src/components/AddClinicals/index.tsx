import { useState } from "react";
import type { IClinical } from "../../interfaces/IClinicals";
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function AddClinicals(){
  const [componentName, setComponentName] = useState<IClinical['componentName']>('');
  const [componentValue, setComponentValue] = useState<IClinical['componentValue']>('');
  const { patientId } = useParams<{patientId: string}>()
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){

    console.log(patientId)
  
    event.preventDefault()
    const clinicalData = {
      patient: patientId,
      componentName,    
      componentValue
    }

    if (!componentName || !componentValue) {
      alert(clinicalData.componentName)
      return
    }

    axios.post(`http://localhost:8000/clinicalsapi/clinicals`, clinicalData).then((res) => {
      console.log('Clinical data created:', res.data)
      navigate('/')
    }).catch((err) => {
      console.error("Erro ao criar clinical data:", err);
    })
  }
  return (
    <div>
      <h2>Add Clinical Data</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="componentName">Clinical Entry Type:</label>
        <select defaultChecked id="componentName" name="componentName" value={componentName} onChange={(e) => setComponentName(e.target.value)}>
          <option value=""></option>
          <option value="bloodPressure">Blood Pressure</option>
          <option value="heartRate">Heart Rate</option>
          <option value="temperature">Temperature</option>
        </select>
        <label htmlFor="componentValue">Component Value:</label>
        <input type="text" id="componentValue" name="componentValue" value={componentValue} onChange={(e) => setComponentValue(e.target.value)}/>
        <button type="submit">Confirmar</button>
      </form>
    </div>
  )
}

export default AddClinicals
