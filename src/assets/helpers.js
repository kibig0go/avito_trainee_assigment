export const parseDate = (date) => {
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    let parsedDate = new Date( Date.parse(date) );
    return parsedDate.toLocaleDateString("ru-RU", options);
}