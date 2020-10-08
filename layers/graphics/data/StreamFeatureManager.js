// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../core/CircularArray","../../../core/mathUtils","../../../core/maybe"],(function(t,e,i,r,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ESRI_TIMESTAMP=e.DEFAULT_STREAM_ID_FIELD=void 0,e.DEFAULT_STREAM_ID_FIELD="__esri_stream_id__",e.ESRI_TIMESTAMP="__esri_timestamp__";var o=function(){function t(t,i,r,s,o){void 0===o&&(o=128),this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=performance.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=r,this._purgeOptions=s,this.store=t,this.objectIdField=i,this.purgeInterval=o,this._useGeneratedIds=this.objectIdField===e.DEFAULT_STREAM_ID_FIELD}return t.prototype.add=function(t){if(this._useGeneratedIds){var e=this._nextId();t.attributes[this.objectIdField]=e,t.objectId=e}if(this._addOrUpdated.set(t.objectId,t),this._maxAge=Math.max(this._maxAge,t.attributes[this._timeInfo.startTimeField]),this._timeInfo.trackIdField){var o=t.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(o)){var a=s.isSome(this._purgeOptions)&&null!=this._purgeOptions.maxObservations?this._purgeOptions.maxObservations:1e3,d=r.clamp(a,0,1e3);this._trackIdToObservations.set(o,new i.default(d))}var n=this._trackIdToObservations.get(o).enqueue(t.objectId);s.isSome(n)&&(this._addOrUpdated.has(n)?this._addOrUpdated.delete(n):this._removed.push(n))}},t.prototype.checkForUpdates=function(){var t=this._getToAdd(),i=this._getToRemove(),r=performance.now();r-this._lastPurge>=this.purgeInterval&&(this._purge(r),this._lastPurge=r);var o=[];if(s.isSome(i))for(var a=0,d=i;a<d.length;a++){var n=d[a],_=this.store.removeById(n);s.isSome(_)&&o.push(_)}if(s.isSome(t))for(var h=0,u=t;h<u.length;h++){(_=u[h]).attributes[e.ESRI_TIMESTAMP]=r,this.store.add(_)}(t||o)&&this.store.update(t,o)},t.prototype._getToAdd=function(){if(!this._addOrUpdated.size)return null;var t=new Array(this._addOrUpdated.size),e=0;return this._addOrUpdated.forEach((function(i){return t[e++]=i})),this._addOrUpdated.clear(),t},t.prototype._getToRemove=function(){var t=this._removed;return this._removed.length?(this._removed=[],t):null},t.prototype._nextId=function(){var t=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,t},t.prototype._purge=function(t){var e=this._purgeOptions;s.isSome(e)&&(this._purgeSomeByDisplayCount(e),this._purgeByAge(e),this._purgeByAgeReceived(t,e),this._purgeTracks())},t.prototype._purgeSomeByDisplayCount=function(t){var e=this;if(t.displayCount){var i=this.store.size;i>t.displayCount&&this._trackIdToObservations.forEach((function(r){if(i>t.displayCount&&r.size){var o=s.unwrap(r.dequeue());e._removed.push(o),i--}}))}},t.prototype._purgeByAge=function(t){var e,i=this;if(t.age&&(null===(e=this._timeInfo)||void 0===e?void 0:e.startTimeField)){var r=60*t.age*1e3,s=this._maxAge-r;this.store.forEach((function(t){t.attributes[i._timeInfo.startTimeField]<s&&i._removed.push(t.objectId)}))}},t.prototype._purgeByAgeReceived=function(t,i){var r=this;if(i.ageReceived){var s=t+60*i.ageReceived*1e3;this.store.forEach((function(t){t.attributes[e.ESRI_TIMESTAMP]<s&&r._removed.push(t.objectId)}))}},t.prototype._purgeTracks=function(){var t=this;this._trackIdToObservations.forEach((function(e,i){0===e.size&&t._trackIdToObservations.delete(i)}))},t}();e.default=o}));