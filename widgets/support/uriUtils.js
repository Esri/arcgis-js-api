// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","dojo/i18n!./nls/uriUtils","../../core/string"],function(e,r,a,p){function t(e){var r=null;return s.some(function(a){return a.pattern.test(e)&&(r=a),!!r}),r}function i(e){if("string"!=typeof e||!e)return e;var r=t(e);if(!r)return e;var a=e.match(r.pattern),i=a&&a[2],s=p.replace(r.label,{appName:r.appName,hierPart:i}),n=r.target?'target="'+r.target+'"':"",l="_blank"===r.target?'rel="noreferrer"':"";return e.replace(r.pattern,"<a "+n+' href="$1" '+l+">"+s+"</a>")}Object.defineProperty(r,"__esModule",{value:!0});var s=[{id:"http",pattern:/^\s*(https?:\/\/([^\s]+))\s*$/i,target:"_blank",label:a.view},{id:"tel",pattern:/^\s*(tel:([^\s]+))\s*$/i,label:"{hierPart}"},{id:"mailto",pattern:/^\s*(mailto:([^\s]+))\s*$/i,label:"{hierPart}"},{id:"arcgis-appstudio-player",pattern:/^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"App Studio Player"},{id:"arcgis-collector",pattern:/^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"Collector"},{id:"arcgis-explorer",pattern:/^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"Explorer"},{id:"arcgis-navigator",pattern:/^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"Navigator"},{id:"arcgis-survey123",pattern:/^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"Survey123"},{id:"arcgis-trek2there",pattern:/^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"Trek2There"},{id:"arcgis-workforce",pattern:/^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:a.workforce},{id:"iform",pattern:/^\s*(iform:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"iForm"},{id:"flow",pattern:/^\s*(flow:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"FlowFinity"},{id:"lfmobile",pattern:/^\s*(lfmobile:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"Laserfische"},{id:"mspbi",pattern:/^\s*(mspbi:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"Microsoft Power Bi"}];r.autoLink=i});