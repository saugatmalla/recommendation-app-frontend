import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

import api from '../controller/api'

export default function Registration() {
    const [user, setUser] = useState(
        {
            email: "",
            password: "",
        }
    )

    const handleInput = (e, type) => {
        const output = e.target.value
        setUser({ ...user, firstName: output })

        if (type === "email") {
            setUser({ ...user, email: output })
        }
        else if (type === "password") {
            setUser({ ...user, password: output })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            email: user.email,
            password: user.password,
        }
        try {
            await api.post('/login', data)

        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={user.email} onChange={(e) => handleInput(e, "email")} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={user.password} onChange={(e) => handleInput(e, "password")} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button onClick={(e) => handleSubmit(e)} variant="primary" type="submit" value="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}