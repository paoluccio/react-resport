import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CardElement } from 'react-stripe-elements';
import { Formik, Field } from 'formik';

import styles from './StripeForm.module.scss';
import { useCheckoutFlow } from '../../hooks/useCheckoutFlow';
import { clearBag } from '../../redux/bag/bagSlice';
import Form from '../shared/forms/Form';
import FormHeader from '../shared/forms/FormHeader';
import FormInput from '../shared/forms/FormInput';
import FormBody from '../shared/forms/FormBody';
import FormFooter from '../shared/forms/FormFooter';
import CustomButton from '../shared/buttons/CustomButton';

const StripeForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleCheckout = useCheckoutFlow();

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={async ({ name }, actions) => {
        try {
          await handleCheckout(name);
          dispatch(clearBag());
          history.replace('/');
        } catch (error) {
          actions.setSubmitting(false);
          actions.setErrors({ [error.source]: error.message });
        }
      }}
    >
      {({ handleSubmit, isSubmitting, errors }) => (
        <Form onSubmit={handleSubmit} isSubmitting={isSubmitting} noValidate>
          <FormHeader variant='brand-image' />
          <FormBody>
            <Field name='name' as={FormInput}>
              Name
            </Field>
            <div className={styles.stripeElement}>
              <CardElement
                style={{ base: { fontSize: '17px', fontFamily: 'Calibri, sans-serif' } }}
              />
              {errors.token && <span className={styles.cardError}>{errors.token}</span>}
            </div>
          </FormBody>
          {errors.charge && <span className={styles.chargeError}>{errors.charge}</span>}
          <FormFooter variant='centered'>
            <CustomButton type='submit' variant='primary'>
              Place order
            </CustomButton>
          </FormFooter>
        </Form>
      )}
    </Formik>
  );
};

export default StripeForm;