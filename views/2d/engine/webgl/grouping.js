/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/string"],(function(e,t){"use strict";function n(e,n){let o;if("string"==typeof e)o=t.numericHash(e+`-seed(${n})`);else{let t=12;o=e^n;do{o=107*(o>>8^o)+t|0}while(0!=--t)}return(1+o/(1<<31))/2}function o(e){return Math.floor(n(e,r)*i)}const r=53290320,i=10;e.getMaterialGroup=o,e.getRandomValue=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
