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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang"],function(e,i,n){function r(e,n){if(null!=e&&null!=n)for(var r=0,o=Array.isArray(e)?e:[e];r<o.length;r++){var t=o[r];if(l(i.rendererFields,t,n),t.visualVariables)for(var a=0,d=t.visualVariables;a<d.length;a++){var f=d[a];l(i.visualVariableFields,f,n)}}}function l(e,i,r){if(e)for(var l=0,t=e;l<t.length;l++){var a=t[l],d=n.getObject(a,!1,i),f=d&&"function"!=typeof d&&o(d,r);f&&n.setObject(a,f.name,i)}}function o(e,i){if(null!=i){e=e.toLowerCase();for(var n=0,r=i;n<r.length;n++){var l=r[n];if(l&&l.name.toLowerCase()===e)return l}}return null}function t(e,n){return e?i.numericTypes.indexOf(e.type)>-1&&e.name!==n.objectIdField:!1}function a(e,i){return e?"string"===e.type&&e.name!==i.objectIdField:!1}function d(e){return e?"date"===e.type:!1}Object.defineProperty(i,"__esModule",{value:!0}),i.fixRendererFields=r,i.getField=o,i.rendererFields=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],i.visualVariableFields=["field","normalizationField"],i.numericTypes=["integer","small-integer","single","double"],i.isNumericField=t,i.isStringField=a,i.isDateField=d});