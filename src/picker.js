import '@simonwep/pickr/dist/themes/classic.min.css'; 
import Pickr from '@simonwep/pickr/dist/pickr.es5.min';
import tinycolor from 'tinycolor2';

const pickr = Pickr.create({
  el: '.color-picker',
  theme: 'classic', // or 'monolith', or 'nano'

  swatches: [
      'rgba(244, 67, 54, 1)',
      'rgba(233, 30, 99, 0.95)',
      'rgba(156, 39, 176, 0.9)',
      'rgba(103, 58, 183, 0.85)',
      'rgba(63, 81, 181, 0.8)',
      'rgba(33, 150, 243, 0.75)',
      'rgba(3, 169, 244, 0.7)',
      'rgba(0, 188, 212, 0.7)',
      'rgba(0, 150, 136, 0.75)',
      'rgba(76, 175, 80, 0.8)',
      'rgba(139, 195, 74, 0.85)',
      'rgba(205, 220, 57, 0.9)',
      'rgba(255, 235, 59, 0.95)',
      'rgba(255, 193, 7, 1)'
  ],

  components: {

      // Main components
      preview: true,
      opacity: true,
      hue: true,

      // Input / output Options
      interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          input: true
      }
  }
});

pickr.on('change', instance => {

  const generateColor = array => {
    const colorContainer = document.querySelector('.color-container')
    colorContainer.innerHTML = ''
    array.forEach( color => {
      const circle = document.createElement('div')
    circle.classList.add('circle', 'split-color', 'animate__animated', 'animate__heartBeat', 'animate__repeat-1')
      circle.innerHTML = `<span>${color}</span>`
      circle.style.backgroundColor = color
      colorContainer.appendChild(circle)
    })
  }

  var colors = tinycolor(instance.toHEXA().toString()).analogous();
    
  let analogousList = colors.map(function(t) { return t.toHexString(); });

  generateColor(analogousList)
  


  const toAnalogous = document.querySelector('.toAnalogous')

  toAnalogous.addEventListener('click', e => {


    var colors = tinycolor(instance.toHEXA().toString()).analogous();
    
    let analogousList = colors.map(function(t) { return t.toHexString(); });
  
    generateColor(analogousList)
  
  })

  const toMacro = document.querySelector('.toMonocro')
  toMacro.addEventListener('click', e => {
    var monocroColors = tinycolor(instance.toHEXA().toString()).monochromatic();
  
    let monocroList = monocroColors.map(function(t) { return t.toHexString(); });

    generateColor(monocroList)
  })


  const toTetrad = document.querySelector('.toTetrad')
  toTetrad.addEventListener('click', e => {
var tetradColors = tinycolor(instance.toHEXA().toString()).tetrad();
  
  let tetradList = tetradColors.map(function(t) { return t.toHexString(); });

  generateColor(tetradList)
  })

  const toSplit = document.querySelector('.toSplit')
  toSplit.addEventListener('click', e => {
     var splitColors = tinycolor(instance.toHEXA().toString()).splitcomplement();
  
  let splitList = splitColors.map(function(t) { return t.toHexString(); });

  generateColor(splitList)
  })



 

})

pickr.on('hide', instance => {
  const home = document.querySelector('.home')
  home.classList.add('animate__animated', 'animate__bounceOutUp', 'animate__repeat-1')

})

