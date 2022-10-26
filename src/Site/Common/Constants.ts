const PER_PAGE = 10;

export const RANDOM_URL = "https://api.openbrewerydb.org/breweries/random";

export const getQueryURL = (query: string, pageNum: number) =>
    `https://api.openbrewerydb.org/breweries/search?query=${query}&page=${pageNum}&per_page=${PER_PAGE}`;
