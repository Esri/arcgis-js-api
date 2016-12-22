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

define(["../../core/declare","dojo/_base/lang","dojo/_base/array","../../core/Accessoire","../../layers/support/layerUtils","../../geometry/support/jsonUtils","../../geometry/support/scaleUtils"],function(e,i,t,s,r,a,n){var l={LAYER_OPTION_TOP:"top",LAYER_OPTION_VISIBLE:"visible",LAYER_OPTION_ALL:"all"},o=e(s,{declaredClass:"esri.tasks.support.IdentifyParameters",geometry:null,dpi:96,dynamicLayerInfos:null,height:400,layerDefinitions:null,layerIds:null,layerOption:l.LAYER_OPTION_TOP,layerTimeOptions:null,mapExtent:null,geometryPrecision:null,maxAllowableOffset:null,returnGeometry:!1,spatialReference:null,timeExtent:null,tolerance:null,width:400,toJSON:function(e){var i=e&&e.geometry||this.geometry,s=this.mapExtent,l=this.spatialReference,o=this.layerIds,y={tolerance:this.tolerance,returnGeometry:this.returnGeometry,imageDisplay:this.width+","+this.height+","+this.dpi,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision};if(i){var f=i.toJSON();delete f.spatialReference,y.geometry=JSON.stringify(f),y.geometryType=a.getJsonType(i)}l?y.sr=l.wkid||JSON.stringify(l.toJSON()):i&&i.spatialReference?y.sr=i.spatialReference.wkid||JSON.stringify(i.spatialReference.toJSON()):s&&s.spatialReference&&(y.sr=s.spatialReference.wkid||JSON.stringify(s.spatialReference.toJSON())),s&&(y.mapExtent=s.xmin+","+s.ymin+","+s.xmax+","+s.ymax),y.layers=this.layerOption,o&&(y.layers+=":"+o.join(",")),y.layerDefs=r._serializeLayerDefinitions(this.layerDefinitions);var m=this.timeExtent;if(y.time=m?m.toJSON().join(","):null,y.layerTimeOptions=r._serializeTimeOptions(this.layerTimeOptions),this.dynamicLayerInfos&&this.dynamicLayerInfos.length>0){var h,p={extent:s,width:this.width,spatialReference:s.spatialReference},c=n.getScale(p),O=r._getLayersForScale(c,this.dynamicLayerInfos),d=[];t.forEach(this.dynamicLayerInfos,function(e){if(!e.subLayerIds){var i=e.id;if((!this.layerIds||this.layerIds&&-1!==t.indexOf(this.layerIds,i))&&-1!==t.indexOf(O,i)){var s={id:i};s.source=e.source&&e.source.toJSON();var r;this.layerDefinitions&&this.layerDefinitions[i]&&(r=this.layerDefinitions[i]),r&&(s.definitionExpression=r);var a;this.layerTimeOptions&&this.layerTimeOptions[i]&&(a=this.layerTimeOptions[i]),a&&(s.layerTimeOptions=a.toJSON()),d.push(s)}}},this),h=JSON.stringify(d),"[]"===h&&(h="[{}]"),y.dynamicLayers=h}return y}});return i.mixin(o,l),o});