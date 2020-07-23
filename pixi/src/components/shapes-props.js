'use strict';
import * as PIXI from 'pixi.js';
import _, { divide } from 'lodash';
import { randomNumberFromRange } from './random-number';
import { getRandomColor } from './color';
import { app } from '../index';
export {
  getRectangleShapeButton,
  getCircleShapeButton,
  getEllipseShapeButton,
  getPentagonShapeButton,
  getHexagonShapeButton,
  getStarShapeButton,
  getTriangleShapeButton,
  gravity,
};

import { ShapesDisplay, DisplayValue } from './plugins';
import { canvasTotalScreenPixels } from '../index';
//------------ Velocity or Gravity -------------------
let gravity = 1;
//---------------------- Shapes buttons ------------------

//Rectangle - 4 sides
const getRectangleShapeButton = (
  callback,
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
) => {
  let rectangle = new PIXI.Graphics();

  rectangle.beginFill(getRandomColor());
  rectangle.drawRect(0, 0, 64, 64);
  rectangle.endFill();
  rectangle.x = x;
  rectangle.y = y;
  rectangle.yVelocity = gravity;
  rectangle.rotation = rotation;
  rectangle.interactive = true;
  rectangle.buttonMode = true;
  rectangle.scale.set(scale);
  rectangle.on('pointerdown', event => {
    rectangle.parent.removeChild(rectangle);
    clickedShapesDisplay.value -= 1;
    clickedShapesDisplay.updateDisplay();
  });
  app.ticker.add(() => {
    rectangle.y += rectangle.yVelocity;

    if (rectangle.y === 600) {
      clickedShapesDisplay.value -= 1;
      clickedShapesDisplay.updateDisplay();
    }
  });

  return rectangle;
};

// // Circle
const getCircleShapeButton = (
  callback,
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
) => {
  let circle = new PIXI.Graphics();

  circle.beginFill(getRandomColor());
  circle.drawCircle(0, 0, 32);
  circle.endFill();
  circle.x = x;
  circle.y = y;
  circle.yVelocity = gravity;

  circle.rotation = rotation;
  circle.interactive = true;
  circle.buttonMode = true;
  circle.scale.set(scale);
  circle.on('pointerdown', event => {
    circle.parent.removeChild(circle);
    clickedShapesDisplay.value -= 1;
    clickedShapesDisplay.updateDisplay();
  });
  app.ticker.add(() => {
    circle.y += circle.yVelocity;
    if (circle.y === 600) {
      clickedShapesDisplay.value -= 1;
      clickedShapesDisplay.updateDisplay();
    }
  });

  return circle;
};

// Ellipse
const getEllipseShapeButton = (
  callback,
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
) => {
  let ellipse = new PIXI.Graphics();

  ellipse.beginFill(getRandomColor());
  ellipse.drawEllipse(0, 0, 50, 20);
  ellipse.endFill();
  ellipse.x = x;
  ellipse.y = y;
  ellipse.yVelocity = gravity;
  ellipse.rotation = rotation;
  ellipse.interactive = true;
  ellipse.buttonMode = true;
  ellipse.scale.set(scale);
  ellipse.on('pointerdown', event => {
    ellipse.parent.removeChild(ellipse);
    clickedShapesDisplay.value -= 1;
    clickedShapesDisplay.updateDisplay();
  });
  app.ticker.add(() => {
    ellipse.y += ellipse.yVelocity;
    if (ellipse.y === 600) {
      clickedShapesDisplay.value -= 1;
      clickedShapesDisplay.updateDisplay();
    }
  });

  return ellipse;
};

// Triangle
const getTriangleShapeButton = (
  callback,
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
) => {
  let pathTriangle = [-32, 64, 32, 64, 0, 0];

  let triangle = new PIXI.Graphics();
  triangle.beginFill(getRandomColor());

  triangle.drawPolygon(pathTriangle);

  triangle.endFill();
  triangle.x = x;
  triangle.y = y;
  triangle.yVelocity = gravity;
  triangle.rotation = rotation;
  triangle.interactive = true;
  triangle.buttonMode = true;
  triangle.scale.set(scale);
  triangle.on('pointerdown', event => {
    triangle.parent.removeChild(triangle);
    clickedShapesDisplay.value -= 1;
    clickedShapesDisplay.updateDisplay();
  });
  app.ticker.add(() => {
    triangle.y += triangle.yVelocity;
    if (triangle.y === 600) {
      clickedShapesDisplay.value -= 1;
      clickedShapesDisplay.updateDisplay();
    }
  });

  return triangle;
};

