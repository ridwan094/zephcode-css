class Carousel {
    /**
     * Konstruktor untuk inisialisasi elemen carousel
     * @param {HTMLElement} element - Elemen utama carousel
     * @param {Object} options - Opsi konfigurasi carousel
     */
    constructor(element, options = {}) {
      this.element = element;
      this.slides = this.element.querySelectorAll('.carousel-slide');
      this.interval = options.interval || 5000; // Default waktu transisi
      this.loop = options.loop || true; // Apakah carousel berputar
      this.currentIndex = 0;
      this.timer = null;
  
      // Inisialisasi
      this.init();
    }
  
    /**
     * Inisialisasi carousel
     */
    init() {
      this.showSlide(this.currentIndex);
      this.start();
  
      // Tambahkan event listener untuk tombol navigasi
      this.addEventListeners();
    }
  
    /**
     * Menampilkan slide tertentu berdasarkan index
     * @param {number} index - Indeks slide yang ingin ditampilkan
     */
    showSlide(index) {
      this.slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      this.currentIndex = index;
    }
  
    /**
     * Memulai rotasi otomatis carousel
     */
    start() {
      if (this.loop) {
        this.timer = setInterval(() => {
          this.next();
        }, this.interval);
      }
    }
  
    /**
     * Menghentikan rotasi otomatis carousel
     */
    stop() {
      clearInterval(this.timer);
    }
  
    /**
     * Menampilkan slide berikutnya
     */
    next() {
      const nextIndex = (this.currentIndex + 1) % this.slides.length;
      this.showSlide(nextIndex);
    }
  
    /**
     * Menampilkan slide sebelumnya
     */
    prev() {
      const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      this.showSlide(prevIndex);
    }
  
    /**
     * Menambahkan event listener untuk tombol navigasi
     */
    addEventListeners() {
      const nextBtn = this.element.querySelector('.carousel-next');
      const prevBtn = this.element.querySelector('.carousel-prev');
  
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          this.stop();
          this.next();
          this.start();
        });
      }
  
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          this.stop();
          this.prev();
          this.start();
        });
      }
  
      // Pause on hover
      this.element.addEventListener('mouseenter', () => this.stop());
      this.element.addEventListener('mouseleave', () => this.start());
    }
  }
  
  // Inisialisasi semua carousel di halaman
  document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach((carouselElement) => new Carousel(carouselElement, { interval: 4000 }));
  });
  
  export default Carousel;
  