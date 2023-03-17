/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../../geometry/support/jsonUtils"],(function(e,r,o,t,s,p,c,n,i,u){"use strict";let l=function(r){function o(e){var o;return(o=r.call(this,e)||this).geometry=null,o.where=null,o}return e._inheritsLoose(o,r),o}(t.ClonableMixin(s.JSONSupport));r.__decorate([p.property({types:o.geometryTypes,json:{read:u.fromJSON,write:!0}})],l.prototype,"geometry",void 0),r.__decorate([p.property({type:String,json:{write:!0}})],l.prototype,"where",void 0),l=r.__decorate([i.subclass("esri.webdoc.geotriggersInfo.FeatureFilter")],l);return l}));
