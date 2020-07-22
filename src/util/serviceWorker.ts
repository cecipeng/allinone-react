const isLocalhost = Boolean(
  window.location.hostname === 'localhost'
      || window.location.hostname === '[::1]'
      || /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        .exec(window.location.hostname)
)

export function register(config): void {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = '/service-worker.js'

      if (isLocalhost) {
        checkValidServiceWorker(swUrl, config)

        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service worker'
          )
        })
      } else {
        registerValidSW(swUrl, config)
      }
    })
  }
}

function registerValidSW(swUrl, config): void {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = (): void => {
        const installingWorker = registration.installing
        if (installingWorker === null) {
          return
        }
        installingWorker.onstatechange = (): void => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log(
                'This web app is being served cache-first by a service worker'
              )

              if (config?.onUpdate) {
                config.onUpdate(registration)
              }
            } else {
              console.log('Content is cached for offline use.')

              if (config?.onSuccess) {
                config.onSuccess(registration)
              }
            }
          }
        }
      }
    })
    .catch((error) => {
      console.error('Error during service worker registration:', error)
    })
}

function checkValidServiceWorker(swUrl, config): void {
  fetch(swUrl)
    .then((response) => {
      const contentType = response.headers.get('content-type')
      if (
        response.status === 404
          || (contentType != null && !contentType.includes('javascript'))
      ) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            // window.location.reload()
          })
        })
      } else {
        registerValidSW(swUrl, config)
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      )
    })
}

export function unregister(): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister()
    })
  }
}
