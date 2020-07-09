// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/maybe","../../core/accessorSupport/decorators","../Slider/SliderViewModel","./support/utils"],(function(t,e,o,i,n,r,a){return function(t){function e(e){var o=t.call(this,e)||this;return o._max=null,o._min=null,o.hasTimeData=!1,o.inputFormatFunction=function(t,e){return"max"===e?o.getUnzoomedMax().toString():"min"===e?o.getUnzoomedMin().toString():t.toString()},o.inputParseFunction=null,o.labelFormatFunction=function(t){return o.hasTimeData?a.formatDateLabel(t):o.defaultLabelFormatFunction(t)},o.zoomingEnabled=!0,o}return o.__extends(e,t),Object.defineProperty(e.prototype,"labels",{get:function(){var t=this,e=this.values,o=e&&e.length?e.map((function(e,o){return t.getLabelForValue(e,"value",o)})):[],i=this.getUnzoomedMax(),n=this.getUnzoomedMin();return{max:this.getLabelForValue(i,"max"),min:this.getLabelForValue(n,"min"),values:o}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"max",{set:function(t){var e=this.zoomOptions;if(e&&i.isSome(e.max)){var o=this.values,n=e.max;if(t<n&&(n=t,e.max=t),o&&o.length)for(var r=0;r<o.length;r++)t<o[r]&&this.setValue(r,t);this._storeZoomMax(n,t)}else this.setMax(t);this.notifyChange("labels")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"min",{set:function(t){var e=this.zoomOptions;if(e&&i.isSome(e.min)){var o=this.values,n=e.min;if(t>n&&(n=t,e.min=t),o&&o.length)for(var r=0;r<o.length;r++)t>o[r]&&this.setValue(r,t);this._storeZoomMin(n,t)}else this.setMin(t);this.notifyChange("labels")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){var t=this.max,e=this.min,o=this.values;return i.isSome(t)&&i.isSome(e)&&o.length>0?"ready":"disabled"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"zoomOptions",{set:function(t){var e=this.zoomingEnabled,o=this.zoomOptions;if(e){if(o){var n=i.isSome(this._max)?this._max:this.max,r=i.isSome(this._min)?this._min:this.min;if(t){var a=t.max,s=t.min,m=i.isSome(a),l=i.isSome(s),p=l?t.min:r,u=l?r:null,h=m?t.max:n,c=m?n:null;this._storeZoomMin(p,u),this._storeZoomMax(h,c)}else this.setMax(n),this.setMin(r),this._min=null,this._max=null}else if(t){var d=t.max,_=t.min;i.isSome(_)&&this._storeZoomMin(t.min,this.min),i.isSome(d)&&this._storeZoomMax(t.max,this.max)}this._set("zoomOptions",t),this.notifyChange("max"),this.notifyChange("min")}},enumerable:!0,configurable:!0}),e.prototype.getUnzoomedMax=function(){return this.zoomOptions&&i.isSome(this._max)?this._max:this.max},e.prototype.getUnzoomedMin=function(){return this.zoomOptions&&i.isSome(this._min)?this._min:this.min},e.prototype._storeZoomMax=function(t,e){this._max=e,this.setMax(t)},e.prototype._storeZoomMin=function(t,e){this._min=e,this.setMin(t)},o.__decorate([n.property()],e.prototype,"hasTimeData",void 0),o.__decorate([n.property()],e.prototype,"inputFormatFunction",void 0),o.__decorate([n.property()],e.prototype,"inputParseFunction",void 0),o.__decorate([n.property()],e.prototype,"labelFormatFunction",void 0),o.__decorate([n.property({dependsOn:["labelFormatFunction","max","min","values"],readOnly:!0})],e.prototype,"labels",null),o.__decorate([n.property()],e.prototype,"max",null),o.__decorate([n.property()],e.prototype,"min",null),o.__decorate([n.property({dependsOn:["max","min","values"],readOnly:!0})],e.prototype,"state",null),o.__decorate([n.property()],e.prototype,"zoomingEnabled",void 0),o.__decorate([n.property()],e.prototype,"zoomOptions",null),e=o.__decorate([n.subclass("esri.widgets.smartMapping.SmartMappingSliderViewModel")],e)}(r)}));