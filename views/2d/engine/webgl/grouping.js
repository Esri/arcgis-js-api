/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../core/string"],(function(e,t){"use strict";function o(e,o){let n;if("string"==typeof e)n=t.numericHash(e+`-seed(${o})`);else{let t=12;n=e^o;do{n=107*(n>>8^n)+t|0}while(0!=--t)}return(1+n/(1<<31))/2}function n(e){return Math.floor(o(e,r)*i)}const r=53290320,i=10;e.getMaterialGroup=n,e.getRandomValue=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
