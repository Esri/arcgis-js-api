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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional","../../../../base/etc/docUtil"],function(e,t,o,a,n,r,i,d,s){var c=e(d,{key:"FGDC_Keywords",postCreate:function(){this.inherited(arguments);var e=this;this.own(a.subscribe("gxe/interaction-occurred",function(t){try{if(e.parentXNode&&t&&t.inputWidget&&t.inputWidget.parentXNode){var o=t.inputWidget.parentXNode.gxePath;"/metadata/dataIdInfo/tpCat"===o?e.emitInteractionOccurred():"/metadata/dataIdInfo/searchKeys/keyword"===o?e.emitInteractionOccurred():"/metadata/dataIdInfo/themeKeys/keyword"===o&&e.emitInteractionOccurred()}}catch(a){console.error(a)}})),this.own(a.subscribe("gxe/optional-content-toggled",function(t){try{if(e.parentXNode&&t&&t.src&&t.src.target){var o=t.src.target;"themeKeys"===o&&e.emitInteractionOccurred()}}catch(a){console.error(a)}})),this.own(a.subscribe("gxe/after-xnode-destroyed",function(t){try{if(e.parentXNode&&t&&t.xnode){var o=t.xnode.target;"themeKeys"===o&&e.emitInteractionOccurred()}}catch(a){console.error(a)}}))},ensureFocus:function(){s.ensureVisibility(this.parentXNode),o.some(this.parentXNode.getChildren(),function(e){return e._isGxeTabs?(o.some(e.getChildren(),function(t){return t.isKeywordsSection?(e.ensureActiveTab(t),!0):void 0}),!0):void 0})},validateConditionals:function(e){var t=this.newStatus({message:i.conditionals[this.key]}),o=!1,a=this.parentXNode.domNode,n="/metadata/dataIdInfo/tpCat",r="/metadata/dataIdInfo/searchKeys/keyword",d="/metadata/dataIdInfo/themeKeys/keyword";return this.isXNodeOff(this.parentXNode)||(o=!1),o||this.forActiveXNodes(n+","+r+","+d,a,function(e){return this.isXNodeInputEmpty(e)?void 0:(o=!0,!0)},this),t.isValid=o,this.track(t,e),t}});return n("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.base.conditionals.FGDC_Keywords",c,r),c});