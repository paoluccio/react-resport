import React from 'react';
import { useSelector } from 'react-redux';

import styles from './UserInfo.module.scss';
import { selectUser } from '../../redux'
import { formUserInitials } from '../../utils/format';

const UserInfo = () => {
  const {
    displayName,
    email,
    dateOfJoining
  } = useSelector(selectUser);

  return (
    <div className={styles.info}>
      <div className={styles.header}>
        <div className={styles.initialsBox}>
          <span className={styles.initials}>
            {formUserInitials(displayName, email)}
          </span>
        </div>
        <div className={styles.userData}>
          {displayName && <span>{displayName}</span>}
          <span>{email}</span>
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.dateOfJoining}>
          Member of ReSport<br />since {dateOfJoining}
        </span>
        <span>&copy; 2020 Resport</span>
      </div>
    </div>
  );
};

export default UserInfo;