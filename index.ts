import { functionOne } from './circle'

export function functionTwo() {
  return true
}

export function whatever() {
  return functionOne()
}

async function floatingPromise() {
  console.log('floatingPromise')
}

floatingPromise()
