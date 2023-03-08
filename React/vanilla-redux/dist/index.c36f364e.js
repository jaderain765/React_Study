const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const toggleSwitch = ()=>({
        type: TOGGLE_SWITCH
    });
const increase = (difference)=>({
        type: INCREASE,
        difference
    });
const decrease = ()=>({
        type: DECREASE
    });
const initialState = {
    toggle: false,
    counter: 0
};

//# sourceMappingURL=index.c36f364e.js.map
