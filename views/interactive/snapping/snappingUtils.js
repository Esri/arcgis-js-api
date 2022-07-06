/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{s as t}from"../../../chunks/vec2.js";function E(t,E){const n=t.x-E.x,r=t.y-E.y;return n*n+r*r}function n(t,E){const n=t.length===E.length&&t[0]===E[0]&&t[1]===E[1];switch(t.length){case 2:return n;case 3:return n&&t[2]===E[2];case 4:return n&&t[3]===E[3]}return!1}function r(E,n){n.sort(((n,r)=>t(n.targetPoint,E)-t(r.targetPoint,E)))}var e;!function(t){t[t.TARGET=0]="TARGET",t[t.REFERENCE=1]="REFERENCE",t[t.REFERENCE_EXTENSION=2]="REFERENCE_EXTENSION"}(e||(e={}));export{e as LineSegmentHintType,n as objectEqual,r as sortCandidatesInPlace,E as squareDistance};
