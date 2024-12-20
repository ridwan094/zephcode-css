// Import utilities
import * as Animation from './utils/animation';
import * as DOM from './utils/dom';
import * as Events from './utils/events';

// Import components
import Alert from './components/Alert';
import Carousel from './components/Carousel';
import Dropdown from './components/Dropdown';
import Modal from './components/Modal';
import Tooltip from './components/Tooltip';

// Global initialization for components
document.addEventListener('DOMContentLoaded', () => {
  // Initialize alerts
  const alertElements = document.querySelectorAll('[data-zeph-alert]');
  alertElements.forEach((el) => {
    new Alert(el);
  });

  // Initialize carousels
  const carouselElements = document.querySelectorAll('[data-zeph-carousel]');
  carouselElements.forEach((el) => {
    new Carousel(el);
  });

  // Initialize dropdowns
  const dropdownElements = document.querySelectorAll('[data-zeph-dropdown]');
  dropdownElements.forEach((el) => {
    new Dropdown(el);
  });

  // Initialize modals
  const modalElements = document.querySelectorAll('[data-zeph-modal]');
  modalElements.forEach((el) => {
    new Modal(el);
  });

  // Initialize tooltips
  const tooltipElements = document.querySelectorAll('[data-zeph-tooltip]');
  tooltipElements.forEach((el) => {
    new Tooltip(el);
  });
});

// Export utilities for global use
export {
  Animation,
  DOM,
  Events,
  Alert,
  Carousel,
  Dropdown,
  Modal,
  Tooltip,
};
