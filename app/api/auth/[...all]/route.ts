import { toNextJsAuthHandler } from '@pikku/next'
import { auth } from '../../../../src/auth.js'
import { createSingletonServices } from '../../../../src/services.js'
import { createConfig } from '../../../../src/config.js'

export const { GET, POST, PATCH, PUT, DELETE } = toNextJsAuthHandler(
  auth,
  createConfig,
  createSingletonServices
)
