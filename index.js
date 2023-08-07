const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(1200, 2200)
const ctx = canvas.getContext('2d')
const fs = require('fs')
const path = require('node:path');
const { Timer } = require('timer-node');

const timer = new Timer({ label: 'test-timer' });

const t = async () => {
  timer.start();
  console.log('start')
// Write "Awesome!"
  ctx.font = '30px Impact'
  ctx.rotate(0.1)
  ctx.fillText('Awesome!', 50, 100)

// Draw line under text
  var text = ctx.measureText('Awesome!')
  ctx.strokeStyle = 'rgba(0,0,0,0.5)'
  ctx.beginPath()
  ctx.lineTo(50, 102)
  ctx.lineTo(50 + text.width, 102)
  ctx.stroke()

  const image = await loadImage('lime-cat.png')
  ctx.drawImage(image, 50, 0, 170, 70)
  const image1 = await loadImage('lime-cat.png')
  ctx.drawImage(image1, 150, 10, 1700, 1700)
  const image2 = await loadImage('lime-cat.png')
  ctx.drawImage(image2, 180, 10, 170, 170)
  const image3 = await loadImage('lime-cat.png')
  ctx.drawImage(image3, 50, 10, 170, 1700)
  const image4 = await loadImage('lime-cat.png')
  ctx.drawImage(image4, 50, 10, 170, 170)
  const image5 = await loadImage('bris.png')
  ctx.drawImage(image5, 0, 0, 1800, 1400)

  ctx.font = '300px Impact'
  ctx.rotate(0.1)
  ctx.fillText('Awesome!', 50, 100)

// Draw line under text
  var text = ctx.measureText('Awesome!')
  ctx.strokeStyle = 'rgba(0,0,0,0.5)'
  ctx.beginPath()
  ctx.lineTo(50, 102)
  ctx.lineTo(50 + text.width, 102)
  ctx.stroke()


  ctx.rotate(0.1)
  ctx.fillText('THIS IS SO GOOOODDD', 450, 500)
  // Draw line under text
  var text1 = ctx.measureText('THIS IS SO GOOOODDD')
  ctx.strokeStyle = 'rgba(0,0,0,0.5)'
  ctx.beginPath()
  ctx.lineTo(50, 202)
  ctx.lineTo(50 + text1.width, 302)
  ctx.stroke()

  canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'test.png')))
  console.log('end')
  console.log(timer.ms());
}

t();



