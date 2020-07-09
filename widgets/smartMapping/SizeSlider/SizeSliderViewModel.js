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

define(["require","exports","tslib","../../../core/maybe","../../../core/accessorSupport/decorators","../../../renderers/support/numberUtils","../SmartMappingSliderViewModel"],(function(e,t,r,n,o,s,i){return function(e){function t(t){return e.call(this,t)||this}return r.__extends(t,e),Object.defineProperty(t.prototype,"stops",{set:function(e){if(e&&e.length){var t=e.map((function(e){return e.value})),o=this.max,s=this.min,i={};n.isSome(s)&&t.some((function(e){return e<s}))&&(i.min=Math.min.apply(Math,t)),n.isSome(o)&&t.some((function(e){return e>o}))&&(i.max=Math.max.apply(Math,t)),this.set(r.__assign({},i))}this._set("stops",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"values",{get:function(){var e=this.stops;if(!e||!e.length||e.length<2)return[];var t=e.map((function(e){return e.value}));return[t[0],t[t.length-1]]},enumerable:!0,configurable:!0}),t.prototype.setValue=function(e,t){var r=this.max,n=this.min,o=this.stops;t>r||t<n||t!==o[e].value&&(o[0===e?0:o.length-1].value=t,this._updateSizeStops(),this.notifyChange("values"),this.notifyChange("labels"))},t.prototype._updateSizeStops=function(){for(var e=this.stops,t=e[0].value,r=e[e.length-1].value-t,n=e.length-1,o=e.slice(0),i=1;i<e.length-1;i++)o[i].value=t+i*r/n;var a=o.map((function(e){return e.value})),u=s.round(a);for(i=1;i<e.length-1;i++)e[i].value=u[i]},r.__decorate([o.property()],t.prototype,"stops",null),r.__decorate([o.property({dependsOn:["stops"],readOnly:!0})],t.prototype,"values",null),t=r.__decorate([o.subclass("esri.widgets.smartMapping.SizeSlider.SizeSliderViewModel")],t)}(i)}));