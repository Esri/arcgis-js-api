/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,l,n){"use strict";let c=function(r){function o(e){var o;return(o=r.call(this,e)||this).field=null,o.type=null,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},o}(o.JSONSupport);r.__decorate([t.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"field",void 0),r.__decorate([t.property({readOnly:!0,nonNullable:!0,json:{read:!1}})],c.prototype,"type",void 0),c=r.__decorate([n.subclass("esri.layers.pointCloudFilters.PointCloudFilter")],c);return c}));
