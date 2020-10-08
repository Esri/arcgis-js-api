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

define(["require","exports","tslib","../PopupTemplate","../core/maybe","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/ArcGISImageService","./mixins/ArcGISService","./mixins/BlendLayer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/TemporalLayer","./support/commonProperties","../support/popupUtils"],(function(e,r,t,a,i,o,p,n,s,l,c,y,d,u,m,v,g,f,S){"use strict";return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var a=e.apply(this,r)||this;return a.legendEnabled=!0,a.isReference=null,a.operationalLayerType="ArcGISImageServiceLayer",a.popupEnabled=!0,a.popupTemplate=null,a.type="imagery",a}return t.__extends(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t.__assign({url:e},r):e},r.prototype.load=function(e){var r=this,t=i.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"]},e).then((function(){return r._fetchService(t)}),(function(){return r._fetchService(t)}))),p.resolve(this)},r.prototype.writeOperationalLayerType=function(e,r,t){var a,i="vector-field"===(null===(a=this.renderer)||void 0===a?void 0:a.type);r[t]=i?"ArcGISImageServiceVectorLayer":"ArcGISImageServiceLayer"},Object.defineProperty(r.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!1,configurable:!0}),r.prototype.createPopupTemplate=function(e){var r=this.rasterFields,a=this.title,i=new Set,o=!1,p=!1;this.capabilities&&(p=(o=this.capabilities.operations.supportsQuery&&this.fields&&this.fields.length>0)&&("esriImageServiceDataTypeVector-UV"===this.serviceDataType||"esriImageServiceDataTypeVector-MagDir"===this.serviceDataType));var n=new Set;o&&(n.add("raster.itempixelvalue"),p&&n.add("raster.magnitude").add("raster.direction"));for(var s=0,l=r;s<l.length;s++){var c=l[s],y=c.name.toLowerCase();n.has(y)||y.indexOf("raster.servicepixelvalue.")>-1||i.add(c.name)}return S.createPopupTemplate({fields:r,title:a},t.__assign(t.__assign({},e),{visibleFieldNames:i}))},r.prototype.redraw=function(){this.emit("redraw")},t.__decorate([n.property(f.legendEnabled)],r.prototype,"legendEnabled",void 0),t.__decorate([n.property({type:["show","hide"]})],r.prototype,"listMode",void 0),t.__decorate([n.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],r.prototype,"isReference",void 0),t.__decorate([n.property({type:["ArcGISImageServiceLayer"],json:{origins:{"web-map":{type:["ArcGISImageServiceLayer","ArcGISImageServiceVectorLayer"],read:!1,write:{target:"layerType",ignoreOrigin:!0}}}}})],r.prototype,"operationalLayerType",void 0),t.__decorate([n.writer("web-map","operationalLayerType")],r.prototype,"writeOperationalLayerType",null),t.__decorate([n.property(f.popupEnabled)],r.prototype,"popupEnabled",void 0),t.__decorate([n.property({type:a,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],r.prototype,"popupTemplate",void 0),t.__decorate([n.property({readOnly:!0,dependsOn:["fields","title"]})],r.prototype,"defaultPopupTemplate",null),t.__decorate([n.property({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),r=t.__decorate([n.subclass("esri.layers.ImageryLayer")],r)}(y.BlendLayer(g.TemporalLayer(m.RefreshableLayer(v.ScaleRangeLayer(d.OperationalLayer(u.PortalLayer(l.ArcGISImageService(c.ArcGISService(o.MultiOriginJSONMixin(s))))))))))}));