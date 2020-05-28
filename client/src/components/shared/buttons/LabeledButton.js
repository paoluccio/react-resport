import React from 'react';
import cn from 'classnames';

import styles from './LabeledButton.module.scss';
import { ReactComponent as GoogleLabel } from '../../../assets/google.svg';
import { ReactComponent as StripeLabel } from '../../../assets/stripe.svg';

const labels = {
  'google': <GoogleLabel className={styles['google-label']} />,
  'stripe': <StripeLabel className={styles['stripe-label']} />
};

const LabeledButton = ({ intent, label, ...rest }) => {
  return (
    <button
      type='button'
      className={cn(styles.button, styles[label])}
      {...rest}
    >
      {intent} {labels[label]}
    </button>
  );
};

export default LabeledButton;