// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./ModelContentType"],function(t,e,i){var r=function(){function t(t){this.materials={},this.stage=t}return t.prototype.getMaterial=function(t){return this.materials[t]},t.prototype.addMaterial=function(t,e){this.materials[t]=e,this.stage.add(i.MATERIAL,e)},t.prototype.dispose=function(){for(var t in this.materials)this.stage.remove(i.MATERIAL,this.materials[t].getId());this.materials={}},t}();return r});