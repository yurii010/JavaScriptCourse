// Timer
export default function initTimer(deadline) {
    const getTimeRemaining = (endTime) => {
        const time = Date.parse(endTime) - Date.now() - 2 * 60 * 60 * 1000;
        return {
            total: time,
            days: time < 0 ? 0 : Math.floor(time / (1000 * 60 * 60 * 24)),
            hours: time < 0 ? 0 : Math.floor((time / (1000 * 60 * 60)) % 24),
            minutes: time < 0 ? 0 : Math.floor((time / (1000 * 60)) % 60),
            seconds: time < 0 ? 0 : Math.floor((time / 1000) % 60),
        };
    };

    function setZero(timerNumber) {
        if (timerNumber >= 0 && timerNumber < 10) {
            return `0${timerNumber}`;
        } else {
            return timerNumber;
        }
    }

    function setClock(endTime) {
        const timer = document.querySelector(".timer"),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const t = getTimeRemaining(endTime);
            days.innerHTML = t.days;
            hours.innerHTML = setZero(t.hours);
            minutes.innerHTML = setZero(t.minutes);
            seconds.innerHTML = setZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
        updateClock();
    }
    setClock(deadline);
}
