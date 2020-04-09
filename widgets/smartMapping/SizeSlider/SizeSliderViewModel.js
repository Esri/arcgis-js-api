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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/maybe","../../../core/accessorSupport/decorators","../../../renderers/support/numberUtils","../SmartMappingSliderViewModel"],(function(e,t,r,n,o,s,i,a,p){return function(e){function t(t){return e.call(this,t)||this}return n(t,e),Object.defineProperty(t.prototype,"stops",{set:function(e){if(e&&e.length){var t=e.map((function(e){return e.value})),n=this.max,o=this.min,i={};s.isSome(o)&&t.some((function(e){return e<o}))&&(i.min=Math.min.apply(Math,t)),s.isSome(n)&&t.some((function(e){return e>n}))&&(i.max=Math.max.apply(Math,t)),this.set(r({},i))}this._set("stops",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"values",{get:function(){var e=this.stops;if(!e||!e.length||e.length<2)return[];var t=e.map((function(e){return e.value}));return[t[0],t[t.length-1]]},enumerable:!0,configurable:!0}),t.prototype.setValue=function(e,t){var r=this.max,n=this.min,o=this.stops;t>r||t<n||t!==o[e].value&&(o[0===e?0:o.length-1].value=t,this._updateSizeStops(),this.notifyChange("values"),this.notifyChange("labels"))},t.prototype._updateSizeStops=function(){for(var e=this.stops,t=e[0].value,r=e[e.length-1].value-t,n=e.length-1,o=e.slice(0),s=1;s<e.length-1;s++)o[s].value=t+s*r/n;var i=o.map((function(e){return e.value})),p=a.round(i);for(s=1;s<e.length-1;s++)e[s].value=p[s]},o([i.property()],t.prototype,"stops",null),o([i.property({dependsOn:["stops"],readOnly:!0})],t.prototype,"values",null),t=o([i.subclass("esri.widgets.smartMapping.SizeSlider.SizeSliderViewModel")],t)}(i.declared(p))}));