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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","./Layer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","../core/promiseUtils","../config","../request","../symbols/SimpleLineSymbol","../symbols/PictureMarkerSymbol","../symbols/SimpleFillSymbol"],function(e,r,o,t,l,i,p,n,a,s,y,u,c,d,S,v,f){var m=function(e){function r(r,o){var t=e.call(this)||this;return t.description=null,t.title=null,t.lineSymbol=null,t.pointSymbol=null,t.polygonSymbol=null,t.outSpatialReference=null,t.url=null,t.type="geo-rss",t}return o(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?i.mixin({},{url:e},r):e},r.prototype.readFeatureCollections=function(e,r){return r.featureCollection.layers},r.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]}).always(function(){return e._fetchService()})),this.when()},r.prototype._fetchService=function(){var e=this;return u.resolve().then(function(){return d(c.geoRSSServiceUrl,{callbackParamName:"callback",query:{url:e.url,refresh:e.loaded?!0:void 0,outSR:e.outSpatialReference?JSON.stringify(e.outSpatialReference.toJSON()):void 0}})}).then(function(r){e.read(r.data,{origin:"service"})})},t([l.shared({"2d":"../views/2d/layers/GeoRSSLayerView2D"})],r.prototype,"viewModulePaths",void 0),t([l.property()],r.prototype,"description",void 0),t([l.property()],r.prototype,"title",void 0),t([l.property()],r.prototype,"featureCollections",void 0),t([l.reader("service","featureCollections",["featureCollection.layers"])],r.prototype,"readFeatureCollections",null),t([l.property({type:S})],r.prototype,"lineSymbol",void 0),t([l.property({type:v})],r.prototype,"pointSymbol",void 0),t([l.property({type:f})],r.prototype,"polygonSymbol",void 0),t([l.property()],r.prototype,"outSpatialReference",void 0),t([l.property()],r.prototype,"url",void 0),t([l.property({readOnly:!0,json:{read:!1},value:"geo-rss"})],r.prototype,"type",void 0),r=t([l.subclass("esri.layers.GeoRSSLayer")],r)}(l.declared(p,n,a,s,y));return m});