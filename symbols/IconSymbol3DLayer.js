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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/_base/lang","./Symbol3DLayer","./support/Symbol3DOutline","../core/jsonDictionary","../core/lang","../core/screenUtils"],function(t,e,o,i,r,n){var s=i({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right"}),a=e.createSubclass({classMetadata:{properties:{outline:{type:o}}},type:"Icon",material:void 0,resource:void 0,size:void 0,_sizeSetter:n.toPt,anchor:void 0,_anchorReader:s.fromJSON,outline:void 0,_outlineReader:function(t){return o.fromJSON(t)},toJSON:function(){var e={resource:r.clone(this.resource),size:this.size,anchor:s.toJSON(this.anchor),outline:this.outline?this.outline.toJSON():void 0};return t.mixin(e,this.inherited(arguments)),r.fixJson(e,!0)},clone:function(){return new a({anchor:this.anchor,enable:this.enable,material:this.material&&this.material.clone(),outline:this.outline&&this.outline.clone(),resource:r.clone(this.resource),size:this.size})}});return a});