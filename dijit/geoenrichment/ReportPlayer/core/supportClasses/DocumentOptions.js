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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/PageUnitsConverter","../themes/ThemeLibrary"],function(t,e,n){var i={},r={a:[[841,1189],[594,841],[420,594],[297,420],[210,297],[148,210],[105,148],[74,105],[52,74],[37,52],[26,37]],b:[[1e3,1414],[707,1e3],[500,707],[353,500],[250,353],[176,250],[125,176],[88,125],[62,88],[44,62],[31,44]],c:[[917,1297],[648,917],[458,648],[324,458],[229,324],[162,229],[114,162],[81,114],[57,81],[40,57],[28,40]],letter:[216,279],legal:[216,356],tabloid:[279,432],ledger:[432,279]};i.PAPER_SIZES=r;var o={};["a3","a4","a5","b4","b5","c4","c5","letter","legal","tabloid","ledger"].forEach(function(t){var n;n=2==t.length?r[t[0]][t[1]]:r[t],o[t]={portrait:{w:e.mmToIn(n[0]),h:e.mmToIn(n[1])},landscape:{w:e.mmToIn(n[1]),h:e.mmToIn(n[0])}}}),i.SIZE_TYPE_TO_DIM_HASH=o,i.hasStandardSize=function(t){return o[t]},i.getPageDim=function(n,i,r){var a;if(o[n])a=o[n][i||"portrait"];else{var l=n.split("x");a={w:e.ptToIn(Number(l[0])),h:e.ptToIn(Number(l[1]))}}return r&&(a=t.clone(a),e.roundNDigitsObj(a,r.places)),a},i.getPageBox=function(t){if(!t)return null;var n=i.getPageDim(t.pagesize,t.orientation),r=e.inToPx(n.w),o=e.inToPx(n.h);return{w:r,h:o,contentW:r-(t.left||0)-(t.right||0),contentH:o-(t.top||0)-(t.bottom||0)}},i.combineCustomSizeString=function(t,n){return e.inToPt(t)+"x"+e.inToPt(n)},i.getDefaultDocumentOptions=function(e){return t.mixin({pagesize:"letter",orientation:"portrait",left:21.07,right:22.6,top:19.2,bottom:9.6,align:"left",lineSpacing:1.493,fontSize:10,fontFamily:n.DEFAULT_FONT_FAMILY_CLASSIC},e)},i.getDefaultDocumentOptionsGraphicReport=function(e){return t.mixin({pagesize:"letter",orientation:"landscape",left:21.07,right:22.6,top:19.2,bottom:9.6,align:"left",lineSpacing:1.493,fontSize:10,fontFamily:n.DEFAULT_FONT_FAMILY_GRAPHIC},e)};var a=.4;return i.getClosestStandrdSizes=function(t,e){function n(t){var e=t.w/r.w;e=e>1?1/e:e,e=1-e;var n=t.h/r.h;return n=n>1?1/n:n,n=1-n,Math.max(e,n)}e=void 0===e?a:e;var r=i.getPageDim(t.pagesize,t.orientation),l=[];for(var c in o){var u=o[c];l.push({pagesize:c,orientation:"portrait",score:n(u.portrait)}),l.push({pagesize:c,orientation:"landscape",score:n(u.landscape)})}return l=l.filter(function(t){return t.score<=e}),l.sort(function(t,e){return t.score-e.score}),l},i});