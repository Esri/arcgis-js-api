// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","../kernel","../layerUtils","../geometry/jsonUtils","../geometry/scaleUtils"],function(e,t,i,s,n,a,r,o,l){var y=e(null,{declaredClass:"esri.tasks.IdentifyParameters",constructor:function(){this.layerOption=y.LAYER_OPTION_TOP},geometry:null,spatialReference:null,layerIds:null,tolerance:null,returnGeometry:!1,mapExtent:null,width:400,height:400,dpi:96,layerDefinitions:null,timeExtent:null,layerTimeOptions:null,dynamicLayerInfos:null,toJson:function(e){var t=e&&e.geometry||this.geometry,n=this.mapExtent,a=this.spatialReference,y=this.layerIds,f={tolerance:this.tolerance,returnGeometry:this.returnGeometry,imageDisplay:this.width+","+this.height+","+this.dpi,maxAllowableOffset:this.maxAllowableOffset};if(t){var h=t.toJson();delete h.spatialReference,f.geometry=s.toJson(h),f.geometryType=o.getJsonType(t)}a?f.sr=a.wkid||s.toJson(a.toJson()):t&&t.spatialReference?f.sr=t.spatialReference.wkid||s.toJson(t.spatialReference.toJson()):n&&n.spatialReference&&(f.sr=n.spatialReference.wkid||s.toJson(n.spatialReference.toJson())),n&&(f.mapExtent=n.xmin+","+n.ymin+","+n.xmax+","+n.ymax),f.layers=this.layerOption,y&&(f.layers+=":"+y.join(",")),f.layerDefs=r._serializeLayerDefinitions(this.layerDefinitions);var m=this.timeExtent;if(f.time=m?m.toJson().join(","):null,f.layerTimeOptions=r._serializeTimeOptions(this.layerTimeOptions),this.dynamicLayerInfos&&this.dynamicLayerInfos.length>0){var d,c={extent:n,width:this.width,spatialReference:n.spatialReference},p=l.getScale(c),u=r._getLayersForScale(p,this.dynamicLayerInfos),O=[];i.forEach(this.dynamicLayerInfos,function(e){if(!e.subLayerIds){var t=e.id;if((!this.layerIds||this.layerIds&&-1!==i.indexOf(this.layerIds,t))&&-1!==i.indexOf(u,t)){var s={id:t};s.source=e.source&&e.source.toJson();var n;this.layerDefinitions&&this.layerDefinitions[t]&&(n=this.layerDefinitions[t]),n&&(s.definitionExpression=n);var a;this.layerTimeOptions&&this.layerTimeOptions[t]&&(a=this.layerTimeOptions[t]),a&&(s.layerTimeOptions=a.toJson()),O.push(s)}}},this),d=s.toJson(O),"[]"===d&&(d="[{}]"),f.dynamicLayers=d}return f}});return t.mixin(y,{LAYER_OPTION_TOP:"top",LAYER_OPTION_VISIBLE:"visible",LAYER_OPTION_ALL:"all"}),n("extend-esri")&&t.setObject("tasks.IdentifyParameters",y,a),y});