class BulkAdd extends HTMLElement {
  constructor() {
    super();
    this.queue = []
    this.requestStarted = false;
    this.ids = []
  }

  startQueue(id, quantity, event) {
    this.queue.push({id, quantity, event})
    const interval = setInterval(() => {
      if (this.queue.length > 0) {
        if (!this.requestStarted)  {
          this.sendRequest(this.queue)
        }
      } else {
        clearInterval(interval)
      }
    }, 250)
  }


  sendRequest(queue) {
    this.requestStarted = true;
    const items = {}
    const ids = []
    const events = []
    queue.forEach((queueItem) => {
      items[parseInt(queueItem.id)] = queueItem.quantity;
      ids.push(queueItem.id)
      events.push(queueItem.event)
    });
    this.queue = this.queue.filter(queueElement => !queue.includes(queueElement));
    const element = this.closest('quick-order-list') || this.closest('quick-add-bulk');
    element.updateMultipleQty(items, ids, events)
  }

  resetQuantityInput(id) {
    const input = document.getElementById(`Quantity-${id}`);
    input.value = input.getAttribute('value');
    this.isEnterPressed = false;
  }

  setValidity(event, index, message) {
    event.target.setCustomValidity(message);
    event.target.reportValidity();
    this.resetQuantityInput(index);
    event.target.select();
  }


  validateQuantity(event) {
    const inputValue = parseInt(event.target.value);
    const index = event.target.dataset.index;

    if (inputValue < event.target.dataset.min) {
      this.setValidity(
        event,
        index,
        window.quickOrderListStrings.min_error.replace('[min]', event.target.dataset.min)
      );
    } else if (inputValue > parseInt(event.target.max)) {
      this.setValidity(event, index, window.quickOrderListStrings.max_error.replace('[max]', event.target.max));
    } else if (inputValue % parseInt(event.target.step) != 0) {
      this.setValidity(event, index, window.quickOrderListStrings.step_error.replace('[step]', event.target.step));
    } else {
      event.target.setCustomValidity('');
      event.target.reportValidity();
      this.startQueue(index, inputValue, event);
    }
  }

  getSectionsUrl() {
    if (window.pageNumber) {
      return `${window.location.pathname}?page=${window.pageNumber}`;
    } else {
      return `${window.location.pathname}`;
    }
  }

  getSectionInnerHTML(html, selector) {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
  }
}

if (!customElements.get('bulk-add')) {
  customElements.define('bulk-add', BulkAdd)
};

