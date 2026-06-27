import { toNextJsAuthHandler } from '@pikku/next'
import { auth } from '../../.././auth.js'
import {
  createConfig,
  createSingletonServices,
} from '../../.././services.js'

export const { GET, POST, PATCH, PUT, DELETE } = toNextJsAuthHandler(
  auth,
  createConfig,
  createSingletonServices
)
