class Dropdown {
    /**
     * Konstruktor untuk inisialisasi dropdown
     * @param {HTMLElement} element - Elemen utama dropdown
     */
    constructor(element) {
      this.element = element;
      this.trigger = this.element.querySelector('.dropdown-trigger');
      this.menu = this.element.querySelector('.dropdown-menu');
      this.isOpen = false;
  
      // Inisialisasi event
      this.init();
    }
  
    /**
     * Inisialisasi event handler
     */
    init() {
      if (this.trigger) {
        this.trigger.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggle();
        });
      }
  
      // Tutup dropdown jika klik di luar
      document.addEventListener('click', (e) => {
        if (!this.element.contains(e.target)) {
          this.close();
        }
      });
    }
  
    /**
     * Membuka dropdown
     */
    open() {
      this.menu.classList.add('show');
      this.isOpen = true;
    }
  
    /**
     * Menutup dropdown
     */
    close() {
      this.menu.classList.remove('show');
      this.isOpen = false;
    }
  
    /**
     * Mengubah status dropdown (buka/tutup)
     */
    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  }
  
  // Inisialisasi dropdown di seluruh elemen
  document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((dropdownElement) => new Dropdown(dropdownElement));
  });
  
  export default Dropdown;
  