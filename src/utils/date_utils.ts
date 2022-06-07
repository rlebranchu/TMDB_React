const MONTHS =  ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

interface Date {
    getMonthShortWord(): string;
}

// Get Three first letters of the month of date
Date.prototype.getMonthShortWord = function () : string {
    return MONTHS[this.getMonth()];
}