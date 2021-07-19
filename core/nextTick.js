/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["./global"],(function(e){"use strict";function n(){return e.queueMicrotask?e.queueMicrotask:n=>{e.Promise.resolve().then(n)}}const t=n(),o=[];let r=[];function u(e){o.push(e),1===o.length&&t((()=>{for(const n of r)n();const e=o.slice();o.length=0;for(const n of e)n()}))}return function(e){function n(e){return r.push(e),{remove(){r=r.filter((n=>n!==e))}}}e.before=n}(u||(u={})),u}));
