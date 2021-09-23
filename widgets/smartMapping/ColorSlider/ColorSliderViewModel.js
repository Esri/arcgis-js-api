/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../SmartMappingPrimaryHandleSliderViewModel"],(function(e,r,o,t,s,c,n,p){"use strict";let i=function(r){function o(e){return r.call(this,e)||this}return e._inheritsLoose(o,r),o.prototype.getStopInfo=function(){const{min:e,max:r,stops:o}=this;return o&&o.length?o.map((o=>({color:o.color,offset:(r-o.value)/(r-e)}))):[]},e._createClass(o,[{key:"stops",get:function(){return this.stops}}]),o}(p);return r.__decorate([o.property()],i.prototype,"stops",null),i=r.__decorate([n.subclass("esri.widgets.smartMapping.ColorSlider.ColorSliderViewModel")],i),i}));
