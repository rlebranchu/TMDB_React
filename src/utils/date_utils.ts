const MONTHS =  ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

interface Date {
    getMonthShortWord(): string;
}

Date.prototype.getMonthShortWord = function () : string {
    return MONTHS[this.getMonth()];
}