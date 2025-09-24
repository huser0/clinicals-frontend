import type { IPatient } from "../../interfaces/IPatient"
import { useNavigate } from 'react-router-dom'

function RowCreator(patient: IPatient): React.ReactElement {
    const navigate = useNavigate()
    return (
      <tr>
        <td>{patient.firstName}</td>
        <td>{patient.lastName}</td>
        <td>{patient.age}</td>
        <td>
          <button onClick={() => navigate(`/add-clinicals/${patient._id}`)}>Add Clinicals</button>
        </td>
      </tr>
    )
  }

export default RowCreator