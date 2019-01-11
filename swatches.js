var swatches = document.querySelectorAll('.swatches span');
var root = document.querySelector(':root');
//arrow function
swatches.forEach((swatch) => {
    swatch.addEventListener('click', (e) => {
        root.style.setProperty('--theme-color', e.target.style.background);
    });
});

//
// var swatches = document.querySelectorAll('.swatches span');
// var root = document.querySelector(':root');
//
// swatches.forEach(fucntion(swatch){
//     swatch.addEventListener('click', function(e){
//         root.style.setProperty('--theme-color', e.target.style.background);
//     });
// });
