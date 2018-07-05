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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["./core/JSONSupport","./Camera","./geometry/support/typeUtils","./geometry/support/jsonUtils"],function(e,t,r,a){var o=e.createSubclass({declaredClass:"esri.Viewpoint",properties:{rotation:{type:Number,value:0,cast:function(e){return e%=360,e<0&&(e+=360),e},json:{write:!0}},scale:{type:Number,value:0,json:{write:!0}},targetGeometry:{value:null,types:r.types,json:{read:function(e){return a.fromJSON(e)},write:!0}},camera:{value:null,type:t,json:{write:!0}}},clone:function(){return new o({rotation:this.rotation,scale:this.scale,targetGeometry:this.targetGeometry?this.targetGeometry.clone():null,camera:this.camera?this.camera.clone():null})}});return o});