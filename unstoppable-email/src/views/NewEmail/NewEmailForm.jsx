import React from 'react';
import { Field, reduxForm } from 'redux-form';

let NewEmailForm = ({
    handleSubmit,
}) => 
    <form onSubmit={ handleSubmit }>
        <Field name="reciever" component="input" type="text"/>
        <Field name="subject" component="input" type="text"/>
        <Field name="message" component="textArea" type="text"/>
    </form>

NewEmailForm = reduxForm({
    form: 'newEmail'
})(NewEmailForm);

export default NewEmailForm;