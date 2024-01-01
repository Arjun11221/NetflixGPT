export const checkValidation = (email, password, name) => {
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isValidEmail)
    return "Please enter a valid email address or phone number.";
  if (!isValidPassword)
    return "Your password must contain lowecase , uppercase as well as special characters";

  return null;
};
