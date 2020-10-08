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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/maybe","../../../core/accessorSupport/decorators","../../../renderers/support/numberUtils","../SmartMappingSliderViewModel"],(function(e,t,r,n,s,i,o){"use strict";return function(e){function t(t){return e.call(this,t)||this}return r.__extends(t,e),Object.defineProperty(t.prototype,"stops",{set:function(e){if(e&&e.length){var t=e.map((function(e){return e.value})),s=this.max,i=this.min,o={};n.isSome(i)&&t.some((function(e){return e<i}))&&(o.min=Math.min.apply(Math,t)),n.isSome(s)&&t.some((function(e){return e>s}))&&(o.max=Math.max.apply(Math,t)),this.set(r.__assign({},o))}this._set("stops",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"values",{get:function(){var e=this.stops;if(!e||!e.length||e.length<2)return[];var t=e.map((function(e){return e.value}));return[t[0],t[t.length-1]]},enumerable:!1,configurable:!0}),t.prototype.setValue=function(e,t){var r=this.max,n=this.min,s=this.stops;if(!(t>r||t<n)){var i=0===e?0:s.length-1;t!==s[i].value&&(s[i].value=t,this._updateSizeStops(),this.notifyChange("values"),this.notifyChange("labels"))}},t.prototype._updateSizeStops=function(){for(var e=this.stops,t=e[0].value,r=e[e.length-1].value-t,n=e.length-1,s=e.slice(0),o=1;o<e.length-1;o++)s[o].value=t+o*r/n;var a=s.map((function(e){return e.value})),u=i.round(a);for(o=1;o<e.length-1;o++)e[o].value=u[o]},r.__decorate([s.property()],t.prototype,"stops",null),r.__decorate([s.property({dependsOn:["stops"],readOnly:!0})],t.prototype,"values",null),t=r.__decorate([s.subclass("esri.widgets.smartMapping.SizeSlider.SizeSliderViewModel")],t)}(o)}));