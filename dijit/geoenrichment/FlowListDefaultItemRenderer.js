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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","./utils/DomUtil","./utils/TooltipUtil"],function(e,t,a,l,i,s){return e(null,{itemClass:"",itemClassSelected:"",labelClass:"",createLabelNode:!1,createImageAfterLabel:!1,labelNode:null,imageNode:null,constructor:function(e){t.mixin(this,e)},createPresentation:function(e,t,r,o,d){if(e.isSeparator)return l.create("div",{class:"flowList_listSeparator"},r);var n=l.create("div",{class:"listItem "+this.itemClass},r);return e.isLink&&a.add(n,"esriGELink"),!1===e.enabled&&a.add(n,"disabled"),e.tooltip&&s.setTooltipToNode(n,e.tooltip),this._createParts(e,n,o),this.selectPresentation(n,t),e.hidden&&i.hide(n),n},_createParts:function(e,t,a){var l;this.createImageAfterLabel&&(this._createLabel(e,t,a),l=!0),this._createImage(e,t,a),!l&&this._createLabel(e,t,a)},_createImage:function(e,t,l){this.imageNode=this._createImageNode(e,t,l),this.imageNode&&(e.imageClass&&a.add(this.imageNode,e.imageClass),e.imageUrl&&(this.imageNode.style="background-image: url("+e.imageUrl+");"))},_createImageNode:function(e,t,a){return t},_createLabel:function(e,t,i){if(this.createLabelNode)return this.labelNode=l.create("div",{innerHTML:e[i.labelProperty],class:"dijitInline TrimWithEllipses listItemLabel"},t),e.labelClass&&a.add(this.labelNode,e.labelClass),this.labelClass&&a.add(this.labelNode,this.labelClass),this.labelNode;e[i.labelProperty]&&(t.innerHTML=e[i.labelProperty])},selectPresentation:function(e,t){a[t?"add":"remove"](e,"listItemSelected "+this.itemClassSelected)}})});