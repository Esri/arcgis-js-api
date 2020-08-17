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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","../Dictionary","../Feature","../languageUtils","../featureset/support/shared"],(function(n,e,t,r,o,i){"use strict";function a(n){return n&&n.domain?"coded-value"===n.domain.type||"codedValue"===n.domain.type?t.convertObjectToArcadeDictionary({type:"codedValue",name:n.domain.name,dataType:i.layerFieldEsriConstants[n.field.type],codedValues:n.domain.codedValues.map((function(n){return{name:n.name,code:n.code}}))}):t.convertObjectToArcadeDictionary({type:"range",name:n.domain.name,dataType:i.layerFieldEsriConstants[n.field.type],min:n.domain.min,max:n.domain.max}):null}Object.defineProperty(e,"__esModule",{value:!0}),e.registerFunctions=function(n){"async"===n.mode&&(n.functions.domain=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(o.pcCheck(t,2,3),t[0]instanceof r)return a(t[0].fullDomain(o.toString(t[1]),void 0===t[2]?void 0:o.toNumber(t[2])));if(o.isFeatureSet(t[0]))return t[0]._ensureLoaded().then((function(){return a(o.getDomain(o.toString(t[1]),t[0],null,void 0===t[2]?void 0:o.toNumber(t[2])))}));throw new Error("Invalid Parameter")}))},n.functions.subtypes=function(e,i){return n.standardFunctionAsync(e,i,(function(n,e,i){if(o.pcCheck(i,1,1),i[0]instanceof r){var a=i[0].subtypes();return a?t.convertObjectToArcadeDictionary(a):null}if(o.isFeatureSet(i[0]))return i[0]._ensureLoaded().then((function(){var n=i[0].subtypes();return n?t.convertObjectToArcadeDictionary(n):null}));throw new Error("Invalid Parameter")}))},n.functions.domainname=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(o.pcCheck(t,2,4),t[0]instanceof r)return t[0].domainValueLookup(o.toString(t[1]),t[2],void 0===t[3]?void 0:o.toNumber(t[3]));if(o.isFeatureSet(t[0]))return t[0]._ensureLoaded().then((function(){var n=o.getDomain(o.toString(t[1]),t[0],null,void 0===t[3]?void 0:o.toNumber(t[3]));return o.getDomainValue(n,t[2])}));throw new Error("Invalid Parameter")}))},n.signatures.push({name:"domainname",min:"2",max:"4"}),n.functions.domaincode=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(o.pcCheck(t,2,4),t[0]instanceof r)return t[0].domainCodeLookup(o.toString(t[1]),t[2],void 0===t[3]?void 0:o.toNumber(t[3]));if(o.isFeatureSet(t[0]))return t[0]._ensureLoaded().then((function(){var n=o.getDomain(o.toString(t[1]),t[0],null,void 0===t[3]?void 0:o.toNumber(t[3]));return o.getDomainCode(n,t[2])}));throw new Error("Invalid Parameter")}))},n.signatures.push({name:"domaincode",min:"2",max:"4"})),n.functions.text=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(o.pcCheck(t,1,2),!o.isFeatureSet(t[0]))return o.toStringExplicit(t[0],t[1]);var r=o.defaultUndefined(t[1],"");return""===r?t[0].castToText():"schema"===r.toLowerCase()?t[0].convertToText("schema",n.abortSignal):"featureset"===r.toLowerCase()?t[0].convertToText("featureset",n.abortSignal):void 0}))},n.functions.schema=function(e,i){return n.standardFunctionAsync(e,i,(function(n,e,i){if(o.pcCheck(i,1,1),o.isFeatureSet(i[0]))return i[0].load().then((function(){return t.convertObjectToArcadeDictionary(i[0].schema())}));if(i[0]instanceof r){var a=i[0].schema();return a?t.convertObjectToArcadeDictionary(a):null}throw new Error("Invalid Parameter")}))}}}));
