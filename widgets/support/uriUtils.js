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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../core/string"],(function(e,a,s){Object.defineProperty(a,"__esModule",{value:!0});var p=[{pattern:/^\s*(https?:\/\/([^\s]+))\s*$/i,target:"_blank",label:"{messages.view}"},{pattern:/^\s*(tel:([^\s]+))\s*$/i,label:"{hierPart}"},{pattern:/^\s*(mailto:([^\s]+))\s*$/i,label:"{hierPart}"},{pattern:/^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"App Studio Player"},{pattern:/^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Collector"},{pattern:/^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Explorer"},{pattern:/^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Navigator"},{pattern:/^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Survey123"},{pattern:/^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Trek2There"},{pattern:/^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Workforce"},{pattern:/^\s*(iform:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"iForm"},{pattern:/^\s*(flow:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"FlowFinity"},{pattern:/^\s*(lfmobile:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Laserfische"},{pattern:/^\s*(mspbi:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Microsoft Power Bi"}];a.autoLink=function(e,a){if("string"!=typeof a||!a)return a;var r=function(e){var a=null;return p.some((function(s){return s.pattern.test(e)&&(a=s),!!a})),a}(a);if(!r)return a;var t=a.match(r.pattern),n=t&&t[2],l=s.replace(s.replace(r.label,{messages:e,hierPart:n}),{appName:r.appName}),i=r.target?' target="'+r.target+'"':"",o="_blank"===r.target?' rel="noreferrer"':"";return a.replace(r.pattern,"<a"+i+' href="$1"'+o+">"+l+"</a>")}}));