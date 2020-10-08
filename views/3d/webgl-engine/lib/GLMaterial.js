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

define(["require","exports","tslib","./AutoDisposable"],(function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GLMaterial=void 0;var r=function(e){function t(t){var i=e.call(this)||this;return i.material=t.material,i.techniqueRep=t.techniqueRep,i.output=t.output,i}return i.__extends(t,e),t.prototype.getTechnique=function(){return this.technique},t.prototype.getPipelineState=function(e,t){return this.getTechnique().pipeline},t.prototype.ensureResources=function(e){return 2},t.prototype.ensureParameters=function(e){},t}(n.AutoDisposable);t.GLMaterial=r}));