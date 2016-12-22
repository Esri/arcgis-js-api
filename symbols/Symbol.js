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

define(["../core/lang","../core/kebabDictionary","../core/JSONSupport","../Color"],function(e,l,o,r){function s(){return"sym"+t++}var i=l({esriSMS:"simple-marker-symbol",esriPMS:"picture-marker-symbol",esriSLS:"simple-line-symbol",esriSFS:"simple-fill-symbol",esriPFS:"picture-fill-symbol",esriTS:"text-symbol",esriSHD:"shield-label-symbol",PointSymbol3D:"point-symbol-3d",LineSymbol3D:"line-symbol-3d",PolygonSymbol3D:"polygon-symbol-3d",MeshSymbol3D:"mesh-symbol-3d",LabelSymbol3D:"label-symbol-3d"}),t=0,n=o.createSubclass({declaredClass:"esri.symbols.Symbol",constructor:function(){this.id=s()},properties:{type:{type:String,value:null,json:{read:i.fromJSON,writeAlways:!0,write:function(e,l){l.type=i.toJSON(this.type)}}},color:{type:r,value:new r([0,0,0,1]),json:{read:function(l){return l&&e.isDefined(l[0])?[l[0],l[1],l[2],l[3]/255]:l},writable:!0}}}});return n});