const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')
const hours = document.getElementById('hours')

function rotate(){
    const current_second = new Date().getSeconds()
    const current_minute = new Date().getMinutes()
    const current_hour = new Date().getHours()
    seconds.style.transform =  `translate(-87.7%, -58%) rotate(calc(90deg + ${current_second*6 % 360}deg))`;
    minutes.style.transform = `translate(-45.4%, -58%) rotate(calc(-90deg + ${current_minute*6 % 360}deg))`;
    hours.style.transform = `translate(-50%, -230%) rotate(calc(0deg + ${current_hour*30 % 360}deg))`;
}

window.setInterval(rotate, 1)