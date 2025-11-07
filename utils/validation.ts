export const validateEmail = (email: string): string | null => {
  if (!email) return "Email is required";

  const emailValidator = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/
  );
  if (!emailValidator.test(email)) {
    return "Not valid email";
  }
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return "Password is required";
  if (password.length < 8) return "Too short";
  return null;
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
): string | null => {
  if (!confirmPassword) return "Please confirm password";
  if (password !== confirmPassword) return "Passwords do not match";
  return null;
};

export const validateName = (name: string): string | null => {
  if (!name.trim()) return "Name is required";
  return null;
};
