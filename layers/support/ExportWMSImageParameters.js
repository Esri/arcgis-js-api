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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Handles","../../core/accessorSupport/decorators","./wmsUtils"],function(e,r,t,n,a,s,l,i,o){var p={visible:"visibleSublayers"},u=[102100,3857,102113,900913],c=[3395,54004];return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._layerHandles=new l,r.extent=null,r._scale=null,r.view=null,r}return n(r,e),Object.defineProperty(r.prototype,"layer",{set:function(e){var r=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),e&&(this._layerHandles||(this._layerHandles=new l),this._layerHandles.add([e.sublayers.on("change",function(){return r.notifyChange("visibleSublayers")}),e.on("wms-sublayer-update",function(e){return r.notifyChange(p[e.propertyName])})])))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layers",{get:function(){return this.visibleSublayers.filter(function(e){return e.name}).map(function(e){return e.name}).join(",")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scale",{get:function(){return null!=this._scale?this._scale:this.view&&this.view.scale||0},set:function(e){this.view||(this._scale=e,this.notifyChange("scale"))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visibleSublayers",{get:function(){var e=this,r=e.layer,t=e.scale,n=r.sublayers,a=[],s=function(e){var r=e.minScale,n=e.maxScale,l=e.sublayers,i=e.visible,o=0===t||(0===r||t<=r)&&(0===n||t>=n);i&&o&&(a.unshift(e),l&&l.forEach(s))};return n&&n.forEach(s),a},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"wkid",{get:function(){var e=this,r=e.extent,t=e.layer,n=t.spatialReferences,a=r.spatialReference&&r.spatialReference.wkid;n&&-1===n.indexOf(a)&&r.spatialReference.latestWkid&&(a=r.spatialReference.latestWkid);var s=u.some(function(e){return e===a});if(!n)return a;if(s){var l=[];n.forEach(function(e){u.indexOf(e)>-1&&l.push(e)}),l.length||n.forEach(function(e){c.indexOf(e)>-1&&l.push(e)}),a=l.length>0?l[0]:u[0]}return a},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){var e=this,r=e.extent,n=e.layer,a=e.layers,s=n.imageFormat,l=n.imageTransparency,i=n.spatialReferences,p=n.version,u=this.wkid;i&&-1===i.indexOf(u)&&r.spatialReference.latestWkid&&(u=r.spatialReference.latestWkid);var c=r.xmin,y=r.ymin,f=r.xmax,d=r.ymax,b="1.3.0"===n.version&&o.coordsReversed(u)?y+","+c+","+d+","+f:c+","+y+","+f+","+d,h={bbox:b,format:s,request:"GetMap",service:"WMS",styles:"",transparent:l,version:p};return isNaN(u)||("1.3.0"===p?h.crs="EPSG:"+u:h.srs="EPSG:"+u),t({},h,{layers:a})},a([i.property()],r.prototype,"extent",void 0),a([i.property()],r.prototype,"layer",null),a([i.property({readOnly:!0,dependsOn:["visibleSublayers"]})],r.prototype,"layers",null),a([i.property({type:Number,dependsOn:["view.scale"]})],r.prototype,"scale",null),a([i.property()],r.prototype,"view",void 0),a([i.property({dependsOn:["layers","layer.imageTransparency"],readOnly:!0})],r.prototype,"version",null),a([i.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],r.prototype,"visibleSublayers",null),a([i.property()],r.prototype,"wkid",null),r=a([i.subclass("esri.layers.support.ExportWMSImageParameters")],r)}(i.declared(s))});