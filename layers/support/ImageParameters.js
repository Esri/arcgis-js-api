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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../core/Accessor","../../core/lang","./layerUtils","dojo/_base/lang"],function(e,i,l,t){var n=e.createSubclass({declaredClass:"esri.layers.support.ImageParameters",getDefaults:function(){return t.mixin(this.inherited(arguments),{layerDefinitions:[]})},properties:{extent:{value:null},width:{value:null},height:{value:null},dpi:{value:null},format:{value:null},imageSpatialReference:{value:null},layerDefinitions:{value:null},layerOption:{value:null},layerIds:{value:null},transparent:{value:null},timeExtent:{value:null},layerTimeOptions:{value:null}},toJSON:function(){var e=this.extent;e=e&&e.clone()._normalize(!0);var t=this.layerOption,n=e?e.spatialReference.wkid||JSON.stringify(e.spatialReference.toJSON()):null,a=this.imageSpatialReference,r={dpi:this.dpi,format:this.format,transparent:this.transparent,size:null!==this.width&&null!==this.height?this.width+","+this.height:null,bbox:e?e.xmin+","+e.ymin+","+e.xmax+","+e.ymax:null,bboxSR:n,layers:t?t+":"+this.layerIds.join(","):null,imageSR:a?a.wkid||JSON.stringify(a.toJSON()):n};r.layerDefs=l._serializeLayerDefinitions(this.layerDefinitions);var s=this.timeExtent;return r.time=s?s.toJSON().join(","):null,r.layerTimeOptions=l._serializeTimeOptions(this.layerTimeOptions),i.filter(r,function(e){return null!==e?!0:void 0})}});return n});