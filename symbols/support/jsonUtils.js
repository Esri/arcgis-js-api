// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/Warning","../CIMSymbol","../LabelSymbol3D","../LineSymbol3D","../MeshSymbol3D","../PictureFillSymbol","../PictureMarkerSymbol","../PointSymbol3D","../PolygonSymbol3D","../SimpleFillSymbol","../SimpleLineSymbol","../SimpleMarkerSymbol","../Symbol3D","../TextSymbol","../WebStyleSymbol","../callouts/LineCallout3D","./symbolConversion"],function(e,n,o,r,l,s,t,i,y,u,m,b,S,a,c,p,f,d,w,D){function g(e){return e?L[e.type]||null:null}function M(e,n,o){var l=g(e);if(l){var s=new l;return s.read(e,o),s}return o&&o.messages&&e&&o.messages.push(new r("symbol:unsupported","Symbols of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:o})),null}function v(e,n,o,r){var l=P(e,{},r);l&&(n[o]=l)}function P(e,n,r){if(!e)return null;if(r&&"web-scene"===r.origin&&!e.isInstanceOf(p)&&!e.isInstanceOf(d)){var l="cim"!==e.type?D.to3D(e):{symbol:null,error:new o("symbol-conversion:unsupported-cim-symbol","CIM symbol is unsupported in web scenes",{symbol:e})};return l.symbol?l.symbol.write(n,r):(r.messages&&r.messages.push(new o("symbol:unsupported","Symbols of type '"+e.declaredClass+"' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView",{symbol:e,context:r,error:l.error})),null)}return e.write(n,r)}function h(e,n){return M(e,null,n)}function C(e,n){if(!e||!e.type)return null;var o=null;switch(e.type){case"line":o=new w}return o&&o.read(e,n),o}Object.defineProperty(n,"__esModule",{value:!0});var L={esriSMS:c,esriPMS:u,esriTS:f,esriSLS:a,esriSFS:S,esriPFS:y,PointSymbol3D:m,LineSymbol3D:t,PolygonSymbol3D:b,MeshSymbol3D:i,LabelSymbol3D:s,styleSymbolReference:d,CIMSymbolReference:l};n.read=M,n.writeTarget=v,n.write=P,n.fromJSON=h,n.readCallout3D=C});