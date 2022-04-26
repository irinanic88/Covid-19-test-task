export const summarySelector = (store) => store.summary;
export const loadingStateSelector = (store) => store.loadingState.loading;
export const slugTrendSelector = (slug, caseType) => (store) => {
    if (store.slugTrend[slug]) {
        return store.slugTrend[slug].cases[caseType];
    } else {
        return null;
    }
}
export const errorSelector = (store) => store.error.error;
export const modalSelector = (store) => store.modal;