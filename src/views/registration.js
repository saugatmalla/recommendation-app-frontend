import React, { useState } from 'react'
import Header from '../components/header'
import { Form, Button, Container } from 'react-bootstrap'

import api from '../controller/api'

export default function Registration() {
    const [user, setUser] = useState(
        {
            firstName: "",
            lastName: "",
            emailId: "",
            password: "",
            confirmPassword: ""
        }
    )

    const handleInput = (e, type) => {
        const output = e.target.value
        if (type === "firstName") {
            setUser({ ...user, firstName: output })
        }

        else if (type === "lastName") {
            setUser({ ...user, lastName: output })
        }

        else if (type === "emailId") {
            setUser({ ...user, emailId: output })
        }
        else if (type === "password") {
            setUser({ ...user, password: output })
        }
        else if (type === "confirmPassword") {
            setUser({ ...user, confirmPassword: output })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            first_name: user.firstName,
            last_name: user.lastName,
            email: user.emailId,
            password: user.password,
            confirm_password: user.confirmPassword
        }
        try {
            await api.post('/register', data)

        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <Header></Header>
            <div>
                <Container>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control value={user.firstName} onChange={(e) => handleInput(e, "firstName")} type="text" placeholder="Enter First Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control value={user.lastName} onChange={(e) => handleInput(e, "lastName")} type="text" placeholder="Enter Last Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={user.emailId} onChange={(e) => handleInput(e, "emailId")} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={user.password} onChange={(e) => handleInput(e, "password")} type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control value={user.confirmPassword} onChange={(e) => handleInput(e, "confirmPassword")} type="password" placeholder="Password" />
                        </Form.Group>

                        <Button onClick={(e) => handleSubmit(e)} variant="primary" type="submit" value="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>

    )
}