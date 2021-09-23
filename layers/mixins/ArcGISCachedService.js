/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../support/serviceTileInfoProperty","../support/TilemapCache","../../geometry/SpatialReference"],(function(e,r,o,t,a,p,c,i,l,n,s,u,d){"use strict";const y=e=>{let t=function(e){function o(){var r;return(r=e.apply(this,arguments)||this).copyright=null,r.minScale=0,r.maxScale=0,r.spatialReference=null,r.tileInfo=null,r.tilemapCache=null,r}r._inheritsLoose(o,e);var t=o.prototype;return t.readMinScale=function(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0},t.readMaxScale=function(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0},t.readTilemapCache=function(e,r){return r.capabilities&&r.capabilities.indexOf("Tilemap")>-1?new u.TilemapCache({layer:this}):null},r._createClass(o,[{key:"supportsBlankTile",get:function(){return this.version>=10.2}}]),o}(e);return o.__decorate([a.property({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),o.__decorate([a.property()],t.prototype,"minScale",void 0),o.__decorate([l.reader("service","minScale")],t.prototype,"readMinScale",null),o.__decorate([a.property()],t.prototype,"maxScale",void 0),o.__decorate([l.reader("service","maxScale")],t.prototype,"readMaxScale",null),o.__decorate([a.property({type:d})],t.prototype,"spatialReference",void 0),o.__decorate([a.property({readOnly:!0})],t.prototype,"supportsBlankTile",null),o.__decorate([a.property(s.serviceTileInfoProperty)],t.prototype,"tileInfo",void 0),o.__decorate([a.property()],t.prototype,"tilemapCache",void 0),o.__decorate([l.reader("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),o.__decorate([a.property()],t.prototype,"version",void 0),t=o.__decorate([n.subclass("esri.layers.mixins.ArcGISCachedService")],t),t};e.ArcGISCachedService=y,Object.defineProperty(e,"__esModule",{value:!0})}));
