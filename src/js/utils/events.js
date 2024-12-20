/**
 * Utility functions for managing events
 * These functions simplify event handling across components
 */

/**
 * Add an event listener to a target
 * @param {HTMLElement|Window|Document} target - Target element, window, or document
 * @param {string} event - Event type (e.g., 'click')
 * @param {Function} handler - Event handler function
 * @param {boolean|Object} options - Optional settings (e.g., useCapture or options object)
 */
export function addEvent(target, event, handler, options = false) {
    if (target && event && handler) {
      target.addEventListener(event, handler, options);
    }
  }
  
  /**
   * Remove an event listener from a target
   * @param {HTMLElement|Window|Document} target - Target element, window, or document
   * @param {string} event - Event type
   * @param {Function} handler - Event handler function
   * @param {boolean|Object} options - Optional settings (e.g., useCapture or options object)
   */
  export function removeEvent(target, event, handler, options = false) {
    if (target && event && handler) {
      target.removeEventListener(event, handler, options);
    }
  }
  
  /**
   * Add a one-time event listener to a target
   * @param {HTMLElement|Window|Document} target - Target element, window, or document
   * @param {string} event - Event type
   * @param {Function} handler - Event handler function
   * @param {boolean|Object} options - Optional settings
   */
  export function once(target, event, handler, options = false) {
    const wrapper = (e) => {
      handler(e);
      removeEvent(target, event, wrapper, options);
    };
    addEvent(target, event, wrapper, options);
  }
  
  /**
   * Trigger a custom event on a target
   * @param {HTMLElement} target - Target element
   * @param {string} eventName - Name of the custom event
   * @param {Object} detail - Additional data to pass with the event
   */
  export function triggerEvent(target, eventName, detail = {}) {
    if (target && eventName) {
      const event = new CustomEvent(eventName, { detail });
      target.dispatchEvent(event);
    }
  }
  
  /**
   * Delegate an event to a specific child of a parent element
   * @param {HTMLElement} parent - Parent element
   * @param {string} selector - Selector for the target child
   * @param {string} event - Event type
   * @param {Function} handler - Event handler function
   */
  export function delegate(parent, selector, event, handler) {
    if (parent && selector && event && handler) {
      addEvent(parent, event, (e) => {
        const target = e.target.closest(selector);
        if (target && parent.contains(target)) {
          handler.call(target, e);
        }
      });
    }
  }
  
  /**
   * Throttle an event handler
   * @param {Function} func - The event handler function
   * @param {number} limit - Throttle limit in milliseconds
   * @returns {Function} - Throttled function
   */
  export function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function (...args) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }
  
  /**
   * Debounce an event handler
   * @param {Function} func - The event handler function
   * @param {number} delay - Debounce delay in milliseconds
   * @returns {Function} - Debounced function
   */
  export function debounce(func, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }
  