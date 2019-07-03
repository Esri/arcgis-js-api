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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","../utils/DomUtil","../utils/TooltipUtil","../utils/RegExpUtil","../utils/UrlUtil"],function(e,t,a,l,i,s,r,o){return e(null,{itemClass:"",itemClassSelected:"",labelClass:"",createLabelNode:!1,createImageAfterLabel:!1,constructor:function(e){t.mixin(this,e)},createPresentation:function(e,t,s,r,o){if(e.isSeparator)return l.create("div",{class:"flowList_listSeparator"},s);var n=l.create("div",{class:"listItem "+this.itemClass},s);return e.isLink&&a.add(n,"esriGELink"),!1===e.enabled&&a.add(n,"disabled"),this._createParts(e,n,r),this._setTooltip(e,n,r),this.selectPresentation(n,t),e.hidden&&i.hide(n),n},_setTooltip:function(e,t,a){e.tooltip&&a.own(s.setTooltipToNode(t,e.tooltip))},_createParts:function(e,t,a){var l;this.createImageAfterLabel&&(this._createLabel(e,t,a),l=!0),this._createImage(e,t,a),!l&&this._createLabel(e,t,a)},_createImage:function(e,t,l){var i=this._createImageNode(e,t,l);i&&(e.imageClass&&a.add(i,e.imageClass),e.imageUrl&&(i.style="background-image: url("+e.imageUrl+");"))},_createImageNode:function(e,t,a){return t},_createLabel:function(e,t,i){if(this.createLabelNode){var s=l.create("div",{innerHTML:e[i.labelProperty],class:"dijitInline TrimWithEllipses listItemLabel"},t);return e.labelClass&&a.add(s,e.labelClass),this.labelClass&&a.add(s,this.labelClass),i.autoDetectUrlsInLabels&&this._tryConvertToUrls(s),s}e[i.labelProperty]&&(t.innerHTML=e[i.labelProperty],i.autoDetectUrlsInLabels&&this._tryConvertToUrls(t))},_tryConvertToUrls:function(e){var t=e.innerHTML.match(r.IS_URL_RE),a=t&&t[0];a&&(e.innerHTML=e.innerHTML.replace(a,"<a href='"+o.toHttpsUrl(a)+"' target='_blank'>"+a+"</a>"))},selectPresentation:function(e,t){a[t?"add":"remove"](e,"listItemSelected "+this.itemClassSelected)}})});