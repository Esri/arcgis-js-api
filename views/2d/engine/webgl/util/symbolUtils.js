/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e(e){switch(e.type){case"esriSMS":return`${e.style}.${e.path}`;case"esriSLS":return`${e.style}.${e.cap}`;case"esriSFS":return`${e.style}`;case"esriPFS":case"esriPMS":return e.imageData?`${e.imageData}${e.width}${e.height}`:`${e.url}${e.width}${e.height}`;default:return"mosaicHash"in e?e.mosaicHash:JSON.stringify(e)}}export{e as keyFromSymbol};
