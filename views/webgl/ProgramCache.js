/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["./programUtils"],(function(r){"use strict";return function(){function t(r){this._programCacheByTemplate=new Map,this._rctx=r}var e=t.prototype;return e.dispose=function(){this._programCacheByTemplate.forEach((r=>{r.programs.forEach((r=>{r.dispose()}))})),this._programCacheByTemplate=null},e.getProgram=function(t,e){return this._programCacheByTemplate.has(t)||this.addProgramTemplate(t,(e=>r.createProgram(this._rctx,t,e))),this.getProgramTemplateInstance(t,e)},e.addProgramTemplate=function(r,t){this._programCacheByTemplate.set(r,{constructor:t,programs:new Map})},e.getProgramTemplateInstance=function(r,t){const e=this._programCacheByTemplate.get(r);if(e){const r=t?JSON.stringify(t):"default";if(!e.programs.has(r)){const a=e.constructor(t);e.programs.set(r,a)}return e.programs.get(r)}return null},t}()}));
