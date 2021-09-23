/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../Graphic","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../geometry/SpatialReference","./NAMessage","../../geometry/Point","../../geometry/Polyline","../../geometry/Polygon","../../geometry/support/jsonUtils"],(function(e,r,o,t,a,s,i,n,p,l,c,y,u,d,_,g,f,P){"use strict";function m(e){return e.features.map((r=>{const o=u.fromJSON(e.spatialReference),a=t.fromJSON(r);return s.unwrap(a.geometry).spatialReference=o,a}))}function v(e){return s.filterNones(e.features.map((r=>(s.isSome(r.geometry)&&(r.geometry.spatialReference=e.spatialReference),P.fromJSON(r.geometry)))))}let S=function(r){function o(e){var o;return(o=r.call(this,e)||this).facilities=null,o.messages=null,o.pointBarriers=null,o.polylineBarriers=null,o.polygonBarriers=null,o.serviceAreaPolylines=null,o.serviceAreaPolygons=null,o}e._inheritsLoose(o,r);var t=o.prototype;return t.readFacilities=function(e){return v(e)},t.readPointBarriers=function(e,r){return v(r.barriers)},t.readPolylineBarriers=function(e){return v(e)},t.readPolygonBarriers=function(e){return v(e)},t.readIncidents=function(e,r){return m(r.saPolylines)},t.readServiceAreaPolygons=function(e,r){return m(r.saPolygons)},o}(a.JSONSupport);return r.__decorate([i.property({type:[_]})],S.prototype,"facilities",void 0),r.__decorate([c.reader("facilities")],S.prototype,"readFacilities",null),r.__decorate([i.property({type:[d]})],S.prototype,"messages",void 0),r.__decorate([i.property({type:[_]})],S.prototype,"pointBarriers",void 0),r.__decorate([c.reader("pointBarriers",["barriers"])],S.prototype,"readPointBarriers",null),r.__decorate([i.property({type:[g]})],S.prototype,"polylineBarriers",void 0),r.__decorate([c.reader("polylineBarriers")],S.prototype,"readPolylineBarriers",null),r.__decorate([i.property({type:[f]})],S.prototype,"polygonBarriers",void 0),r.__decorate([c.reader("polygonBarriers")],S.prototype,"readPolygonBarriers",null),r.__decorate([i.property({type:[t]})],S.prototype,"serviceAreaPolylines",void 0),r.__decorate([c.reader("serviceAreaPolylines",["saPolylines"])],S.prototype,"readIncidents",null),r.__decorate([i.property({type:[t]})],S.prototype,"serviceAreaPolygons",void 0),r.__decorate([c.reader("serviceAreaPolygons",["saPolygons"])],S.prototype,"readServiceAreaPolygons",null),S=r.__decorate([y.subclass("esri.rest.support.ServiceAreaSolveResult")],S),S}));
