function setCrime(e){crimes[e]+=1}function getCrime(e){console.log(crimes[e]),crimes[e]}function setCrimeCounts(e){$.each(e,function(e,r){$("."+e+"_count").text(r)})}var crimeFile="data/latest.csv".toString();crimes={alcohol:0,assault:0,breakins:0,disorder:0,drugs:0,property:0,robbery:0,theft:0,etc:0},L.mapbox.accessToken="pk.eyJ1IjoidGFyZWxsZWwiLCJhIjoiY2M2MWMwMzA1ZWZkYWMwOWI0NTU3NWZkMzk4NDdiNDgifQ.DcJ_Un9ugoHGeqAILvi6Dw";var map=L.mapbox.map("map","tarellel.eef55dd3",{attributionControl:!1,infoControl:!0}).setView([36.73964,-108.20538],14);omnivore.csv(crimeFile).on("ready",function(){this.eachLayer(function(e){var r="",t="#607D8B";switch(e.toGeoJSON().properties.type){case"Assault":r="baseball",t="#fc4353",setCrime("assault");break;case"Breaking & Entering":r="entrance",t="#fc4353",setCrime("breakins");break;case"Disorder":r="roadblock",t="#fc4353",setCrime("disorder");break;case"Drugs":r="pharmacy",t="#03C9A9",setCrime("drugs");break;case"Liquor":r="alcohol-shop",t="#00BCD4",setCrime("alcohol");break;case"Property Crime":r="hairdresser",t="#F9B24F",setCrime("property");break;case"Robbery":r="pitch",setCrime("robbery");break;case"Theft":r="shop",setCrime("theft");break;case"Theft from Vehicle":case"Theft of Vehicle":r="car",t="#E61875",setCrime("theft");break;default:r="police",setCrime("etc")}e.setIcon(L.mapbox.marker.icon({title:e.toGeoJSON().properties.title,"marker-color":t,"marker-size":"medium","marker-symbol":r})),e.bindPopup('<div class="crimeType">'+e.toGeoJSON().properties.type+"</div><b>Case:</b> "+e.toGeoJSON().properties.case_id+"<br><b>Desc:</b> "+e.toGeoJSON().properties.desc)}),setCrimeCounts(crimes)}).addTo(map);