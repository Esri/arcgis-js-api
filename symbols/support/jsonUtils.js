// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/Logger","../../core/Warning","../CIMSymbol","../LabelSymbol3D","../LineSymbol3D","../MeshSymbol3D","../PictureFillSymbol","../PictureMarkerSymbol","../PointSymbol3D","../PolygonSymbol3D","../SimpleFillSymbol","../SimpleLineSymbol","../SimpleMarkerSymbol","../Symbol3D","../TextSymbol","../WebStyleSymbol","../callouts/LineCallout3D","./symbolConversion"],(function(e,o,r,n,s,l,t,i,y,m,b,u,a,S,p,c,w,d,f,g,D){Object.defineProperty(o,"__esModule",{value:!0});var M={esriSMS:c,esriPMS:b,esriTS:d,esriSLS:p,esriSFS:S,esriPFS:m,PointSymbol3D:u,LineSymbol3D:i,PolygonSymbol3D:a,MeshSymbol3D:y,LabelSymbol3D:t,styleSymbolReference:f,CIMSymbolReference:l},h=n.getLogger("esri.symbols.support.jsonUtils");function v(e,o,r){var n=function(e){return e&&M[e.type]||null}(e);if(n){var l=new n;return l.read(e,r),l}if(e){var t="Symbols of type '"+(e.type||"unknown")+"' are not supported";r&&r.messages&&r.messages.push(new s("symbol:unsupported",t,{definition:e,context:r})),h.error(t)}return null}function C(e,o,n){if(!e)return null;if(n&&"web-scene"===n.origin&&!(e instanceof w)&&!(e instanceof f)){var s="cim"!==e.type?D.to3D(e):{symbol:null,error:new r("symbol-conversion:unsupported-cim-symbol","CIM symbol is unsupported in web scenes",{symbol:e})};return s.symbol?s.symbol.write(o,n):(n.messages&&n.messages.push(new r("symbol:unsupported","Symbols of type '"+e.declaredClass+"' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView",{symbol:e,context:n,error:s.error})),null)}return n&&"web-map"===n.origin&&"web-style"===e.type?(n.messages&&n.messages.push(new r("symbol:unsupported","Symbols of type '"+e.declaredClass+"' are not supported in webmaps. Use CIMSymbol instead when working with WebMap in MapView.",{symbol:e,context:n})),null):e.write(o,n)}o.read=v,o.writeTarget=function(e,o,r,n){var s=C(e,{},n);s&&(o[r]=s)},o.write=C,o.fromJSON=function(e,o){return v(e,0,o)},o.readCallout3D=function(e,o){if(!e||!e.type)return null;var r=null;switch(e.type){case"line":r=new g}return r&&r.read(e,o),r}}));