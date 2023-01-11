const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');
const clock = document.getElementById('clock');
const outerClock = document.getElementById('outer-clock');
const digital = document.getElementById('digital')


function rotate(){
    const milliseconds = new Date().getMilliseconds()
    const current_second = new Date().getSeconds();
    const current_minute = new Date().getMinutes();
    const current_hour = new Date().getHours();

    outerClock.style.transform = `translate(-50%, -50%) rotate(-${(current_second + milliseconds/1000) % 360}deg)`;
    clock.style.transform = `translate(-50%, -50%) rotate(${(current_second + milliseconds/1000) % 360}deg)`;
    seconds.style.transform =  `translate(-87.7%, -58%) rotate(calc(90deg + ${(current_second + milliseconds/1000)*6 % 360}deg))`;
    minutes.style.transform = `translate(-45.4%, -58%) rotate(calc(-90deg + ${(current_minute + current_second/60.0)*6 % 360}deg))`;
    hours.style.transform = `translate(-50%, -230%) rotate(calc(0deg + ${(current_hour + current_minute/60.0)*30 % 360}deg))`;
    if(current_minute < 10){
        let stringMinute = '0' + String(current_minute)
        digital.innerHTML = `${current_hour}:${stringMinute}`
    }else{
        digital.innerHTML = `${current_hour}:${current_minute}`
    }
}

window.setInterval(rotate, 1)