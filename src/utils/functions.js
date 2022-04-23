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

const formatDateString = (ISOdate) => {
    const date = new Date(Date.parse(ISOdate));
    const year =  date.getFullYear();
    const month =  date.getMonth() + 1;
    const day =  date.getDate();
    return `${year}-${month}-${day}`;
}

export const filterDataArray = (arr) => {
    return arr.map(objItem => {
        const { Date, Confirmed } = objItem;
        return ({
            Date: formatDateString(Date),
            Confirmed
        });
    });
}