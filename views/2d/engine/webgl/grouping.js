/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{numericHash as t}from"../../../../core/string.js";function e(e,o){let r;if("string"==typeof e)r=t(e+`-seed(${o})`);else{let t=12;r=e^o;do{r=107*(r>>8^r)+t|0}while(0!=--t)}return(1+r/(1<<31))/2}function o(t){return Math.floor(e(t,r)*n)}const r=53290320,n=10;export{o as getMaterialGroup,e as getRandomValue};
