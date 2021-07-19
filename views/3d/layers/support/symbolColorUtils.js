/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../core/mathUtils","../../../../core/maybe"],(function(e,r,t){"use strict";function n(e){switch(e){case"multiply":return 1;case"ignore":return 2;case"replace":return 3;case"tint":return 4;default:return 1}}function o(e,n,o){if(t.isNone(e)||2===n)return o[0]=255,o[1]=255,o[2]=255,void(o[3]=255);const l=r.clamp(Math.round(e[3]*a),0,a),s=0===l||4===n?0:3===n?u:i;o[0]=r.clamp(Math.round(e[0]*c),0,c),o[1]=r.clamp(Math.round(e[1]*c),0,c),o[2]=r.clamp(Math.round(e[2]*c),0,c),o[3]=l+s}const c=255,a=85,u=a,i=2*a;e.encodeSymbolColor=o,e.parseColorMixMode=n,Object.defineProperty(e,"__esModule",{value:!0})}));
