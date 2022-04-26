import {
    sub,
    formatISO,
    parseISO,
    toDate,
    format,
    getMonth,
    isFirstDayOfMonth
} from 'date-fns';

export const capitalize = (string) =>
    string.replace(string.charAt(0), string.charAt(0).toUpperCase());

export const setStartDate = (date, duration) => {
    const currentDate = new Date();
    const subtractedDate = sub(currentDate, {[date]: duration});
    return formatISO(subtractedDate);
}

export const filterDataArray = (arr) => {
    return arr.map(objItem => {
        const { Date: date, Confirmed: confirmed } = objItem;
        return ({
            date: +parseISO(date),
            confirmed
        });
    });
}

const formatDate = (date) => format(date, 'MMM do, yyyy')

export const formattedData = (data) =>
    data.map(item => ({
        ...item,
        date: formatDate(toDate(item.date)),
        tick: getMonth(toDate(item.date))
    }));

export const setTicksX = (data) =>
    data.filter(item => isFirstDayOfMonth(toDate(item.date))).map(filteredItem => formatDate(filteredItem.date));