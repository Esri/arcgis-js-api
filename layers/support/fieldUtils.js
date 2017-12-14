// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang"],function(e,i,r){function n(e){if(!e||"string"!=typeof e)return[];var i=/{[^}]*}/g,r=e.match(i);if(!r)return[];var n=/\{(\w+):.+\}/,l=r.filter(function(e){return!(0===e.indexOf("{relationships/")||0===e.indexOf("{expression/"))}).map(function(e){return e.replace(n,"{$1}")});return l?l.map(function(e){return e.slice(1,-1)}):[]}function l(e,r){if(null!=e&&null!=r)for(var n=0,l=Array.isArray(e)?e:[e];n<l.length;n++){var o=l[n];if(t(i.rendererFields,o,r),o.visualVariables)for(var a=0,f=o.visualVariables;a<f.length;a++){var u=f[a];t(i.visualVariableFields,u,r)}}}function t(e,i,n){if(e)for(var l=0,t=e;l<t.length;l++){var a=t[l],f=r.getObject(a,!1,i),u=f&&"function"!=typeof f&&o(f,n);u&&r.setObject(a,u.name,i)}}function o(e,i){if(null!=i){e=e.toLowerCase();for(var r=0,n=i;r<n.length;r++){var l=n[r];if(l&&l.name.toLowerCase()===e)return l}}return null}function a(e,r){return e?i.numericTypes.indexOf(e.type)>-1&&e.name!==r.objectIdField:!1}function f(e,i){return e?"string"===e.type&&e.name!==i.objectIdField:!1}function u(e){return e?"date"===e.type:!1}Object.defineProperty(i,"__esModule",{value:!0}),i.extractFieldNames=n,i.fixRendererFields=l,i.getField=o,i.rendererFields=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],i.visualVariableFields=["field","normalizationField"],i.numericTypes=["integer","small-integer","single","double"],i.isNumericField=a,i.isStringField=f,i.isDateField=u});