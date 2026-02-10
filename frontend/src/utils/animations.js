export function animateOnLoad(selector, className = 'show', delay = 0) {
  const elements = document.querySelectorAll(selector)

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add(className)
    }, delay * index)
  })
}
