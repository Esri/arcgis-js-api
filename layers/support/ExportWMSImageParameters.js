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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Handles","../../core/accessorSupport/decorators","./wmsUtils"],(function(e,r,t,n,s,a,i,l,o){var p={visible:"visibleSublayers"},u=[102100,3857,102113,900913],c=[3395,54004];return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._layerHandles=new i,r.extent=null,r._scale=null,r.view=null,r}return n(r,e),Object.defineProperty(r.prototype,"layer",{set:function(e){var r=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),e&&(this._layerHandles||(this._layerHandles=new i),this._layerHandles.add([e.sublayers.on("change",(function(){return r.notifyChange("visibleSublayers")})),e.on("wms-sublayer-update",(function(e){return r.notifyChange(p[e.propertyName])}))])))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layers",{get:function(){return this.visibleSublayers.filter((function(e){return e.name})).map((function(e){return e.name})).join(",")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scale",{get:function(){return null!=this._scale?this._scale:this.view&&this.view.scale||0},set:function(e){this.view||(this._scale=e,this.notifyChange("scale"))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visibleSublayers",{get:function(){var e=this.layer,r=this.scale,t=e.sublayers,n=[],s=function(e){var t=e.minScale,a=e.maxScale,i=e.sublayers;e.visible&&(0===r||(0===t||r<=t)&&(0===a||r>=a))&&(n.unshift(e),i&&i.forEach(s))};return t&&t.forEach(s),n},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"wkid",{get:function(){var e=this.extent,r=this.layer.spatialReferences,t=e.spatialReference&&e.spatialReference.wkid;r&&-1===r.indexOf(t)&&e.spatialReference.latestWkid&&(t=e.spatialReference.latestWkid);var n=u.some((function(e){return e===t}));if(!r)return t;if(n){var s=[];r.forEach((function(e){u.indexOf(e)>-1&&s.push(e)})),s.length||r.forEach((function(e){c.indexOf(e)>-1&&s.push(e)})),t=s.length>0?s[0]:u[0]}return t},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){var e=this.extent,r=this.layer,n=this.layers,s=r.imageFormat,a=r.imageTransparency,i=r.spatialReferences,l=r.version,p=this.wkid;i&&-1===i.indexOf(p)&&e.spatialReference.latestWkid&&(p=e.spatialReference.latestWkid);var u=e.xmin,c=e.ymin,y=e.xmax,f=e.ymax,d={bbox:"1.3.0"===r.version&&o.coordsReversed(p)?c+","+u+","+f+","+y:u+","+c+","+y+","+f,format:s,request:"GetMap",service:"WMS",styles:"",transparent:a,version:l};return isNaN(p)||("1.3.0"===l?d.crs="EPSG:"+p:d.srs="EPSG:"+p),t({},d,{layers:n})},s([l.property()],r.prototype,"extent",void 0),s([l.property()],r.prototype,"layer",null),s([l.property({readOnly:!0,dependsOn:["visibleSublayers"]})],r.prototype,"layers",null),s([l.property({type:Number,dependsOn:["view.scale"]})],r.prototype,"scale",null),s([l.property()],r.prototype,"view",void 0),s([l.property({dependsOn:["layers","layer.imageTransparency"],readOnly:!0})],r.prototype,"version",null),s([l.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],r.prototype,"visibleSublayers",null),s([l.property()],r.prototype,"wkid",null),r=s([l.subclass("esri.layers.support.ExportWMSImageParameters")],r)}(l.declared(a))}));