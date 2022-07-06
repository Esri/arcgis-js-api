/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as t}from"../../core/maybe.js";async function n(n,r){if("2d"===n.type)return n.hitTest(r);const s=await n.hitTest(r);if(0===s.results.length)return s;const i=s.results[0],u=t(i.distance)?i.distance*(1+e):i.distance,c=s.results.findIndex((t=>t.distance>u));return-1!==c&&(s.results=s.results.slice(0,c)),s}const e=.05;function r(n){return t(n)&&"graphic"===n.type}function s(t){return t.find(r)??null}function i(t){return t.filter(r)}export{i as filterGraphicHits,s as findFirstGraphicHit,n as hitTestSelectSimilarDistance};