// Pentagon - 5 sides
const getPentagonShapeButton = (
  callback,
  x = 0,
  y = 0,
  rotation = 0,
  scale = 2.5,
) => {
  let pathPentagon = [10, -40, 30, -50, 50, -40, 40, -30, 20, -30];

  let pentagon = new PIXI.Graphics();
  pentagon.beginFill(getRandomColor());

  pentagon.drawPolygon(pathPentagon);

  pentagon.endFill();
  pentagon.x = x;
  pentagon.y = y;
  pentagon.yVelocity = gravity;
  pentagon.rotation = rotation;
  pentagon.interactive = true;
  pentagon.buttonMode = true;
  pentagon.scale.set(scale);
  pentagon.on('pointerdown', event => {
    pentagon.parent.removeChild(pentagon);
    clickedShapesDisplay.value -= 1;
    clickedShapesDisplay.updateDisplay();
  });
  app.ticker.add(() => {
    pentagon.y += pentagon.yVelocity;
    if (pentagon.y === 600) {
      clickedShapesDisplay.value -= 1;
      clickedShapesDisplay.updateDisplay();
    }
  });

  return pentagon;
};

// Hexagon - 6 sides
const getHexagonShapeButton = (
  callback,
  x = 0,
  y = 0,
  rotation = 0,
  scale = 2.5,
) => {
  let pathHexagon = [10, -40, 20, -50, 40, -50, 50, -40, 40, -30, 20, -30];

  let hexagon = new PIXI.Graphics();
  hexagon.beginFill(getRandomColor());

  hexagon.drawPolygon(pathHexagon);

  hexagon.endFill();
  hexagon.x = x;
  hexagon.y = y;
  hexagon.yVelocity = gravity;
  hexagon.rotation = rotation;
  hexagon.interactive = true;
  hexagon.buttonMode = true;
  hexagon.scale.set(scale);
  hexagon.on('pointerdown', event => {
    hexagon.parent.removeChild(hexagon);
    clickedShapesDisplay.value -= 1;
    clickedShapesDisplay.updateDisplay();
  });
  app.ticker.add(() => {
    hexagon.y += hexagon.yVelocity;
    if (hexagon.y === 600) {
      clickedShapesDisplay.value -= 1;
      clickedShapesDisplay.updateDisplay();
    }
  });

  return hexagon;
};

// Random shape - star
const getStarShapeButton = (
  callback,
  x = 0,
  y = 0,
  rotation = 0,
  scale = 0.5,
) => {
  let starPath = [
    550,
    100,
    570,
    150,
    630,
    155,
    585,
    195,
    600,
    250,
    550,
    220,
    500,
    250,
    515,
    195,
    470,
    155,
    530,
    150,
  ];

  let star = new PIXI.Graphics();
  star.beginFill(getRandomColor());

  star.drawPolygon(starPath);

  star.endFill();

  star.x = x;
  star.y = y;
  star.yVelocity = gravity;
  star.rotation = rotation;
  star.interactive = true;
  star.buttonMode = true;
  star.scale.set(scale);
  star.on('pointerdown', event => {
    star.parent.removeChild(star);
    clickedShapesDisplay.value -= 1;
    clickedShapesDisplay.updateDisplay();
  });
  app.ticker.add(() => {
    star.y += star.yVelocity;
    if (star.y === 600) {
      clickedShapesDisplay.value -= 1;
      clickedShapesDisplay.updateDisplay();
    }
  });

  return star;
};

//-------------------- Display values -----------------------

export const clickedShapesDisplay = new ShapesDisplay({
  element: document.querySelector('#display-2'),
  initialValue: 0,
  step: 1,
});

const occupiedSerfaceInPixels = new ShapesDisplay({
  element: document.querySelector('#display-1'),
  initialValue: 540000,
  // initialValue:canvasTotalScreenPixels
  step: 1,
});

const shapesPerSec = new DisplayValue({
  element: document.querySelector('#display-3'),
  initialValue: 1,
  step: 1,
});

class DisplayGravity {
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
    gravity = this.value;
  }

  bindEvents() {
    this.refs.decBtn.addEventListener('click', this.decrement.bind(this));
    this.refs.incBtn.addEventListener('click', this.increment.bind(this));
  }
}
const gravityValue = new DisplayGravity({
  element: document.querySelector('#display-4'),
  initialValue: 1,
  step: 1,
});
