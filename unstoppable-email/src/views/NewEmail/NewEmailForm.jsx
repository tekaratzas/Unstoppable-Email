import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormField, FormSubmit, FormTextArea } from './../../components/FormComponents';

let NewEmailForm = ({
    handleSubmit,
}) => 
    <form onSubmit={ handleSubmit }>
        <Field name="reciever" component={ FormField } type="text"/>
        <Field name="subject" component={ FormField } type="text"/>
        <Field name="message" component={ FormTextArea } type="text"/>
        <Field label="Submit" component={ FormSubmit } type="submit" />
    </form>

NewEmailForm = reduxForm({
    form: 'newEmail'
})(NewEmailForm);

export default NewEmailForm;