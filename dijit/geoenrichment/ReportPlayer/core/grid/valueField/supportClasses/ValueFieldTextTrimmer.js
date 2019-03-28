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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/dom-style","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/UrlUtil","esri/dijit/geoenrichment/utils/RegExpUtil"],function(e,t,l,i){return{checkValueLabelOverflow:function(l,n){var a=l;if(a.valueLabel&&void 0!==n&&this._applyNewText(a,n),a.valueLabel.__hasTrimmedText=!1,a.trimTextIfOverflows&&a.valueLabel&&this._getLabelInnerHTML(a)&&!i.isRichText(this._getLabelInnerHTML(a))){var r=this.getFullText(a);if(r!==this._getLabelInnerHTML(a)&&this._setLabelInnerHTML(a,r),a.valueLabel.__untrimmedText=r,a.domNode.clientWidth){var o=r.trim(),L=a.domNode.clientWidth-e.get(a.valueLabel,"paddingLeft")-e.get(a.valueLabel,"paddingRight"),h=a.domNode.clientHeight-e.get(a.valueLabel,"paddingTop")-e.get(a.valueLabel,"paddingBottom"),u=e.toPixelValue(a.domNode,e.get(a.domNode,"fontSize")),s=t.getTextBox(o,{style:"font-family:"+e.get(a.valueLabel,"fontFamily")+";font-size:"+u+"px;"}),d=s.h,g=s.w/o.length;if(!(a.valueLabel.clientHeight<=h)){var b=Math.max(1,Math.floor(h/d)),T=Math.floor(L/g),v=b*T,m=o.length;if(o=o.substr(0,v),m>o.length&&(o=o.substr(0,o.length-3),this._setLabelInnerHTML(a,o+"..."),a.valueLabel.__hasTrimmedText=!0),a.valueLabel.clientHeight>h)for(;;){if(!o||a.valueLabel.clientHeight<=h||this._getLabelInnerHTML(a).length<=T)return;o=o.substr(0,o.length-1),this._setLabelInnerHTML(a,o+"..."),a.valueLabel.__hasTrimmedText=!0}}}}},getFullText:function(e){return e.valueLabel&&(e.valueLabel.__untrimmedText||this._getLabelInnerHTML(e))},hasOverflowText:function(e){return e.valueLabel&&e.valueLabel.__hasTrimmedText||e.valueLabel.clientHeight>e.domNode.clientHeight},_applyNewText:function(e,t){this._getLabelInnerHTML(e)!==t&&this._setLabelInnerHTML(e,t),delete e.valueLabel.__untrimmedText},_getLabelInnerHTML:function(e){return this._getInnerHTMLNode(e).innerHTML},_setLabelInnerHTML:function(e,t){t=String(t);var n=e.valueLabel;if(e.autoDetectUrl){var a=this.getFullText(e)||t;if(i.isUrl(a)){var r=this._getInnerHTMLNode(e);"A"===r.nodeName?(r.innerHTML=t,r.hasAttribute("href")&&r.removeAttribute("href"),r.setAttribute("href",a)):n.innerHTML="<a href='"+l.toHttpsUrl(a)+"' target='_blank'>"+t+"</a>"}else n.innerHTML=t}else n.innerHTML=t},_getInnerHTMLNode:function(e){var t=e.valueLabel;return e.autoDetectUrl&&t.childNodes&&1===t.childNodes.length&&t.childNodes[0]&&"A"===t.childNodes[0].nodeName?t.childNodes[0]:t}}});