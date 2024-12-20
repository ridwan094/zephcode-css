class Modal {
    /**
     * Konstruktor untuk inisialisasi modal
     * @param {HTMLElement} element - Elemen utama modal
     */
    constructor(element) {
      this.element = element;
      this.trigger = document.querySelector(`[data-target="#${element.id}"]`);
      this.closeButtons = this.element.querySelectorAll('[data-dismiss="modal"]');
      this.backdrop = null;
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
          this.open();
        });
      }
  
      this.closeButtons.forEach((button) => {
        button.addEventListener('click', () => this.close());
      });
  
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
        }
      });
    }
  
    /**
     * Membuka modal
     */
    open() {
      this.createBackdrop();
      this.element.classList.add('show');
      this.element.setAttribute('aria-hidden', 'false');
      this.element.style.display = 'block';
      document.body.classList.add('modal-open');
      this.isOpen = true;
    }
  
    /**
     * Menutup modal
     */
    close() {
      this.removeBackdrop();
      this.element.classList.remove('show');
      this.element.setAttribute('aria-hidden', 'true');
      this.element.style.display = 'none';
      document.body.classList.remove('modal-open');
      this.isOpen = false;
    }
  
    /**
     * Membuat elemen backdrop
     */
    createBackdrop() {
      if (!this.backdrop) {
        this.backdrop = document.createElement('div');
        this.backdrop.className = 'modal-backdrop';
        this.backdrop.classList.add('fade', 'show');
        document.body.appendChild(this.backdrop);
  
        // Tutup modal ketika backdrop diklik
        this.backdrop.addEventListener('click', () => this.close());
      }
    }
  
    /**
     * Menghapus elemen backdrop
     */
    removeBackdrop() {
      if (this.backdrop) {
        this.backdrop.classList.remove('show');
        setTimeout(() => {
          if (this.backdrop) {
            document.body.removeChild(this.backdrop);
            this.backdrop = null;
          }
        }, 150);
      }
    }
  }
  
  // Inisialisasi modal di seluruh elemen
  document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modalElement) => new Modal(modalElement));
  });
  
  export default Modal;
  