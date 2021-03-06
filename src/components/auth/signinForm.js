import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';

class SigninForm extends Component {
    render() {
        return(
            <form className='sign-in-form'>
               <FormTitle className='sign-in-form__title' text='Login'/>
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'signin'
})(SigninForm);

export default SigninForm;