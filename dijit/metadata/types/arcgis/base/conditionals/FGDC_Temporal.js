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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional","../../../../base/etc/docUtil"],(function(e,t,a,n,o,i,r,s,d){var c=e(s,{key:"FGDC_Temporal",postCreate:function(){this.inherited(arguments);var e=this;this.own(n.subscribe("gxe/optional-content-toggled",(function(t){try{if(e.parentXNode&&t&&t.src&&t.src.target){var a=t.src.target;"dataExt"!==a&&"tempEle"!==a||e.emitInteractionOccurred()}}catch(e){console.error(e)}}))),this.own(n.subscribe("gxe/after-xnode-destroyed",(function(t){try{if(e.parentXNode&&t&&t.xnode){var a=t.xnode.gxePath;"/metadata/dataIdInfo/dataExt"===a?e.emitInteractionOccurred():"/metadata/dataIdInfo/dataExt/tempEle"===a&&e.emitInteractionOccurred()}}catch(e){console.error(e)}})))},ensureFocus:function(){d.ensureVisibility(this.parentXNode),a.some(this.parentXNode.getChildren(),(function(e){if(e._isGxeTabs)return a.some(e.getChildren(),(function(t){if(t.isExtentSection)return e.ensureActiveTab(t),!0})),!0}))},validateConditionals:function(e){var t=this.newStatus({message:r.conditionals[this.key]}),a=!1,n=this.parentXNode.domNode;return this.forActiveXNodes("/metadata/dataIdInfo/dataExt/tempEle",n,(function(e){a=!0})),t.isValid=a,this.track(t,e),t}});return o("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.base.conditionals.FGDC_Temporal",c,i),c}));