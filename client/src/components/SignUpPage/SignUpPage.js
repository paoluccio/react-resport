import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import cn from 'classnames';

import styles from './SignUpPage.module.scss';
import { signUpWithEmail, signInWithGoogle } from '../../redux/auth/authSlice';
import Form from '../shared/forms/Form';
import FormHeader from '../shared/forms/FormHeader';
import FormBody from '../shared/forms/FormBody';
import FormInput from '../shared/forms/FormInput';
import FormFooter from '../shared/forms/FormFooter';
import CustomButton from '../shared/buttons/CustomButton';
import LabeledButton from '../shared/buttons/LabeledButton';
import FormDialogue from '../shared/forms/FormDialogue';
import FormDialogueHeader from '../shared/forms/FormDialogueHeader';

const SignUpPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Must be at least 6 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password')], 'Passwords do not match')
          .required('Confirmation is required')
      })}
      onSubmit={async ({ displayName, email, password }, actions) => {
        const result = await dispatch(signUpWithEmail({ displayName, email, password }));
        if (signUpWithEmail.rejected.match(result)) {
          actions.setSubmitting(false);
          actions.setErrors(result.payload);
        }
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <React.Fragment>
          <div className={styles.formPane}>
            <Form onSubmit={handleSubmit} isSubmitting={isSubmitting} noValidate>
              <FormHeader>Sign up</FormHeader>
              <FormBody>
                <Field name='displayName' as={FormInput}>
                  Display name
                </Field>
                <Field name='email' type='email' as={FormInput}>
                  Email
                </Field>
                <Field name='password' type='password' as={FormInput}>
                  Password
                </Field>
                <Field name='confirmPassword' type='password' as={FormInput}>
                  Confirm password
                </Field>
              </FormBody>
              <FormFooter variant='spaced'>
                <CustomButton type='submit' variant='primary'>
                  Sign up
                </CustomButton>
                <LabeledButton
                  intent='Sign in with'
                  label='google'
                  onClick={() => dispatch(signInWithGoogle())}
                />
              </FormFooter>
            </Form>
          </div>
          <div className={cn(styles.dialoguePane, styles.head)}>
            <FormDialogue>
              <FormDialogueHeader>I already have an account!</FormDialogueHeader>
              <CustomButton
                adjustable
                variant='primary'
                onClick={() => history.push('/auth/signin')}
              >
                Sign in
              </CustomButton>
            </FormDialogue>
          </div>
        </React.Fragment>
      )}
    </Formik>
  );
};

export default SignUpPage;