// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","dojo/i18n!./nls/uriUtils","../../core/lang"],function(e,a,r,p){function t(e){var a=null;return s.some(function(r){return r.pattern.test(e)&&(a=r),!!a}),a}function i(e){if("string"!=typeof e||!e)return e;var a=t(e);if(!a)return e;var r=e.match(a.pattern),i=r&&r[2],s=p.substitute({appName:a.appName,hierPart:i},a.label),n=a.target?'target="'+a.target+'"':"";return e.replace(a.pattern,"<a "+n+'" href="$1">'+s+"</a>")}Object.defineProperty(a,"__esModule",{value:!0});var s=[{id:"http",pattern:/^\s*(https?:\/\/([^\s]+))\s*$/i,target:"_blank",label:r.view},{id:"tel",pattern:/^\s*(tel:([^\s]+))\s*$/i,label:"{hierPart}"},{id:"mailto",pattern:/^\s*(mailto:([^\s]+))\s*$/i,label:"{hierPart}"},{id:"arcgis-appstudio-player",pattern:/^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i,label:r.openInApp,appName:"App Studio Player"},{id:"arcgis-collector",pattern:/^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i,label:r.openInApp,appName:"Collector"},{id:"arcgis-explorer",pattern:/^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i,label:r.openInApp,appName:"Explorer"},{id:"arcgis-navigator",pattern:/^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i,label:r.openInApp,appName:"Navigator"},{id:"arcgis-survey123",pattern:/^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i,label:r.openInApp,appName:"Survey123"},{id:"arcgis-trek2there",pattern:/^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i,label:r.openInApp,appName:"Trek2There"},{id:"arcgis-workforce",pattern:/^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i,label:r.openInApp,appName:r.workforce},{id:"iform",pattern:/^\s*(iform:\/\/([^\s]+))\s*$/i,label:r.openInApp,appName:"iForm"},{id:"flow",pattern:/^\s*(flow:\/\/([^\s]+))\s*$/i,label:r.openInApp,appName:"FlowFinity"},{id:"lfmobile",pattern:/^\s*(lfmobile:\/\/([^\s]+))\s*$/i,label:r.openInApp,appName:"Laserfische"},{id:"mspbi",pattern:/^\s*(mspbi:\/\/([^\s]+))\s*$/i,label:r.openInApp,appName:"Microsoft Power Bi"}];a.autoLink=i});