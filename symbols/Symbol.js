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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../core/lang","../core/jsonDictionary","../core/JSONSupporter","../Color"],function(o,e,l,r){function s(){return"sym"+t++}var i=e({esriSMS:"simple-marker-symbol",esriPMS:"picture-marker-symbol",esriSLS:"simple-line-symbol",esriCLS:"cartographic-line-symbol",esriSFS:"simple-fill-symbol",esriPFS:"picture-fill-symbol",esriTS:"text-symbol",esriSHD:"shield-label-symbol",PointSymbol3D:"point-symbol-3d",LineSymbol3D:"line-symbol-3d",PolygonSymbol3D:"polygon-symbol-3d",MeshSymbol3D:"mesh-symbol-3d",LabelSymbol3D:"label-symbol-3d"}),t=0,n=l.createSubclass({declaredClass:"esri.symbols.Symbol",classMetadata:{properties:{color:{type:r}}},constructor:function(){this.id=s()},type:null,_typeReader:i.fromJSON,color:new r([0,0,0,1]),_colorReader:function(e){return e&&o.isDefined(e[0])?[e[0],e[1],e[2],e[3]/255]:void 0},toJSON:function(){return{color:r.toJSON(this.color),type:i.toJSON(this.type)}}});return n});