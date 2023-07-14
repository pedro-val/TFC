import jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'jwt_secret';

type TokenPayload = {
  id: number | undefined,
  email: string | undefined,
};

function sign(payload: TokenPayload): string {
  const token = jwt.sign(payload, secret);
  return token;
}

function verify(token: string): TokenPayload {
  const decoded = jwt.verify(token, secret) as TokenPayload;
  return decoded;
}

export default {
  sign,
  verify,
};
