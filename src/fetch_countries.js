const BASE_URL = 'https://pixabay.com/api/';
const listOfCodes =
  '?key=33669758-051ccdd3e1f8c77fcf59fb873&q=yellow+flowers&image_type=photo';

export function fetchCountries() {
  return fetch(`${BASE_URL}${listOfCodes}`).then(response => {
    return response.json();
  });
}
