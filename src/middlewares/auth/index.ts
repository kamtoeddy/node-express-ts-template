import { Request, Response, NextFunction } from 'express'

export { parseAuth }

function parseAuth(req: Request, res: Response, next: NextFunction) {
  next()
}
