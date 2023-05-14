console.log('Hello');

let window_height = (window.innerHeight ? window.innerHeight : (document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.offsetHeight));


let arrSteps = document.querySelectorAll('.step');

let arrObjSteps = [];
for(let i = 0; i<arrSteps.length; i++){
    arrObjSteps.push(
        {
            indexStep: i,
            isVisible:false,
            element: arrSteps[i],
        }
    )
}

console.log(arrObjSteps);

window.addEventListener('scroll', function() {

    let elements = document.querySelectorAll('.step');
    let top = document.body.scrollTop;
    
    arrObjSteps.forEach(function(el) {

        var el_top = el.element.offsetTop;
        if(el_top > top && ((el.element.clientHeight + el_top) < (top + window_height)) && el.isVisible !=true) {
            el.isVisible = true;
            console.log(el.indexStep + ' ' + el.isVisible);
            Anim(el.element);
        }
    }
    );

    

});


Anim(document.querySelector('.step'));


function Anim(elem){
    
    let start = Date.now(); // запомнить время начала

    let timer = setInterval(function() {
  // сколько времени прошло с начала анимации?
    let timePassed = Date.now() - start;

    if (timePassed >= 200) {
        elem.classList.remove('zornet_ru_gukazunsa');
        clearInterval(timer); // закончить анимацию через 2 секунды
        return;
  }

  // отрисовать анимацию на момент timePassed, прошедший с начала анимации
    elem.classList.add('zornet_ru_gukazunsa');

}, 20);

}