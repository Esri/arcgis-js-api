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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/accessorSupport/decorators"],function(t,e,o,r,i,c){return function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.start=function(){this.view.activeTool=this},e.prototype.stop=function(){this.view.ready&&this.view.activeTool===this&&(this.view.activeTool=null)},e.prototype.activate=function(){},e.prototype.deactivate=function(){},r([c.property({constructOnly:!0})],e.prototype,"view",void 0),e=r([c.subclass("esri.views.3d.interactive.InteractiveTool")],e)}(c.declared(i))});