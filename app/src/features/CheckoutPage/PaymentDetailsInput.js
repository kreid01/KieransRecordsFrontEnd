import React from 'react';
import Form from 'react-bootstrap/Form'

export default function PaymentDeatilsInput(props) {


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        event.preventDefault();
          event.stopPropagation();
        props.setValidated(true);
      };
    return (
        <>
        <Form noValidate validated={props.validated} onSubmit={handleSubmit} className='customer--form'>
            <input
            type='text' 
            style={props.inputThemeStyles}
            placeholder='First Name'
            name='firstName'
            value={props.formData.firstName.value}
            onChange={(e) => props.handleChange(e, props.setFormData)}
            class="form-control"
            required
            />
            <input 
            class="form-control"
            style={props.inputThemeStyles}
            for='secondName'
            type='text' 
            name='secondName'
            placeholder='Second Name'
            value={props.formData.secondName.value}
            onChange={(e) => props.handleChange(e, props.setFormData)}
            required 
            />
            <input 
             style={props.inputThemeStyles}
            type='email' 
            name='email'
            class="form-control"
            placeholder='Email Address'
            value={props.formData.email.value}
            onChange={(e) => props.handleChange(e, props.setFormData)}
            required
            />
            <input 
             style={props.inputThemeStyles}
            type='number' 
            name='phoneNumber'
            class="form-control"
            placeholder='Phone number (optional)'
            value={props.formData.phoneNumber.value}
            onChange={(e) => props.handleChange(e, props.setFormData)}
            />
            <input 
             style={props.inputThemeStyles}
            type='text' 
            reuiqred
            placeholder="First line of address"
            name='addressFirstLine'
            class="form-control"
            value={props.formData.addressFirstLine.value}
            onChange={(e) => props.handleChange(e, props.setFormData)}
            />
            <input 
             style={props.inputThemeStyles}
            type='text' 
            required
            class="form-control"
            placeholder="Second line of address"
            name='addressSecondLine'
            value={props.formData.addressSecondLine.value}
            onChange={(e) => props.handleChange(e, props.setFormData)}
            />
            <input
             style={props.inputThemeStyles} 
            type='text' 
            required
            placeholder='Postcode'
            name='postcode'
            class="form-control"
            value={props.formData.postcode.value}
            onChange={(e) => props.handleChange(e, props.setFormData)}
            />
            <button class='btn primary-btn' type='submit'>Continue</button>
            </Form>
            </>
    )
}