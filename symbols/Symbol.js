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

define(["../core/kebabDictionary","../core/JSONSupport","../Color"],function(e,r,l){function i(){return"sym"+n++}var o=e({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d"}),n=0;return r.createSubclass({declaredClass:"esri.symbols.Symbol",constructor:function(){this.id=i()},properties:{type:{type:String,value:null,json:{read:o.read,write:{ignoreOrigin:!0,writer:o.write}}},color:{type:l,value:new l([0,0,0,1]),json:{read:function(e){return e&&null!=e[0]?[e[0],e[1],e[2],e[3]/255]:e},write:{allowNull:!0}}}}})});