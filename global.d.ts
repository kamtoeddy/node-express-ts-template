declare global {
  namespace Express {
    export interface Request {
      auth:
        | { isAuth: true; payload: { id: string; role: 'user' } }
        | { isAuth: false; payload: null }
    }
  }
}

export {}
