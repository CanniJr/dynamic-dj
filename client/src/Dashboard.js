import React, { useState } from 'react'
import useAuth from './useAuth'
import { Container, Form } from 'react-bootstrap'

function Dashboard({ code }) {
    const accessToken = useAuth(code)
    const [ search, setSearch ] = useState('')

    const changeHandler = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    return (
        <Container className='d-flex flex-column py-2' style={{ height: '100vh' }}>
            <Form.Control
                type='search'
                placeholder='Search Songs or Artists'
                value={search}
                onChange={changeHandler}
            />
            <div className='flex-grow-1 my-2' style={{ overflowY: 'auto' }}>
                songs
            </div>
            <div>bottom</div>
        </Container>
    )
}

export default Dashboard
