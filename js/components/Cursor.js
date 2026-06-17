export function initCursor() {
  const dot      = document.getElementById('cursorDot');
  const follower = document.getElementById('cursorFollower');

  if (!dot || !follower) return;

  document.addEventListener('mousemove', (e) => {
    dot.style.left      = e.clientX + 'px';
    dot.style.top       = e.clientY + 'px';
    follower.style.left = e.clientX + 'px';
    follower.style.top  = e.clientY + 'px';
  });
  
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, input, textarea, [data-cursor-hover]')) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, input, textarea, [data-cursor-hover]')) {
      document.body.classList.remove('cursor-hover');
    }
  });
}
