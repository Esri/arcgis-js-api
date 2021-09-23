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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional","../../../../base/etc/docUtil"],(function(e,t,o,n,a,i,r,d,s){var c=e(d,{key:"FGDC_Keywords",postCreate:function(){this.inherited(arguments);var e=this;this.own(n.subscribe("gxe/interaction-occurred",(function(t){try{if(e.parentXNode&&t&&t.inputWidget&&t.inputWidget.parentXNode){var o=t.inputWidget.parentXNode.gxePath;"/metadata/dataIdInfo/tpCat"===o?e.emitInteractionOccurred():"/metadata/dataIdInfo/searchKeys/keyword"===o?e.emitInteractionOccurred():"/metadata/dataIdInfo/themeKeys/keyword"===o&&e.emitInteractionOccurred()}}catch(e){console.error(e)}}))),this.own(n.subscribe("gxe/optional-content-toggled",(function(t){try{if(e.parentXNode&&t&&t.src&&t.src.target)"themeKeys"===t.src.target&&e.emitInteractionOccurred()}catch(e){console.error(e)}}))),this.own(n.subscribe("gxe/after-xnode-destroyed",(function(t){try{if(e.parentXNode&&t&&t.xnode)"themeKeys"===t.xnode.target&&e.emitInteractionOccurred()}catch(e){console.error(e)}})))},ensureFocus:function(){s.ensureVisibility(this.parentXNode),o.some(this.parentXNode.getChildren(),(function(e){if(e._isGxeTabs)return o.some(e.getChildren(),(function(t){if(t.isKeywordsSection)return e.ensureActiveTab(t),!0})),!0}))},validateConditionals:function(e){var t=this.newStatus({message:r.conditionals[this.key]}),o=!1,n=this.parentXNode.domNode;return this.isXNodeOff(this.parentXNode)||(o=!1),o||this.forActiveXNodes("/metadata/dataIdInfo/tpCat,/metadata/dataIdInfo/searchKeys/keyword,/metadata/dataIdInfo/themeKeys/keyword",n,(function(e){if(!this.isXNodeInputEmpty(e))return o=!0,!0}),this),t.isValid=o,this.track(t,e),t}});return a("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.base.conditionals.FGDC_Keywords",c,i),c}));