
export const createTests = (...components) => (test) => {
  components.forEach(test)
}
