import { Request } from 'express';

export const getUserFromRequest = (
  req: Request,
): { sub: number; username: string } => {
  const user = req['user'];
  if (!user && user.sub) {
    throw new Error('User not found');
  }
  return user;
};
