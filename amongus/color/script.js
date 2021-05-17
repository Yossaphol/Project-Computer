
let root = document.querySelector(':root');

// color changing function
function changeColor(color, shade){
    root.style.setProperty('--color', color)
    root.style.setProperty('--shade', shade)
}