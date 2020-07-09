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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../core/CircularArray","../../../core/mathUtils","../../../core/maybe"],(function(t,e,i,s,r){Object.defineProperty(e,"__esModule",{value:!0}),e.DEFAULT_STREAM_ID_FIELD="__esri_stream_id__";var o=function(){function t(t,i,s,r,o){void 0===o&&(o=128),this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=Date.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=s,this._purgeOptions=r,this.store=t,this.objectIdField=i,this.purgeInterval=o,this._useGeneratedIds=this.objectIdField===e.DEFAULT_STREAM_ID_FIELD}return t.prototype.add=function(t){if(this._useGeneratedIds&&(t.attributes[this.objectIdField]=this._nextId()),t.objectId=t.attributes[this.objectIdField],this.store.add(t),this._addOrUpdated.set(t.objectId,t),this._maxAge=Math.max(this._maxAge,t.attributes[this._timeInfo.startTimeField]),this._timeInfo.trackIdField){var e=t.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(e)){var o=r.isSome(this._purgeOptions)&&null!=this._purgeOptions.maxObservations?this._purgeOptions.maxObservations:1e3,a=s.clamp(o,0,1e3);this._trackIdToObservations.set(e,new i.default(a))}var d=this._trackIdToObservations.get(e),n=t.attributes[this.objectIdField],h=d.enqueue(n);if(r.isSome(h)){var u=this.store.removeById(h);r.isSome(u)&&(this._addOrUpdated.has(h)?this._addOrUpdated.delete(h):this._removed.push(u))}}},t.prototype.checkForUpdates=function(){var t=this._getToAdd(),e=this._getToRemove(),i=Date.now();i-this._lastPurge>=this.purgeInterval&&(this._purge(),this._lastPurge=i),(t||e)&&this.store.update(t,e)},t.prototype._getToAdd=function(){if(!this._addOrUpdated.size)return null;var t=new Array(this._addOrUpdated.size),e=0;return this._addOrUpdated.forEach((function(i){return t[e++]=i})),this._addOrUpdated.clear(),t},t.prototype._getToRemove=function(){var t=this._removed;return this._removed.length?(this._removed=[],t):null},t.prototype._nextId=function(){var t=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,t},t.prototype._purge=function(){var t=this._purgeOptions;r.isSome(t)&&(this._purgeSomeByDisplayCount(t),this._purgeByAge(t),this._purgeTracks())},t.prototype._purgeSomeByDisplayCount=function(t){var e=this;if(t.displayCount){var i=this.store.size;i>t.displayCount&&this._trackIdToObservations.forEach((function(s){if(i>t.displayCount&&s.size){var o=e.store.removeById(r.unwrap(s.dequeue()));r.isSome(o)&&e._removed.push(o),i--}}))}},t.prototype._purgeByAge=function(t){var e=this;if(t.age){var i=60*t.age*1e3,s=this._maxAge-i,r=this._timeInfo.startTimeField;this.store.forEach((function(t){t.attributes[r]<s&&(e.store.removeById(t.objectId),e._removed.push(t))}))}},t.prototype._purgeTracks=function(){var t=this;this._trackIdToObservations.forEach((function(e,i){0===e.size&&t._trackIdToObservations.delete(i)}))},t}();e.default=o}));