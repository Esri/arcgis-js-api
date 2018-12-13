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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","../Feature","../kernel","../languageUtils"],function(e,n,t,o,r,i){"use strict";function a(e){"async"===e.mode&&(e.functions.domainname=function(n,a){return e.standardFunctionAsync(n,a,function(e,n,a){if(i.pcCheck(a,2,4),a[0]instanceof o)return a[0].domainValueLookup(i.toString(a[1]),a[2],void 0===a[3]?void 0:i.toNumber(a[3]));if(i.isFeatureSet(a[0])){var u=new t;return a[0]._ensureLoaded().then(r.callback(function(){var e=i.getDomain(i.toString(a[1]),a[0],null,void 0===a[3]?void 0:i.toNumber(a[3]));u.resolve(i.getDomainValue(e,a[2]))},u),r.errback(u)),u.promise}throw new Error("Invalid Parameter")})},e.signatures.push({name:"domainname",min:"2",max:"4"}),e.functions.domaincode=function(n,a){return e.standardFunctionAsync(n,a,function(e,n,a){if(i.pcCheck(a,2,4),a[0]instanceof o)return a[0].domainCodeLookup(i.toString(a[1]),a[2],void 0===a[3]?void 0:i.toNumber(a[3]));if(i.isFeatureSet(a[0])){var u=new t;return a[0]._ensureLoaded().then(r.callback(function(){var e=i.getDomain(i.toString(a[1]),a[0],null,void 0===a[3]?void 0:i.toNumber(a[3]));u.resolve(i.getDomainCode(e,a[2]))},u),r.errback(u)),u.promise}throw new Error("Invalid Parameter")})},e.signatures.push({name:"domaincode",min:"2",max:"4"})),e.functions.text=function(n,t){return e.standardFunctionAsync(n,t,function(e,n,t){if(i.pcCheck(t,1,2),!i.isFeatureSet(t[0]))return i.toStringExplicit(t[0],t[1]);var o=i.defaultUndefined(t[2],"");return""===o?t[0].castToText():"schema"===o.toLowerCase()?t[0].convertToText("schema"):"featureset"===o.toLowerCase()?t[0].convertToText("featureset"):void 0})}}Object.defineProperty(n,"__esModule",{value:!0}),n.registerFunctions=a});