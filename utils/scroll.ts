export function smoothScroll(selector: string) {
  const element = document.querySelector(selector);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

