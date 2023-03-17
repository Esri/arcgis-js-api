/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass","../../support/LegendOptions"],(function(e,r,s,o,t,n,i){"use strict";var p;let c=p=function(r){function s(){var e;return(e=r.apply(this,arguments)||this).showLegend=null,e}return e._inheritsLoose(s,r),s.prototype.clone=function(){return new p({title:this.title,showLegend:this.showLegend})},s}(i.LegendOptions);r.__decorate([s.property({type:Boolean,json:{write:!0}})],c.prototype,"showLegend",void 0),c=p=r.__decorate([n.subclass("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],c);return c}));
