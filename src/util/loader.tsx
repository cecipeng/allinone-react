import React from 'react'
import loadable from '@gem-mine/react-loadable'
import Error from '../component/status/Error'
import Loading from '../component/status/Loading'

export function importAll(modules): void {
  if (modules) {
    modules.keys().forEach((key) => {
      modules(key)
    })
  }
}

export function asyncLoader(modulePath): () => JSX.Element {
  const LoadableComponent = loadable({
    loader: () => import(
      /* webpackInclude: (function() {
        const includePath = ['page', 'component']
        const includeExt = ['(j|t)sx?']
        return new RegExp(`(${includePath.join('|')}).*\\\.(${includeExt.join('|')})$`)
      })() */
      `../${modulePath}`
    ),
    loading: ({ isLoading, error }): JSX.Element | null => {
      if (isLoading) {
        return <Loading />
      } else if (error) {
        return <Error error={error} />
      } else {
        return null
      }
    }
  })
  return function LoadableDashboard(): JSX.Element {
    return <LoadableComponent />
  }
}
