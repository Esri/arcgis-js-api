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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional","../../../../base/etc/docUtil"],(function(e,t,a,o,n,i,r,d,c){var s=e(d,{key:"ISO19139A1_ROW4",postCreate:function(){this.inherited(arguments);var e=this;this.own(o.subscribe("gxe/interaction-occurred",(function(t){try{if(e.parentXNode&&t&&t.inputWidget&&t.inputWidget.parentXNode)"/metadata/mdHrLv/ScopeCd/@value"===t.inputWidget.parentXNode.gxePath&&e.emitInteractionOccurred()}catch(e){console.error(e)}}))),this.own(o.subscribe("gxe/optional-content-toggled",(function(t){try{if(e.parentXNode&&t&&t.src&&t.src.target){var a=t.src.target;"dataExt"!==a&&"geoEle"!==a||e.emitInteractionOccurred()}}catch(e){console.error(e)}}))),this.own(o.subscribe("gxe/after-xnode-destroyed",(function(t){try{if(e.parentXNode&&t&&t.xnode){var a=t.xnode.gxePath;"/metadata/mdHrLv/ScopeCd/@value"===a?e.emitInteractionOccurred():"/metadata/dataIdInfo/dataExt"===a?e.emitInteractionOccurred():"/metadata/dataIdInfo/dataExt/geoEle"===a&&e.emitInteractionOccurred()}}catch(e){console.error(e)}})))},ensureFocus:function(){c.ensureVisibility(this.parentXNode),a.some(this.parentXNode.getChildren(),(function(e){if(e._isGxeTabs)return a.some(e.getChildren(),(function(t){if(t.isExtentSection)return e.ensureActiveTab(t),!0})),!0}))},validateConditionals:function(e){var t=this.newStatus({message:r.conditionals[this.key]}),a=!0,o=this.parentXNode.domNode;return this.forActiveXNodes("/metadata/mdHrLv/ScopeCd/@value",this.getRootDomNode(),(function(e){"005"!==e.inputWidget.getInputValue()||(a=!1)})),a||this.forActiveXNodes("/metadata/dataIdInfo/dataExt/geoEle",o,(function(e){a=!0})),t.isValid=a,this.track(t,e),t}});return n("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.base.conditionals.ISO19139A1_ROW4",s,i),s}));