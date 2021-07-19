/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../support/LegendOptions"],(function(e,r,o,s,t,n,p,c){"use strict";var i;let u=i=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).showLegend=null,e}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new i({title:this.title,showLegend:this.showLegend})},o}(c.default);return r.__decorate([o.property({type:Boolean,json:{write:!0}})],u.prototype,"showLegend",void 0),u=i=r.__decorate([p.subclass("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],u),u}));
