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

define(["require","exports","../../../../layers/graphics/dehydratedFeatures"],function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){this.highestResolutionVersion=null,this.versions=[],this.markedTile=null,this.ref(e,t)}return Object.defineProperty(e.prototype,"isReferenced",{get:function(){return 0!==this.versions.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isSingle",{get:function(){return 1===this.versions.length&&1===this.versions[0].refCount},enumerable:!0,configurable:!0}),e.prototype.ref=function(e,t){var i=this.feature;s.oldVersion=i,this.feature&&(t.uid=this.feature.uid);for(var n=0,o=this.versions;n<o.length;n++){var u=o[n];if(u.resolution===e){u.refCount++;var h=this.highestResolutionVersion===u&&!r.equals(t,u.feature);return(h||this.highestResolutionVersion!==u)&&(u.feature=t),s.newVersion=h?t:i,s}}var f={feature:t,resolution:e,refCount:1};return this.versions.push(f),!this.highestResolutionVersion||e<this.highestResolutionVersion.resolution?(s.newVersion=t,this.highestResolutionVersion=f):s.newVersion=i,s},e.prototype.unref=function(e){for(var t=0;t<this.versions.length;t++){var r=this.versions[t];if(r.resolution===e)return r.refCount--,s.oldVersion=this.feature,0===r.refCount&&(this.versions[t]=this.versions[this.versions.length-1],this.versions.length--,this.highestResolutionVersion===r&&(this.recalculateHighestResolutionVersion(),s.oldVersion=r.feature)),s.newVersion=this.feature,s}return null},Object.defineProperty(e.prototype,"feature",{get:function(){return this.highestResolutionVersion?this.highestResolutionVersion.feature:null},enumerable:!0,configurable:!0}),e.prototype.recalculateHighestResolutionVersion=function(){if(0===this.versions.length)return void(this.highestResolutionVersion=null);for(var e=this.versions[0],t=1;t<this.versions.length;t++){var r=this.versions[t];r.resolution<e.resolution&&(e=r)}this.highestResolutionVersion=e},e}();t.MultiFeatureReference=i;var n=function(){function e(e,t){this._feature=t,this.refCount=1,this.markedTile=null}return Object.defineProperty(e.prototype,"isReferenced",{get:function(){return 0!==this.refCount},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isSingle",{get:function(){return 1===this.refCount},enumerable:!0,configurable:!0}),e.prototype.ref=function(e,t){return++this.refCount,s.oldVersion=this._feature,this.feature&&(t.uid=this.feature.uid),r.equals(this._feature,t)||(this._feature=t),s.newVersion=this._feature,s},e.prototype.unref=function(e){return s.oldVersion=this._feature,this.refCount>0&&(this.refCount--,!this.isReferenced)?(s.newVersion=null,s):(s.newVersion=this._feature,s)},Object.defineProperty(e.prototype,"feature",{get:function(){return this._feature},enumerable:!0,configurable:!0}),e}();t.SingleFeatureReference=n;var s={oldVersion:null,newVersion:null}});