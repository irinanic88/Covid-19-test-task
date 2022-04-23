export const capitalize = (string) =>
    string.replace(string.charAt(0), string.charAt(0).toUpperCase());

export const setStartDayString = (monthsDiscount) => {
    const currentDate = new Date();
    const startYear =  currentDate.getFullYear();
    const startMonth =  currentDate.getMonth() - monthsDiscount;
    const startDay =  currentDate.getDate();
    const startHours =  currentDate.getHours();
    const startMinutes =  currentDate.getMinutes();
    const startSeconds =  currentDate.getSeconds();

    const startDate = new Date(startYear, startMonth, startDay, startHours, startMinutes, startSeconds);

    const startDateISOFormat = startDate.toISOString();

    return `${startDateISOFormat.split('.')[0]}Z`;
}