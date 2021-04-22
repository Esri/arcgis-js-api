/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/lang","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","./PointCloudRenderer","./support/LegendOptions","./visualVariables/support/ColorStop"],(function(e,r,o,t,s,p,n,i,l,c,a,d,u,y,f){"use strict";var T;let h=T=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="point-cloud-stretch",o.field=null,o.legendOptions=null,o.fieldTransformType=null,o.stops=null,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new T({...this.cloneProperties(),field:t.clone(this.field),fieldTransformType:t.clone(this.fieldTransformType),stops:t.clone(this.stops),legendOptions:t.clone(this.legendOptions)})},o}(u);return r.__decorate([i.enumeration({pointCloudStretchRenderer:"point-cloud-stretch"})],h.prototype,"type",void 0),r.__decorate([n.property({json:{write:!0},type:String})],h.prototype,"field",void 0),r.__decorate([n.property({type:y.default,json:{write:!0}})],h.prototype,"legendOptions",void 0),r.__decorate([n.property({type:u.fieldTransformTypeKebabDict.apiValues,json:{type:u.fieldTransformTypeKebabDict.jsonValues,read:u.fieldTransformTypeKebabDict.read,write:u.fieldTransformTypeKebabDict.write}})],h.prototype,"fieldTransformType",void 0),r.__decorate([n.property({type:[f],json:{write:!0}})],h.prototype,"stops",void 0),h=T=r.__decorate([l.subclass("esri.renderers.PointCloudStretchRenderer")],h),h}));
