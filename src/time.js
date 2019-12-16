function comingSoon(){
    const day = document.querySelector('#days')
    const hour = document.querySelector('#hours')
    const minut = document.querySelector('#minuts')
    const second = document.querySelector('#seconds')

    const moment = require('moment')

    var endDate= "2019-12-25"
    var timeLeft= moment(endDate) - moment()
    timeLeft = moment.duration(timeLeft, "milliseconds")

    day.textContent= timeLeft.days()
    hour.textContent = timeLeft.hours()
    minut.textContent= timeLeft.minutes()
    second.textContent = timeLeft.seconds()

}

setInterval(comingSoon,1000)
