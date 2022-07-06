/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{clamp as t}from"../../../../core/mathUtils.js";import{isNone as e}from"../../../../core/maybe.js";var r;function n(t){switch(t){case"multiply":default:return r.Multiply;case"ignore":return r.Ignore;case"replace":return r.Replace;case"tint":return r.Tint}}function o(n,o,l){if(e(n)||o===r.Ignore)return l[0]=255,l[1]=255,l[2]=255,void(l[3]=255);const p=t(Math.round(n[3]*a),0,a),s=0===p||o===r.Tint?0:o===r.Replace?c:u;l[0]=t(Math.round(n[0]*i),0,i),l[1]=t(Math.round(n[1]*i),0,i),l[2]=t(Math.round(n[2]*i),0,i),l[3]=p+s}!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint"}(r||(r={}));const i=255,a=85,c=a,u=2*a;export{r as ColorMixModeEnum,o as encodeSymbolColor,n as parseColorMixMode};
