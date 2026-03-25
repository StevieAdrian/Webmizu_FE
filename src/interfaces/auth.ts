export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ISession {
  access_token: string;
  refresh_token: string;
  expires_at: number;
}

export interface ILoginResponse {
  success: boolean;
  data: {
    user: Record<string, unknown>;
    session: ISession;
  };
}
