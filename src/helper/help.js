export const arrSort = {
  default: (a, b) => (a.inStock > b.inStock ? 1 : -1),
  max: (a, b) => (a.price < b.price ? 1 : -1),
  min: (a, b) => (a.price > b.price ? 1 : -1),
}
