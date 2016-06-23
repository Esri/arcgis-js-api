// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/on","dojo/keys","dojo/_base/event","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/has","dijit/Viewport","../context/GxeAdaptor","../context/GxeContext","../base/etc/viewOnlyUtil","../base/XDocument","../base/xml/XmlImporter","../types/arcgis/base/arcgisStyles","./EditorResizeMixin","../base/Templated","dojo/text!./templates/Editor.html","../../../kernel","./PrimaryToolbar","./ValidationPane","./EditDocumentPane","./ViewDocumentPane","./XmlPane","../../../dijit/Geocoder","../form/Attribute","../form/Element","../form/ElementChoice","../form/HiddenAttribute","../form/HiddenElement","../form/OpenElement","../form/InputDate","../form/InputDelimitedTextArea","../form/InputNumber","../form/InputSelectMany","../form/InputSelectOne","../form/InputText","../form/InputTextArea","../form/IsoTopicCategoryOptions","../form/Option","../form/Options","../form/Section","../form/Tabs","../form/tools/ClickableTool","../form/tools/ClickableValueTool","../types/arcgis/form/InputCheckBox","../types/arcgis/form/InputDate","../types/arcgis/form/InputHtmlArea","../types/arcgis/form/InputSelectBoolean","../types/arcgis/form/InputSelectCode","../types/arcgis/form/InputSysTime"],function(e,t,o,i,r,n,s,a,c,d,m,l,u,p,h,g,D,x,f,y,w){var P=e([f,x],{dialogBroker:null,gxeAdaptor:null,gxeContext:null,templateString:y,postCreate:function(){this.inherited(arguments),this.gxeAdaptor||(this.gxeAdaptor=new l),this.gxeContext||(this.gxeContext=new u),this.primaryToolbar.editor=this,this.primaryToolbar.lastSavedXml=this.gxeAdaptor.getOriginalXml(),this.validationPane.editor=this,this.xmlPane.setXml(this.gxeAdaptor.getOriginalXml(),"metadata"),this.primaryToolbar.initialize(),this.dialogBroker||this.own(m.on("resize",t.hitch(this,"resize"))),this.isLeftToRight()||s.add(this.domNode,"gxeRtl"),this.own(i(document,"keydown, keypress",t.hitch(this,function(e){e.keyCode===r.BACKSPACE&&void 0===e.target.size&&void 0===e.target.rows&&n.stop(e)})))},destroy:function(){try{this.viewDocumentPane.gxeDocument&&this.viewDocumentPane.gxeDocument.rootDescriptor&&this.viewDocumentPane.gxeDocument.rootDescriptor.destroyRecursive(!1)}catch(e){console.error(e)}try{this.editDocumentPane.gxeDocument&&this.editDocumentPane.gxeDocument.rootDescriptor&&this.editDocumentPane.gxeDocument.rootDescriptor.destroyRecursive(!1)}catch(e){console.error(e)}this.inherited(arguments)},getEditDocument:function(){return this.editDocumentPane.gxeDocument},getViewDocument:function(){return this.viewDocumentPane.gxeDocument},initializeView:function(){this.primaryToolbar.initializeView()},_loadDocumentPane:function(e,t,i,r,n){var s=null,d=!1,m=!1,l=new o;e===this.editDocumentPane?this.validationPane.clearMessages():d=!0;try{var u,D=e.gxeDocument,x=a.create("div",{},e.rootContainer);s=new h({gxeContext:this.gxeContext,isViewOnly:d,_editor:this}),s.initialize(t,x,i),i&&(u=new g,u.importDocument(s,i,r)),D&&(c.set(D.rootDescriptor.domNode,"display","none"),D.rootDescriptor&&D.rootDescriptor.destroyRecursive(!1)),m=!0,e.gxeDocument=s,c.set(x,"display",""),c.set(e.domNode,"display",""),d&&p.applyViewOnly(s);try{d?this.gxeAdaptor.afterViewDocumentLoad(s,n):this.gxeAdaptor.afterEditDocumentLoad(s,i,r,n)}catch(f){console.error(f)}l.resolve(s),this.primaryToolbar.updateUI()}catch(y){try{s&&s.rootDescriptor&&!m&&(c.set(s.rootDescriptor.domNode,"display","none"),s.rootDescriptor.destroyRecursive(!1))}catch(w){}console.error("Error constructing document"),console.error(y),l.reject(y)}return l},loadEditor:function(e,t,o,i){return this.editDocumentPane.hideMessage(),e&&t&&"arcgis"===e.key&&D.preLoad(this.gxeContext,t),this._loadDocumentPane(this.editDocumentPane,e,t,o,i)},loadView:function(e,t,o){return this._loadDocumentPane(this.viewDocumentPane,e,t,!1,o)}});return d("extend-esri")&&t.setObject("dijit.metadata.editor.Editor",P,w),P});