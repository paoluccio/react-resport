import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setRedirectPath } from '../redux/auth/authSlice';

// Could not help but name it this way 😀
export const useAuthTravel = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const travelToAuth = () => {
    history.push('/auth/signin');
    dispatch(setRedirectPath(pathname));
  };

  return travelToAuth;
};