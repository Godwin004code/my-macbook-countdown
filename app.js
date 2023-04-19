window.addEventListener("DOMContentLoaded", function() {
    const audio = document.querySelector("audio")
    console.log(audio);
    audio.play()
    
})

const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]
const weekDays = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]



const launchTime = document.querySelector('.launch h2')
const dayEl = document.querySelector('.days')
const hourEl = document.querySelector('.hours')
const minuteEl = document.querySelector('.minutes')
const secondEl = document.querySelector('.seconds')


const futureLaunchTime =new Date(2023, 03, 27)

let futureDay = futureLaunchTime.getDay();
futureDay = weekDays[futureDay]
let futureMonth = futureLaunchTime.getMonth();
futureMonth = months[futureMonth]
const futureYear = futureLaunchTime.getFullYear();
const futureDate = futureLaunchTime.getDate();

//launchTime.textContent = `
//${futureDay} ${futureDate}, ${futureMonth} ${futureYear}
//`

function startCountDown() {
    const fLT = futureLaunchTime.getTime();
    const presentDate = new Date().getTime();
    //console.log(futureLaunchTime, presentDate);
    const diff = fLT - presentDate;

    const oneDay = 24*60*60*1000
    const oneHour = 60*60*1000
    const oneMinute = 60*1000
    const oneSecond = 1000

    function format(item) {
        if(item < 10) {
            return `0${item}`
        } else {
            return item
        }
    }
    const days = Math.floor(diff / oneDay);
    dayEl.textContent = format(days);

    const hours = Math.floor( (diff % oneDay) / oneHour);
    hourEl.textContent = format(hours);

    const minutes = Math.floor( (diff % oneHour) / oneMinute);
    minuteEl.textContent = format(minutes);

    const seconds = Math.floor( (diff % oneMinute) / oneSecond );
    secondEl.textContent = format(seconds);
    

}

startCountDown()

let int = setInterval(startCountDown, 1000)