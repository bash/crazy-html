export function extract(input, { window: win } = {}) {
  const { DOMParser } = win
  const parser = new DOMParser()
  const doc = parser.parseFromString(input, 'text/html')

  
}
