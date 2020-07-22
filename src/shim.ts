import setPrototypeOf from 'setprototypeof'
// ie9 polyfill
Object.setPrototypeOf = setPrototypeOf
// eslint-disable-next-line import/first
import 'core-js/stable'
