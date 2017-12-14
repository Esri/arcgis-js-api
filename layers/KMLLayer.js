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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","../core/Collection","../core/promiseUtils","../core/CollectionFlattener","../geometry/SpatialReference","./Layer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./support/kmlUtils","./support/KMLSublayer"],function(e,r,t,o,i,l,s,a,n,p,u,y,c,d,b,f,h){var v=function(e){function r(r,t){var o=e.call(this)||this;return o._visibleFolders=[],o.allSublayers=new n({root:o,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return e.sublayers}}),o.outSpatialReference=p.WGS84,o.operationalLayerType="KML",o.sublayers=null,o.type="kml",o.url=null,o.watch("sublayers",function(e,r){r&&r.forEach(function(e){e.parent=null,e.layer=null}),e&&e.forEach(function(e){e.parent=o,e.layer=o})},!0),o}return t(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?l.mixin({},{url:e},r):e},r.prototype.readSublayersFromItemOrWebMap=function(e,r,t){this._visibleFolders=r.visibleFolders},r.prototype.readSublayers=function(e,r,t){var o=f.sublayersFromJSON(r,t,this._visibleFolders);return o},r.prototype.writeSublayers=function(e,r,t,o){for(var i=e,l=[],s=i.toArray();s.length;){var a=s[0];a.networkLink||(a.visible&&l.push(a.id),a.sublayers&&s.push.apply(s,a.sublayers.toArray())),s.shift()}r.visibleFolders=l},Object.defineProperty(r.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=this.url.substring(this.url.lastIndexOf("/")+1,this.parsedUrl.path.lastIndexOf("."));return 0===e.length&&(e="KML"),e}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visibleSublayers",{get:function(){var e=this.sublayers,r=[],t=function(e){e.visible&&(r.push(e),e.sublayers&&e.sublayers.forEach(t))};return e&&e.forEach(t),r},enumerable:!0,configurable:!0}),r.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]}).then(function(){return e._fetchService()})),this.when()},r.prototype._fetchService=function(){var e=this;return a.resolve().then(function(){return e.resourceInfo?{ssl:!1,data:e.resourceInfo}:f.fetchService(e.url,e.outSpatialReference,e.refreshInterval)}).then(function(r){var t=f.parseKML(r.data);t&&e.read(t,{origin:"service"})})},o([i.shared({"2d":"../views/2d/layers/KMLLayerView2D"})],r.prototype,"viewModulePaths",void 0),o([i.property({readOnly:!0})],r.prototype,"allSublayers",void 0),o([i.property({type:p})],r.prototype,"outSpatialReference",void 0),o([i.property()],r.prototype,"operationalLayerType",void 0),o([i.property({type:s.ofType(h),json:{write:{ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),o([i.reader(["web-map","portal-item"],"sublayers",["visibleFolders"])],r.prototype,"readSublayersFromItemOrWebMap",null),o([i.reader("service","sublayers",["sublayers"])],r.prototype,"readSublayers",null),o([i.writer("sublayers")],r.prototype,"writeSublayers",null),o([i.property({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),o([i.property({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}},dependsOn:["url","parsedUrl"]})],r.prototype,"title",null),o([i.property()],r.prototype,"url",void 0),o([i.property({readOnly:!0,dependsOn:["sublayers"]})],r.prototype,"visibleSublayers",null),r=o([i.subclass("esri.layers.KMLLayer")],r)}(i.declared(u,y,c,d,b));return v});