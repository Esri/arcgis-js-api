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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/Warning","../Symbol3D","../SimpleLineSymbol","../SimpleMarkerSymbol","../PictureMarkerSymbol","../PictureFillSymbol","../SimpleFillSymbol","../TextSymbol","../PointSymbol3D","../LineSymbol3D","../PolygonSymbol3D","../MeshSymbol3D","../LabelSymbol3D","../WebStyleSymbol","../callouts/LineCallout3D","./symbolConversion"],function(e,n,r,o,l,t,s,i,u,y,S,m,b,a,c,p,f,d,D){function w(e){return e?L[e.type]||null:null}function g(e,n,r){var l=w(e);if(l){var t=new l;return t.read(e,r),t}return r&&r.messages&&e&&r.messages.push(new o("symbol:unsupported","Symbols of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null}function P(e,n,o){if(!e)return null;if(!o||"web-scene"!==o.origin||e.isInstanceOf(l)||e.isInstanceOf(f))return e.write(n,o);var t=D.to3D(e);return t.symbol?t.symbol.write(n,o):(o.messages&&o.messages.push(new r("symbol:unsupported","Symbols of type '"+e.declaredClass+"' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView",{symbol:e,context:o,error:t.error})),null)}function v(e,n){var r=w(e);return r?r.fromJSON(e,n):null}function h(e,n){if(!e||!e.type)return null;var r=null;switch(e.type){case"line":r=new d}return r&&r.read(e,n),r}Object.defineProperty(n,"__esModule",{value:!0});var L={esriSMS:s,esriPMS:i,esriTS:S,esriSLS:t,esriSFS:y,esriPFS:u,PointSymbol3D:m,LineSymbol3D:b,PolygonSymbol3D:a,MeshSymbol3D:c,LabelSymbol3D:p,styleSymbolReference:f};n.read=g,n.write=P,n.fromJSON=v,n.readCallout3D=h});