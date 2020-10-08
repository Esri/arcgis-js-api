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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../request","../utils","./units"],(function(n,i,e,r,o,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.toGeoCoordinateString=void 0,i.toGeoCoordinateString=function(n,i,s){return e.__awaiter(this,void 0,void 0,(function(){var a,d,u,c,g;return e.__generator(this,(function(f){return a={},null!=i.sr&&"object"==typeof i.sr?a.sr=i.sr.wkid||JSON.stringify(i.sr):a.sr=i.sr,a.coordinates=JSON.stringify(i.coordinates),d=i.conversionType||"mgrs",a.conversionType=t.conversionTypeKebabDict.toJSON(d),a.conversionMode=i.conversionMode,a.numOfDigits=i.numOfDigits,a.rounding=i.rounding,a.addSpaces=i.addSpaces,u=o.parseUrl(n),c=e.__assign(e.__assign(e.__assign({},u.query),{f:"json"}),a),g=o.asValidOptions(c,s),[2,r(u.path+"/toGeoCoordinateString",g).then((function(n){return n.data.strings}))]}))}))}}));