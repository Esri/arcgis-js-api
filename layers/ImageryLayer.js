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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../PopupTemplate","../core/maybe","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/ArcGISImageService","./mixins/ArcGISService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/TemporalLayer","./support/commonProperties","../support/popupUtils"],(function(e,r,t,o,p,a,i,n,l,s,c,u,d,y,m,v,f,S,g,h,b,L){return function(e){function r(r,t){var o=e.call(this,r)||this;return o.legendEnabled=!0,o.isReference=null,o.operationalLayerType="ArcGISImageServiceLayer",o.popupEnabled=!0,o.popupTemplate=null,o.type="imagery",o}return t(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?p({url:e},r):e},r.prototype.load=function(e){var r=this,t=l.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"]},e).then((function(){return r._fetchService(t)}),(function(){return r._fetchService(t)}))),c.resolve(this)},Object.defineProperty(r.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!0,configurable:!0}),r.prototype.createPopupTemplate=function(e){var r=this.rasterFields,t=this.title,o=new Set,p=!1,a=!1;this.capabilities&&(a=(p=this.capabilities&&this.capabilities.some((function(e){return"catalog"===e.toLowerCase()}))||this.fields&&this.fields.length>0)&&("esriImageServiceDataTypeVector-UV"===this.serviceDataType||"esriImageServiceDataTypeVector-MagDir"===this.serviceDataType));var i=new Set;p&&(i.add("raster.itempixelvalue"),a&&i.add("raster.magnitude").add("raster.direction"));for(var n=0,l=r;n<l.length;n++){var s=l[n],c=s.name.toLowerCase();i.has(c)||c.indexOf("raster.servicepixelvalue.")>-1||o.add(s.name)}return L.createPopupTemplate({fields:r,title:t,visibleFieldNames:o},e)},r.prototype.redraw=function(){this.emit("redraw")},o([u.property(b.legendEnabled)],r.prototype,"legendEnabled",void 0),o([u.property({type:["show","hide"]})],r.prototype,"listMode",void 0),o([u.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],r.prototype,"isReference",void 0),o([u.property({type:["ArcGISImageServiceLayer"]})],r.prototype,"operationalLayerType",void 0),o([u.property(b.popupEnabled)],r.prototype,"popupEnabled",void 0),o([u.property({type:n,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],r.prototype,"popupTemplate",void 0),o([u.property({readOnly:!0,dependsOn:["fields","title"]})],r.prototype,"defaultPopupTemplate",null),o([u.property({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),r=o([u.subclass("esri.layers.ImageryLayer")],r)}(u.declared(h.TemporalLayer(S.RefreshableLayer(g.ScaleRangeLayer(v.OperationalLayer(f.PortalLayer(y.ArcGISImageService(m.ArcGISService(s.MultiOriginJSONMixin(d))))))))))}));