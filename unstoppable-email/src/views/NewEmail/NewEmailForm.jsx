import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormField, FormSubmit, FormTextArea } from './../../components/FormComponents';

let NewEmailForm = ({
    handleSubmit,
}) => 
    <form onSubmit={ handleSubmit }>
        <Field name="reciever" label="To:" component={ FormField } type="text"/>
        <Field name="subject" label="Subject" component={ FormField } type="text"/>
        <Field name="message" component={ FormTextArea } type="text"/>
        <Field name="submitEmail" label="Submit" component={ FormSubmit } type="submit" />
    </form>

NewEmailForm = reduxForm({
    form: 'newEmail'
})(NewEmailForm);

export default NewEmailForm;