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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang"],function(e,i,l){function r(e,l){if(null!=e&&null!=l)for(var r=0,n=Array.isArray(e)?e:[e];r<n.length;r++){var a=n[r];if(o(i.rendererFields,a,l),a.visualVariables)for(var f=0,t=a.visualVariables;f<t.length;f++){var d=t[f];o(i.visualVariableFields,d,l)}}}function o(e,i,r){if(e)for(var o=0,a=e;o<a.length;o++){var f=a[o],t=l.getObject(f,!1,i),d=t&&"function"!=typeof t&&n(t,r);d&&l.setObject(f,d.name,i)}}function n(e,i){if(null!=i){e=e.toLowerCase();for(var l=0,r=i;l<r.length;l++){var o=r[l];if(o&&o.name.toLowerCase()===e)return o}}return null}Object.defineProperty(i,"__esModule",{value:!0}),i.fixRendererFields=r,i.getField=n,i.rendererFields=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],i.visualVariableFields=["field","normalizationField"]});