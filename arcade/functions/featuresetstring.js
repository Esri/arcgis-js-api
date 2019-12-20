// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","exports","../Feature","../languageUtils"],function(e,n,t,o){"use strict";function r(e){"async"===e.mode&&(e.functions.domainname=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(o.pcCheck(r,2,4),r[0]instanceof t)return r[0].domainValueLookup(o.toString(r[1]),r[2],void 0===r[3]?void 0:o.toNumber(r[3]));if(o.isFeatureSet(r[0]))return r[0]._ensureLoaded().then(function(){var e=o.getDomain(o.toString(r[1]),r[0],null,void 0===r[3]?void 0:o.toNumber(r[3]));return o.getDomainValue(e,r[2])});throw new Error("Invalid Parameter")})},e.signatures.push({name:"domainname",min:"2",max:"4"}),e.functions.domaincode=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(o.pcCheck(r,2,4),r[0]instanceof t)return r[0].domainCodeLookup(o.toString(r[1]),r[2],void 0===r[3]?void 0:o.toNumber(r[3]));if(o.isFeatureSet(r[0]))return r[0]._ensureLoaded().then(function(){var e=o.getDomain(o.toString(r[1]),r[0],null,void 0===r[3]?void 0:o.toNumber(r[3]));return o.getDomainCode(e,r[2])});throw new Error("Invalid Parameter")})},e.signatures.push({name:"domaincode",min:"2",max:"4"})),e.functions.text=function(n,t){return e.standardFunctionAsync(n,t,function(e,n,t){if(o.pcCheck(t,1,2),!o.isFeatureSet(t[0]))return o.toStringExplicit(t[0],t[1]);var r=o.defaultUndefined(t[1],"");return""===r?t[0].castToText():"schema"===r.toLowerCase()?t[0].convertToText("schema",e.abortSignal):"featureset"===r.toLowerCase()?t[0].convertToText("featureset",e.abortSignal):void 0})}}Object.defineProperty(n,"__esModule",{value:!0}),n.registerFunctions=r});