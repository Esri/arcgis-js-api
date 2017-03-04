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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional","../../../../base/etc/docUtil"],function(e,t,o,a,n,i,r,d,c){var s=e(d,{key:"ISO19139A1_ROW4",postCreate:function(){this.inherited(arguments);var e=this;this.own(a.subscribe("gxe/interaction-occurred",function(t){try{if(e.parentXNode&&t&&t.inputWidget&&t.inputWidget.parentXNode){var o=t.inputWidget.parentXNode.gxePath;"/metadata/mdHrLv/ScopeCd/@value"===o&&e.emitInteractionOccurred()}}catch(a){console.error(a)}})),this.own(a.subscribe("gxe/optional-content-toggled",function(t){try{if(e.parentXNode&&t&&t.src&&t.src.target){var o=t.src.target;("dataExt"===o||"geoEle"===o)&&e.emitInteractionOccurred()}}catch(a){console.error(a)}})),this.own(a.subscribe("gxe/after-xnode-destroyed",function(t){try{if(e.parentXNode&&t&&t.xnode){var o=t.xnode.gxePath;"/metadata/mdHrLv/ScopeCd/@value"===o?e.emitInteractionOccurred():"/metadata/dataIdInfo/dataExt"===o?e.emitInteractionOccurred():"/metadata/dataIdInfo/dataExt/geoEle"===o&&e.emitInteractionOccurred()}}catch(a){console.error(a)}}))},ensureFocus:function(){c.ensureVisibility(this.parentXNode),o.some(this.parentXNode.getChildren(),function(e){return e._isGxeTabs?(o.some(e.getChildren(),function(t){return t.isExtentSection?(e.ensureActiveTab(t),!0):void 0}),!0):void 0})},validateConditionals:function(e){var t=this.newStatus({message:r.conditionals[this.key]}),o=!0,a=this.parentXNode.domNode,n="/metadata/mdHrLv/ScopeCd/@value",i="/metadata/dataIdInfo/dataExt/geoEle";return this.forActiveXNodes(n,this.getRootDomNode(),function(e){var t=e.inputWidget.getInputValue();return"005"===t?void(o=!1):void 0}),o||this.forActiveXNodes(i,a,function(e){o=!0}),t.isValid=o,this.track(t,e),t}});return n("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.base.conditionals.ISO19139A1_ROW4",s,i),s});