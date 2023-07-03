import dotenv from 'dotenv'
import { loadVariables } from 'apitoolz'

dotenv.config()

export { constants }

const constants = loadVariables({
  DB_URI: {
    parser() {
      return process.env.NODE_ENV === 'test'
        ? process.env.TEST_DB_URI
        : process.env.DB_URI
    }
  },
  DB_USER: '',
  DB_USER_PASSWORD: '',
  IS_CI_CD: {
    default: false,
    parser(val: string) {
      return val.trim() == 'true' ? true : false
    }
  },
  JWT_SECRET: 'jwt-secret',
  JWT_TOKEN_EXPIRATON_TIME: '25d',
  NODE_ENV: 'development',
  PORT: {
    default() {
      if (process.env.NODE_ENV === 'test') return 1502

      const PORT = process.env.PORT

      return PORT ? Number(PORT) : 1501
    }
  }
})
