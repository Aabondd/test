'use strict';
import './styles.css';

import * as PIXI from 'pixi.js';
import _, { divide } from 'lodash';
import { randomNumberFromRange } from './components/random-number';
import { getRandomColor } from './components/color';
import {
  getRectangleShapeButton,
  getCircleShapeButton,
  getEllipseShapeButton,
  getPentagonShapeButton,
  getHexagonShapeButton,
  getStarShapeButton,
  getTriangleShapeButton,
} from './components/shapes-props';
import { clickedShapesDisplay } from './components/shapes-props';
// import { canvasTotalScreenPixels } from './components/occupied-surface';
export { app, canvas, canvasTotalScreenPixels };

//---------Create canvas--------------------------
const canvas = document.createElement('canvas');
canvas.id = 'NotPixiCanvas';
const app = new PIXI.Application({
  width: 900, // default: 800
  height: 600, // default: 600
  antialias: true, // default: false
  transparent: true, // default: false
  resolution: 1, // default: 1
  view: canvas,
});

const getTestEl = document.querySelector('.test');
getTestEl.replaceWith(app.view);

//-------------- Shapes -----------------------------

function createRectangleButton() {
  let rectangleButton = getRectangleShapeButton(
    null,
    randomNumberFromRange(20, 850),
    -50,
  );
  app.stage.addChild(rectangleButton);
}

function createCircleButton() {
  let circleButton = getCircleShapeButton(
    null,
    randomNumberFromRange(20, 850),
    -40,
  );
  app.stage.addChild(circleButton);
}

function createEllipseButton() {
  let ellipseButton = getEllipseShapeButton(
    null,
    randomNumberFromRange(20, 850),
    0,
  );
  app.stage.addChild(ellipseButton);
}

function createTriangleButton() {
  let triangleButton = getTriangleShapeButton(
    null,
    randomNumberFromRange(20, 850),
    -50,
  );
  app.stage.addChild(triangleButton);
}

function createPentagonButton() {
  let pentagonButton = getPentagonShapeButton(
    null,
    randomNumberFromRange(20, 850),
    0,
  );
  app.stage.addChild(pentagonButton);
}

function createHexagonButton() {
  let hexagonButton = getHexagonShapeButton(
    null,
    randomNumberFromRange(20, 850),
    0,
  );
  app.stage.addChild(hexagonButton);
}

function createStarButton() {
  let starButton = getStarShapeButton(
    null,
    randomNumberFromRange(20, 600),
    -90,
  );
  app.stage.addChild(starButton);
}

//----------- Animate shapes ------------------------

function generateRandomShapePerSecond() {
  setInterval(() => {
    clickedShapesDisplay.value += 1;
    clickedShapesDisplay.updateDisplay();
    let functionID = randomNumberFromRange(1, 7);

    if (functionID === 1) {
      createRectangleButton();
    } else if (functionID === 2) {
      createCircleButton();
    } else if (functionID === 3) {
      createEllipseButton();
    } else if (functionID === 4) {
      createTriangleButton();
    } else if (functionID === 5) {
      createPentagonButton();
    } else if (functionID === 6) {
      createHexagonButton();
    } else if (functionID === 7) {
      createStarButton();
    }
  }, 1 * 1000);
}
generateRandomShapePerSecond();

const shapesPerSecValue = document.querySelector('.shapes-per-sec').textContent;
// app.stage.interactive = true;
// const getMousePosition = () => app.renderer.plugins.interaction.mouse.global;

// console.log(getMousePosition());

const canvasTotalScreenPixels = canvas.width * canvas.height;

//------------------
