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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/Deferred","dijit/Dialog","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/has","../../../../../kernel","../../../base/etc/docUtil","../../../base/xml/xmlUtil","../../../form/InputTextArea","../../../form/tools/ClickableTool","../../../editor/util/OkCancelBar","dojo/i18n!../../../nls/i18nArcGIS","dijit/Editor","dijit/_editor/plugins/FontChoice","dijit/_editor/plugins/TextColor","dijit/_editor/plugins/ViewSource","dijit/_editor/plugins/LinkDialog"],(function(e,t,o,i,n,l,r,a,d,s,u,c,f,h,m,p,g,j,v,w,_,C){var N=e([h],{postCreate:function(){this.inherited(arguments),this._makeEditTool()},_makeEditTool:function(){var e=this;r.add(this.domNode,"gxeInputHtmlTextArea");var t=a.create("span",{},this.focusNode,"after");new m({label:g.htmlEditor.button,whenToolClicked:function(){e._openDialog()}},t)},_openDialog:function(){var e,t=this,o=null,i=this.parentXNode.label,l=this.getInputValue();null===l&&(l=""),l=l.replace(/(\r\n|\r|\n|\n\r)/g,"<br />");var d=a.create("div",{});(e=new j({plugins:["bold","italic","underline","foreColor","hiliteColor","|","justifyLeft","justifyCenter","justifyRight","justifyFull","|","insertOrderedList","insertUnorderedList","indent","outdent","createLink","unlink","removeFormat","|","undo","redo","|","viewsource",{name:"dijit._editor.plugins.FontChoice",command:"fontName",custom:["Arial","Courier New","Garamond","Tahoma","Times New Roman","Verdana"]},{name:"dijit._editor.plugins.FontChoice",command:"fontSize",custom:["2","3","4","5","6"]}]},a.create("div",{},d))).setValue(l),e.startup();var s=new p({onOkClick:function(){if(e){var i=e.get("value");null!==i&&(t.setInputValue(i),o&&o.hide())}},onCancelClick:function(){o&&o.hide()}},a.create("div",{},d));o=new n({class:"gxeDialog gxePopupDialog gxeHtmlEditorDialog",title:i,content:d}),t.isLeftToRight()||r.add(o.domNode,"gxeRtl"),t.own(o.on("hide",(function(){setTimeout((function(){e.destroyRecursive(!1),s.destroyRecursive(!1),o.destroyRecursive(!1)}),300)}))),o.show()},getInputValue:function(){return this.focusNode?c.cleanHtml(this.focusNode.value):null},setInputValue:function(e){void 0===e&&(e=null),e=c.cleanHtml(e),this.focusNode.value=e,this.emitInteractionOccurred(),this.applyViewOnly()},setNodeText:function(e,t){if(e===this.viewOnlyNode)try{this._cleanForView(e,t)}catch(e){console.error(e)}else this.inherited(arguments)},_cleanForView:function(e,t){var o=a.create("div",{},e,"last");o.innerHTML=t,this._walkForView(o)},_walkForView:function(e){var t,i,n,r,a;e.nodeType===f.nodeTypes.ELEMENT_NODE&&null!=(t=e.localName)&&(i=t.toLowerCase(),o.forEach(e.attributes,(function(t){null!=(n=t.localName)&&(0===(r=n.toLowerCase()).indexOf("on")?l.set(e,n,null):"href"===r&&null!=(a=t.nodeValue)&&0===a.toLowerCase().indexOf("http")&&l.remove(e,n))}),this),"a"===i&&l.set(e,"target","_blank"),o.forEach(e.childNodes,(function(e){this._walkForView(e)}),this))}});return s("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.form.InputHtmlArea",N,u),N}));