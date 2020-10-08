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

define(["require","exports","tslib","../config","../request","../symbols","../core/maybe","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/BlendLayer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./support/commonProperties","../symbols/SimpleFillSymbol","../symbols/SimpleLineSymbol"],(function(e,r,t,o,i,l,n,a,s,p,y,c,u,d,S,f,_,v,m){"use strict";return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var o=e.apply(this,r)||this;return o.description=null,o.title=null,o.lineSymbol=null,o.pointSymbol=null,o.polygonSymbol=null,o.outSpatialReference=null,o.url=null,o.type="geo-rss",o}return t.__extends(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t.__assign({url:e},r):e},r.prototype.readFeatureCollections=function(e,r){return r.featureCollection.layers.forEach((function(e){var r=e.layerDefinition.drawingInfo.renderer.symbol;r&&"esriSFS"===r.type&&r.outline&&-1!==r.outline.style.indexOf("esriSFS")&&(r.outline.style="esriSLSSolid")})),r.featureCollection.layers},r.prototype.load=function(e){var r=this,t=n.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).then((function(){return r._fetchService(t)}),(function(){return r._fetchService(t)}))),s.resolve(this)},r.prototype._fetchService=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,i(o.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e})];case 1:return r=t.sent().data,this.read(r,{origin:"service"}),[2]}}))}))},t.__decorate([p.property()],r.prototype,"description",void 0),t.__decorate([p.property()],r.prototype,"title",void 0),t.__decorate([p.property()],r.prototype,"featureCollections",void 0),t.__decorate([p.reader("service","featureCollections",["featureCollection.layers"])],r.prototype,"readFeatureCollections",null),t.__decorate([p.property({type:m})],r.prototype,"lineSymbol",void 0),t.__decorate([p.property({type:["show","hide"]})],r.prototype,"listMode",void 0),t.__decorate([p.property({types:l.symbolTypes})],r.prototype,"pointSymbol",void 0),t.__decorate([p.property({type:v})],r.prototype,"polygonSymbol",void 0),t.__decorate([p.property()],r.prototype,"outSpatialReference",void 0),t.__decorate([p.property(_.url)],r.prototype,"url",void 0),t.__decorate([p.property({readOnly:!0,json:{read:!1},value:"geo-rss"})],r.prototype,"type",void 0),r=t.__decorate([p.subclass("esri.layers.GeoRSSLayer")],r)}(c.BlendLayer(S.RefreshableLayer(u.OperationalLayer(d.PortalLayer(f.ScaleRangeLayer(a.MultiOriginJSONMixin(y)))))))}));