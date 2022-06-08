

import './css/reporttable.css'
import './css/checkbox.css'

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
                                                <tr>
                                                        <td>Sulaimon</td>
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
                                                </tbody>
                                                </table>
                        </div>
                        
                </div>
        )
}

