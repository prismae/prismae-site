export function scrollReveal(
  selector,
  className = 'visible',
  threshold = 0.15
) {
  const elements = document.querySelectorAll(selector)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold }
  )

  elements.forEach(el => observer.observe(el))
}
