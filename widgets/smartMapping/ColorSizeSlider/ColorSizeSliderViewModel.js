/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../SizeSlider/SizeSliderViewModel"],(function(e,r,o,t,s,c,i,l){"use strict";let n=function(r){function o(e){return r.call(this,e)||this}return e._inheritsLoose(o,r),o.prototype.getStopInfo=function(){const{min:e,max:r,stops:o}=this;return o&&o.length?o.map((o=>({color:o.color,offset:(r-o.value)/(r-e)}))):[]},e._createClass(o,[{key:"stops",get:function(){return this.stops}}]),o}(l);r.__decorate([o.property()],n.prototype,"stops",null),n=r.__decorate([i.subclass("esri.widgets.smartMapping.ColorSizeSlider.ColorSizeSliderViewModel")],n);return n}));
