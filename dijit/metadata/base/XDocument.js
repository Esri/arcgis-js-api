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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-class","dojo/dom-construct","dojo/has","./xml/XmlGenerator","../../../kernel"],function(e,t,i,o,n,s,r,a){var l=e(null,{_hasNamespaces:null,datestamp:null,documentType:null,gxeContext:null,isViewOnly:!1,originalTitle:null,rootDescriptor:null,rootElement:null,ArcGISFormat:null,ArcGISProfile:null,ArcGISStyle:null,isAgsItemDescription:!1,isAgsFGDC:!1,isAgsISO19139:!1,isAgsINSPIRE:!1,isAgsNAP:!1,constructor:function(e){this.datestamp=new Date,t.mixin(this,e)},afterInitializeAttribute:function(e){this.documentType&&this.documentType.afterInitializeAttribute(this,e)},afterInitializeElement:function(e){this.documentType&&this.documentType.afterInitializeElement(this,e)},beforeInitializeAttribute:function(e){this.documentType&&this.documentType.beforeInitializeAttribute(this,e)},beforeInitializeElement:function(e){this.documentType&&this.documentType.beforeInitializeElement(this,e)},generateXml:function(e,t){return new r({}).generate(this,this.rootElement,e,t)},getNamespaces:function(){return this.documentType?this.documentType.getNamespaces():null},hasNamespaces:function(){var e,t=!1;return null===this._hasNamespaces&&(e=this.getNamespaces(),null!==e&&e.length>0&&(t=!0),this._hasNamespaces=t),this._hasNamespaces},initialize:function(e,t,i){this.documentType=e,this.rootDescriptor=e.newRootDescriptor(this,i),this.rootDescriptor._isGxeRootDescriptor=!0,this.rootDescriptor.gxeDocument=this,t&&(n.place(this.rootDescriptor.domNode,t,"replace"),this.rootDescriptor.startup(),this.rootElement&&this.rootElement.elementHeader&&o.add(this.rootElement.elementHeader.domNode,"gxeRootLabel"))}});return s("extend-esri")&&t.setObject("dijit.metadata.base.XDocument",l,a),l});