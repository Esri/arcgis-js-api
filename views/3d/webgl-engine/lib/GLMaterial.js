// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","./AutoDisposable"],function(e,t,r,o,i,s){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(t){var r=e.call(this)||this;return r.material=t.material,r.programRep=t.programRep,r.techniqueRep=t.techniqueRep,r}return r(t,e),t.prototype.isVisible=function(){return this.material.isVisible()},t.prototype.isVisibleInPass=function(e){return this.material.isVisibleInPass(e)},t.prototype.getPrograms=function(){return[this.getProgram()]},t.prototype.getDrawMode=function(){return 4},t.prototype.ensureResources=function(e){return 0},t.prototype.ensureAttributeLocations=function(e){this.getProgram().assertCompatibleVertexAttributeLocations(e)},t=o([i.subclass("esri.views.3d.webgl-engine.lib.GLMaterial")],t)}(i.declared(s.AutoDisposable));t.GLMaterial=n});