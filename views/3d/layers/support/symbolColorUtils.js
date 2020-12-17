/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../core/mathUtils"],(function(e,r,t){"use strict";const n=255,o=85,c=o,a=2*o;e.encodeSymbolColor=function(e,u,i){if(r.isNone(e)||2===u)return i[0]=255,i[1]=255,i[2]=255,void(i[3]=255);const l=t.clamp(Math.round(e[3]*o),0,o),s=0===l||4===u?0:3===u?c:a;i[0]=t.clamp(Math.round(e[0]*n),0,n),i[1]=t.clamp(Math.round(e[1]*n),0,n),i[2]=t.clamp(Math.round(e[2]*n),0,n),i[3]=l+s},e.parseColorMixMode=function(e){switch(e){case"multiply":return 1;case"ignore":return 2;case"replace":return 3;case"tint":return 4;default:return 1}},Object.defineProperty(e,"__esModule",{value:!0})}));
