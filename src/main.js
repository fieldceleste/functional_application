import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import {stateChanger,blueFood,goodWater,sunLight} from './../src/plant_application.js';

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
  });