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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../core/lang","../core/kebabDictionary","../core/JSONSupport","../Color"],function(e,o,l,r){function i(){return"sym"+n++}var s=o({esriSMS:"simple-marker-symbol",esriPMS:"picture-marker-symbol",esriSLS:"simple-line-symbol",esriSFS:"simple-fill-symbol",esriPFS:"picture-fill-symbol",esriTS:"text-symbol",esriSHD:"shield-label-symbol",PointSymbol3D:"point-symbol-3d",LineSymbol3D:"line-symbol-3d",PolygonSymbol3D:"polygon-symbol-3d",MeshSymbol3D:"mesh-symbol-3d",LabelSymbol3D:"label-symbol-3d"}),n=0,t=l.createSubclass({declaredClass:"esri.symbols.Symbol",constructor:function(){this.id=i()},properties:{type:{type:String,value:null,json:{read:s.fromJSON,write:{ignoreOrigin:!0,writer:function(e,o){o.type=s.toJSON(this.type)}}}},color:{type:r,value:new r([0,0,0,1]),json:{read:function(o){return o&&e.isDefined(o[0])?[o[0],o[1],o[2],o[3]/255]:o},write:!0}}}});return t});