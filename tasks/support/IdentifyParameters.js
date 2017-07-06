// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","../../core/Accessor","../../layers/support/layerUtils","../../geometry/support/jsonUtils","../../geometry/support/scaleUtils"],function(e,i,t,s,r,a){var n={LAYER_OPTION_TOP:"top",LAYER_OPTION_VISIBLE:"visible",LAYER_OPTION_ALL:"all"},l=t.createSubclass({declaredClass:"esri.tasks.support.IdentifyParameters",properties:{geometry:null,dpi:96,dynamicLayerInfos:null,height:400,layerDefinitions:null,layerIds:null,layerOption:n.LAYER_OPTION_TOP,layerTimeOptions:null,mapExtent:null,geometryPrecision:null,maxAllowableOffset:null,returnGeometry:!1,spatialReference:null,timeExtent:null,tolerance:null,width:400},toJSON:function(e){var t=e&&e.geometry||this.geometry,n=this.mapExtent,l=this.spatialReference,o=this.layerIds,y={tolerance:this.tolerance,returnGeometry:this.returnGeometry,imageDisplay:this.width+","+this.height+","+this.dpi,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision};if(t){var f=t.toJSON();delete f.spatialReference,y.geometry=JSON.stringify(f),y.geometryType=r.getJsonType(t)}l?y.sr=l.wkid||JSON.stringify(l.toJSON()):t&&t.spatialReference?y.sr=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()):n&&n.spatialReference&&(y.sr=n.spatialReference.wkid||JSON.stringify(n.spatialReference.toJSON())),n&&(y.mapExtent=n.xmin+","+n.ymin+","+n.xmax+","+n.ymax),y.layers=this.layerOption,o&&(y.layers+=":"+o.join(",")),y.layerDefs=s._serializeLayerDefinitions(this.layerDefinitions);var m=this.timeExtent;if(y.time=m?m.toJSON().join(","):null,y.layerTimeOptions=s._serializeTimeOptions(this.layerTimeOptions),this.dynamicLayerInfos&&this.dynamicLayerInfos.length>0){var p,h={extent:n,width:this.width,spatialReference:n.spatialReference},c=a.getScale(h),O=s._getLayersForScale(c,this.dynamicLayerInfos),d=[];i.forEach(this.dynamicLayerInfos,function(e){if(!e.subLayerIds){var t=e.id;if((!this.layerIds||this.layerIds&&-1!==i.indexOf(this.layerIds,t))&&-1!==i.indexOf(O,t)){var s={id:t};s.source=e.source&&e.source.toJSON();var r;this.layerDefinitions&&this.layerDefinitions[t]&&(r=this.layerDefinitions[t]),r&&(s.definitionExpression=r);var a;this.layerTimeOptions&&this.layerTimeOptions[t]&&(a=this.layerTimeOptions[t]),a&&(s.layerTimeOptions=a.toJSON()),d.push(s)}}},this),p=JSON.stringify(d),"[]"===p&&(p="[{}]"),y.dynamicLayers=p}return y}});return e.mixin(l,n),l});