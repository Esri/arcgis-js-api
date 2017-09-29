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

define(["dojo/_base/lang","dojo/_base/array","dojo/dom-class","dojo/has","../../../../kernel"],function(e,t,n,a,i){var o={applyViewOnly:function(e){this._walkNonTabs(e.rootDescriptor),this._walkTabs(e.rootDescriptor)},hasViewableContent:function(e){return e.hide||e._isOptionallyOff?!1:e._isGxeNode&&null!==e.checkXmlValue()?!0:t.some(e.getChildren(),function(e){return this.hasViewableContent(e)},this)},_walkNonTabs:function(e){var n,a=e._isGxeNode||e._isGxeMultiplicityHeader;a&&(n=this.hasViewableContent(e),n||(e.domNode.style.display="none")),t.forEach(e.getChildren(),function(e){this._walkNonTabs(e)},this)},_walkTabs:function(e){var a,i=[];e._isGxeTabs&&(t.forEach(e._tabButtons,function(e){a=this.hasViewableContent(e.tabWgt),a?i.push(e):e.domNode.style.display="none"},this),i.length>0&&(n.contains(i[0].domNode,"current")||e._activateTab(i[0]))),t.forEach(e.getChildren(),function(e){this._walkTabs(e)},this)}};return a("extend-esri")&&e.setObject("dijit.metadata.base.etc.viewOnlyUtil",o,i),o});