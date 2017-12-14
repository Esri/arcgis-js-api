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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/Warning","../Symbol3D","../SimpleLineSymbol","../SimpleMarkerSymbol","../PictureMarkerSymbol","../PictureFillSymbol","../SimpleFillSymbol","../TextSymbol","../PointSymbol3D","../LineSymbol3D","../PolygonSymbol3D","../MeshSymbol3D","../LabelSymbol3D","../WebStyleSymbol","../callouts/LineCallout3D","./symbolConversion"],function(e,n,r,o,l,t,i,s,u,y,S,m,a,b,c,f,p,d,w){function D(e){return e?M[e.type]||null:null}function g(e,n,r){var l=D(e);if(l){var t=new l;return t.read(e,r),t}return r&&r.messages&&e&&r.messages.push(new o("symbol:unsupported","Symbols of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null}function v(e,n,r,o){var l=P(e,{},o);l&&(n[r]=l)}function P(e,n,o){if(!e)return null;if(!o||"web-scene"!==o.origin||e.isInstanceOf(l)||e.isInstanceOf(p))return e.write(n,o);var t=w.to3D(e);return t.symbol?t.symbol.write(n,o):(o.messages&&o.messages.push(new r("symbol:unsupported","Symbols of type '"+e.declaredClass+"' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView",{symbol:e,context:o,error:t.error})),null)}function h(e,n){var r=D(e);return r?r.fromJSON(e,n):null}function L(e,n){if(!e||!e.type)return null;var r=null;switch(e.type){case"line":r=new d}return r&&r.read(e,n),r}Object.defineProperty(n,"__esModule",{value:!0});var M={esriSMS:i,esriPMS:s,esriTS:S,esriSLS:t,esriSFS:y,esriPFS:u,PointSymbol3D:m,LineSymbol3D:a,PolygonSymbol3D:b,MeshSymbol3D:c,LabelSymbol3D:f,styleSymbolReference:p};n.read=g,n.writeTarget=v,n.write=P,n.fromJSON=h,n.readCallout3D=L});