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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","../utils/DomUtil","../utils/TooltipUtil","../utils/RegExpUtil","../utils/UrlUtil"],(function(e,t,a,l,s,i,r,o){return e(null,{itemClass:"",itemClassSelected:"",labelClass:"",createLabelNode:!1,createImageAfterLabel:!1,constructor:function(e){t.mixin(this,e)},createPresentation:function(e,t,i,r,o){if(e.isSeparator){var n=l.create("div",{class:"flowList_listSeparator"},i);return e.hidden&&s.hide(n),n}var c=l.create("div",{class:"listItem "+(this.itemClass||" ")+(e.itemClass||""),style:e.style},i);return e.isLink&&a.add(c,"esriGELink"),!1===e.enabled&&a.add(c,"disabled"),this._createParts(e,c,r),this._setTooltip(e,c,r),this.selectPresentation(c,t,e),e.hidden&&s.hide(c),c},_setTooltip:function(e,t,a){e.tooltip&&a.own(i.setTooltipToNode(t,e.tooltip))},_createParts:function(e,t,a){var l;this.createImageAfterLabel&&(this._createLabel(e,t,a),l=!0),this._createImage(e,t,a),!l&&this._createLabel(e,t,a)},_createImage:function(e,t,l){var s=this._createImageNode(e,t,l);s&&(e.imageClass&&a.add(s,e.imageClass),e.imageUrl&&(s.style="background-image: url("+e.imageUrl+");"))},_createImageNode:function(e,t,a){return t},_createLabel:function(e,t,s){if(this.createLabelNode){var i=l.create("div",{innerHTML:e[s.labelProperty],class:"dijitInline TrimWithEllipses listItemLabel"},t);return e.labelClass&&a.add(i,e.labelClass),this.labelClass&&a.add(i,this.labelClass),s.autoDetectUrlsInLabels&&this._tryConvertToUrls(i),i}e[s.labelProperty]&&(t.innerHTML=e[s.labelProperty],s.autoDetectUrlsInLabels&&this._tryConvertToUrls(t))},_tryConvertToUrls:function(e){var t=e.innerHTML.match(r.IS_URL_RE),a=t&&t[0];a&&(e.innerHTML=e.innerHTML.replace(a,"<a href='"+o.toHttpsUrl(a)+"' target='_blank'>"+a+"</a>"))},selectPresentation:function(e,t,l){a[t?"add":"remove"](e,"listItemSelected "+this.itemClassSelected)}})}));