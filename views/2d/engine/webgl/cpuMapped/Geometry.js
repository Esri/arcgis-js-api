/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/has"],(function(e,t){"use strict";let f=function(){function e(e,t){this._buffers=[],this.geometryType=e,this._stage=t}var t=e.prototype;return t.destroy=function(){this._buffers.forEach((e=>e.release()))},t.insert=function(e,t){if(!t.records.byteLength)return;"update"===e&&this._buffers.forEach((e=>e.free(t)));const f={done:!1,offset:0,vertexData:t};this._buffers.forEach((e=>e.insert(f)));let r=1e3;for(;!f.done&&--r;){const e=this._stage.pools.bufferData.acquire(t,this.geometryType,f.offset);e.insert(f),this._buffers.push(e)}},t.remove=function(e){this._buffers.forEach((t=>t.freeIds(e)))},t.upload=function(e){this._buffers.forEach((t=>t.upload(e)))},t.forEachCommand=function(e){this._buffers.forEach((t=>t.displayList.forEach(e)))},e}();e.Geometry=f,Object.defineProperty(e,"__esModule",{value:!0})}));
