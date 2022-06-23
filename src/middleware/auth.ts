import { NextFunction, Request, Response } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import authConfig from '../configuration/auth';
import AppError from '../errors/AppError';

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);
    const { sub } = decoded as JwtPayload;

    request.user = {
      id: sub,
    };
    next();
  } catch {
    throw new AppError('Invalid JWT token', 401);
  }
}
