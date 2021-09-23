/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","../../geometry/support/jsonUtils"],(function(e,t,r,o,s,a,p,i,n,l,c){"use strict";const y=new o.JSONMap({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"});let u=function(t){function r(e){var r;return(r=t.call(this,e)||this).doNotLocateOnRestrictedElements=null,r.geometry=null,r.name=null,r.spatialRelationship=null,r.type="layer",r.where=null,r}return e._inheritsLoose(r,t),r}(s.JSONSupport);return t.__decorate([a.property({type:Boolean,json:{write:!0}})],u.prototype,"doNotLocateOnRestrictedElements",void 0),t.__decorate([a.property({types:r.geometryTypes,json:{read:c.fromJSON,write:!0}})],u.prototype,"geometry",void 0),t.__decorate([a.property({type:String,json:{read:{source:"layerName"},write:{target:"layerName"}}})],u.prototype,"name",void 0),t.__decorate([a.property({type:String,json:{read:{source:"spatialRel",reader:y.read},write:{target:"spatialRel",writer:y.write}}})],u.prototype,"spatialRelationship",void 0),t.__decorate([a.property({type:String,json:{write:!0}})],u.prototype,"type",void 0),t.__decorate([a.property({type:String,json:{write:!0}})],u.prototype,"where",void 0),u=t.__decorate([l.subclass("esri.rest.support.DataLayer")],u),u}));
