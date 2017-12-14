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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/dom-style"],function(t){var e={_MAP:{"white-space":"whiteSpace","word-wrap":"wordWrap","word-break":"wordBreak","overflow-wrap":"overflowWrap"},_MAP_TAG_STYLES:{"font-weight":"fontWeight","font-style":"fontStyle","text-decoration":"textDecoration"},_RESET_ALL:{fontWeight:"",fontStyle:"",textDecoration:"",whiteSpace:"",wordWrap:"",wordBreak:"",overflowWrap:"",fontFamily:"",fontSize:"",textAlign:"",lineHeight:""},_getTagStyles:function(e,o){return{"font-weight":e.style.fontWeight||(o.isB?"bold":"")||t.get(e,"fontWeight"),"font-style":e.style.fontStyle||(o.isI?"italic":"")||t.get(e,"fontStyle"),"text-decoration":e.style.textDecoration||(o.isU?"underline":"")||t.get(e,"textDecoration")}},buildTextStyleString:function(o,n,i,r,a){var l="";for(var f in e._MAP){var g=t.get(o,e._MAP[f]);g&&(l+=f+":"+g+";")}var y=this._getTagStyles(o,n);for(f in y)l+=f+":"+y[f]+";";var S=t.get(o,"fontFamily").replace(/"/g,"'");return S&&(l+="font-family:"+S+";"),i&&(l+="font-size:"+i+"px;"),r&&(l+="text-align:"+r+";"),a&&"normal"!==a&&(l+="line-height:"+a+"px;"),l},buildTextStyleObject:function(o,n,i,r,a){var l={};for(var f in e._MAP){var g=e._MAP[f],y=t.get(o,g);y&&(l[g]=y)}var S=this._getTagStyles(o,n);for(f in S)l[this._MAP_TAG_STYLES[f]]=S[f];var s=t.get(o,"fontFamily").replace(/"/g,"'");return s&&(l.fontFamily=s),i&&(l.fontSize=i+"px"),r&&(l.textAlign=r),a&&"normal"!==a&&(l.lineHeight=a+"px"),l},resetTextStyle:function(o){t.set(o,e._RESET_ALL)}};return e});