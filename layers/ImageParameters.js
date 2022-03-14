// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/has","../kernel","../lang","../layerUtils"],(function(e,t,i,n,l,a,s,r){var o=t(null,{declaredClass:"esri.layers.ImageParameters",constructor:function(){this.layerDefinitions=[]},bbox:null,extent:null,width:null,height:null,dpi:null,format:null,imageSpatialReference:null,layerOption:null,layerIds:null,transparent:null,timeExtent:null,layerTimeOptions:null,toJson:function(t){this.bbox&&e.deprecated(this.declaredClass+" : Property 'bbox' deprecated. Use property 'extent'.");var i=this.bbox||this.extent;i=i&&t&&i._normalize(!0);var l=this.layerOption,a=i?i.spatialReference.wkid||n.toJson(i.spatialReference.toJson()):null,o=this.imageSpatialReference,u={dpi:this.dpi,format:this.format,transparent:this.transparent,size:null!==this.width&&null!==this.height?this.width+","+this.height:null,bbox:i?i.xmin+","+i.ymin+","+i.xmax+","+i.ymax:null,bboxSR:a,layers:l?l+":"+this.layerIds.join(","):null,imageSR:o?o.wkid||n.toJson(o.toJson()):a};u.layerDefs=r._serializeLayerDefinitions(this.layerDefinitions);var h=this.timeExtent;return u.time=h?h.toJson().join(","):null,u.layerTimeOptions=r._serializeTimeOptions(this.layerTimeOptions),s.filter(u,(function(e){if(null!==e)return!0}))}});return i.mixin(o,{LAYER_OPTION_SHOW:"show",LAYER_OPTION_HIDE:"hide",LAYER_OPTION_INCLUDE:"include",LAYER_OPTION_EXCLUDE:"exclude"}),l("extend-esri")&&i.setObject("layers.ImageParameters",o,a),o}));