// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","../kernel","../layerUtils","../geometry/jsonUtils","../geometry/scaleUtils"],(function(e,t,i,s,n,r,a,o,l){var y=e(null,{declaredClass:"esri.tasks.IdentifyParameters",constructor:function(){this.layerOption=y.LAYER_OPTION_TOP},geometry:null,spatialReference:null,layerIds:null,tolerance:null,returnGeometry:!1,returnFieldName:!1,returnUnformattedValues:!1,mapExtent:null,width:400,height:400,dpi:96,layerDefinitions:null,timeExtent:null,layerTimeOptions:null,dynamicLayerInfos:null,toJson:function(e){var t=e&&e.geometry||this.geometry,n=this.mapExtent,r=this.spatialReference,y=this.layerIds,m={tolerance:this.tolerance,returnGeometry:this.returnGeometry,returnFieldName:this.returnFieldName,returnUnformattedValues:this.returnUnformattedValues,imageDisplay:this.width+","+this.height+","+this.dpi,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision};if(t){var d=t.toJson();delete d.spatialReference,m.geometry=s.toJson(d),m.geometryType=o.getJsonType(t)}r?m.sr=r.wkid||s.toJson(r.toJson()):t&&t.spatialReference?m.sr=t.spatialReference.wkid||s.toJson(t.spatialReference.toJson()):n&&n.spatialReference&&(m.sr=n.spatialReference.wkid||s.toJson(n.spatialReference.toJson())),n&&(m.mapExtent=n.xmin+","+n.ymin+","+n.xmax+","+n.ymax),m.layers=this.layerOption,y&&(m.layers+=":"+y.join(",")),m.layerDefs=a._serializeLayerDefinitions(this.layerDefinitions,!0);var f=this.timeExtent;if(m.time=f?f.toJson().join(","):null,m.layerTimeOptions=a._serializeTimeOptions(this.layerTimeOptions),this.dynamicLayerInfos&&this.dynamicLayerInfos.length>0){var h,c={extent:n,width:this.width,spatialReference:n.spatialReference},u=l.getScale(c),p=a._getLayersForScale(u,this.dynamicLayerInfos),O=[];i.forEach(this.dynamicLayerInfos,(function(e){if(!e.subLayerIds){var t=e.id;if((!this.layerIds||this.layerIds&&-1!==i.indexOf(this.layerIds,t))&&-1!==i.indexOf(p,t)){var s,n,r={id:t};r.source=e.source&&e.source.toJson(),this.layerDefinitions&&this.layerDefinitions[t]&&(s=this.layerDefinitions[t]),s&&(r.definitionExpression=s),this.layerTimeOptions&&this.layerTimeOptions[t]&&(n=this.layerTimeOptions[t]),n&&(r.layerTimeOptions=n.toJson()),O.push(r)}}}),this),"[]"===(h=s.toJson(O))&&(h="[{}]"),m.dynamicLayers=h}return m}});return t.mixin(y,{LAYER_OPTION_TOP:"top",LAYER_OPTION_VISIBLE:"visible",LAYER_OPTION_ALL:"all"}),n("extend-esri")&&t.setObject("tasks.IdentifyParameters",y,r),y}));