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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/awaiterHelper","../../core/tsSupport/generatorHelper","../../geometry","../../request","../../core/urlUtils","../../geometry/support/jsonUtils"],function(e,t,r,o,s,n,i,u,c){function p(e,t,p,a){return o(this,void 0,void 0,function(){var o,f,g,l,y,d,m,S;return s(this,function(s){switch(s.label){case 0:return o="string"==typeof e?u.urlToObject(e):e,f=t[0].spatialReference,g=r({},a,{query:r({},o.query,{f:"json",sr:JSON.stringify(f),target:JSON.stringify({geometryType:c.getJsonType(t[0]),geometries:t}),cutter:JSON.stringify(p)})}),[4,i(o.path+"/cut",g)];case 1:return l=s.sent(),y=l.data,d=y.cutIndexes,m=y.geometries,S=void 0===m?[]:m,[2,{cutIndexes:d,geometries:S.map(function(e){return n.fromJSON(e).set(f)})}]}})})}Object.defineProperty(t,"__esModule",{value:!0}),t.cut=p});