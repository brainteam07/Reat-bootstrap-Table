import React from 'react'
import{ Table} from'react-bootstrap'
function App() {
    // const student =['priyanka','yogesh','anil','peter'];
    // student.map((item)=>{
    //     console.log("My Name is:",item)
    // });
    const student = [

        { name: "Priyanka", email: "priyanka@gmail.com", id: 111 },
        { name: "Daksh", email: "daksh@gmail.com", id: 222 },
        { name: "anil", email: "anil@gmail.com", id: 333 },
        { name: "nil", email: "nil@gmail.com", id: 111}
    ]

    return (
        <div className='App'>
            <h1>Handle array with list</h1>
            <Table striped variant='dark' >
            <tbody>
                <tr>

                    <td>Name</td>
                    <td>Email</td>
                    <td>Id</td>
                </tr>
                {
                    student.map((item,i) =>
                
                     <tr key={i}>
                            <td>{item.name} </td>
                            <td>{item.email} </td>
                            <td>{item.id}</td>
                        </tr>
                       
                 )
            }
            console.log(student);
            </tbody>
</Table>
 </div>
    )
}
export default App
