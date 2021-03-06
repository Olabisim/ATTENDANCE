

import './css/reporttable.css'
import './css/checkbox.css'


interface studentDataTypes {
        name: String,
        matric: String,
        level: String
}

const studentData:studentDataTypes[] = [
        {
                name: 'Sulaimon',
                matric: "170591092",
                level: "100Level"
        },
        {
                name: 'Moria',
                matric: "170591092",
                level: "100Level"
        },
        {
                name: 'David',
                matric: "170591092",
                level: "100Level"
        },
        {
                name: 'Sulaimon',
                matric: "170591092",
                level: "100Level"
        },
        {
                name: 'Moria',
                matric: "170591092",
                level: "100Level"
        },
        {
                name: 'David',
                matric: "170591092",
                level: "100Level"
        },
]



export const MarkAttendance = () => {
        return (
                <div>
                        
                        <div>
                                
                        </div>

                        <div>
                        <table className="sticky-header">
                                                <thead>
                                                <tr>
                                                        <th>NAME</th>
                                                        <th>MATRIC</th>
                                                        <th>LEVEL</th>
                                                        <th>DATE</th>
                                                        <th>MARK</th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                        {
                                                                studentData.map(each => (

                                                                        <tr>
                                                                                <td>{each.name}</td>
                                                                                <td>170591092</td>
                                                                                <td>400L</td>
                                                                                <td>current</td>
                                                                                <td>
                                                                                        {/* <input type="Checkbox" name= "Browser" value ="Opera " /> */}
                                                                                        
                                                                                        <div className="toggle-container">
                                                                                                <input type="checkbox" id="good" className="toggle-checkbox" />
                                                                                                <label htmlFor="good" className="label">
                                                                                                        <div className="ball"></div>
                                                                                                </label>
                                                                                                {/* <span>Bon projet</span> */}
                                                                                        </div>
                
                                                                                </td>
                                                                        </tr>
                                                                ))
                                                        }

                                                </tbody>
                                                </table>
                        </div>
                        
                </div>
        )
}

