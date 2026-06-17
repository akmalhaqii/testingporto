export function startTyping(el, words, opts = {}) {
  const {
    typeSpeed   = 110,
    deleteSpeed = 60,
    pauseAfter  = 2000,
    pauseBefore = 400,
  } = opts;

  let wordIndex  = 0;
  let charIndex  = 0;
  let isDeleting = false;
  let timerId    = null;

  function tick() {
    const current = words[wordIndex];

    if (isDeleting) {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === current.length) {
      delay      = pauseAfter;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex  = (wordIndex + 1) % words.length;
      delay      = pauseBefore;
    }

    timerId = setTimeout(tick, delay);
  }

  tick();

  return () => clearTimeout(timerId);
}
