/**
 * Utility functions for DOM manipulation
 * These functions simplify common DOM operations
 */

/**
 * Select a single element
 * @param {string} selector - CSS selector
 * @param {HTMLElement|Document} context - Context for selection (default: document)
 * @returns {HTMLElement|null} - The selected element or null
 */
export function $(selector, context = document) {
    return context.querySelector(selector);
  }
  
  /**
   * Select multiple elements
   * @param {string} selector - CSS selector
   * @param {HTMLElement|Document} context - Context for selection (default: document)
   * @returns {NodeListOf<HTMLElement>} - The selected elements
   */
  export function $$(selector, context = document) {
    return context.querySelectorAll(selector);
  }
  
  /**
   * Add a class to an element
   * @param {HTMLElement} element - Target element
   * @param {string} className - Class to add
   */
  export function addClass(element, className) {
    if (element && className) {
      element.classList.add(className);
    }
  }
  
  /**
   * Remove a class from an element
   * @param {HTMLElement} element - Target element
   * @param {string} className - Class to remove
   */
  export function removeClass(element, className) {
    if (element && className) {
      element.classList.remove(className);
    }
  }
  
  /**
   * Toggle a class on an element
   * @param {HTMLElement} element - Target element
   * @param {string} className - Class to toggle
   */
  export function toggleClass(element, className) {
    if (element && className) {
      element.classList.toggle(className);
    }
  }
  
  /**
   * Check if an element has a class
   * @param {HTMLElement} element - Target element
   * @param {string} className - Class to check
   * @returns {boolean} - True if the element has the class, otherwise false
   */
  export function hasClass(element, className) {
    return element && className ? element.classList.contains(className) : false;
  }
  
  /**
   * Set attributes on an element
   * @param {HTMLElement} element - Target element
   * @param {Object} attributes - Key-value pairs of attributes
   */
  export function setAttributes(element, attributes) {
    if (element && attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    }
  }
  
  /**
   * Remove attributes from an element
   * @param {HTMLElement} element - Target element
   * @param {string[]} attributes - Array of attributes to remove
   */
  export function removeAttributes(element, attributes) {
    if (element && attributes) {
      attributes.forEach((attr) => {
        element.removeAttribute(attr);
      });
    }
  }
  
  /**
   * Add event listener to an element
   * @param {HTMLElement} element - Target element
   * @param {string} event - Event type (e.g., 'click')
   * @param {Function} handler - Event handler
   */
  export function on(element, event, handler) {
    if (element && event && handler) {
      element.addEventListener(event, handler);
    }
  }
  
  /**
   * Remove event listener from an element
   * @param {HTMLElement} element - Target element
   * @param {string} event - Event type
   * @param {Function} handler - Event handler
   */
  export function off(element, event, handler) {
    if (element && event && handler) {
      element.removeEventListener(event, handler);
    }
  }
  
  /**
   * Empty an element's content
   * @param {HTMLElement} element - Target element
   */
  export function empty(element) {
    if (element) {
      element.innerHTML = "";
    }
  }
  
  /**
   * Append an HTML string to an element
   * @param {HTMLElement} element - Target element
   * @param {string} html - HTML string to append
   */
  export function appendHTML(element, html) {
    if (element && html) {
      element.insertAdjacentHTML("beforeend", html);
    }
  }
  
  /**
   * Remove an element from the DOM
   * @param {HTMLElement} element - Target element
   */
  export function remove(element) {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
  