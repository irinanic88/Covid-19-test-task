const URL = `https://api.covid19api.com`;

export const summaryURL = `${URL}/summary`;
export const countryAfterDateURL = (slug, caseType, date) =>
    `${URL}/live/country/${slug}/status/${caseType}/date/${date}`;