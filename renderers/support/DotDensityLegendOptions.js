/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport"],(function(r,e,o,t,s,n,u,p,c,i,l){"use strict";var a;let d=a=function(e){function o(){var r;return(r=e.apply(this,arguments)||this).unit=null,r}return r._inheritsLoose(o,e),o.prototype.clone=function(){return new a({unit:this.unit})},o}(l.JSONSupport);return e.__decorate([n.property({type:String,json:{write:!0}})],d.prototype,"unit",void 0),d=a=e.__decorate([u.subclass("esri.renderers.support.DotDensityLegendOptions")],d),d}));
