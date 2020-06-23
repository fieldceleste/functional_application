import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import {stateChanger,blueFood,greenFood,badFood,goodWater,badWater,sunLight,fern,daffodil} from './../src/plant_application.js';

$(document).ready(function() {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
    $('#feed').click(function() {
      const newState = stateChanger(blueFood);
      $('#soil-value').text(newState.soil);
    });
    $('#water').click(function() {
       const newState = stateChanger(goodWater);
       $('#water-value').text(newState.water);
    });
    $('#light').click(function() {
      const newState = stateChanger(sunLight);
      $('#light-value').text(newState.light);
    });

// <-------------------Daffodil---------------------------------------->
    $('#water1').click(function() {
      const newState = daffodil(goodWater);
      $('#water-diffodil').text(newState.water);
    });
    $('#water2').click(function() {
      const newState = daffodil(badWater);
      $('#water-diffodil').text(newState.water);
    });
    $('#feed1').click(function() {
      const newState = daffodil(blueFood);
      $('#food-daffodil').text(newState.soil);
    });
    $('#feed2').click(function() {
      const newState = daffodil(greenFood);
      $('#food-daffodil').text(newState.soil);
    });
    $('#feed3').click(function() {
      const newState = daffodil(badFood);
      $('#food-daffodil').text(newState.soil);
    });
  });