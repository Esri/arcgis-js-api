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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional","../../../../base/etc/docUtil"],(function(e,t,o,n,a,i,r,s,d){var c=e(s,{key:"GEN_BoundingBox",postCreate:function(){this.inherited(arguments);var e=this;this.own(n.subscribe("gxe/optional-content-toggled",(function(t){try{if(e.parentXNode&&t&&t.src&&t.src.target){var o=t.src.target;"dataExt"!==o&&"geoEle"!==o||e.emitInteractionOccurred()}}catch(e){console.error(e)}}))),this.own(n.subscribe("gxe/tab-activated",(function(t){try{e.parentXNode&&t&&t.tabs&&t.tabs.isGeoEleChoice&&e.emitInteractionOccurred()}catch(e){console.error(e)}}))),this.own(n.subscribe("gxe/after-xnode-destroyed",(function(t){try{if(e.parentXNode&&t&&t.xnode){var o=t.xnode.gxePath;"/metadata/dataIdInfo/dataExt"===o?e.emitInteractionOccurred():"/metadata/dataIdInfo/dataExt/geoEle"===o&&e.emitInteractionOccurred()}}catch(e){console.error(e)}})))},ensureFocus:function(){d.ensureVisibility(this.parentXNode),o.some(this.parentXNode.getChildren(),(function(e){if(e._isGxeTabs)return o.some(e.getChildren(),(function(t){if(t.isExtentSection)return e.ensureActiveTab(t),!0})),!0}))},validateConditionals:function(e){var t=this.newStatus({message:r.conditionals[this.key]}),o=!1,n=this.parentXNode.domNode;return this.forActiveXNodes("/metadata/dataIdInfo/dataExt/geoEle/GeoBndBox",n,(function(e){o=!0})),t.isValid=o,this.track(t,e),t}});return a("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.base.conditionals.GEN_BoundingBox",c,i),c}));