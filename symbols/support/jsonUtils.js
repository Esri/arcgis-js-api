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

define(["../SimpleMarkerSymbol","../PictureMarkerSymbol","../SimpleLineSymbol","../CartographicLineSymbol","../SimpleFillSymbol","../PictureFillSymbol","../TextSymbol","../PointSymbol3D","../LineSymbol3D","../PolygonSymbol3D","../MeshSymbol3D","../LabelSymbol3D"],function(r,e,o,S,m,a,l,b,i,s,n,c){var f={fromJson:function(r){try{throw new Error("fromJson is deprecated, use fromJSON instead")}catch(e){console.warn(e.stack)}return f.fromJSON(r)},fromJSON:function(f){var t=null;if(!f)return null;switch(f.type){case"esriSMS":t=r.fromJSON(f);break;case"esriPMS":t=e.fromJSON(f);break;case"esriTS":t=l.fromJSON(f);break;case"esriSLS":t=void 0!==f.cap?S.fromJSON(f):o.fromJSON(f);break;case"esriCLS":t=S.fromJSON(f);break;case"esriSFS":t=m.fromJSON(f);break;case"esriPFS":t=a.fromJSON(f);break;case"PointSymbol3D":t=b.fromJSON(f);break;case"LineSymbol3D":t=i.fromJSON(f);break;case"PolygonSymbol3D":t=s.fromJSON(f);break;case"MeshSymbol3D":t=n.fromJSON(f);break;case"LabelSymbol3D":t=c.fromJSON(f)}return t}};return f});