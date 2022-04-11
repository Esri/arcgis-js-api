/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["./WGLDisplayRecord","./util/serializationUtils"],(function(i,t){"use strict";return function(){function s(i){this.insertAfter=null,this.id=i,this.displayRecords=[]}var e=s.prototype;return e.copy=function(){const i=new s(this.id);return i.set(this),i},e.clone=function(){const i=new s(this.id);return i.displayRecords=this.displayRecords.map((i=>i.clone())),i.insertAfter=this.insertAfter,i},e.set=function(i){this.id=i.id,this.displayRecords=i.displayRecords,this.insertAfter=i.insertAfter},e.serialize=function(i){return i.push(this.id),t.serializeList(i,this.displayRecords),i},s.deserialize=function(e){const n=e.readInt32(),r=new s(n),d={id:n};return r.displayRecords=t.deserializeList(e,i,d),r},s}()}));
