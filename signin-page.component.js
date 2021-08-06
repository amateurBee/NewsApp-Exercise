//imports that are needed
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Route } from "react-router";

class SignInPage extends React.Component {

    state = {
        email: '',
        pwd: ''
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })

    }
    handleSubmit = (e) => {

    }



    render() {
        return (
            <div className='signin-component'>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='pwd' placeholder="Password" required onChange={this.handleChange}  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
                        Submit
                    </Button>
                    <Button onClick={event=>window.location.href="/#"}>Home</Button>
                </Form>
            </div>
        )
    }
}

//this component must be made importable
export default SignInPage;