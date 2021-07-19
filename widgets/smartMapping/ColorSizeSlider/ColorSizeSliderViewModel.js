/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../SizeSlider/SizeSliderViewModel"],(function(e,o,r,t,s,c,i,n){"use strict";let l=function(o){function r(e){return o.call(this,e)||this}return e._inheritsLoose(r,o),r.prototype.getStopInfo=function(){const{min:e,max:o,stops:r}=this;return r&&r.length?r.map((r=>({color:r.color,offset:(o-r.value)/(o-e)}))):[]},e._createClass(r,[{key:"stops",get:function(){return this.stops}}]),r}(n);return o.__decorate([r.property()],l.prototype,"stops",null),l=o.__decorate([i.subclass("esri.widgets.smartMapping.ColorSizeSlider.ColorSizeSliderViewModel")],l),l}));
