/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(r,e,t,o,s,n,p){"use strict";var u;let c=u=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).unit=null,r}return r._inheritsLoose(t,e),t.prototype.clone=function(){return new u({unit:this.unit})},t}(t.JSONSupport);e.__decorate([o.property({type:String,json:{write:!0}})],c.prototype,"unit",void 0),c=u=e.__decorate([p.subclass("esri.renderers.support.DotDensityLegendOptions")],c);return c}));
