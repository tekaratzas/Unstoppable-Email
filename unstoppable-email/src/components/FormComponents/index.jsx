import React from 'react';
import { Field } from 'redux-form';
import './style.css';

export const FormField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) =>
    <div>
      <div>
        <input {...input} placeholder={label} type={type} className="form-input-text"/>
        {touched &&
          ((error &&
            <FormError errorMessage={error} />))}
      </div>
    </div>

export const FormFieldTransparent = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) =>
  <div>
    <div>
      <input {...input} placeholder={label} type={type} className="form-input-text-trans"/>
      {touched &&
        ((error &&
          <FormError errorMessage={error} />))}
    </div>
  </div>

export const FormTextArea = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) =>
  <div>
    <p className="star-title">{label}</p>
    {touched &&
          ((error &&
            <FormError errorMessage={error} />))}
    <textarea className="form-textarea" {...input} rows="6" cols="50"></textarea>
  </div>

export const FormCheckbox = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) =>
  <label className="control control--checkbox">{label}
    <input {...input} type="checkbox"/>
    <div className="control__indicator"></div>
  </label>

export const FormRadioGroup =  ({
  name,
  options,
  label
}) =>
  <div>
    <p className="radio-title">{label}</p>
    {options.map((o, i) => 
      <div key={i}>
        <Field key={i} type="radio" name={name} value={o.label} label={o.label} component={FormRadio}/>
      </div>
      )}
  </div>

export const FormRadio =  ({
  input,
  type,
  value,
  valueRadio,
  meta: { touched, error, warning },
  options,
  label
}) =>
  <div className="formradio-container">
    {touched &&
          ((error &&
            <FormError errorMessage={error} />))}
      <label className="control control--radio"> {label}
        <input {...input} type="radio" value={label}/>
        <div className="control__indicator"></div>
      </label>
  </div>

      
export const FormError = props => 
    <p className="form-error">{props.errorMessage}</p>

export const FormSubmit = ({
  label
}) =>
    <button className="form-submit" type="submit">{label}</button>

export const FormSubmitRound = ({
  label
}) =>
    <button className="form-submit-round" type="submit">{label}</button>