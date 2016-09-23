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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/Warning","../Symbol3D","../CartographicLineSymbol","../SimpleLineSymbol","../SimpleMarkerSymbol","../PictureMarkerSymbol","../PictureFillSymbol","../SimpleFillSymbol","../TextSymbol","../PointSymbol3D","../LineSymbol3D","../PolygonSymbol3D","../MeshSymbol3D","../LabelSymbol3D","../WebStyleSymbol","./symbolConversion"],function(e,o,r,n,l,s,i,t,S,y,m,b,u,a,c,p,f,d,D){function w(e){return e?"esriSLS"===e.type?void 0!==e.cap?s:i:h[e.type]||null:null}function g(e,o,r){var l=w(e);if(l){var s=new l;return s.read(e,r),s}return r&&r.messages&&e&&r.messages.push(new n("symbol:unsupported","Symbols of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null}function L(e,o,n){if(!e)return null;if(!n||"web-scene"!==n.origin||e.isInstanceOf(l)||e.isInstanceOf(d))return e.write(o,n);var s=D.to3D(e);return s.symbol?s.symbol.write(o,n):(n.messages&&n.messages.push(new r("symbol:unsupported","Symbols of type '"+e.declaredClass+"' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView",{symbol:e,context:n,error:s.error})),null)}function P(e,o){var r=w(e);return r?r.fromJSON(e,o):null}var h={esriSMS:t,esriPMS:S,esriTS:b,esriCLS:s,esriSFS:m,esriPFS:y,PointSymbol3D:u,LineSymbol3D:a,PolygonSymbol3D:c,MeshSymbol3D:p,LabelSymbol3D:f,styleSymbolReference:d};o.read=g,o.write=L,o.fromJSON=P});