/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(r,o,e,t,s,c,p,n,u){"use strict";var i;let l=i=function(o){function e(r){var e;return(e=o.call(this,r)||this).color=null,e.ratio=null,e}return r._inheritsLoose(e,o),e.prototype.clone=function(){return new i({color:this.color,ratio:this.ratio})},e}(t.JSONSupport);return o.__decorate([s.property({type:e,json:{write:!0}})],l.prototype,"color",void 0),o.__decorate([s.property({type:Number,json:{write:!0}})],l.prototype,"ratio",void 0),l=i=o.__decorate([u.subclass("esri.renderers.support.HeatmapColorStop")],l),l}));
