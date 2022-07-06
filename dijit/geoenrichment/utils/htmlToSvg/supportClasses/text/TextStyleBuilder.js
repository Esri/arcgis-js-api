// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["../dom-style"],(function(e){var t=/font-weight:normal;|font-style:normal;|text-align:.*?;|line-height:.*?;|word-wrap:.*?;|word-break:.*?;|overflow-wrap:.*?;|text-decoration:none.*?;/g;return{buildTextStyleString:function(n,o){var r=n.node;e.setComputedStyleCache(r,n.style.styleCache);var i="white-space:pre;",a=this._getTagStyles(r,n);for(c in a)i+=c+":"+a[c]+";";var l=e.get(r,"fontFamily").replace(/"/g,"'");l&&(i+="font-family:"+l+";");var g=n.style;for(var c in g.fontSize&&(i+="font-size:"+g.fontSize+"px;"),g.letterSpacing&&"normal"!==g.letterSpacing&&(i+="letter-spacing:"+g.letterSpacing),g.wordSpacing&&"normal"!==g.wordSpacing&&"0px"!==g.wordSpacing&&(i+="word-spacing:"+g.wordSpacing),e.clearCache(r),o)i=i.replace(new RegExp("(^|;)"+c+":.*?(;|$)"),"$1"+c+":"+o[c]+"$2");return i=i.replace(t,"")},_getTagStyles:function(t,n){return{"font-weight":t.style.fontWeight||(n.isB?"bold":"")||e.get(t,"fontWeight"),"font-style":t.style.fontStyle||(n.isI?"italic":"")||e.get(t,"fontStyle"),"text-decoration":t.style.textDecoration||(n.isU?"underline":"")||e.get(t,"textDecoration")}}}}));