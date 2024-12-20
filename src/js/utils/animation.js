class Tooltip {
    /**
     * Konstruktor untuk inisialisasi tooltip
     * @param {HTMLElement} element - Elemen yang memiliki tooltip
     */
    constructor(element) {
      this.element = element;
      this.tooltip = null;
      this.text = this.element.getAttribute('data-tooltip');
      this.position = this.element.getAttribute('data-placement') || 'top';
      this.offset = 10;
  
      this.init();
    }
  
    /**
     * Inisialisasi event untuk tooltip
     */
    init() {
      this.element.addEventListener('mouseenter', () => this.show());
      this.element.addEventListener('mouseleave', () => this.hide());
      this.element.addEventListener('focus', () => this.show());
      this.element.addEventListener('blur', () => this.hide());
    }
  
    /**
     * Membuat tooltip
     */
    createTooltip() {
      if (this.tooltip) return;
  
      this.tooltip = document.createElement('div');
      this.tooltip.className = 'tooltip';
      this.tooltip.textContent = this.text;
  
      document.body.appendChild(this.tooltip);
  
      const { top, left } = this.calculatePosition();
      this.tooltip.style.top = `${top}px`;
      this.tooltip.style.left = `${left}px`;
    }
  
    /**
     * Menghitung posisi tooltip
     * @returns {Object} - Koordinat posisi tooltip
     */
    calculatePosition() {
      const rect = this.element.getBoundingClientRect();
      const tooltipRect = this.tooltip.getBoundingClientRect();
  
      let top = 0;
      let left = 0;
  
      switch (this.position) {
        case 'top':
          top = rect.top - tooltipRect.height - this.offset;
          left = rect.left + (rect.width - tooltipRect.width) / 2;
          break;
        case 'bottom':
          top = rect.bottom + this.offset;
          left = rect.left + (rect.width - tooltipRect.width) / 2;
          break;
        case 'left':
          top = rect.top + (rect.height - tooltipRect.height) / 2;
          left = rect.left - tooltipRect.width - this.offset;
          break;
        case 'right':
          top = rect.top + (rect.height - tooltipRect.height) / 2;
          left = rect.right + this.offset;
          break;
      }
  
      return { top: Math.max(top, 0), left: Math.max(left, 0) };
    }
  
    /**
     * Menampilkan tooltip
     */
    show() {
      this.createTooltip();
      this.tooltip.classList.add('show');
    }
  
    /**
     * Menyembunyikan tooltip
     */
    hide() {
      if (this.tooltip) {
        this.tooltip.classList.remove('show');
        document.body.removeChild(this.tooltip);
        this.tooltip = null;
      }
    }
  }
  
  // Inisialisasi tooltip di semua elemen dengan atribut data-tooltip
  document.addEventListener('DOMContentLoaded', () => {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach((element) => new Tooltip(element));
  });
  
  export default Tooltip;
  