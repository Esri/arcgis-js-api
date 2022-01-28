/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(r,o,e,t,s,c,p,n,u){"use strict";var i;let a=i=function(o){function e(r){var e;return(e=o.call(this,r)||this).color=null,e.ratio=null,e}return r._inheritsLoose(e,o),e.prototype.clone=function(){return new i({color:this.color,ratio:this.ratio})},e}(t.JSONSupport);o.__decorate([s.property({type:e,json:{write:!0}})],a.prototype,"color",void 0),o.__decorate([s.property({type:Number,json:{write:!0}})],a.prototype,"ratio",void 0),a=i=o.__decorate([u.subclass("esri.renderers.support.HeatmapColorStop")],a);return a}));
