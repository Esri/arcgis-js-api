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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../support/LegendOptions"],(function(e,r,t,o,n,s){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.showLegend=null,r}var s;return t(r,e),s=r,r.prototype.clone=function(){return new s({title:this.title,showLegend:this.showLegend})},o([n.property({type:Boolean,json:{write:!0}})],r.prototype,"showLegend",void 0),r=s=o([n.subclass("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],r)}(n.declared(s.default))}));