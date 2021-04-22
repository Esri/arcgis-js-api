/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/lang","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","./PointCloudFilter"],(function(e,o,r,t,s,u,i,l,c,n,p,a,d){"use strict";var y;let v=y=function(o){function r(e){var r;return(r=o.call(this,e)||this).mode="exclude",r.type="value",r.values=[],r}return e._inheritsLoose(r,o),r.prototype.clone=function(){return new y({field:this.field,mode:this.mode,values:t.clone(this.values)})},r}(d);return o.__decorate([i.property({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"mode",void 0),o.__decorate([l.enumeration({pointCloudValueFilter:"value"})],v.prototype,"type",void 0),o.__decorate([i.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"values",void 0),v=y=o.__decorate([c.subclass("esri.layers.pointCloudFilters.PointCloudValueFilter")],v),v}));
