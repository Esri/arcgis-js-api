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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","../../core/Accessor","../../layers/support/layerUtils","../../geometry/support/jsonUtils","../../geometry/support/scaleUtils"],function(e,i,t,r,s,a){var n={LAYER_OPTION_TOP:"top",LAYER_OPTION_VISIBLE:"visible",LAYER_OPTION_ALL:"all"},l=t.createSubclass({declaredClass:"esri.tasks.support.IdentifyParameters",properties:{geometry:null,dpi:96,dynamicLayerInfos:null,height:400,layerDefinitions:null,layerIds:null,layerOption:n.LAYER_OPTION_TOP,layerTimeOptions:null,mapExtent:null,geometryPrecision:null,maxAllowableOffset:null,returnGeometry:!1,returnFieldName:!1,returnM:!1,returnZ:!1,returnUnformattedValues:!1,spatialReference:null,timeExtent:null,tolerance:null,width:400},toJSON:function(e){var t=e&&e.geometry||this.geometry,n=this.mapExtent,l=this.spatialReference,o=this.layerIds,y={tolerance:this.tolerance,returnGeometry:this.returnGeometry,returnFieldName:this.returnFieldName,returnUnformattedValues:this.returnUnformattedValues,imageDisplay:this.width+","+this.height+","+this.dpi,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision};if(t){var f=t.toJSON();delete f.spatialReference,y.geometry=JSON.stringify(f),y.geometryType=s.getJsonType(t)}l?y.sr=l.wkid||JSON.stringify(l.toJSON()):t&&t.spatialReference?y.sr=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()):n&&n.spatialReference&&(y.sr=n.spatialReference.wkid||JSON.stringify(n.spatialReference.toJSON())),n&&(y.mapExtent=n.xmin+","+n.ymin+","+n.xmax+","+n.ymax),y.layers=this.layerOption,o&&(y.layers+=":"+o.join(",")),y.layerDefs=r._serializeLayerDefinitions(this.layerDefinitions);var m=this.timeExtent;if(y.time=m?m.toJSON().join(","):null,y.layerTimeOptions=r._serializeTimeOptions(this.layerTimeOptions),this.dynamicLayerInfos&&this.dynamicLayerInfos.length>0){var h,p={extent:n,width:this.width,spatialReference:n.spatialReference},u=a.getScale(p),c=r._getLayersForScale(u,this.dynamicLayerInfos),d=[];i.forEach(this.dynamicLayerInfos,function(e){if(!e.subLayerIds){var t=e.id;if((!this.layerIds||this.layerIds&&-1!==i.indexOf(this.layerIds,t))&&-1!==i.indexOf(c,t)){var r={id:t};r.source=e.source&&e.source.toJSON();var s;this.layerDefinitions&&this.layerDefinitions[t]&&(s=this.layerDefinitions[t]),s&&(r.definitionExpression=s);var a;this.layerTimeOptions&&this.layerTimeOptions[t]&&(a=this.layerTimeOptions[t]),a&&(r.layerTimeOptions=a.toJSON()),d.push(r)}}},this),h=JSON.stringify(d),"[]"===h&&(h="[{}]"),y.dynamicLayers=h}return y}});return e.mixin(l,n),l});