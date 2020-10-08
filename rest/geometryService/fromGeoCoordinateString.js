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

define(["require","exports","tslib","../../request","../utils","./units"],(function(r,n,e,i,o,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.fromGeoCoordinateString=void 0,n.fromGeoCoordinateString=function(r,n,s){return e.__awaiter(this,void 0,void 0,(function(){var a,u,c,d,f;return e.__generator(this,(function(g){return a={},null!=n.sr&&"object"==typeof n.sr?a.sr=n.sr.wkid||JSON.stringify(n.sr):a.sr=n.sr,a.strings=JSON.stringify(n.strings),u=n.conversionType||"mgrs",a.conversionType=t.conversionTypeKebabDict.toJSON(u),a.conversionMode=n.conversionMode,c=o.parseUrl(r),d=e.__assign(e.__assign(e.__assign({},c.query),{f:"json"}),a),f=o.asValidOptions(d,s),[2,i(c.path+"/fromGeoCoordinateString",f).then((function(r){return r.data.coordinates}))]}))}))}}));