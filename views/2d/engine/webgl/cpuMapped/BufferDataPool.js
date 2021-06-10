/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/has","../../../../../core/maybe","./DisplayRecordReader","./BufferData"],(function(e,t,r,o,n){"use strict";let i=function(){function e(){this._pools=new Map}var t=e.prototype;return t.acquire=function(e,t,r=0){const i=o.DisplayRecordReader.from(e.records,r),s=i.size();i.next();const u=i.vertexCount,c=i.indexCount,f=this._tryAcquire(e.stride,t,u,c);return n.BufferData.createPooled(f,e,t,u,c,s,this)},t.release=function(e){e.isReleased||e.destroy()},t.destroy=function(){this._pools.forEach((e=>{r.isSome(e)&&e.clear((e=>e.destroy()))}))},t._tryAcquire=function(e,t,o,n){const i=e<<3|t,s=this._pools.get(i);if(r.isNone(s))return null;const u=s.dequeue();return r.isSome(u)&&u.vertexBufferSize>=o&&u.indexBufferSize>=n?u:null},e}();e.BufferDataPool=i,Object.defineProperty(e,"__esModule",{value:!0})}));
