/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../support/LegendOptions"],(function(e,r,s,o,t,n,i,p){"use strict";var c;let u=c=function(r){function s(){var e;return(e=r.apply(this,arguments)||this).showLegend=null,e}return e._inheritsLoose(s,r),s.prototype.clone=function(){return new c({title:this.title,showLegend:this.showLegend})},s}(p.default);r.__decorate([s.property({type:Boolean,json:{write:!0}})],u.prototype,"showLegend",void 0),u=c=r.__decorate([i.subclass("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],u);return u}));
