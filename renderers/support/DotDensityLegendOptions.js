/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(r,e,t,o,s,n,p,u){"use strict";var c;let i=c=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).unit=null,r}return r._inheritsLoose(t,e),t.prototype.clone=function(){return new c({unit:this.unit})},t}(t.JSONSupport);e.__decorate([o.property({type:String,json:{write:!0}})],i.prototype,"unit",void 0),i=c=e.__decorate([u.subclass("esri.renderers.support.DotDensityLegendOptions")],i);return i}));
