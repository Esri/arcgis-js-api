/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as r}from"../../../../core/maybe.js";import{createTexture as t}from"../graphics/sdfPrimitives.js";const n=64,o=n/2,i=o/5;function e(t,n){return r(n)?m(t,f(n.style)):null}function m(r,e){return r.fromData(e,(()=>t(e,n,o,i)))}function f(r){return"diamond"===r?"kite":r}export{o as MARKER_SYMBOL_SIZE,n as MARKER_TEXTURE_SIZE,i as MARKER_THICKNESS,f as parseLineMarkerStyle,e as prepareMarkerResources};
