/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","./VisualVariableLegendOptions"],(function(e,s,r,o,t,u,c,i,n,l,a){"use strict";var p;let d=p=function(s){function r(){var e;return(e=s.apply(this,arguments)||this).customValues=null,e}return e._inheritsLoose(r,s),r.prototype.clone=function(){return new p({title:this.title,showLegend:this.showLegend,customValues:this.customValues&&this.customValues.slice(0)})},r}(a);return s.__decorate([u.property({type:[Number],json:{write:!0}})],d.prototype,"customValues",void 0),d=p=s.__decorate([c.subclass("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],d),d}));
