import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from '../firebase';
import { UserAPI } from '../api/userAPI';
import { userDetected, userNotDetected } from '../redux/auth/authSlice';
import { formatDate } from '../utils/format';

export const useAuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authListener = {};
    const profileListener = {};

    authListener.unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const profileRef = UserAPI.getProfileReference(user.uid);
        profileListener.unsubscribe = profileRef.onSnapshot(profile => {
          if (profile.exists) {
            const { id } = profile;
            const { displayName, email, createdAt } = profile.data();
            const dateOfJoining = formatDate(createdAt.toDate());
            dispatch(userDetected({ id, displayName, email, dateOfJoining }));
          }
        });
      } else {
        dispatch(userNotDetected());
        profileListener.unsubscribe && profileListener.unsubscribe();
      }
    });

    return () => authListener.unsubscribe();
  }, [dispatch]);
};