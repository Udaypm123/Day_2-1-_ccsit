import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    var [user, setuser] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5176/view")
            .then((response) => {
                console.log(response.data)
                setuser(response.data)
            })

    })


const delValue = (id) => {
    axios.delete("http://localhost:5176/remove/" + id)
        .then((response) => {
            console.log(response.data)
            window.location.reload()
        })
}   
        return (
            <div>
                <h1><u>VIEW</u></h1>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell>Dept</TableCell>
                                <TableCell>Salary</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {user.map((val) => {
                                return (
                                    <TableRow>
                                        <TableCell> {val.Name}</TableCell>
                                        <TableCell> {val.Age}</TableCell>
                                        <TableCell> {val.Dept}</TableCell>
                                        <TableCell> {val.Sal}</TableCell>
                                        <TableCell>
                                            <Button size="small" variant="contained" onClick={() => { upValue(val._id) }}>Update</Button>&nbsp;
                                            <Button size="small" variant="contained" onClick={() => { delValue(val._id) }}>Delete</Button>

                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }


 export default View
