// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","../polyfill/tsSupport/awaiter","../polyfill/tsSupport/generator","../Dictionary","../languageUtils","../featureset/support/shared"],(function(e,n,t,r,o,i,a){"use strict";function u(e){return e&&e.domain?"coded-value"===e.domain.type||"codedValue"===e.domain.type?o.convertObjectToArcadeDictionary({type:"codedValue",name:e.domain.name,dataType:a.layerFieldEsriConstants[e.field.type],codedValues:e.domain.codedValues.map((function(e){return{name:e.name,code:e.code}}))}):o.convertObjectToArcadeDictionary({type:"range",name:e.domain.name,dataType:a.layerFieldEsriConstants[e.field.type],min:e.domain.min,max:e.domain.max}):null}Object.defineProperty(n,"__esModule",{value:!0}),n.registerFunctions=void 0,n.registerFunctions=function(e){"async"===e.mode&&(e.functions.domain=function(n,o){return e.standardFunctionAsync(n,o,(function(e,n,o){return t(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return i.pcCheck(o,2,3),i.isFeature(o[0])?[2,u(i.featureFullDomain(o[0],i.toString(o[1]),void 0===o[2]?void 0:i.toNumber(o[2])))]:i.isFeatureSet(o[0])?[4,o[0]._ensureLoaded()]:[3,2];case 1:return e.sent(),[2,u(i.getDomain(i.toString(o[1]),o[0],null,void 0===o[2]?void 0:i.toNumber(o[2])))];case 2:throw new Error("Invalid Parameter")}}))}))}))},e.functions.subtypes=function(n,a){return e.standardFunctionAsync(n,a,(function(e,n,a){return t(this,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:return i.pcCheck(a,1,1),i.isFeature(a[0])?(e=i.featureSubtypes(a[0]))?[2,o.convertObjectToArcadeDictionary(e)]:[2,null]:i.isFeatureSet(a[0])?[4,a[0]._ensureLoaded()]:[3,2];case 1:return n.sent(),(e=a[0].subtypes())?[2,o.convertObjectToArcadeDictionary(e)]:[2,null];case 2:throw new Error("Invalid Parameter")}}))}))}))},e.functions.domainname=function(n,o){return e.standardFunctionAsync(n,o,(function(e,n,o){return t(this,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:return i.pcCheck(o,2,4),i.isFeature(o[0])?[2,i.featureDomainValueLookup(o[0],i.toString(o[1]),o[2],void 0===o[3]?void 0:i.toNumber(o[3]))]:i.isFeatureSet(o[0])?[4,o[0]._ensureLoaded()]:[3,2];case 1:return n.sent(),e=i.getDomain(i.toString(o[1]),o[0],null,void 0===o[3]?void 0:i.toNumber(o[3])),[2,i.getDomainValue(e,o[2])];case 2:throw new Error("Invalid Parameter")}}))}))}))},e.signatures.push({name:"domainname",min:"2",max:"4"}),e.functions.domaincode=function(n,o){return e.standardFunctionAsync(n,o,(function(e,n,o){return t(this,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:return i.pcCheck(o,2,4),i.isFeature(o[0])?[2,i.featureDomainCodeLookup(o[0],i.toString(o[1]),o[2],void 0===o[3]?void 0:i.toNumber(o[3]))]:i.isFeatureSet(o[0])?[4,o[0]._ensureLoaded()]:[3,2];case 1:return n.sent(),e=i.getDomain(i.toString(o[1]),o[0],null,void 0===o[3]?void 0:i.toNumber(o[3])),[2,i.getDomainCode(e,o[2])];case 2:throw new Error("Invalid Parameter")}}))}))}))},e.signatures.push({name:"domaincode",min:"2",max:"4"})),e.functions.text=function(n,t){return e.standardFunctionAsync(n,t,(function(e,n,t){if(i.pcCheck(t,1,2),!i.isFeatureSet(t[0]))return i.toStringExplicit(t[0],t[1]);var r=i.defaultUndefined(t[1],"");return""===r?t[0].castToText():"schema"===r.toLowerCase()?t[0].convertToText("schema",e.abortSignal):"featureset"===r.toLowerCase()?t[0].convertToText("featureset",e.abortSignal):void 0}))},e.functions.gdbversion=function(n,o){return e.standardFunctionAsync(n,o,(function(e,n,o){return t(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return i.pcCheck(o,1,1),i.isFeature(o[0])?[2,o[0].gdbVersion()]:i.isFeatureSet(o[0])?[4,o[0].load()]:[3,2];case 1:return[2,e.sent().gdbVersion];case 2:throw new Error("Invalid Parameter")}}))}))}))},e.functions.schema=function(n,a){return e.standardFunctionAsync(n,a,(function(e,n,a){return t(this,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:return i.pcCheck(a,1,1),i.isFeatureSet(a[0])?[4,a[0].load()]:[3,2];case 1:return n.sent(),[2,o.convertObjectToArcadeDictionary(a[0].schema())];case 2:if(i.isFeature(a[0]))return[2,(e=i.featureSchema(a[0]))?o.convertObjectToArcadeDictionary(e):null];throw new Error("Invalid Parameter")}}))}))}))}}}));