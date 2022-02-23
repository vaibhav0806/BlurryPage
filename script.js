const loadtext = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 50)

function blurring(){
    load++

    if(load>99){
        clearInterval(int)
    }

    loadtext.innerText = `${load}%`

    loadtext.style.opacity = (100-load)/100

    let bgfilter = (load)/30

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }