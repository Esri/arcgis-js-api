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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","./utils/DomUtil","./utils/TooltipUtil"],function(e,t,a,i,l,s){return e(null,{itemClass:"",itemClassSelected:"",labelClass:"",createLabelNode:!1,createImageAfterLabel:!1,constructor:function(e){t.mixin(this,e)},createPresentation:function(e,t,r,o,n){if(e.isSeparator)return i.create("div",{"class":"flowList_listSeparator"},r);var c=i.create("div",{"class":"listItem "+this.itemClass},r);return e.isLink&&a.add(c,"esriGELink"),e.enabled===!1&&a.add(c,"disabled"),e.tooltip&&s.setTooltipToNode(c,e.tooltip),this._createParts(e,c,o),this.selectPresentation(c,t),e.hidden&&l.hide(c),c},_createParts:function(e,t,a){var i;this.createImageAfterLabel&&(this._createLabel(e,t,a),i=!0),this._createImage(e,t,a),!i&&this._createLabel(e,t,a)},_createImage:function(e,t,i){var l=this._createImageNode(e,t,i);l&&(e.imageClass&&a.add(l,e.imageClass),e.imageUrl&&(l.style="background-image: url("+e.imageUrl+");"))},_createImageNode:function(e,t,a){return t},_createLabel:function(e,t,l){if(this.createLabelNode){var s=i.create("div",{innerHTML:e[l.labelProperty],"class":"dijitInline TrimWithEllipses listItemLabel"},t);return e.labelClass&&a.add(s,e.labelClass),this.labelClass&&a.add(s,this.labelClass),s}e[l.labelProperty]&&(t.innerHTML=e[l.labelProperty])},selectPresentation:function(e,t){a[t?"add":"remove"](e,"listItemSelected "+this.itemClassSelected)}})});