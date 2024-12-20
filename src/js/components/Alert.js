class Alert {
  /**
   * Initialize close button functionality for alerts
   */
  static init() {
    document.querySelectorAll('.alert .close').forEach((closeBtn) => {
      closeBtn.addEventListener('click', () => {
        const alert = closeBtn.closest('.alert');
        alert.classList.add('fade-out');
        setTimeout(() => {
          alert.remove();
        }, 300); // Matches CSS transition duration
      });
    });
  }

  /**
   * Show an alert dynamically
   * @param {string} message - The alert message
   * @param {string} type - The alert type (e.g., 'primary', 'success', 'danger', etc.)
   * @param {string} container - Selector for the container where the alert will be appended
   * @param {boolean} dismissible - Whether the alert can be dismissed
   */
  static showAlert(message, type = 'primary', container = 'body', dismissible = true) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} ${dismissible ? 'alert-dismissible' : ''}`;
    alert.innerHTML = `
      ${message}
      ${dismissible ? '<button type="button" class="close" aria-label="Close">&times;</button>' : ''}
    `;

    document.querySelector(container).append(alert);
    if (dismissible) {
      this.init(); // Reinitialize close functionality
    }
  }

  /**
   * Auto-hide alert after a given duration
   * @param {string} message - The alert message
   * @param {string} type - The alert type
   * @param {string} container - Selector for the container
   * @param {number} duration - Time in milliseconds before the alert is removed
   */
  static showTimedAlert(message, type = 'primary', container = 'body', duration = 3000) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    document.querySelector(container).append(alert);

    setTimeout(() => {
      alert.classList.add('fade-out');
      setTimeout(() => alert.remove(), 300); // Matches CSS transition duration
    }, duration);
  }
}

// Initialize alerts on page load
document.addEventListener('DOMContentLoaded', () => {
  Alert.init();
});

export default Alert;
