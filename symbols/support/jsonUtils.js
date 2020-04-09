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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/Warning","../CIMSymbol","../LabelSymbol3D","../LineSymbol3D","../MeshSymbol3D","../PictureFillSymbol","../PictureMarkerSymbol","../PointSymbol3D","../PolygonSymbol3D","../SimpleFillSymbol","../SimpleLineSymbol","../SimpleMarkerSymbol","../Symbol3D","../TextSymbol","../WebStyleSymbol","../callouts/LineCallout3D","./symbolConversion"],(function(e,o,n,r,l,s,t,i,y,m,u,b,S,a,c,p,f,d,w,D){Object.defineProperty(o,"__esModule",{value:!0});var g={esriSMS:c,esriPMS:m,esriTS:f,esriSLS:a,esriSFS:S,esriPFS:y,PointSymbol3D:u,LineSymbol3D:t,PolygonSymbol3D:b,MeshSymbol3D:i,LabelSymbol3D:s,styleSymbolReference:d,CIMSymbolReference:l};function M(e,o,n){var l=function(e){return e&&g[e.type]||null}(e);if(l){var s=new l;return s.read(e,n),s}return n&&n.messages&&e&&n.messages.push(new r("symbol:unsupported","Symbols of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:n})),null}function v(e,o,r){if(!e)return null;if(r&&"web-scene"===r.origin&&!(e instanceof p)&&!(e instanceof d)){var l="cim"!==e.type?D.to3D(e):{symbol:null,error:new n("symbol-conversion:unsupported-cim-symbol","CIM symbol is unsupported in web scenes",{symbol:e})};return l.symbol?l.symbol.write(o,r):(r.messages&&r.messages.push(new n("symbol:unsupported","Symbols of type '"+e.declaredClass+"' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView",{symbol:e,context:r,error:l.error})),null)}return e.write(o,r)}o.read=M,o.writeTarget=function(e,o,n,r){var l=v(e,{},r);l&&(o[n]=l)},o.write=v,o.fromJSON=function(e,o){return M(e,0,o)},o.readCallout3D=function(e,o){if(!e||!e.type)return null;var n=null;switch(e.type){case"line":n=new w}return n&&n.read(e,o),n}}));