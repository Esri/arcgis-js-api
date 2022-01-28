/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../core/mathUtils","../../../../core/maybe"],(function(e,t,r){"use strict";function o(e){switch(e){case"multiply":default:return 1;case"ignore":return 2;case"replace":return 3;case"tint":return 4}}function n(e,o,n){if(r.isNone(e)||2===o)return n[0]=255,n[1]=255,n[2]=255,void(n[3]=255);const l=t.clamp(Math.round(e[3]*a),0,a),s=0===l||4===o?0:3===o?u:i;n[0]=t.clamp(Math.round(e[0]*c),0,c),n[1]=t.clamp(Math.round(e[1]*c),0,c),n[2]=t.clamp(Math.round(e[2]*c),0,c),n[3]=l+s}const c=255,a=85,u=a,i=2*a;e.encodeSymbolColor=n,e.parseColorMixMode=o,Object.defineProperty(e,"__esModule",{value:!0})}));
