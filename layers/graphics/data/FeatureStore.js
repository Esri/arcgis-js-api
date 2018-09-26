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

define(["require","exports","@dojo/framework/shim/Map","../../../core/has","../../../core/libs/rbush/rbush","../../../geometry/support/aaBoundingRect","../featureConversionUtils"],function(e,t,r,n,s,o,u){function i(e,t){return a.minX=t[0],a.minY=t[1],a.maxX=t[2],a.maxY=t[3],e.search(a)}Object.defineProperty(t,"__esModule",{value:!0});var a={minX:0,minY:0,maxX:0,maxY:0},h=[],d=function(){function e(e){this._boundsByFeature=new r.default,this._featuresByBounds=new r.default,this._index=s(9,n("csp-restrictions")?function(e){return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}}:["[0]","[1]","[2]","[3]"]),this.featureInfo=e}return Object.defineProperty(e.prototype,"bounds",{get:function(){if(!this.size)return null;var e=o.create(o.NEGATIVE_INFINITY);return this._boundsByFeature.forEach(function(t){t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]))}),e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._boundsByFeature.size},enumerable:!0,configurable:!0}),e.prototype.add=function(e){if(e){if(!e.geometry)return void this._boundsByFeature.set(e,null);var t=u.getBoundsOptimizedGeometry(o.create(),e.geometry,this.featureInfo.hasZ,this.featureInfo.hasM);this._boundsByFeature.set(e,t),this._featuresByBounds.set(t,e),this._index.insert(t)}},e.prototype.addMany=function(e){for(var t=this.featureInfo,r=t.hasM,n=t.hasZ,s=0,i=e;s<i.length;s++){var a=i[s];if(a)if(a.geometry){var d=u.getBoundsOptimizedGeometry(o.create(),a.geometry,n,r);this._boundsByFeature.set(a,d),this._featuresByBounds.set(d,a),h.push(d)}else this._boundsByFeature.set(a,null)}this._index.load(h),h.length=0},e.prototype.clear=function(){this._index.clear(),this._boundsByFeature.clear(),this._featuresByBounds.clear()},e.prototype.forEachBounds=function(e,t){for(var r=0,n=e;r<n.length;r++){var s=n[r],o=this.getBounds(s);o&&t(o,s)}},e.prototype.getBounds=function(e){return this._boundsByFeature.get(e)},e.prototype.has=function(e){return this._boundsByFeature.has(e)},e.prototype.remove=function(e){if(e){var t=this._boundsByFeature.get(e);t&&(this._index.remove(t),this._featuresByBounds.delete(t)),this._boundsByFeature.delete(e)}},e.prototype.removeMany=function(e){for(var t=0,r=e;t<r.length;t++){var n=r[t];this.remove(n)}},e.prototype.replace=function(e,t){if(this._boundsByFeature.has(e)){var r=this._boundsByFeature.get(e);r&&(this._index.remove(r),this._boundsByFeature.delete(e),this._featuresByBounds.delete(r)),t&&(t.geometry?(u.getBoundsOptimizedGeometry(r,t.geometry,this.featureInfo.hasZ,this.featureInfo.hasM),this._boundsByFeature.set(t,r),this._featuresByBounds.set(r,t),this._index.insert(r)):this._boundsByFeature.set(t,null))}},e.prototype.forEachFeatureInBounds=function(e,t){for(var r=0,n=i(this._index,e);r<n.length;r++){var s=n[r];t(this._featuresByBounds.get(s))}},e.prototype.mapFeaturesInBounds=function(e,t){for(var r=[],n=0,s=i(this._index,e);n<s.length;n++){var o=s[n];r.push(t(this._featuresByBounds.get(o)))}return r},e}();t.default=d});