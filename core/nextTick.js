/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["./global"],(function(e){"use strict";const o=e.queueMicrotask?e.queueMicrotask:o=>{e.Promise.resolve().then(o)},t=[];let n=[];function r(e){t.push(e),1===t.length&&o((()=>{for(const e of n)e();const e=t.slice();t.length=0;for(const o of e)o()}))}return function(e){e.before=function(e){return n.push(e),{remove(){n=n.filter((o=>o!==e))}}}}(r||(r={})),r}));
