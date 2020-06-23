const initialState = { soil: 0, water: 0, light: 0};

export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateChanger = storeState(initialState);

export const fern = storeState(initialState);
export const daffodil = storeState(initialState);

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

 export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

// We create two functions using our function factory. We could easily create many more.

export const feed = changeState("soil");
export const hydrate = changeState("water");
export const light = changeState("light");



export const goodWater = hydrate(10);
export const badWater = hydrate(-5);

export const blueFood = feed(5);
export const greenFood = feed(2);
export const badFood = feed(-1);


export const sunLight = light(3);
export const noSunLight = light(-2);












// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };

// const giveLight = (plant) =>{
//   return {
//     ...plant,
//     soil: (plant.light || 0) + 1
//   }
// };

// const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//     ...state,
//     [prop] : (state[prop] || 0) + value
//   })
//  }
// }
// const feed = changeState("soil");
// const hydrate = changeState("water");
// hydrate(3)(plant);
// //console.log(result);
// feed(4)(plant);
// const blueFood = changeState("soil")(5);
// const greenFood = changeState("soil")(10)
// const yuckyFood = changeState("soil")(-5)
// blueFood(plant);
