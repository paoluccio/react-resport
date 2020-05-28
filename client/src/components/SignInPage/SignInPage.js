import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import styles from './SignInPage.module.scss';
import { signInWithEmail, signInWithGoogle } from '../../redux/auth/authSlice';
import Form from '../shared/forms/Form';
import FormHeader from '../shared/forms/FormHeader';
import FormBody from '../shared/forms/FormBody';
import FormInput from '../shared/forms/FormInput';
import FormFooter from '../shared/forms/FormFooter';
import CustomButton from '../shared/buttons/CustomButton';
import LabeledButton from '../shared/buttons/LabeledButton';
import FormDialogue from '../shared/forms/FormDialogue';
import FormDialogueHeader from '../shared/forms/FormDialogueHeader';

const SignInPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Must be at least 6 characters')
          .required('Password is required')
      })}
      onSubmit={async ({ email, password }, actions) => {
        const result = await dispatch(signInWithEmail({ email, password }));
        if (signInWithEmail.rejected.match(result)) {
          actions.setSubmitting(false);
          actions.setErrors(result.payload);
        }
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <React.Fragment>
          <div className={styles.formPane}>
            <Form onSubmit={handleSubmit} isSubmitting={isSubmitting} noValidate>
              <FormHeader>Sign in</FormHeader>
              <FormBody>
                <Field name='email' type='email' as={FormInput}>
                  Email
                </Field>
                <Field name='password' type='password' as={FormInput}>
                  Password
                </Field>
              </FormBody>
              <FormFooter variant='spaced'>
                <CustomButton type='submit' variant='primary'>
                  Sign in
                </CustomButton>
                <LabeledButton
                  intent='Sign in with'
                  label='google'
                  onClick={() => dispatch(signInWithGoogle())}
                />
              </FormFooter>
            </Form>
          </div>
          <div className={styles.dialoguePane}>
            <FormDialogue>
              <FormDialogueHeader>Don't have an account yet?</FormDialogueHeader>
              <CustomButton
                adjustable
                variant='primary'
                onClick={() => history.push('/auth/signup')}
              >
                Sign up
              </CustomButton>
            </FormDialogue>
          </div>
        </React.Fragment>
      )}
    </Formik>
  );
};

export default SignInPage;