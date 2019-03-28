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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports","../Feature","../languageUtils"],function(e,n,t,r){"use strict";function o(e){"async"===e.mode&&(e.functions.domainname=function(n,o){return e.standardFunctionAsync(n,o,function(e,n,o){if(r.pcCheck(o,2,4),o[0]instanceof t)return o[0].domainValueLookup(r.toString(o[1]),o[2],void 0===o[3]?void 0:r.toNumber(o[3]));if(r.isFeatureSet(o[0]))return o[0]._ensureLoaded().then(function(){var e=r.getDomain(r.toString(o[1]),o[0],null,void 0===o[3]?void 0:r.toNumber(o[3]));return r.getDomainValue(e,o[2])});throw new Error("Invalid Parameter")})},e.signatures.push({name:"domainname",min:"2",max:"4"}),e.functions.domaincode=function(n,o){return e.standardFunctionAsync(n,o,function(e,n,o){if(r.pcCheck(o,2,4),o[0]instanceof t)return o[0].domainCodeLookup(r.toString(o[1]),o[2],void 0===o[3]?void 0:r.toNumber(o[3]));if(r.isFeatureSet(o[0]))return o[0]._ensureLoaded().then(function(){var e=r.getDomain(r.toString(o[1]),o[0],null,void 0===o[3]?void 0:r.toNumber(o[3]));return r.getDomainCode(e,o[2])});throw new Error("Invalid Parameter")})},e.signatures.push({name:"domaincode",min:"2",max:"4"})),e.functions.text=function(n,t){return e.standardFunctionAsync(n,t,function(e,n,t){if(r.pcCheck(t,1,2),!r.isFeatureSet(t[0]))return r.toStringExplicit(t[0],t[1]);var o=r.defaultUndefined(t[2],"");return""===o?t[0].castToText():"schema"===o.toLowerCase()?t[0].convertToText("schema",e.progressTracker):"featureset"===o.toLowerCase()?t[0].convertToText("featureset",e.progressTracker):void 0})}}Object.defineProperty(n,"__esModule",{value:!0}),n.registerFunctions=o});