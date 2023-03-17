/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(e,r,s,t,o,a){"use strict";const c=t=>{let o=function(r){function s(){return r.apply(this,arguments)||this}return e._inheritsLoose(s,r),e._createClass(s,[{key:"availableFields",get:function(){return this.layer.fieldsIndex.fields.map((e=>e.name))}}]),s}(t);return r.__decorate([s.property()],o.prototype,"layer",void 0),r.__decorate([s.property({readOnly:!0})],o.prototype,"availableFields",null),o=r.__decorate([a.subclass("esri.views.layers.OGCFeatureLayerView")],o),o};return c}));
