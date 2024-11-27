import * as bcrypt from 'bcrypt';

export const encryptPassword = async (password: string): Promise<string> => {
  const saltOrRounds = 10;
  return await bcrypt.hash(password, saltOrRounds);
};

export const comparePassword = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

export const checkPasswordStrength = (password: string): boolean => {
  // At least 8 characters, one uppercase, one lowercase, one number and one special character
  return (
    password.length > 8 &&
    /\d/.test(password) &&
    /[a-z]/i.test(password) &&
    /[A-Z]/.test(password) &&
    /\W/.test(password)
  );
};
