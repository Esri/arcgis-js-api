// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/extendsHelper","../../../core/CircularArray","../../../core/maybe","./FeatureStore"],function(e,t,r,i,o,a,d){Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_STREAM_ID_FIELD="__esri_stream_id__";var s=function(e){function r(r,i,o,d,s,n){void 0===n&&(n=128);var u=e.call(this,o)||this;return u._trackIdToObservations=new Map,u._idCounter=0,u._lastPurge=Date.now(),u._addOrUpdated=new Map,u._removed=[],u._maxAge=0,u._timeInfo=i,u._maximumTrackCount=d,u._purgeOptions=s,u.purgeInterval=n,u.objectIdField=a.unwrapOr(r,t.DEFAULT_STREAM_ID_FIELD),u._useGeneratedIds=u.objectIdField===t.DEFAULT_STREAM_ID_FIELD,u}return i(r,e),r.prototype.add=function(t){if(this._useGeneratedIds&&(t.attributes[this.objectIdField]=this._nextId(),t.objectId=t.attributes[this.objectIdField]),e.prototype.add.call(this,t),this._addOrUpdated.set(t.objectId,t),this._maxAge=Math.max(this._maxAge,t.attributes[this._timeInfo.startTimeField]),this._timeInfo.trackIdField){var r=t.attributes[this._timeInfo.trackIdField];this._trackIdToObservations.has(r)||this._trackIdToObservations.set(r,new o.default(this._maximumTrackCount));var i=this._trackIdToObservations.get(r),d=t.attributes[this.objectIdField],s=i.enqueue(d);if(a.isSome(s)){var n=this.removeById(s);a.isSome(n)&&(this._addOrUpdated.has(s)?this._addOrUpdated.delete(s):this._removed.push(n))}}},r.prototype.checkForUpdates=function(){var e=this._getToAdd(),t=this._getToRemove(),r=Date.now();r-this._lastPurge>=this.purgeInterval&&(this._purge(),this._lastPurge=r),(e||t)&&this.events.emit("update",{addOrUpdated:e,removed:t})},r.prototype._getToAdd=function(){if(!this._addOrUpdated.size)return null;var e=new Array(this._addOrUpdated.size),t=0;return this._addOrUpdated.forEach(function(r){return e[t++]=r}),this._addOrUpdated.clear(),e},r.prototype._getToRemove=function(){var e=this._removed;return this._removed.length?(this._removed=[],e):null},r.prototype._nextId=function(){var e=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,e},r.prototype._purge=function(){var e=this._purgeOptions;a.isSome(e)&&(this._purgeSomeByDisplayCount(e),this._purgeByAge(e))},r.prototype._purgeSomeByDisplayCount=function(e){var t=this;if(e.displayCount){var r=this.numFeatures;r>e.displayCount&&this._trackIdToObservations.forEach(function(i,o){if(r>e.displayCount&&i.size){var d=t.removeById(i.dequeue());a.isSome(d)&&t._removed.push(d),r--}})}},r.prototype._purgeByAge=function(e){if(e.age){var t=60*e.age*1e3,r=this._maxAge-t,i=this._timeInfo.startTimeField,o=function(e){return e.attributes[i]<r};this.removeIf(this._removed,o)}},r}(d.default);t.default=s});