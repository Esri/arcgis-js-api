// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/Warning","../LabelSymbol3D","../LineSymbol3D","../MeshSymbol3D","../PictureFillSymbol","../PictureMarkerSymbol","../PointSymbol3D","../PolygonSymbol3D","../SimpleFillSymbol","../SimpleLineSymbol","../SimpleMarkerSymbol","../Symbol3D","../TextSymbol","../WebStyleSymbol","../callouts/LineCallout3D","./symbolConversion"],(function(e,n,r,o,l,t,i,s,y,u,S,m,b,a,c,p,f,d,w){Object.defineProperty(n,"__esModule",{value:!0});var D={esriSMS:a,esriPMS:y,esriTS:p,esriSLS:b,esriSFS:m,esriPFS:s,PointSymbol3D:u,LineSymbol3D:t,PolygonSymbol3D:S,MeshSymbol3D:i,LabelSymbol3D:l,styleSymbolReference:f};function g(e,n,r){var l=function(e){return e&&D[e.type]||null}(e);if(l){var t=new l;return t.read(e,r),t}return r&&r.messages&&e&&r.messages.push(new o("symbol:unsupported","Symbols of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null}function P(e,n,o){if(!e)return null;if(!o||"web-scene"!==o.origin||e.isInstanceOf(c)||e.isInstanceOf(f))return e.write(n,o);var l=w.to3D(e);return l.symbol?l.symbol.write(n,o):(o.messages&&o.messages.push(new r("symbol:unsupported","Symbols of type '"+e.declaredClass+"' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView",{symbol:e,context:o,error:l.error})),null)}n.read=g,n.writeTarget=function(e,n,r,o){var l=P(e,{},o);l&&(n[r]=l)},n.write=P,n.fromJSON=function(e,n){return g(e,0,n)},n.readCallout3D=function(e,n){if(!e||!e.type)return null;var r=null;switch(e.type){case"line":r=new d}return r&&r.read(e,n),r}}));