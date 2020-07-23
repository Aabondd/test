'use strict';
//-----------Display plugins ----------------------

import { gravity } from './shapes-props';
export { ShapesDisplay, DisplayValue };

class ShapesDisplay {
  constructor({ element, initialValue = 0, step = 1 }) {
    this.value = initialValue;
    this.step = step;
    this.refs = {
      display: element.querySelector('div.value'),
    };
    this.updateDisplay();
  }
  //   increment() {
  //     this.value += this.step;
  //     this.updateDisplay();
  //   }
  //   decrement() {
  //     this.value += this.step;
  //     this.updateDisplay();
  //   }

  updateDisplay() {
    this.refs.display.textContent = this.value;
  }
}

// const clickedShapesDisplay = new ShapesDisplay({
//   element: document.querySelector('#display-2'),
//   initialValue: 0,
//   step: 1,
// });

// console.log(clickedShapesDisplay.value);

//

class DisplayValue {
  constructor({ element, initialValue = 0, step = 1 }) {
    this.value = initialValue;
    this.step = step;
    this.refs = {
      decBtn: element.querySelector('button[data-action="decrement"]'),
      incBtn: element.querySelector('button[data-action="increment"]'),
      display: element.querySelector('div.value'),
    };
    this.updateDisplay();
    this.bindEvents();
  }
  increment() {
    this.value += this.step;
    this.updateDisplay();
  }
  decrement() {
    this.value -= this.step;
    this.updateDisplay();
  }
  updateDisplay() {
    this.refs.display.textContent = this.value;
  }

  bindEvents() {
    this.refs.decBtn.addEventListener('click', this.decrement.bind(this));
    this.refs.incBtn.addEventListener('click', this.increment.bind(this));
  }
}

// const shapesNumberDisplay = new DisplayValue({
//   element: document.querySelector('#display-1'),
//   initialValue: 1,
//   step: 1,
// });

// const gravityDisplay = new DisplayValue({
//   element: document.querySelector('#display-2'),
//   initialValue: 4000,
//   step: 1000,
// });

// console.log(gravityDisplay.value);
