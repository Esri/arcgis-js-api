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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["../core/lang","../core/kebabDictionary","../core/JSONSupport","../Color"],function(e,r,i,l){function o(){return"sym"+t++}var n=r({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d"}),t=0;return i.createSubclass({declaredClass:"esri.symbols.Symbol",constructor:function(){this.id=o()},properties:{type:{type:String,value:null,json:{read:n.fromJSON,write:{ignoreOrigin:!0,writer:function(e,r){r.type=n.toJSON(this.type)}}}},color:{type:l,value:new l([0,0,0,1]),json:{read:function(r){return r&&e.isDefined(r[0])?[r[0],r[1],r[2],r[3]/255]:r},write:{allowNull:!0}}}}})});