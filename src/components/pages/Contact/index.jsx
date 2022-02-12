import { Component } from 'react';
import { Form, Button, Container, Row, Stack } from 'react-bootstrap';
import { Header } from '../../shared/styles';

class Contact extends Component {
  constructor(){
    super()
    this.state = {
      fullName: '',
      email: '',
      phoneNumber: '',
      comments: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.sendResponse(this.state)
    this.setState({    
      fullName: '',
      email: '',
      phoneNumber: '',
      comments: '',})
  }

  sendResponse = (formInfo) =>{
    console.log(formInfo)
  }

  render(){
    return(
      <Container>
        <Stack gap={1}>
          <Header>CONTACT ME</Header>
          <h3>Ask me anything!</h3>
          <h3>I'll get back to you via email, text, or whatever works best for you.</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name: </Form.Label>
              <Form.Control 
                placeholder='Please enter your name'
                name='fullName'
                value={this.state.fullName}
                onChange={this.handleChange}
                required
                />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email: </Form.Label>
              <Form.Control 
                type='email' 
                placeholder='Please enter a valid email address'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number: </Form.Label>
              <Form.Control 
                placeholder='Enter your phone number (optional)'
                name='phoneNumber'
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Questions or Comments: </Form.Label>
              <Form.Control
                as='textarea' 
                placeholder='Enter your message'
                name='comments'
                value={this.state.comments}
                onChange={this.handleChange}
                style={{ height: '150px' }}
                required
              />
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
          </Form>
        </Stack>
      </Container>
    )
  }
};

export default Contact;