// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","dojo/_base/lang","../../core/Accessor","../../core/HandleRegistry","./wmsUtils"],function(e,r,t,n,a,s,i,l,o){var p={visible:"visibleSublayers"},u=[102100,3857,102113,900913],y=[3395,54004],c=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._layerHandles=new l,r.extent=null,r}return t(r,e),Object.defineProperty(r.prototype,"layer",{set:function(e){var r=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),e&&(this._layerHandles||(this._layerHandles=new l),this._layerHandles.add([e.sublayers.on("change",function(){return r.notifyChange("visibleSublayers")}),e.on("wms-sublayer-update",function(e){return r.notifyChange(p[e.propertyName])})])))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layers",{get:function(){var e=this.visibleSublayers;return e.map(function(e){return e.name}).join(",")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"version",{get:function(){return(this._get("version")||0)+1},set:function(e){this._set("version",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visibleSublayers",{get:function(){var e=this.layer.sublayers,r=[],t=function(e){e.visible&&(e.sublayers?e.sublayers.forEach(t):r.unshift(e))};return e&&e.forEach(t),r},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"wkid",{get:function(){var e=this.extent,r=this.layer,t=r.spatialReferences,n=e.spatialReference&&e.spatialReference.wkid;t&&-1===t.indexOf(n)&&e.spatialReference.latestWkid&&(n=e.spatialReference.latestWkid);var a=u.some(function(e){return e===n});if(!t)return n;if(a){var s=[];t.forEach(function(e){u.indexOf(e)>-1&&s.push(e)}),s.length||t.forEach(function(e){y.indexOf(e)>-1&&s.push(e)}),n=s.length>0?s[0]:u[0]}return n},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){var e=this.layer,r=this.extent,t=this.wkid;e.spatialReferences&&-1===e.spatialReferences.indexOf(t)&&r.spatialReference.latestWkid&&(t=r.spatialReference.latestWkid);var n="1.3.0"===e.version&&o.coordsReversed(t)?r.ymin+","+r.xmin+","+r.ymax+","+r.xmax:r.xmin+","+r.ymin+","+r.xmax+","+r.ymax,a={bbox:n,format:e.imageFormat,request:"GetMap",service:"WMS",styles:"",transparent:e.imageTransparency,version:e.version};return isNaN(t)||("1.3.0"===e.version?a.crs="EPSG:"+t:a.srs="EPSG:"+t),s.mixin(a,{layers:this.layers}),a},r}(a.declared(i));return n([a.property()],c.prototype,"extent",void 0),n([a.property()],c.prototype,"layer",null),n([a.property({readOnly:!0,dependsOn:["visibleSublayers"]})],c.prototype,"layers",null),n([a.property({dependsOn:["layers","layer.imageTransparency"]})],c.prototype,"version",null),n([a.property({readOnly:!0,dependsOn:["layer.sublayers"]})],c.prototype,"visibleSublayers",null),n([a.property()],c.prototype,"wkid",null),c=n([a.subclass("esri.layers.support.ExportWMSImageParameters")],c)});