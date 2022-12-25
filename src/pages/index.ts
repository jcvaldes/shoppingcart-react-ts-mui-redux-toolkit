import * as React from 'react'

export * from './Home'

export const LoginPage = React.lazy(() => import('./Login'))

export const CharacterPage = React.lazy(() => import('./Character'))
