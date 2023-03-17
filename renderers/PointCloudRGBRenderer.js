/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./PointCloudRenderer"],(function(e,r,o,t,n,s,c,i){"use strict";var p;let u=p=function(r){function t(e){var o;return(o=r.call(this,e)||this).type="point-cloud-rgb",o.field=null,o}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new p({...this.cloneProperties(),field:o.clone(this.field)})},t}(i);r.__decorate([s.enumeration({pointCloudRGBRenderer:"point-cloud-rgb"})],u.prototype,"type",void 0),r.__decorate([t.property({type:String,json:{write:!0}})],u.prototype,"field",void 0),u=p=r.__decorate([c.subclass("esri.renderers.PointCloudRGBRenderer")],u);return u}));
