/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";e.keyFromSymbol=function(e){switch(e.type){case"esriSMS":return`${e.style}.${e.path}`;case"esriSLS":return`${e.style}.${e.cap}`;case"esriSFS":return`${e.style}`;case"esriPFS":case"esriPMS":return e.imageData?`${e.imageData}${e.width}${e.height}`:`${e.url}${e.width}${e.height}`;default:return e.mosaicHash?e.mosaicHash:JSON.stringify(e)}},Object.defineProperty(e,"__esModule",{value:!0})}));
