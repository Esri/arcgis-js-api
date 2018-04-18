// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/accessorSupport/decorators"],function(o,r,e,t,n,i){return function(o){function r(){var r=null!==o&&o.apply(this,arguments)||this;return r.format=null,r.position={coordinate:null,location:null},r}return e(r,o),Object.defineProperty(r.prototype,"displayCoordinate",{get:function(){var o=this.get("format");return o&&o.getDisplayCoordinate(this.position.coordinate)},enumerable:!0,configurable:!0}),t([i.property({readOnly:!0,dependsOn:["position","format.currentPattern"]})],r.prototype,"displayCoordinate",null),t([i.property()],r.prototype,"format",void 0),t([i.property()],r.prototype,"position",void 0),r=t([i.subclass("esri.widgets.CoordinateConversion.support.Conversion")],r)}(i.declared(n))});