class CalendarSearch {

    constructor() {
        this.initLayout();
    }

    initLayout() {
        this.calendarContentTitle = document.querySelector('.calendar-content__title');
        this.calResult = this.calendarContentTitle.textContent.includes('Библиотека №5');
        for (let i = 0; i < this.calendarContentTitle.length; i++) {
            if (this.calResult) {
                console.log(this.calResult);
            }
        }
        // this.calendarContentTitle.forEach((el) => {
        //     if (el === this.calendarContentTitle.textContent.includes('Библиотека №5')) {
        //
        //     }
        // });
        // this.calResult = ;

    }
}