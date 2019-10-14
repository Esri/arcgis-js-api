// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../config","../request","../core/Error","../core/maybe","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./support/commonProperties","../symbols/PictureMarkerSymbol","../symbols/SimpleFillSymbol","../symbols/SimpleLineSymbol"],function(e,r,t,o,i,n,l,p,s,a,u,y,c,S,d,f,v,h,m,g,b,L,R){return function(r){function y(e,t){var o=r.call(this)||this;return o.description=null,o.title=null,o.lineSymbol=null,o.pointSymbol=null,o.polygonSymbol=null,o.outSpatialReference=null,o.url=null,o.type="geo-rss",o}return o(y,r),y.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},y.prototype.readFeatureCollections=function(e,r){return r.featureCollection.layers.forEach(function(e){var r=e.layerDefinition.drawingInfo.renderer.symbol;r&&"esriSFS"===r.type&&r.outline&&-1!==r.outline.style.indexOf("esriSFS")&&(r.outline.style="esriSLSSolid")}),r.featureCollection.layers},y.prototype.load=function(e){var r=this,t=u.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).then(function(){return r._fetchService(t)},function(){return r._fetchService(t)})),this.when()},y.prototype.importLayerViewModule=function(r){return l(this,void 0,void 0,function(){return n(this,function(t){switch(r.type){case"2d":return[2,c.create(function(r){return e(["../views/2d/layers/GeoRSSLayerView2D"],r)})];case"3d":return[2,c.reject(new a("geo-rss-layer:view-not-supported","GeoRSSLayer is only supported in 2D"))]}return[2]})})},y.prototype._fetchService=function(e){return l(this,void 0,void 0,function(){var r;return n(this,function(t){switch(t.label){case 0:return[4,s(p.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e})];case 1:return r=t.sent().data,this.read(r,{origin:"service"}),[2]}})})},i([S.property()],y.prototype,"description",void 0),i([S.property()],y.prototype,"title",void 0),i([S.property()],y.prototype,"featureCollections",void 0),i([S.reader("service","featureCollections",["featureCollection.layers"])],y.prototype,"readFeatureCollections",null),i([S.property({type:R})],y.prototype,"lineSymbol",void 0),i([S.property({type:["show","hide"]})],y.prototype,"listMode",void 0),i([S.property({type:b})],y.prototype,"pointSymbol",void 0),i([S.property({type:L})],y.prototype,"polygonSymbol",void 0),i([S.property()],y.prototype,"outSpatialReference",void 0),i([S.property(g.url)],y.prototype,"url",void 0),i([S.property({readOnly:!0,json:{read:!1},value:"geo-rss"})],y.prototype,"type",void 0),y=i([S.subclass("esri.layers.GeoRSSLayer")],y)}(S.declared(h.RefreshableLayer(f.OperationalLayer(v.PortalLayer(m.ScaleRangeLayer(y.MultiOriginJSONMixin(d)))))))});