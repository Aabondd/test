'use strict';

import { app, canvas } from '../index';
// get a reference to your canvas
// const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// get the pixel data from the canvas
const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

// loop through each pixel and count non-transparent pixels
const count = 0;
for (let i = 0; i < imgData.data.length; i += 4) {
  // nontransparent = imgData.data[i+3]==0
  if (imgData.data[i + 3] == 0) {
    count++;
  }
}

const canvasTotalScreenPixels = canvas.width * canvas.height;

const occupiedSerfaceInPixels = canvasTotalScreenPixels - count;
