// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../symbols","../../../../symbols/MeshSymbol3D","./Graphics3DSymbol","./Graphics3DWebStyleSymbol"],function(e,l,r,n,o,t){function s(e){return e instanceof t?e.graphics3DSymbol:e instanceof o?e:null}function y(e){if(!e||!e.geometry)return null;switch(e.geometry.type){case"mesh":return i}return null}Object.defineProperty(l,"__esModule",{value:!0}),l.getGraphics3DSymbol=s,l.getDefaultSymbol=y;var i=new n({symbolLayers:[new r.FillSymbol3DLayer]})});