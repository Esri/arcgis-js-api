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

define(["require","exports","./polyfill/tsSupport/awaiter","./polyfill/tsSupport/generator","./polyfill/tsSupport/assign","./polyfill/tsSupport/spreadarray","./FunctionWrapper","./ImmutableArray","./ImmutablePathArray","./ImmutablePointArray","../geometry/Extent","../geometry/Geometry","../geometry/Multipoint","../geometry/Point","../geometry/Polygon","../geometry/Polyline","../libs/luxon/luxon","dojo/number","dojo/_base/kernel","./featureset/support/shared"],(function(e,n,t,r,i,a,u,o,l,s,f,c,d,m,g,p,y,h,v,S){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.featureSchema=n.featureDomainCodeLookup=n.featureDomainValueLookup=n.featureSubtypes=n.featureFullDomain=n.castAsJsonAsync=n.castAsJson=n.binaryOperator=n.tick=n.toStringArray=n.autoCastArrayOfPointsToMultiPoint=n.autoCastArrayOfPointsToPolyline=n.autoCastArrayOfPointsToPolygon=n.autoCastFeatureToGeometry=n.stableStringify=n.getDomain=n.getDomainCode=n.getDomainValue=n.fixNullGeometry=n.fixSpatialReference=n.toBoolean=n.toDateTime=n.toDate=n.toNumber=n.toStringExplicit=n.toNumberArray=n.toString=n.equalityTest=n.greaterThanLessThan=n.standardiseDateFormat=n.formatDate=n.formatNumber=n.generateUUID=n.absRound=n.pcCheck=n.isDate=n.isImmutableArray=n.isFeatureSetCollection=n.isFeatureSet=n.isFeature=n.isArray=n.isInteger=n.isNumber=n.isBoolean=n.isString=n.defaultUndefined=n.isSimpleType=n.isFunctionParameter=n.multiReplace=n.continueResult=n.breakResult=n.voidOperation=n.SizzleFunction=n.ReturnResult=n.ImplicitResult=n.NativeFunction=n.SizzleFunctionE=n.NativeFunctionE=n.ImplicitResultE=n.ReturnResultE=void 0;var b=function(e){this.value=e};n.ReturnResultE=b;var x=function(e){this.value=e};n.ImplicitResultE=x;var T=function(e){this.fn=e};n.NativeFunctionE=T;var D=function(e,n){this.paramCount=n,this.fn=e};function R(e,n,t){return""===n?e:null===n?e:void 0===n?e:n===t?e:n===t?e:e=e.split(n).join(t)}function k(e){return e instanceof T||e instanceof u||e instanceof D}function F(e){return!!A(e)||(!!C(e)||(!!I(e)||(!!N(e)||(null===e||(e===n.voidOperation||"number"==typeof e)))))}function A(e){return"string"==typeof e||e instanceof String}function N(e){return"boolean"==typeof e}function C(e){return"number"==typeof e}function M(e){return e instanceof Array}function O(e){return e instanceof o}function I(e){return e instanceof Date}function w(e,n){return!1===isNaN(e)?null==n||""===n?e.toString():(n=R(n,"‰",""),n=R(n,"¤",""),h.format(e,{pattern:n})):e.toString()}function L(e,n){var t=y.DateTime.fromJSDate(e);return null==n||""===n?t.toISO({suppressMilliseconds:!0}):t.toFormat(_(n),{locale:v.locale,numberingSystem:"latn"})}function _(e){for(var n="",t=0,r=(e=e.replace(/LTS|LT|LL?L?L?|l{1,4}/g,"[$&]")).match(/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g);t<r.length;t++){var i=r[t];switch(i){case"D":n+="d";break;case"DD":n+="dd";break;case"DDD":n+="o";break;case"d":n+="c";break;case"ddd":n+="ccc";break;case"dddd":n+="cccc";break;case"M":n+="L";break;case"MM":n+="LL";break;case"MMM":n+="LLL";break;case"MMMM":n+="LLLL";break;case"YY":n+="yy";break;case"Y":case"YYYY":n+="yyyy";break;case"Q":n+="q";break;case"Z":n+="ZZ";break;case"ZZ":n+="ZZZ";break;case"S":n+="'S'";break;case"SS":n+="'SS'";break;case"SSS":n+="u";break;case"A":case"a":n+="a";break;case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":case"X":case"x":n+=i;break;default:i.length>=2&&"["===i.slice(0,1)&&"]"===i.slice(-1)?n+="'"+i.slice(1,-1)+"'":n+="'"+i+"'"}}return n}function J(e,n,t){switch(t){case">":return e>n;case"<":return e<n;case">=":return e>=n;case"<=":return e<=n}return!1}function Y(e,t){if(e===t)return!0;if(null===e&&t===n.voidOperation||null===t&&e===n.voidOperation)return!0;if(I(e)&&I(t))return e.getTime()===t.getTime();if(e instanceof l)return e.equalityTest(t);if(e instanceof s)return e.equalityTest(t);if(e instanceof m&&t instanceof m){var r=e.getCacheValue("_arcadeCacheId"),i=t.getCacheValue("_arcadeCacheId");if(null!=r)return r===i}if(void 0!==e&&void 0!==t&&null!==e&&null!==t&&"object"==typeof e&&"object"==typeof t){if(e._arcadeCacheId===t._arcadeCacheId&&void 0!==e._arcadeCacheId&&null!==e._arcadeCacheId)return!0;if(e._underlyingGraphic===t._underlyingGraphic&&void 0!==e._underlyingGraphic&&null!==e._underlyingGraphic)return!0}return!1}function Z(e,t){if(A(e))return e;if(null===e)return"";if(C(e))return w(e,t);if(N(e))return e.toString();if(I(e))return L(e,t);if(e instanceof c)return JSON.stringify(e.toJson());if(M(e)){for(var r=[],i=0;i<e.length;i++)r[i]=j(e[i]);return"["+r.join(",")+"]"}if(e instanceof o){for(r=[],i=0;i<e.length();i++)r[i]=j(e.get(i));return"["+r.join(",")+"]"}return null!==e&&"object"==typeof e&&void 0!==e.castToText?e.castToText():k(e)?"object, Function":(n.voidOperation,"")}function P(e,t){if(A(e))return e;if(null===e)return"";if(C(e))return w(e,t);if(N(e))return e.toString();if(I(e))return L(e,t);if(e instanceof c)return e instanceof f?'{"xmin":'+e.xmin.toString()+',"ymin":'+e.ymin.toString()+","+(e.hasZ?'"zmin":'+e.zmin.toString()+",":"")+(e.hasM?'"mmin":'+e.mmin.toString()+",":"")+'"xmax":'+e.xmax.toString()+',"ymax":'+e.ymax.toString()+","+(e.hasZ?'"zmax":'+e.zmax.toString()+",":"")+(e.hasM?'"mmax":'+e.mmax.toString()+",":"")+'"spatialReference":'+H(e.spatialReference)+"}":H(e.toJson(),(function(e,n){return e.key===n.key?0:"spatialReference"===e.key?1:"spatialReference"===n.key?-1:e.key<n.key?-1:e.key>n.key?1:0}));if(M(e)){for(var r=[],i=0;i<e.length;i++)r[i]=j(e[i]);return"["+r.join(",")+"]"}if(e instanceof o){for(r=[],i=0;i<e.length();i++)r[i]=j(e.get(i));return"["+r.join(",")+"]"}return null!==e&&"object"==typeof e&&void 0!==e.castToText?e.castToText():k(e)?"object, Function":(n.voidOperation,"")}function j(e){if(null===e)return"null";if(N(e)||C(e)||A(e))return JSON.stringify(e);if(e instanceof c)return P(e);if(e instanceof o)return P(e);if(e instanceof Array)return P(e);if(e instanceof Date)return JSON.stringify(L(e,""));if(null!==e&&"object"==typeof e){if(void 0!==e.castToText)return e.castToText()}else if(e===n.voidOperation)return"null";return"null"}function E(e,t){return C(e)?e:null===e?0:""===e?0:I(e)?NaN:N(e)?e?1:0:M(e)?NaN:""===e?NaN:void 0===e?NaN:void 0!==t&&A(e)?(t=R(t,"‰",""),t=R(t,"¤",""),h.parse(e,{pattern:t})):e===n.voidOperation?0:Number(e)}function G(e){var n=/ (\d\d)/,t=y.DateTime.fromISO(e);return t.isValid?t:n.test(e)&&(e=e.replace(n,"T$1"),(t=y.DateTime.fromISO(e)).isValid)?t:null}function z(e,n){if(!e)return n;if(!e.domain)return n;var t=null;if("string"===e.field.type||"esriFieldTypeString"===e.field.type)n=Z(n);else{if(null==n)return null;if(""===n)return n;n=E(n)}for(var r=0;r<e.domain.codedValues.length;r++){var i=e.domain.codedValues[r];i.code===n&&(t=i)}return null===t?n:t.name}function V(e,n){if(!e)return n;if(!e.domain)return n;var t=null;n=Z(n);for(var r=0;r<e.domain.codedValues.length;r++){var i=e.domain.codedValues[r];i.name===n&&(t=i)}return null===t?n:t.code}function U(e,n,t,r){if(void 0===t&&(t=null),void 0===r&&(r=null),!n)return null;if(!n.fields)return null;for(var i,a,u=null,o=0;o<n.fields.length;o++){var l=n.fields[o];l.name.toLowerCase()===e.toString().toLowerCase()&&(u=l)}if(null===u)throw new Error("Field not found");return null===r&&t&&n.typeIdField&&(r=t.hasField(n.typeIdField)?t.field(n.typeIdField):null),null!=r&&n.types.some((function(e){return e.id===r&&((i=e.domains&&e.domains[u.name])&&"inherited"===i.type&&(i=q(u.name,n),a=!0),!0)})),a||i||(i=q(e,n)),{field:u,domain:i}}function q(e,n){var t;return n.fields.some((function(n){return n.name.toLowerCase()===e.toLowerCase()&&(t=n.domain),!!t})),t}function H(e,n){n||(n={}),"function"==typeof n&&(n={cmp:n});var t,r="boolean"==typeof n.cycles&&n.cycles,i=n.cmp&&(t=n.cmp,function(e){return function(n,r){var i={key:n,value:e[n]},a={key:r,value:e[r]};return t(i,a)}}),a=[];return function e(n){if(n&&n.toJson&&"function"==typeof n.toJson&&(n=n.toJson()),void 0!==n){if("number"==typeof n)return isFinite(n)?""+n:"null";if("object"!=typeof n)return JSON.stringify(n);var t,u;if(Array.isArray(n)){for(u="[",t=0;t<n.length;t++)t&&(u+=","),u+=e(n[t])||"null";return u+"]"}if(null===n)return"null";if(a.includes(n)){if(r)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var o=a.push(n)-1,l=Object.keys(n).sort(i&&i(n));for(u="",t=0;t<l.length;t++){var s=l[t],f=e(n[s]);f&&(u&&(u+=","),u+=JSON.stringify(s)+":"+f)}return a.splice(o,1),"{"+u+"}"}}(e)}function B(e,n){if(!(n instanceof m))throw new Error("Invalid Argument");e.push([n.x,n.y])}n.SizzleFunctionE=D,n.NativeFunction=T,n.ImplicitResult=x,n.ReturnResult=b,n.SizzleFunction=D,n.voidOperation={type:"VOID"},n.breakResult={type:"BREAK"},n.continueResult={type:"CONTINUE"},n.multiReplace=R,n.isFunctionParameter=k,n.isSimpleType=F,n.defaultUndefined=function(e,n){return void 0===e?n:e},n.isString=A,n.isBoolean=N,n.isNumber=C,n.isInteger=function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},n.isArray=M,n.isFeature=function(e){return"esri.arcade.Feature"===(null==e?void 0:e.arcadeDeclaredClass)},n.isFeatureSet=function(e){return!0===(e&&e.declaredRootClass&&"esri.arcade.featureset.support.FeatureSet"===e.declaredRootClass)},n.isFeatureSetCollection=function(e){return!0===(e&&e.declaredRootClass&&"esri.arcade.featureSetCollection"===e.declaredRootClass)},n.isImmutableArray=O,n.isDate=I,n.pcCheck=function(e,n,t){if(e.length<n||e.length>t)throw new Error("Function called with wrong number of Parameters")},n.absRound=function(e){return e<0?-Math.round(-e):Math.round(e)},n.generateUUID=function(){var e=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(n){var t=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===n?t:3&t|8).toString(16)}))},n.formatNumber=w,n.formatDate=L,n.standardiseDateFormat=_,n.greaterThanLessThan=function(e,t,r){if(null===e){if(null===t||t===n.voidOperation)return J(null,null,r);if(C(t))return J(0,t,r);if(A(t))return J(0,E(t),r);if(N(t))return J(0,E(t),r);if(I(t))return J(0,t.getTime(),r)}if(e===n.voidOperation){if(null===t||t===n.voidOperation)return J(null,null,r);if(C(t))return J(0,t,r);if(A(t))return J(0,E(t),r);if(N(t))return J(0,E(t),r);if(I(t))return J(0,t.getTime(),r)}else if(C(e)){if(C(t))return J(e,t,r);if(N(t))return J(e,E(t),r);if(null===t||t===n.voidOperation)return J(e,0,r);if(A(t))return J(e,E(t),r);if(I(t))return J(e,t.getTime(),r)}else if(A(e)){if(A(t))return J(Z(e),Z(t),r);if(I(t))return J(E(e),t.getTime(),r);if(C(t))return J(E(e),t,r);if(null===t||t===n.voidOperation)return J(E(e),0,r);if(N(t))return J(E(e),E(t),r)}else if(I(e)){if(I(t))return J(e,t,r);if(null===t||t===n.voidOperation)return J(e.getTime(),0,r);if(C(t))return J(e.getTime(),t,r);if(N(t))return J(e.getTime(),E(t),r);if(A(t))return J(e.getTime(),E(t),r)}else if(N(e)){if(N(t))return J(e,t,r);if(C(t))return J(E(e),E(t),r);if(I(t))return J(E(e),t.getTime(),r);if(null===t||t===n.voidOperation)return J(E(e),0,r);if(A(t))return J(E(e),E(t),r)}return!!Y(e,t)&&("<="===r||">="===r)},n.equalityTest=Y,n.toString=Z,n.toNumberArray=function(e){var n=[];if(!1===M(e))return null;if(e instanceof o){for(var t=0;t<e.length();t++)n[t]=E(e.get(t));return n}for(t=0;t<e.length;t++)n[t]=E(e[t]);return n},n.toStringExplicit=P,n.toNumber=E,n.toDate=function(e){if(I(e))return e;if(A(e)){var n=G(e);if(n)return n.toJSDate()}return null},n.toDateTime=function(e){return I(e)?y.DateTime.fromJSDate(e):A(e)?G(e):null},n.toBoolean=function(e){return N(e)?e:A(e)?"true"===(e=e.toLowerCase()):!!C(e)&&(0!==e&&!isNaN(e))},n.fixSpatialReference=function(e,n){return null==e?null:(null!==e.spatialReference&&void 0!==e.spatialReference||(e.spatialReference=n),e)},n.fixNullGeometry=function(e){if(null===e)return null;if(e instanceof m)return"NaN"===e.x||null===e.x||isNaN(e.x)?null:e;if(e instanceof g){if(0===e.rings.length)return null;for(var n=0,t=e.rings;n<t.length;n++){if(t[n].length>0)return e}return null}if(e instanceof p){if(0===e.paths.length)return null;for(var r=0,i=e.paths;r<i.length;r++){if(i[r].length>0)return e}return null}return e instanceof d?0===e.points.length?null:e:e instanceof f?"NaN"===e.xmin||null===e.xmin||isNaN(e.xmin)?null:e:null},n.getDomainValue=z,n.getDomainCode=V,n.getDomain=U,n.stableStringify=H,n.autoCastFeatureToGeometry=function(e){if(null===e)return null;for(var n=[],t=0,r=e;t<r.length;t++){var i=r[t];i&&i.arcadeDeclaredClass&&"esri.arcade.Feature"===i.arcadeDeclaredClass?n.push(i.geometry()):n.push(i)}return n},n.autoCastArrayOfPointsToPolygon=function(e,n){if(M(e)||O(e)){var t=!1,r=!1,i=[],a=n;if(M(e)){for(var u=0,o=e;u<o.length;u++){B(i,o[u])}i.length>0&&(a=e[0].spatialReference,t=e[0].hasZ,r=e[0].hasM)}else if(e instanceof s)(i=e._elements).length>0&&(t=e._hasZ,r=e._hasM,a=e.get(0).spatialReference);else{if(!O(e))throw new Error("Invalid Argument");for(var l=0,f=e.toArray();l<f.length;l++){B(i,f[l])}i.length>0&&(a=e.get(0).spatialReference,t=!0===e.get(0).hasZ,r=!0===e.get(0).hasM)}return 0===i.length?null:(!1===new g({rings:[],spatialReference:{wkid:4326}}).isClockwise(i)&&(i=i.slice(0).reverse()),new g({rings:[i],spatialReference:a,hasZ:t,hasM:r}))}return e},n.autoCastArrayOfPointsToPolyline=function(e,n){if(M(e)||O(e)){var t=!1,r=!1,i=[],a=n;if(M(e)){for(var u=0,o=e;u<o.length;u++){B(i,o[u])}i.length>0&&(a=e[0].spatialReference,t=!0===e[0].hasZ,r=!0===e[0].hasM)}else if(e instanceof s)(i=e._elements).length>0&&(t=e._hasZ,r=e._hasM,a=e.get(0).spatialReference);else if(O(e)){for(var l=0,f=e.toArray();l<f.length;l++){B(i,f[l])}i.length>0&&(a=e.get(0).spatialReference,t=!0===e.get(0).hasZ,r=!0===e.get(0).hasM)}return 0===i.length?null:new p({paths:[i],spatialReference:a,hasZ:t,hasM:r})}return e},n.autoCastArrayOfPointsToMultiPoint=function(e,n){if(M(e)||O(e)){var t=!1,r=!1,i=[],a=n;if(M(e)){for(var u=0,o=e;u<o.length;u++){B(i,o[u])}i.length>0&&(a=e[0].spatialReference,t=!0===e[0].hasZ,r=!0===e[0].hasM)}else if(e instanceof s)(i=e._elements).length>0&&(t=e._hasZ,r=e._hasM,a=e.get(0).spatialReference);else if(O(e)){for(var l=0,f=e.toArray();l<f.length;l++){B(i,f[l])}i.length>0&&(a=e.get(0).spatialReference,t=!0===e.get(0).hasZ,r=!0===e.get(0).hasM)}return 0===i.length?null:new d({points:i,spatialReference:a,hasZ:t,hasM:r})}return e},n.toStringArray=function(e,n){void 0===n&&(n=!1);var t=[];if(null===e)return t;if(!0===M(e)){for(var r=0;r<e.length;r++){""===(i=Z(e[r]))&&!0!==n||t.push(i)}return t}if(e instanceof o){for(r=0;r<e.length();r++){var i;""===(i=Z(e.get(r)))&&!0!==n||t.push(i)}return t}return F(e)?(""===(i=Z(e))&&!0!==n||t.push(i),t):[]};var W=0;function Q(e,n){return void 0===n&&(n=null),null==e?null:N(e)||C(e)||A(e)?e:e instanceof c?!0===(null==n?void 0:n.keepGeometryType)?e:e.toJson():e instanceof o?e.toArray().map((function(e){return Q(e,n)})):e instanceof Array?e.map((function(e){return Q(e,n)})):e instanceof Date?e:null!==e&&"object"==typeof e&&void 0!==e.castAsJson?e.castAsJson(n):null}function X(e,n,i,a,u){return t(this,void 0,void 0,(function(){var t;return r(this,(function(r){switch(r.label){case 0:return[4,$(e,n,i)];case 1:return t=r.sent(),u[a]=t,[2]}}))}))}function $(e,n,i){return void 0===n&&(n=null),void 0===i&&(i=null),t(this,void 0,void 0,(function(){var t,a,u,l,s;return r(this,(function(r){switch(r.label){case 0:return e instanceof o&&(e=e.toArray()),null!=e?[3,1]:[2,null];case 1:return F(e)||e instanceof c||e instanceof Date?[2,Q(e,i)]:[3,2];case 2:if(!(e instanceof Array))return[3,5];for(t=[],a=[],u=0,l=e;u<l.length;u++)null===(s=l[u])||F(s)||s instanceof c||s instanceof Date?a.push(Q(s,i)):(a.push(null),t.push(X(s,n,i,a.length-1,a)));return t.length>0?[4,Promise.all(t)]:[3,4];case 3:r.sent(),r.label=4;case 4:return[2,a];case 5:if(null!==e&&"object"==typeof e&&void 0!==e.castAsJsonAsync)return[2,e.castAsJsonAsync(n,i)];r.label=6;case 6:return[2,null]}}))}))}n.tick=function(e){return++W%100==0?(W=0,new Promise((function(n){setTimeout((function(){n(e)}),0)}))):e},n.binaryOperator=function(e,n,t){switch(t){case"&":return e&n;case"|":return e|n;case"^":return e^n;case"<<":return e<<n;case">>":return e>>n;case">>>":return e>>>n}},n.castAsJson=Q,n.castAsJsonAsync=$,n.featureFullDomain=function(e,n,t){var r=e.fullSchema();return null===r?null:r.fields?U(n,r,e,t):null},n.featureSubtypes=function(e){var n=e.fullSchema();return null===n?null:n.fields&&n.typeIdField?{subtypeField:n.typeIdField,subtypes:n.types?n.types.map((function(e){return{name:e.name,code:e.id}})):[]}:null},n.featureDomainValueLookup=function(e,n,t,r){var i=e.fullSchema();if(null===i)return null;if(!i.fields)return null;var a=U(n,i,e,r);if(void 0===t)try{t=e.field(n)}catch(e){return null}return z(a,t)},n.featureDomainCodeLookup=function(e,n,t,r){var i=e.fullSchema();if(null===i)return null;if(!i.fields)return null;if(void 0===t){try{t=e.field(n)}catch(e){return null}return t}return V(U(n,i,e,r),t)},n.featureSchema=function(e){var n=e.fullSchema();if(null===n)return null;if(!n.fields)return null;for(var t=[],r=0,i=n.fields;r<i.length;r++){var a=i[r];t.push(S.esriFieldToJson(a))}return{objectIdField:n.objectIdField,globalIdField:n.globalIdField,geometryType:void 0===S.layerGeometryEsriRestConstants[n.geometryType]?"":S.layerGeometryEsriRestConstants[n.geometryType],fields:t}}}));