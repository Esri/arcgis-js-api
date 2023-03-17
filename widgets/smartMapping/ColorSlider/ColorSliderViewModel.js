/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/Error","../../../core/has","../../../core/accessorSupport/decorators/subclass","../SmartMappingPrimaryHandleSliderViewModel"],(function(r,e,o,s,t,c,i,n,l){"use strict";let a=function(e){function o(r){return e.call(this,r)||this}return r._inheritsLoose(o,e),o.prototype.getStopInfo=function(){const{min:r,max:e,stops:o}=this;return o&&o.length?o.map((o=>({color:o.color,offset:(e-o.value)/(e-r)}))):[]},o}(l);a=e.__decorate([n.subclass("esri.widgets.smartMapping.ColorSlider.ColorSliderViewModel")],a);return a}));
