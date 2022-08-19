// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // BASE_URL: 'https://bestweather.p.rapidapi.com/weather/Amsterdam,%20D.C/today?unitGroup=us', 
  BASE_URL: 'https://bestweather.p.rapidapi.com/weather',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue: 'bestweather.p.rapidapi.com',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: '8fd9de855cmsh448cc5640e05e90p19301ajsn7f057a0b008c', 
  /* the key needs to be updated if there is an error "You have exceeded the MONTHLY quota for Requests Today on your
  current plan, BASIC. Upgrade your plan at https://rapidapi.com/standingapi-standingapi-default/api/bestweather".
  this api only allows 50 hits per month, so you need to go to their page, sign in, create a new key and replace the 
  XRapidAPIKeyHeaderValue variable
   */
};


