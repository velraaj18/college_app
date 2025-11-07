import { JwtPayload } from "./JwtPayload";

export interface AuthContextType {
  user: JwtPayload | null;
  token: string | null;
  loading : boolean;
  logout: () => void;
}