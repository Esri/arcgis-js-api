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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["../../core/Accessor","../../core/lang","../../layers/support/layerUtils","../../geometry/support/jsonUtils","../../geometry/support/scaleUtils"],function(e,i,t,r,s){var n={LAYER_OPTION_TOP:"top",LAYER_OPTION_VISIBLE:"visible",LAYER_OPTION_ALL:"all"},a=e.createSubclass({declaredClass:"esri.tasks.support.IdentifyParameters",properties:{geometry:null,dpi:96,dynamicLayerInfos:null,height:400,layerDefinitions:null,layerIds:null,layerOption:n.LAYER_OPTION_TOP,layerTimeOptions:null,mapExtent:null,geometryPrecision:null,maxAllowableOffset:null,returnGeometry:!1,returnFieldName:!1,returnM:!1,returnZ:!1,returnUnformattedValues:!1,spatialReference:null,timeExtent:null,tolerance:null,width:400},toJSON:function(e){var i=e&&e.geometry||this.geometry,n=this.mapExtent,a=this.spatialReference,l=this.layerIds,o={tolerance:this.tolerance,returnGeometry:this.returnGeometry,returnFieldName:this.returnFieldName,returnUnformattedValues:this.returnUnformattedValues,imageDisplay:this.width+","+this.height+","+this.dpi,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision};if(i){var y=i.toJSON();delete y.spatialReference,o.geometry=JSON.stringify(y),o.geometryType=r.getJsonType(i)}a?o.sr=a.wkid||JSON.stringify(a.toJSON()):i&&i.spatialReference?o.sr=i.spatialReference.wkid||JSON.stringify(i.spatialReference.toJSON()):n&&n.spatialReference&&(o.sr=n.spatialReference.wkid||JSON.stringify(n.spatialReference.toJSON())),n&&(o.mapExtent=n.xmin+","+n.ymin+","+n.xmax+","+n.ymax),o.layers=this.layerOption,l&&(o.layers+=":"+l.join(",")),o.layerDefs=t.serializeLayerDefinitions(this.layerDefinitions);var f=this.timeExtent;if(o.time=f?f.toJSON().join(","):null,o.layerTimeOptions=t.serializeTimeOptions(this.layerTimeOptions),this.dynamicLayerInfos&&this.dynamicLayerInfos.length>0){var m,h={extent:n,width:this.width,spatialReference:n.spatialReference},p=s.getScale(h),u=t.getLayersForScale(p,this.dynamicLayerInfos),c=[];this.dynamicLayerInfos.forEach(function(e){if(!e.subLayerIds){var i=e.id;if((!this.layerIds||this.layerIds&&-1!==this.layerIds.indexOf(i))&&-1!==u.indexOf(i)){var t={id:i};t.source=e.source&&e.source.toJSON();var r;this.layerDefinitions&&this.layerDefinitions[i]&&(r=this.layerDefinitions[i]),r&&(t.definitionExpression=r);var s;this.layerTimeOptions&&this.layerTimeOptions[i]&&(s=this.layerTimeOptions[i]),s&&(t.layerTimeOptions=s.toJSON()),c.push(t)}}},this),m=JSON.stringify(c),"[]"===m&&(m="[{}]"),o.dynamicLayers=m}return o}});return i.mixin(a,n),a});