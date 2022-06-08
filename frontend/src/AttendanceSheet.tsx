


import './css/reporttable.css'
import './css/attendancesheet.css'


const date = new Date();
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];


export const AttendanceSheet = () => {
        return (
                <div>
                        <div>
                                
                                <h3>Mr. Owate</h3>

                        </div>
                        <div className='attendanceSheet_title'>

                                <h2>Attendance Sheet</h2>
                                <h4>{`${day} / ${month + 1} / ${year}`}</h4>

                        </div>
                        <div className='attendanceSheet_table_head'>
                                <table>
                                        <thead> 
                                                <tr>

                                                        <th>NAME</th>
                                                        <th>CLASS 1</th>
                                                        <th>CLASS 2</th>
                                                        <th>CLASS 3</th>
                                                        <th>CLASS 4</th>
                                                        <th>CLASS 5</th>
                                                        <th>CLASS 6</th>
                                                        <th>TOTAL</th>

                                                </tr>
                                        </thead>
                                        <tbody>
                                                <tr>
                                                        <td>MUZAAB</td>
                                                        <td>present</td>
                                                        <td>present</td>
                                                        <td>present</td>
                                                        <td>present</td>
                                                        <td>present</td>
                                                        <td>present</td>
                                                        <td>100%</td>
                                                </tr>
                                                <tr>
                                                        <td>MUZAAB</td>
                                                        <td>present</td>
                                                        <td>present</td>
                                                        <td>present</td>
                                                        <td>present</td>
                                                        <td>present</td>
                                                        <td>present</td>
                                                        <td>100%</td>
                                                </tr>
                                                <tr>
                                                        <td>MUZAAB</td>
                                                        <td>present</td>
                                                        <td>present</td>
                                                        <td>present</td>
                                                        <td>present</td>
                                                        <td>present</td>
                                                        <td>present</td>
                                                        <td>100%</td>
                                                </tr>
                                        </tbody>
                                </table>
                        </div>
                </div>
        )
}
