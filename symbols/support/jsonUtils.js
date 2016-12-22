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

define(["require","exports","../../core/Error","../../core/Warning","../Symbol3D","../SimpleLineSymbol","../SimpleMarkerSymbol","../PictureMarkerSymbol","../PictureFillSymbol","../SimpleFillSymbol","../TextSymbol","../PointSymbol3D","../LineSymbol3D","../PolygonSymbol3D","../MeshSymbol3D","../LabelSymbol3D","../WebStyleSymbol","./symbolConversion"],function(e,o,n,r,l,s,i,t,S,m,y,b,u,a,c,p,f,D){function d(e){return e?h[e.type]||null:null}function w(e,o,n){var l=d(e);if(l){var s=new l;return s.read(e,n),s}return n&&n.messages&&e&&n.messages.push(new r("symbol:unsupported","Symbols of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:n})),null}function g(e,o,r){if(!e)return null;if(!r||"web-scene"!==r.origin||e.isInstanceOf(l)||e.isInstanceOf(f))return e.write(o,r);var s=D.to3D(e);return s.symbol?s.symbol.write(o,r):(r.messages&&r.messages.push(new n("symbol:unsupported","Symbols of type '"+e.declaredClass+"' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView",{symbol:e,context:r,error:s.error})),null)}function P(e,o){var n=d(e);return n?n.fromJSON(e,o):null}var h={esriSMS:i,esriPMS:t,esriTS:y,esriSLS:s,esriSFS:m,esriPFS:S,PointSymbol3D:b,LineSymbol3D:u,PolygonSymbol3D:a,MeshSymbol3D:c,LabelSymbol3D:p,styleSymbolReference:f};o.read=w,o.write=g,o.fromJSON=P});