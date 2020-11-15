import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col, Card } from 'reactstrap';
import { userService } from '../services/service';

class login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit = () => {
        var payload ={
            email : this.state.email,
            password : this.state.password
        }
        userService.login(payload).then(res=>{
        console.log("Response found from back-end", res);
        this.props.history.push('/')
         })
       
    }
    handlerField = (event, value) => {
        this.setState({ [value]: event.target.value });
    }

    render() {
        return (
            <Row className="login">
                <Col sm="6" className="box">
                    <Card className="box-container">
                        <h1>Join room</h1>
                        <p>
                            I am building a web application in react and using reactstrap for certain ui design elements. I have arranged elements in row and columns
                        </p>
                        <Input type="text" className="control mt-10" placeholder="Enter Your Room"></Input>
                        <Button type="submit" className="join_room">
                            Join Room
                        </Button>
                        <p>Learn more about Creatist</p>
                    </Card>
                </Col>
                <Col sm="6" className="form-container">
                    <Form onSubmit={this.handleSubmit}>
                        <h2>Sign In</h2>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input className="control" type="email" name="email" id="exampleEmail" placeholder="Enter You Email" value={this.state.email} onChange={(e) => this.handlerField(e, "email")} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" className="control" name="password" id="examplePassword" placeholder="Enter Password" value={this.state.password} onChange={(e) => this.handlerField(e, "password")} />
                        </FormGroup>
                        <FormGroup>
                            <Row className="rem">
                                <Col sm="5"><Input type="checkbox" /><Label>Remeber me</Label></Col>
                                <Col sm="5"><Label className="forget">Forget Password?</Label></Col>
                            </Row>
                        </FormGroup>
                        <Button className="control" color="primary">Sign In</Button>
                    </Form>
                </Col>
            </Row>
        );
    }



}

export default login;