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

define(["require","exports","tslib","../../../geometry","../../../core/Error","../../../core/Loadable","../../../core/maybe","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../ogc/ogcFeatureUtils"],(function(e,t,o,r,n,i,l,a,u,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OGCFeatureSource=void 0;var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.collection=null,t.conformance=null,t.landingPage=null,t.layerDefinition=null,t.type="ogc-feature",t}return o.__extends(t,e),t.prototype.load=function(e){var t=this,o=l.isSome(e)?e.signal:null,i=this.layer,u=i.collectionId,p=i.fields,d=i.geometryType,s=i.hasZ,y=i.mediaType,f=i.objectIdField,v=i.spatialReference,g=i.timeInfo,h=i.url,m={fields:null==p?void 0:p.map((function(e){return e.toJSON()})),geometryType:r.typeKebabDictionary.toJSON(d),hasZ:s,objectIdField:f,spatialReference:null==v?void 0:v.toJSON(),timeInfo:null==g?void 0:g.toJSON()};return this.addResolvingPromise(a.all([c.getServerLandingPage(h,y,o),c.getServerConformance(h,y,o),c.getServerCollection(h,u,y,o),c.getCollectionDefinition(h,u,m,o)]).then((function(e){var o=e[0],r=e[1],i=e[2],l=e[3];t.set({landingPage:o,conformance:r,collection:i,layerDefinition:l});var a="www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson";if(!(-1!==(null==r?void 0:r.conformsTo.indexOf("http://"+a))||-1!==(null==r?void 0:r.conformsTo.indexOf("https://"+a))))throw new n("ogc-feature-layer:no-geojson-support","Server does not support geojson")}))),this.when()},Object.defineProperty(t.prototype,"fullExtent",{get:function(){var e,t,o=null===(t=null===(e=this.collection)||void 0===e?void 0:e.extent)||void 0===t?void 0:t.spatial;if(!o)return null;var n=o.bbox[0],i=4===n.length,l=n[0],a=n[1],u=i?void 0:n[2],c=i?n[2]:n[3],p=i?n[3]:n[4],d=i?void 0:n[5],s=r.SpatialReference.WGS84;return new r.Extent({xmin:l,ymin:a,xmax:c,ymax:p,zmin:u,zmax:d,spatialReference:s})},enumerable:!1,configurable:!0}),t.prototype.queryExtent=function(e,t){return void 0===t&&(t={}),null},t.prototype.queryFeatureCount=function(e,t){return void 0===t&&(t={}),null},t.prototype.queryFeatures=function(e,t){void 0===t&&(t={});var o=this._getFeatureDefinition();return this.load(t).then((function(){return c.queryFeatureSet(o,e,t)}))},t.prototype.queryFeaturesJSON=function(e,t){void 0===t&&(t={});var o=this._getFeatureDefinition();return this.load(t).then((function(){return c.queryFeatureSetJSON(o,e,t)}))},t.prototype.queryObjectIds=function(e,t){return void 0===t&&(t={}),null},t.prototype._getFeatureDefinition=function(){var e=this.layer,t=e.capabilities,o=e.collectionId,r=e.url;return{capabilities:t,collectionId:o,layerDefinition:this.layerDefinition,url:r}},o.__decorate([u.property()],t.prototype,"collection",void 0),o.__decorate([u.property()],t.prototype,"conformance",void 0),o.__decorate([u.property({dependsOn:["collection"],readOnly:!0,type:r.Extent})],t.prototype,"fullExtent",null),o.__decorate([u.property()],t.prototype,"landingPage",void 0),o.__decorate([u.property({constructOnly:!0})],t.prototype,"layer",void 0),o.__decorate([u.property()],t.prototype,"layerDefinition",void 0),o.__decorate([u.property()],t.prototype,"type",void 0),t=o.__decorate([u.subclass("esri.layers.graphics.sources.OGCFeatureSource")],t)}(i);t.OGCFeatureSource=p,t.default=p}));