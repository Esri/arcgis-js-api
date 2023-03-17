/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(r,o,e,t,s,p,c,n){"use strict";var u;let l=u=function(o){function e(r){var e;return(e=o.call(this,r)||this).color=null,e.ratio=null,e}return r._inheritsLoose(e,o),e.prototype.clone=function(){return new u({color:this.color,ratio:this.ratio})},e}(t.JSONSupport);o.__decorate([s.property({type:e,json:{type:[p.Integer],default:null,write:!0}})],l.prototype,"color",void 0),o.__decorate([s.property({type:Number,json:{write:!0}})],l.prototype,"ratio",void 0),l=u=o.__decorate([n.subclass("esri.renderers.support.HeatmapColorStop")],l);return l}));
