const vols = [{
    destination: 'Martinique',
    date_depart: '01/25/2019',
    compagnie_aerienne: 'Ryanair',
    numVol: 'xxxxx',
    prix: '350',
    dureeTrajet: '6'
  },
  {
    destination: 'Londres',
    date_depart: '07/25/2019',
    compagnie_aerienne: 'Air france',
    numVol: 'xxxxx',
    prix: '150',
    dureeTrajet: '2'
  },
  {
    destination: 'Paris',
    date_depart: '08/12/2019',
    compagnie_aerienne: 'Air france',
    numVol: 'xxxxx',
    prix: '50',
    dureeTrajet: '1'
  },
  {
    destination: 'Mexico',
    date_depart: '09/03/2019',
    compagnie_aerienne: 'Lufthansa',
    numVol: 'xxxxx',
    prix: '1350',
    dureeTrajet: '8'
  },
  {
    destination: 'Tokyo',
    date_depart: '12/12/2020',
    compagnie_aerienne: 'Air france',
    numVol: 'xxxxx',
    prix: '750',
    dureeTrajet: '14'
  },
  {
    destination: 'Tokyo',
    date_depart: '12/11/2020',
    compagnie_aerienne: 'Lufthansa',
    numVol: 'xxxxx',
    prix: '850',
    dureeTrajet: '14'
  }
  ];
  
  
  //TODO Affichez tous les vols (destination - Date de départ- compagnie aérienne -
  //TODO numero de vol - prix - durée du trajet)
// console.log(vols);

  //TODO Afficher tous les vols dont le trajet est inférieur à 7h. (idem)
//   const courtFlight = (duree) => {
//       vols.forEach((vol) => {
//           if(vol.dureeTrajet < duree){
//               console.log(vol);
//           }
//       })
//   }
//   courtFlight(7);
  
  //TODO Afficher les vols à destination de Tokyo et qui voyagent avec Air france (idem)
// const destination = (ville, compagnie) => {
//     vols.forEach((vol) => {
//         if(vol.destination === ville && vol.compagnie_aerienne === compagnie){
//             console.log(vol);
//         }
//     })
// }
// destination("Tokyo", "Air france");

  //TODO Afficher tous les vols dont le tarif est inférieur à 700 euros et qui
  //TODO voyagent avec Air france
// const tarifs = (tarif, compagnie) => {
//     vols.forEach((vol) => {
//         if(vol.prix < tarif && vol.compagnie_aerienne === compagnie){
//             console.log(vol);
//         }
//     })
// }
// tarifs(700, "Air france");
  
  //TODO Afficher tous les vols qui voyagent avec 'Lufthansa' dont le prix est inférieur à 900 euros
  //TODO et dont la durée du trajet est inférieur à 15 heures
// const companyPriceTime = (tarif, compagnie, dureeTrajet) => {
//     vols.forEach((vol) => {
//         if(vol.prix < tarif && vol.compagnie_aerienne === compagnie && vol.dureeTrajet < dureeTrajet){
//             console.log(vol);
//         }
//     })
// }
// companyPriceTime(900, "Lufthansa", 15);

  
  //TODO Appliquer une reduc de 20% sur chaque vol organiser après 2019 et les afficher

// const dateReduc = (reduc, date) => {
//     vols.forEach((vol) => {
//         let dateFlight = new Date(vol.date_depart);
//         let dateYear = dateFlight.getFullYear();
//         // console.log(dateYear);
//         if(dateYear > date){
//             let newPrice = vol.prix - (vol.prix * reduc/100);
//             console.log(newPrice + "€");
//             console.log(vol);
//         }
//     })
// }
// dateReduc(20, 2019);

  
  //TODO Afficher tous les vols pour Paris prévus entre le "06/02/2019" et le "09/06/2019".
// const flightBetween2Dates = (date1, date2, ville) => {
//     vols.forEach((vol) => {
//         let villeDestination = vol.destination;
//         // let dateFlight = new Date(vol.date_depart).toLocaleDateString('fr-FR');
//         // let date1Bis = new Date(date1).toLocaleDateString('fr-FR');
//         // let date2Bis = new Date(date2).toLocaleDateString('fr-FR');
//         let dateFlight = new Date(vol.date_depart).getTime();
//         let date1Bis = new Date(date1).getTime();
//         let date2Bis = new Date(date2).getTime();
        
//         //* Vérif... Je ne pige pas pourquoi "dateFlight < date2Bis" sur les villes de Paris/Londres/Martinique ne fonctionne pas...
//         //* OK, fonctionne avec getTime() !!

//         // console.log("#1 : " + villeDestination + " = " + ville + " (" + (ville === villeDestination) + ") → #2 : " + dateFlight + " > " + date1Bis + " (" + (dateFlight > date1Bis) + ") → #3 : " + dateFlight + " < " + date2Bis + " (" + (dateFlight < date2Bis) + ")");
//         // console.log("dateFlight → " + typeof(dateFlight) + ", date1Bis → " + typeof(date1Bis) + ", date2Bis → " + typeof(date2Bis) + ", villeDestination → " + typeof(villeDestination) + ", ville → " + typeof(ville));
        
//         if(dateFlight > date1Bis && dateFlight < date2Bis && ville === villeDestination){
//             console.log(vol);
//         }
//     })
// }
// flightBetween2Dates("06/02/2019", "09/06/2019", "Paris");

  //----------------------------------------------------------------------------------
  
  
  
  //TODO Afficher tous les vols à partir de la date d'aujourd'hui

  const flightFromNow = () => {
    date = Date.now();
    vols.forEach((vol) => {
        let dateFlight = new Date(vol.date_depart).getTime();
        if(dateFlight > date){
            console.log(vol);
        }
    })
}
flightFromNow();
  
  //Un petit coup de main...
  //Il faut récupèrer la date du jour avec l'objet 'date' (new Date()) fournis par Javascript.
  
  //La fonction suivante permet de comparer deux dates et renvoie 'true' si date1 est supérieur à date2
  //Pour comparer deux, celles-ci doivent avoir le même format.

//   const date1SupDate2 = (date1, date2) => {
//     startDate = new Date(date1);
//     endDate = new Date(date2);
//     if (startDate > endDate) {
//       return true;
//     } else {
//       return false;
//     };
//   };
  
  
//   console.log(date1SupDate2("12/13/2020", "12/12/2020"));
  
  
  
  //Allez voir ce qu'est un JSON !
  //https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON