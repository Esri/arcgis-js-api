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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct"],function(e,t,a,l){return e(null,{itemClass:"",itemClassSelected:"",labelClass:"",createLabelNode:!1,createImageAfterLabel:!1,constructor:function(e){t.mixin(this,e)},createPresentation:function(e,t,a,s,r){if(e.isSeparator)return l.create("div",{"class":"flowList_listSeparator"},a);var i=l.create("div",{"class":"listItem "+this.itemClass},a);return e.tooltip&&(i.title=e.tooltip),this._createParts(e,i,s),this.selectPresentation(i,t),i},_createParts:function(e,t,a){var l;this.createImageAfterLabel&&(this._createLabel(e,t,a),l=!0),this._createImage(e,t,a),!l&&this._createLabel(e,t,a)},_createImage:function(e,t,l){var s=this._createImageNode(e,t,l);s&&(e.imageClass&&a.add(s,e.imageClass),e.imageUrl&&(s.style="background-image: url("+e.imageUrl+");"))},_createImageNode:function(e,t,a){return t},_createLabel:function(e,t,s){if(this.createLabelNode){var r=l.create("div",{innerHTML:e[s.labelProperty],"class":"dijitInline TrimWithEllipses listItemLabel"},t);return e.labelClass&&a.add(r,e.labelClass),this.labelClass&&a.add(r,this.labelClass),r}e[s.labelProperty]&&(t.innerHTML=e[s.labelProperty])},selectPresentation:function(e,t){a[t?"add":"remove"](e,"listItemSelected "+this.itemClassSelected)}})});