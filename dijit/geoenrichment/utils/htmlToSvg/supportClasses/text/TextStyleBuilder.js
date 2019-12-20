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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["../dom-style"],function(t){var e={_MAP:{"white-space":"whiteSpace","word-wrap":"wordWrap","word-break":"wordBreak","overflow-wrap":"overflowWrap"},_MAP_TAG_STYLES:{"font-weight":"fontWeight","font-style":"fontStyle","text-decoration":"textDecoration"},_RESET_ALL:{fontWeight:"",fontStyle:"",textDecoration:"",whiteSpace:"",wordWrap:"",wordBreak:"",overflowWrap:"",fontFamily:"",fontSize:"",textAlign:"",lineHeight:"",letterSpacing:"",wordSpacing:""},_getTagStyles:function(e,n){return{"font-weight":e.style.fontWeight||(n.isB?"bold":"")||t.get(e,"fontWeight"),"font-style":e.style.fontStyle||(n.isI?"italic":"")||t.get(e,"fontStyle"),"text-decoration":e.style.textDecoration||(n.isU?"underline":"")||t.get(e,"textDecoration")}},buildTextStyleString:function(n,i,r){t.setComputedStyleCache(n,r);var o="";for(var a in e._MAP){var l=t.get(n,e._MAP[a]);l&&"normal"!==l&&(o+=a+":"+l+";")}var g=this._getTagStyles(n,i);for(a in g)o+=a+":"+g[a]+";";var S=t.get(n,"fontFamily").replace(/"/g,"'");S&&(o+="font-family:"+S+";");var c=i.style;return c.fontSize&&(o+="font-size:"+c.fontSize+"px;"),c.textAlign&&(o+="text-align:"+c.textAlign+";"),c.lineHeight&&"normal"!==c.lineHeight&&(o+="line-height:"+c.lineHeight+"px;"),c.letterSpacing&&"normal"!==c.letterSpacing&&(o+="letter-spacing:"+c.letterSpacing),c.wordSpacing&&"normal"!==c.wordSpacing&&"0px"!==c.wordSpacing&&(o+="word-spacing:"+c.wordSpacing),t.clearCache(n),o},buildTextStyleObject:function(n,i,r){t.setComputedStyleCache(n,r);var o={};for(var a in e._MAP){var l=e._MAP[a],g=t.get(n,l);g&&(o[l]=g)}var S=this._getTagStyles(n,i);for(a in S)o[this._MAP_TAG_STYLES[a]]=S[a];var c=t.get(n,"fontFamily").replace(/"/g,"'");c&&(o.fontFamily=c);var p=i.style;return p.fontSize&&(o.fontSize=p.fontSize+"px"),p.textAlign&&(o.textAlign=p.textAlign),p.lineHeight&&"normal"!==p.lineHeight&&(o.lineHeight=p.lineHeight+"px"),p.letterSpacing&&"normal"!==p.letterSpacing&&(o.letterSpacing=p.letterSpacing),p.wordSpacing&&"normal"!==p.wordSpacing&&"0px"!==p.wordSpacing&&(o.wordSpacing=p.wordSpacing),t.clearCache(n),o},resetTextStyle:function(n){t.set(n,e._RESET_ALL)}};return e});