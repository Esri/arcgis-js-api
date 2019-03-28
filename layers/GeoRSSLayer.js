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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../config","../request","../core/Error","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./support/commonProperties","../symbols/PictureMarkerSymbol","../symbols/SimpleFillSymbol","../symbols/SimpleLineSymbol"],function(e,r,o,t,i,n,l,p,s,a,u,y,c,d,S,f,v,m,h){return function(r){function u(e,o){var t=r.call(this)||this;return t.description=null,t.title=null,t.lineSymbol=null,t.pointSymbol=null,t.polygonSymbol=null,t.outSpatialReference=null,t.url=null,t.type="geo-rss",t}return t(u,r),u.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?o({url:e},r):e},u.prototype.readFeatureCollections=function(e,r){return r.featureCollection.layers.forEach(function(e){var r=e.layerDefinition.drawingInfo.renderer.symbol;r&&"esriSFS"===r.type&&r.outline&&-1!==r.outline.style.indexOf("esriSFS")&&(r.outline.style="esriSLSSolid")}),r.featureCollection.layers},u.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]}).then(function(){return e._fetchService()},function(){return e._fetchService()})),this.when()},u.prototype.importLayerViewModule=function(r){switch(r.type){case"2d":return s.create(function(r){return e(["../views/2d/layers/GeoRSSLayerView2D"],r)});case"3d":return s.reject(new p("geo-rss-layer:view-not-supported","GeoRSSLayer is only supported in 2D"))}},u.prototype._fetchService=function(){var e=this;return s.resolve().then(function(){return l(n.geoRSSServiceUrl,{query:{url:e.url,refresh:!!e.loaded||void 0,outSR:e.outSpatialReference?JSON.stringify(e.outSpatialReference.toJSON()):void 0}})}).then(function(r){e.read(r.data,{origin:"service"})})},i([a.property()],u.prototype,"description",void 0),i([a.property()],u.prototype,"title",void 0),i([a.property()],u.prototype,"featureCollections",void 0),i([a.reader("service","featureCollections",["featureCollection.layers"])],u.prototype,"readFeatureCollections",null),i([a.property({type:h})],u.prototype,"lineSymbol",void 0),i([a.property({type:["show","hide"]})],u.prototype,"listMode",void 0),i([a.property({type:v})],u.prototype,"pointSymbol",void 0),i([a.property({type:m})],u.prototype,"polygonSymbol",void 0),i([a.property()],u.prototype,"outSpatialReference",void 0),i([a.property(f.url)],u.prototype,"url",void 0),i([a.property({readOnly:!0,json:{read:!1},value:"geo-rss"})],u.prototype,"type",void 0),u=i([a.subclass("esri.layers.GeoRSSLayer")],u)}(a.declared(u,y,c,d,S))});