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

define(["require","exports","tslib","../../core/Accessor","../../core/Handles","../../core/accessorSupport/decorators","./wmsUtils"],(function(e,r,t,n,a,s,i){var l={visible:"visibleSublayers"},o=[102100,3857,102113,900913],p=[3395,54004];return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._layerHandles=new a,r.extent=null,r._scale=null,r.view=null,r}return t.__extends(r,e),Object.defineProperty(r.prototype,"layer",{set:function(e){var r=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),e&&(this._layerHandles||(this._layerHandles=new a),this._layerHandles.add([e.sublayers.on("change",(function(){return r.notifyChange("visibleSublayers")})),e.on("wms-sublayer-update",(function(e){return r.notifyChange(l[e.propertyName])}))])))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layers",{get:function(){return this.visibleSublayers.filter((function(e){return e.name})).map((function(e){return e.name})).join(",")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scale",{get:function(){return null!=this._scale?this._scale:this.view&&this.view.scale||0},set:function(e){this.view||(this._scale=e,this.notifyChange("scale"))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visibleSublayers",{get:function(){var e=this.layer,r=this.scale,t=e.sublayers,n=[],a=function(e){var t=e.minScale,s=e.maxScale,i=e.sublayers;e.visible&&(0===r||(0===t||r<=t)&&(0===s||r>=s))&&(n.unshift(e),i&&i.forEach(a))};return t&&t.forEach(a),n},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"wkid",{get:function(){var e=this.extent,r=this.layer.spatialReferences,t=e.spatialReference&&e.spatialReference.wkid;r&&-1===r.indexOf(t)&&e.spatialReference.latestWkid&&(t=e.spatialReference.latestWkid);var n=o.some((function(e){return e===t}));if(!r)return t;if(n){var a=[];r.forEach((function(e){o.indexOf(e)>-1&&a.push(e)})),a.length||r.forEach((function(e){p.indexOf(e)>-1&&a.push(e)})),t=a.length>0?a[0]:o[0]}return t},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){var e=this.extent,r=this.layer,n=this.layers,a=r.imageFormat,s=r.imageTransparency,l=r.spatialReferences,o=r.version,p=this.wkid;l&&-1===l.indexOf(p)&&e.spatialReference.latestWkid&&(p=e.spatialReference.latestWkid);var c=e.xmin,u=e.ymin,y=e.xmax,d=e.ymax,f={bbox:"1.3.0"===r.version&&i.coordsReversed(p)?u+","+c+","+d+","+y:c+","+u+","+y+","+d,format:a,request:"GetMap",service:"WMS",styles:"",transparent:s,version:o};return isNaN(p)||("1.3.0"===o?f.crs="EPSG:"+p:f.srs="EPSG:"+p),t.__assign(t.__assign({},f),{layers:n})},t.__decorate([s.property()],r.prototype,"extent",void 0),t.__decorate([s.property()],r.prototype,"layer",null),t.__decorate([s.property({readOnly:!0,dependsOn:["visibleSublayers"]})],r.prototype,"layers",null),t.__decorate([s.property({type:Number,dependsOn:["view.scale"]})],r.prototype,"scale",null),t.__decorate([s.property()],r.prototype,"view",void 0),t.__decorate([s.property({dependsOn:["layers","layer.imageTransparency"],readOnly:!0})],r.prototype,"version",null),t.__decorate([s.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],r.prototype,"visibleSublayers",null),t.__decorate([s.property()],r.prototype,"wkid",null),r=t.__decorate([s.subclass("esri.layers.support.ExportWMSImageParameters")],r)}(n)}));