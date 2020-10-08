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

define(["require","exports","tslib","../../../core/accessorSupport/decorators","./VisualVariableLegendOptions"],(function(e,t,s,r,o){"use strict";return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.customValues=null,t}var o;return s.__extends(t,e),o=t,t.prototype.clone=function(){return new o({title:this.title,showLegend:this.showLegend,customValues:this.customValues&&this.customValues.slice(0)})},s.__decorate([r.property({type:[Number],json:{write:!0}})],t.prototype,"customValues",void 0),t=o=s.__decorate([r.subclass("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],t)}(o)}));