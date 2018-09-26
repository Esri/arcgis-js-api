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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/PageUnitsConverter","../themes/ThemeLibrary"],function(t,e,n){var r={},i={a:[[841,1189],[594,841],[420,594],[297,420],[210,297],[148,210],[105,148],[74,105],[52,74],[37,52],[26,37]],b:[[1e3,1414],[707,1e3],[500,707],[353,500],[250,353],[176,250],[125,176],[88,125],[62,88],[44,62],[31,44]],c:[[917,1297],[648,917],[458,648],[324,458],[229,324],[162,229],[114,162],[81,114],[57,81],[40,57],[28,40]],letter:[216,279],legal:[216,356],tabloid:[279,432],ledger:[432,279]};r.PAPER_SIZES=i;var o={};["a3","a4","a5","b4","b5","c4","c5","letter","legal","tabloid","ledger"].forEach(function(t){var n;n=2===t.length?i[t[0]][t[1]]:i[t],o[t]={portrait:{w:e.mmToIn(n[0]),h:e.mmToIn(n[1])},landscape:{w:e.mmToIn(n[1]),h:e.mmToIn(n[0])}}}),r.SIZE_TYPE_TO_DIM_HASH=o,r.hasStandardSize=function(t){return o[t]},r.getPageDim=function(n,r,i){var a;if(o[n])a=o[n][r||"portrait"];else{var u=n.split("x");a={w:e.ptToIn(Number(u[0])),h:e.ptToIn(Number(u[1]))}}return i&&(a=t.clone(a),e.roundNDigitsObj(a,i.places)),a},r.getPageBox=function(t){if(!t)return null;var n=r.getPageDim(t.pagesize,t.orientation),i=e.inToPx(n.w),o=e.inToPx(n.h);return{w:i,h:o,contentW:i-(t.left||0)-(t.right||0),contentH:o-(t.top||0)-(t.bottom||0)}},r.combineCustomSizeString=function(t,n){return e.inToPt(t)+"x"+e.inToPt(n)},r.getDefaultDocumentOptions=function(e){return t.mixin({pagesize:"letter",orientation:"portrait",left:21.07,right:22.6,top:19.2,bottom:9.6,align:"left",lineSpacing:1.493,fontSize:10,fontFamily:n.DEFAULT_FONT_FAMILY_CLASSIC},e)},r.getDefaultDocumentOptionsGraphicReport=function(e){return t.mixin({pagesize:"letter",orientation:"landscape",left:21.07,right:22.6,top:19.2,bottom:9.6,align:"left",lineSpacing:1.493,fontSize:10,fontFamily:n.DEFAULT_FONT_FAMILY_GRAPHIC},e)};return r.getClosestStandrdSizes=function(t,e){function n(t){var e=t.w/i.w;e=e>1?1/e:e,e=1-e;var n=t.h/i.h;return n=n>1?1/n:n,n=1-n,Math.max(e,n)}e=void 0===e?.4:e;var i=r.getPageDim(t.pagesize,t.orientation),a=[];for(var u in o){var l=o[u];a.push({pagesize:u,orientation:"portrait",score:n(l.portrait)}),a.push({pagesize:u,orientation:"landscape",score:n(l.landscape)})}return a=a.filter(function(t){return t.score<=e}),a.sort(function(t,e){return t.score-e.score}),a},r.tryGetStandardPageSize=function(t,n){function i(t){var e="portrait"===n?0:1,r="portrait"===n?1:0;return t[e]===u&&t[r]===l}if(r.SIZE_TYPE_TO_DIM_HASH[t])return t;var o,a=t.split("x"),u=e.convert(Number(a[0]),"pt","mm",0),l=e.convert(Number(a[1]),"pt","mm",0);for(var c in r.PAPER_SIZES){var f=r.PAPER_SIZES[c];if(1===c.length){if(f.some(function(t,e){if(i(t))return o=c+e,!0}))break}else if(i(f)){o=c;break}}return o||t},r});