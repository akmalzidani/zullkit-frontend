export function getImageUrl(image) {
  return new URL(`../assets/img/${image}`, import.meta.url)
}

export function numberFormat(value) {
  return new Intl.NumberFormat('en-US').format(value)
}