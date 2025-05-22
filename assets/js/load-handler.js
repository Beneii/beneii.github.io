document.addEventListener('DOMContentLoaded', () => {
  // Create loading overlay
  const overlay = document.createElement('div');
  overlay.className = 'loading-overlay';
  document.body.appendChild(overlay);

  // Function to remove loading state
  const removeLoading = () => {
    document.body.classList.add('loaded');
    overlay.classList.add('fade-out');
    setTimeout(() => {
      overlay.remove();
    }, 300); // Match the transition duration
  };

  // Check if all resources are loaded
  if (document.readyState === 'complete') {
    removeLoading();
  } else {
    window.addEventListener('load', removeLoading);
  }
}); 