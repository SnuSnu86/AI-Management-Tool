import * as jose from 'jose';

const secret = new TextEncoder().encode('your-secret-key');

export const generateToken = async (payload: any): Promise<string> => {
  const jwt = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secret);
  return jwt;
};

export const verifyToken = async (token: string): Promise<any> => {
  try {
    const { payload } = await jose.jwtVerify(token, secret);
    return payload;
  } catch (error) {
    throw new Error('Invalid token');
  }
};