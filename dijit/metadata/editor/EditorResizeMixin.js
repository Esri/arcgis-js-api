// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-geometry","dojo/dom-style","dojo/has","dojo/window","../../../kernel"],(function(e,t,o,i,n,a,s){var r=e(null,{constructor:function(e){t.mixin(this,e)},_getMaxCanvasHeight:function(e){var t,i,n,s,r=0,d=this.validationPane.domNode;return this.dialogBroker?(t=o.getMarginBox(this.domNode),i=o.getMarginBox(this.primaryToolbar.domNode),r=t.h-i.h,"none"!==d.style.display&&(r-=o.getMarginBox(d).h)):(n=a.getBox(this.ownerDocument),s=o.getMarginBox(e),r=n.h-s.t-10),r},resizeDocument:function(e){var t=e.domNode,o=this._getMaxCanvasHeight(t);o>10&&i.set(t,"maxHeight",o-10+"px")},resizeXmlPane:function(e){var t=this.xmlPane.textAreaNode,o=this._getMaxCanvasHeight(t);this.dialogBroker||(o-=10),o>10&&i.set(t,"height",o-10+"px")},resize:function(){if(this.dialogBroker){var e=a.getBox(this.ownerDocument);e.w*=.9,e.h*=.9;var t=o.getMarginBox(this.domNode),n=t.l,s=e.w-100,r=e.h-t.t-n-30;i.set(this.domNode,"width",s+"px"),i.set(this.domNode,"height",r+"px")}this.resizeDocument(this.editDocumentPane),this.resizeDocument(this.viewDocumentPane),this.resizeXmlPane()}});return n("extend-esri")&&t.setObject("dijit.metadata.editor.EditorResizeMixin",r,s),r}));