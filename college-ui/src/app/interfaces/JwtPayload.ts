
export interface JwtPayload {
  name?: string;
  email?: string;
  phone?: string;
  exp: number;
}