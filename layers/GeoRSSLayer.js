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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../config","../request","../core/Error","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","../symbols/PictureMarkerSymbol","../symbols/SimpleFillSymbol","../symbols/SimpleLineSymbol"],function(e,r,o,t,i,l,p,n,a,s,y,u,c,d,S,f,v,m){return function(r){function y(e,o){var t=r.call(this)||this;return t.description=null,t.title=null,t.lineSymbol=null,t.pointSymbol=null,t.polygonSymbol=null,t.outSpatialReference=null,t.url=null,t.type="geo-rss",t}return t(y,r),y.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?o({url:e},r):e},y.prototype.readFeatureCollections=function(e,r){return r.featureCollection.layers},y.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]}).always(function(){return e._fetchService()})),this.when()},y.prototype.importLayerViewModule=function(r){switch(r.type){case"2d":return a.create(function(r){return e(["../views/2d/layers/GeoRSSLayerView2D"],r)});case"3d":return a.reject(new n("geo-rss-layer:view-not-supported","GeoRSSLayer is only supported in 2D"))}},y.prototype._fetchService=function(){var e=this;return a.resolve().then(function(){return p(l.geoRSSServiceUrl,{callbackParamName:"callback",query:{url:e.url,refresh:!!e.loaded||void 0,outSR:e.outSpatialReference?JSON.stringify(e.outSpatialReference.toJSON()):void 0}})}).then(function(r){e.read(r.data,{origin:"service"})})},i([s.property()],y.prototype,"description",void 0),i([s.property()],y.prototype,"title",void 0),i([s.property()],y.prototype,"featureCollections",void 0),i([s.reader("service","featureCollections",["featureCollection.layers"])],y.prototype,"readFeatureCollections",null),i([s.property({type:m})],y.prototype,"lineSymbol",void 0),i([s.property({type:f})],y.prototype,"pointSymbol",void 0),i([s.property({type:v})],y.prototype,"polygonSymbol",void 0),i([s.property()],y.prototype,"outSpatialReference",void 0),i([s.property()],y.prototype,"url",void 0),i([s.property({readOnly:!0,json:{read:!1},value:"geo-rss"})],y.prototype,"type",void 0),y=i([s.subclass("esri.layers.GeoRSSLayer")],y)}(s.declared(y,u,c,d,S))});