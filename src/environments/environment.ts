// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  digimonURL: 'https://digimon-api.herokuapp.com/api/digimon',
  firebaseConfig : {
    apiKey: "AIzaSyALZbXIJjxsrkokN2p0fM1HnPkXeMCaI1g",
    authDomain: "digimon-app-270022.firebaseapp.com",
    databaseURL: "https://digimon-app-270022.firebaseio.com",
    projectId: "digimon-app-270022",
    storageBucket: "digimon-app-270022.appspot.com",
    messagingSenderId: "980463333339",
    appId: "1:980463333339:web:4c3d5c3df576795b1d41fe",
    measurementId: "G-LNCG8W3XYY"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
