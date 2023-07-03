export type { AuthInfo, AuthPayload }

type AuthPayload = { id: string; role: 'user' }

type AuthInfo =
  | { isAuth: true; payload: AuthPayload }
  | { isAuth: false; payload: null }
