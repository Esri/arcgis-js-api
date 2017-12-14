// COPYRIGHT © 2017 Esri
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

define(["require","exports","./MaterialUtil","../../lib/ModelContentType"],function(t,e,i,r){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){this.visible=!0,this.renderOccluded=!1,this.renderPriority=0,this.parentStage=null,this.id=i.__Material_idGen.gen(t)}return t.prototype.getId=function(){return this.id},t.prototype.getParentStage=function(){return this.parentStage},t.prototype.addParentStage=function(t){this.parentStage=t},t.prototype.removeParentStage=function(t){this.parentStage=null},t.prototype.setVisible=function(t){this.visible!==t&&(this.visible=t,this.notifyDirty("matChanged"))},t.prototype.isVisible=function(){return this.visible},t.prototype.setRenderOccluded=function(t){this.renderOccluded!==t&&(this.renderOccluded=t,this.notifyDirty("matChanged"))},t.prototype.isRenderOccluded=function(){return this.renderOccluded},t.prototype.notifyDirty=function(t){this.parentStage&&this.parentStage.notifyDirty(r.MATERIAL,this,t)},t.prototype.setRenderPriority=function(t){this.renderPriority=t,this.notifyDirty("matChanged")},t.prototype.getRenderPriority=function(){return this.renderPriority},t}();e.MaterialBase=n,e["default"]=n});