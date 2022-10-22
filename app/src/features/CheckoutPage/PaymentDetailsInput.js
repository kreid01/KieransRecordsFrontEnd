import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


export default function PaymentDeatilsInput(props) {

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          props.setValidated(true);
          event.preventDefault();
          event.stopPropagation();
        }
      };
    return (
        <>
        <Form className='customer--form' noValidate validated={props.validated} onSubmit={handleSubmit}>
            <Row>
                <Form.Group as={Col} md='4'>
                 <FloatingLabel
                 controlId='floatingInput'
                 label='First Name'
                 className='mb-3'>
                <Form.Control
                type='text' 
                style={props.inputThemeStyles}
                placeholder='First Name'
                name='firstName'
                value={props.formData.firstName.value}
                onChange={(e) => props.handleChange(e, props.setFormData)}
                class="form-control"
                required/>
                </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md='4'>
                 <FloatingLabel
                 controlId='floatingInput'
                 label='Second Name'
                 className='mb-3'>
                <Form.Control
              class="form-control"
              style={props.inputThemeStyles}
              for='secondName'
              type='text' 
              name='secondName'
              placeholder='Second Name'
              value={props.formData.secondName.value}
              onChange={(e) => props.handleChange(e, props.setFormData)}
              required/>
              </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} md='4'>
                 <FloatingLabel
                 controlId='floatingInput'
                 label='Phone Number'
                 className='mb-3'>
                <Form.Control
                style={props.inputThemeStyles}
                type='number' 
                name='phoneNumber'
                class="form-control"
                placeholder='Phone number (optional)'
                value={props.formData.phoneNumber.value}
                onChange={(e) => props.handleChange(e, props.setFormData)}/>
                </FloatingLabel>
                </Form.Group>
            </Row>
              <FloatingLabel
              controlId='floatingInput'
              label='Email address'
              className='mb-3'>
              <Form.Control
              style={props.inputThemeStyles}
              type='email' 
              name='email'
              class="form-control"
              placeholder='Email Address'
              value={props.formData.email.value}
              onChange={(e) => props.handleChange(e, props.setFormData)}
              required/>
              </FloatingLabel>
              <Row>
                <Form.Group as={Col} md='4'>
                 <FloatingLabel
                 controlId='floatingInput'
                 label='First line of address'
                 className='mb-3'>
                <Form.Control 
                style={props.inputThemeStyles}
                type='text' 
                required
                placeholder="First line of address"
                name='addressFirstLine'
                class="form-control"
                value={props.formData.addressFirstLine.value}
                onChange={(e) => props.handleChange(e, props.setFormData)}/>
                </FloatingLabel>
                </Form.Group> 
                <Form.Group as={Col} md='4'>
                 <FloatingLabel
                 controlId='floatingInput'
                 label='Second line of address'
                 className='mb-3'>
                <Form.Control 
                style={props.inputThemeStyles}
                type='text' 
                required
                class="form-control"
                placeholder="Second line of address"
                name='addressSecondLine'
                value={props.formData.addressSecondLine.value}
                onChange={(e) => props.handleChange(e, props.setFormData)}/>
                </FloatingLabel>
               </Form.Group>
                <Form.Group as={Col} md='4'>
                 <FloatingLabel
                 controlId='floatingInput'
                 label='Postcode'
                 className='mb-3'>
                 <Form.Control 
                 style={props.inputThemeStyles} 
                type='text' 
                required
                placeholder='Postcode'
                name='postcode'
                class="form-control"
                value={props.formData.postcode.value}
                onChange={(e) => props.handleChange(e, props.setFormData)}/>
              </FloatingLabel>
              </Form.Group>
            </Row>
            <Button
            className='submit--button' type='submit'>Continue to Payment</Button>
            </Form>
            </>
    )
}