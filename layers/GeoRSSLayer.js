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

define(["require","exports","tslib","../config","../request","../symbols","../core/maybe","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./support/commonProperties","../symbols/SimpleFillSymbol","../symbols/SimpleLineSymbol","../symbols/support/jsonUtils"],(function(e,r,o,t,i,l,n,a,s,p,y,u,c,d,S,f,_,v,m){return function(e){function r(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];var t=e.apply(this,r)||this;return t.description=null,t.title=null,t.lineSymbol=null,t.pointSymbol=null,t.polygonSymbol=null,t.outSpatialReference=null,t.url=null,t.type="geo-rss",t}return o.__extends(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?o.__assign({url:e},r):e},r.prototype.readFeatureCollections=function(e,r){return r.featureCollection.layers.forEach((function(e){var r=e.layerDefinition.drawingInfo.renderer.symbol;r&&"esriSFS"===r.type&&r.outline&&-1!==r.outline.style.indexOf("esriSFS")&&(r.outline.style="esriSLSSolid")})),r.featureCollection.layers},r.prototype.load=function(e){var r=this,o=n.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).then((function(){return r._fetchService(o)}),(function(){return r._fetchService(o)}))),s.resolve(this)},r.prototype._fetchService=function(e){return o.__awaiter(this,void 0,void 0,(function(){var r;return o.__generator(this,(function(o){switch(o.label){case 0:return[4,i(t.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e})];case 1:return r=o.sent().data,this.read(r,{origin:"service"}),[2]}}))}))},o.__decorate([p.property()],r.prototype,"description",void 0),o.__decorate([p.property()],r.prototype,"title",void 0),o.__decorate([p.property()],r.prototype,"featureCollections",void 0),o.__decorate([p.reader("service","featureCollections",["featureCollection.layers"])],r.prototype,"readFeatureCollections",null),o.__decorate([p.property({type:v})],r.prototype,"lineSymbol",void 0),o.__decorate([p.property({type:["show","hide"]})],r.prototype,"listMode",void 0),o.__decorate([p.property({types:l.symbolTypes,json:{read:m.read}})],r.prototype,"pointSymbol",void 0),o.__decorate([p.property({type:_})],r.prototype,"polygonSymbol",void 0),o.__decorate([p.property()],r.prototype,"outSpatialReference",void 0),o.__decorate([p.property(f.url)],r.prototype,"url",void 0),o.__decorate([p.property({readOnly:!0,json:{read:!1},value:"geo-rss"})],r.prototype,"type",void 0),r=o.__decorate([p.subclass("esri.layers.GeoRSSLayer")],r)}(d.RefreshableLayer(u.OperationalLayer(c.PortalLayer(S.ScaleRangeLayer(a.MultiOriginJSONMixin(y))))))}));