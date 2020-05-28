export const formatDate = date => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  return date.toLocaleDateString('en-US', options);
};

export const formUserInitials = (displayName, email) => {
  if (displayName) {
    return displayName
      .split(' ')
      .slice(0, 2)
      .map(part => part[0])
      .join('');
  } else {
    return email[0];
  }
};