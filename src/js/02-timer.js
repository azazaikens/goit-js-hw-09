import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inpDate = document.querySelector('#datetime-picker');
const bthDate = document.querySelector('[data-start]');

flatpickr(inpDate, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        timer.ms = selectedDates[0] - Date.now()
        
        if (timer.ms <= 0) {
          alert('Please choose a date in the future');
          bthDate.disabled = true;

          return;
        }

        bthDate.disabled = false;
    }
});

bthDate.addEventListener('click', () => {
    bthDate.disabled = true;
    timer.start()
})

const timer = {
    ms: 0,
    userInterval: null,
    refs: {
    days: document.querySelector('.timer').children[0].firstElementChild,
    hours: document.querySelector('.timer').children[1].firstElementChild,
    minutes: document.querySelector('.timer').children[2].firstElementChild,
    seconds: document.querySelector('.timer').children[3].firstElementChild,
    },


    start() {
        this.userInterval = setInterval(() => {
            let { days, hours, minutes, seconds } = this.convertMs(this.ms);
            
            this.refs.days.textContent = this.addLeadingZero(days);
            this.refs.hours.textContent = this.addLeadingZero(hours);
            this.refs.minutes.textContent = this.addLeadingZero(minutes);
            this.refs.seconds.textContent = this.addLeadingZero(seconds);

            this.ms -= 1000;

            if (this.ms <= 0) {
                this.stop();
            }
        }, 1000);
    },

    stop() {
        clearInterval(this.userInterval);
    },

    addLeadingZero(value) {
        return String(value).padStart(2, '0');
    },
        
    convertMs(ms) {

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
    },
};