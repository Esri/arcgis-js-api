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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["../dom-style"],function(t){var e={_MAP:{"white-space":"whiteSpace","word-wrap":"wordWrap","word-break":"wordBreak","overflow-wrap":"overflowWrap"},_MAP_TAG_STYLES:{"font-weight":"fontWeight","font-style":"fontStyle","text-decoration":"textDecoration"},_RESET_ALL:{fontWeight:"",fontStyle:"",textDecoration:"",whiteSpace:"",wordWrap:"",wordBreak:"",overflowWrap:"",fontFamily:"",fontSize:"",textAlign:"",lineHeight:""},_getTagStyles:function(e,o){return{"font-weight":e.style.fontWeight||(o.isB?"bold":"")||t.get(e,"fontWeight"),"font-style":e.style.fontStyle||(o.isI?"italic":"")||t.get(e,"fontStyle"),"text-decoration":e.style.textDecoration||(o.isU?"underline":"")||t.get(e,"textDecoration")}},buildTextStyleString:function(o,n,r,i,a,l){t.setComputedStyleCache(o,l);var f="";for(var g in e._MAP){var c=t.get(o,e._MAP[g]);c&&(f+=g+":"+c+";")}var y=this._getTagStyles(o,n);for(g in y)f+=g+":"+y[g]+";";var S=t.get(o,"fontFamily").replace(/"/g,"'");return S&&(f+="font-family:"+S+";"),r&&(f+="font-size:"+r+"px;"),i&&(f+="text-align:"+i+";"),a&&"normal"!==a&&(f+="line-height:"+a+"px;"),t.clearCache(o),f},buildTextStyleObject:function(o,n,r,i,a,l){t.setComputedStyleCache(o,l);var f={};for(var g in e._MAP){var c=e._MAP[g],y=t.get(o,c);y&&(f[c]=y)}var S=this._getTagStyles(o,n);for(g in S)f[this._MAP_TAG_STYLES[g]]=S[g];var s=t.get(o,"fontFamily").replace(/"/g,"'");return s&&(f.fontFamily=s),r&&(f.fontSize=r+"px"),i&&(f.textAlign=i),a&&"normal"!==a&&(f.lineHeight=a+"px"),t.clearCache(o),f},resetTextStyle:function(o){t.set(o,e._RESET_ALL)}};return e});