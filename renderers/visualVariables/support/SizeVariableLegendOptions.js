/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","./VisualVariableLegendOptions"],(function(e,s,r,t,o,u,c,i){"use strict";var n;let a=n=function(s){function r(){var e;return(e=s.apply(this,arguments)||this).customValues=null,e}return e._inheritsLoose(r,s),r.prototype.clone=function(){return new n({title:this.title,showLegend:this.showLegend,customValues:this.customValues&&this.customValues.slice(0)})},r}(i);return s.__decorate([r.property({type:[Number],json:{write:!0}})],a.prototype,"customValues",void 0),a=n=s.__decorate([c.subclass("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],a),a}));
