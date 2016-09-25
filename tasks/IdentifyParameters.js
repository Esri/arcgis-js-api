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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","../kernel","../layerUtils","../geometry/jsonUtils","../geometry/scaleUtils"],function(e,i,t,s,n,a,r,o,l){var y=e(null,{declaredClass:"esri.tasks.IdentifyParameters",constructor:function(){this.layerOption=y.LAYER_OPTION_TOP},geometry:null,spatialReference:null,layerIds:null,tolerance:null,returnGeometry:!1,mapExtent:null,width:400,height:400,dpi:96,layerDefinitions:null,timeExtent:null,layerTimeOptions:null,dynamicLayerInfos:null,toJson:function(e){var i=e&&e.geometry||this.geometry,n=this.mapExtent,a=this.spatialReference,y=this.layerIds,h={tolerance:this.tolerance,returnGeometry:this.returnGeometry,imageDisplay:this.width+","+this.height+","+this.dpi,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision};if(i){var f=i.toJson();delete f.spatialReference,h.geometry=s.toJson(f),h.geometryType=o.getJsonType(i)}a?h.sr=a.wkid||s.toJson(a.toJson()):i&&i.spatialReference?h.sr=i.spatialReference.wkid||s.toJson(i.spatialReference.toJson()):n&&n.spatialReference&&(h.sr=n.spatialReference.wkid||s.toJson(n.spatialReference.toJson())),n&&(h.mapExtent=n.xmin+","+n.ymin+","+n.xmax+","+n.ymax),h.layers=this.layerOption,y&&(h.layers+=":"+y.join(",")),h.layerDefs=r._serializeLayerDefinitions(this.layerDefinitions);var m=this.timeExtent;if(h.time=m?m.toJson().join(","):null,h.layerTimeOptions=r._serializeTimeOptions(this.layerTimeOptions),this.dynamicLayerInfos&&this.dynamicLayerInfos.length>0){var d,c={extent:n,width:this.width,spatialReference:n.spatialReference},p=l.getScale(c),u=r._getLayersForScale(p,this.dynamicLayerInfos),O=[];t.forEach(this.dynamicLayerInfos,function(e){if(!e.subLayerIds){var i=e.id;if((!this.layerIds||this.layerIds&&-1!==t.indexOf(this.layerIds,i))&&-1!==t.indexOf(u,i)){var s={id:i};s.source=e.source&&e.source.toJson();var n;this.layerDefinitions&&this.layerDefinitions[i]&&(n=this.layerDefinitions[i]),n&&(s.definitionExpression=n);var a;this.layerTimeOptions&&this.layerTimeOptions[i]&&(a=this.layerTimeOptions[i]),a&&(s.layerTimeOptions=a.toJson()),O.push(s)}}},this),d=s.toJson(O),"[]"===d&&(d="[{}]"),h.dynamicLayers=d}return h}});return i.mixin(y,{LAYER_OPTION_TOP:"top",LAYER_OPTION_VISIBLE:"visible",LAYER_OPTION_ALL:"all"}),n("extend-esri")&&i.setObject("tasks.IdentifyParameters",y,a),y});