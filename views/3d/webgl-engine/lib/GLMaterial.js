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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports"],function(e,r){return function(){function e(e,r){this.material=e,this.programRep=r}return e.prototype.dispose=function(){},Object.defineProperty(e.prototype,"materialId",{get:function(){return this.material.id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"renderOccluded",{get:function(){return this.material.renderOccluded},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"renderPriority",{get:function(){return this.material.renderPriority},enumerable:!0,configurable:!0}),e.prototype.isVisible=function(){return this.material.isVisible()},e.prototype.getPrograms=function(){return[this.getProgram()]},e}()});