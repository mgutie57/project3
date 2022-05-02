var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

/*
window.onload = function() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", changeBgColor); 
}

let colorIndex=0;
function changeBgColor() {
    const colors = ["rgb(192, 216, 237)", "rgb(175, 206, 233)", "rgb(159, 196, 229)", "rgb(143, 186, 224)", "rgb(127, 177, 220)",
    "rgb(111, 167, 216)", "rgb(95, 157, 211)", "rgb(79, 147, 207)", "rgb(63, 137, 202)", "rgb(53, 127, 192)","rgb(48, 116, 176)",
    "rgb(44, 106, 160)", "rgb(39, 95, 144)", "rgb(35, 85, 128)", "rgb(31, 74, 112)", "rgb(26, 64, 96)", "rgb(22, 54, 80)",
    "rgb(18, 43, 64)", "rgb(13, 32, 48)", "rgb(9, 22, 32)","rgb(4, 11, 16)",
    ];
    document.body.style.Color = colors[colorIndex];
    colorIndex = (colorIndex+1)%colors.length;
}

*/
