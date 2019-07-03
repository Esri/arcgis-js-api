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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../config","../request","../core/Error","../core/maybe","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./support/commonProperties","../symbols/PictureMarkerSymbol","../symbols/SimpleFillSymbol","../symbols/SimpleLineSymbol"],function(e,r,t,o,i,n,l,p,s,u,a,y,c,d,S,f,v,m,h,g,b,R){return function(r){function d(e,t){var o=r.call(this)||this;return o.description=null,o.title=null,o.lineSymbol=null,o.pointSymbol=null,o.polygonSymbol=null,o.outSpatialReference=null,o.url=null,o.type="geo-rss",o}return o(d,r),d.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},d.prototype.readFeatureCollections=function(e,r){return r.featureCollection.layers.forEach(function(e){var r=e.layerDefinition.drawingInfo.renderer.symbol;r&&"esriSFS"===r.type&&r.outline&&-1!==r.outline.style.indexOf("esriSFS")&&(r.outline.style="esriSLSSolid")}),r.featureCollection.layers},d.prototype.load=function(e){var r=this,t=a.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).then(function(){return r._fetchService(t)},function(){return r._fetchService(t)})),this.when()},d.prototype.importLayerViewModule=function(r){return l(this,void 0,void 0,function(){return n(this,function(t){switch(r.type){case"2d":return[2,y.create(function(r){return e(["../views/2d/layers/GeoRSSLayerView2D"],r)})];case"3d":return[2,y.reject(new u("geo-rss-layer:view-not-supported","GeoRSSLayer is only supported in 2D"))]}return[2]})})},d.prototype._fetchService=function(e){return l(this,void 0,void 0,function(){var r;return n(this,function(t){switch(t.label){case 0:return[4,s(p.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e})];case 1:return r=t.sent().data,this.read(r,{origin:"service"}),[2]}})})},i([c.property()],d.prototype,"description",void 0),i([c.property()],d.prototype,"title",void 0),i([c.property()],d.prototype,"featureCollections",void 0),i([c.reader("service","featureCollections",["featureCollection.layers"])],d.prototype,"readFeatureCollections",null),i([c.property({type:R})],d.prototype,"lineSymbol",void 0),i([c.property({type:["show","hide"]})],d.prototype,"listMode",void 0),i([c.property({type:g})],d.prototype,"pointSymbol",void 0),i([c.property({type:b})],d.prototype,"polygonSymbol",void 0),i([c.property()],d.prototype,"outSpatialReference",void 0),i([c.property(h.url)],d.prototype,"url",void 0),i([c.property({readOnly:!0,json:{read:!1},value:"geo-rss"})],d.prototype,"type",void 0),d=i([c.subclass("esri.layers.GeoRSSLayer")],d)}(c.declared(d,S,f,v,m))});