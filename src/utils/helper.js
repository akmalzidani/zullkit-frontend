export const getImageUrl= function (image) {
  return new URL(`../assets/img/${image}`, import.meta.url)
}

export const numberFormat = function(value) {
  return new Intl.NumberFormat('en-US').format(value)
}

export const splitAndTrim = function (str) {
  return str.split(',').map(item => item.trim())
}