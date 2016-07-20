export const FETCH_LOCATION = 'FETCH_LOCATION';
export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS';
export const FETCH_LOCATION_FAILED = 'FETCH_LOCATION_FAILED';

export const fetchLocationAPI = () =>
    fetch(`https://wtfismyip.com/json`)
    .then(res => res.json())

export const fetchLocation = () => ({
    type: FETCH_LOCATION
})
