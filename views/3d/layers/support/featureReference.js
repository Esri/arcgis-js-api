// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../layers/graphics/dehydratedFeatures"],function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){this.highestResolutionVersion=null,this.versions=[],this.markedTile=null,this.ref(e,t)}return Object.defineProperty(e.prototype,"isReferenced",{get:function(){return 0!==this.versions.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isSingle",{get:function(){return 1===this.versions.length&&1===this.versions[0].refCount},enumerable:!0,configurable:!0}),e.prototype.ref=function(e,t,i){void 0===i&&(i=o);var n=this.feature;i.oldVersion=n;for(var s=0,u=this.versions;s<u.length;s++){var h=u[s];if(h.resolution===e){h.refCount++;var l=this.highestResolutionVersion===h&&!r.equals(t,h.feature);return(l||this.highestResolutionVersion!==h)&&(h.feature=t),i.newVersion=l?t:n,i}}var f={feature:t,resolution:e,refCount:1};return this.versions.push(f),!this.highestResolutionVersion||e<this.highestResolutionVersion.resolution?(i.newVersion=t,this.highestResolutionVersion=f):i.newVersion=n,i},e.prototype.unref=function(e,t){void 0===t&&(t=o);for(var r=0;r<this.versions.length;r++){var i=this.versions[r];if(i.resolution===e&&0===--i.refCount){if(this.versions[r]=this.versions[this.versions.length-1],this.versions.length--,this.highestResolutionVersion===i)return this.recalculateHighestResolutionVersion(),t.oldVersion=i.feature,t.newVersion=this.feature,t;break}}var n=this.feature;return t.oldVersion=n,t.newVersion=n,t},Object.defineProperty(e.prototype,"feature",{get:function(){return this.highestResolutionVersion?this.highestResolutionVersion.feature:null},enumerable:!0,configurable:!0}),e.prototype.recalculateHighestResolutionVersion=function(){if(0===this.versions.length)return void(this.highestResolutionVersion=null);for(var e=this.versions[0],t=1;t<this.versions.length;t++){var r=this.versions[t];r.resolution<e.resolution&&(e=r)}this.highestResolutionVersion=e},e}();t.MultiFeatureReference=i;var n=function(){function e(e,t){this._feature=t,this.refCount=1,this.markedTile=null}return Object.defineProperty(e.prototype,"isReferenced",{get:function(){return 0!==this.refCount},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isSingle",{get:function(){return 1===this.refCount},enumerable:!0,configurable:!0}),e.prototype.ref=function(e,t,i){return void 0===i&&(i=o),this.refCount+=1,i.oldVersion=this._feature,r.equals(this._feature,t)||(this._feature=t),i.newVersion=this._feature,i},e.prototype.unref=function(e,t){return void 0===t&&(t=o),t.oldVersion=this._feature,this.refCount>0&&(this.refCount--,!this.isReferenced)?(t.newVersion=null,t):(t.newVersion=this._feature,t)},Object.defineProperty(e.prototype,"feature",{get:function(){return this._feature},enumerable:!0,configurable:!0}),e}();t.SingleFeatureReference=n;var o={oldVersion:null,newVersion:null}});