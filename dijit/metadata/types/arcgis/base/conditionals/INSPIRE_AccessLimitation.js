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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional","../../../../base/etc/docUtil"],function(t,e,s,n,i,o,a,r,c){var d=t(r,{key:"INSPIRE_AccessLimitation",postCreate:function(){this.inherited(arguments);var t=this;this.own(n.subscribe("gxe/interaction-occurred",function(e){try{if(t.parentXNode&&e&&e.inputWidget&&e.inputWidget.parentXNode){var s=e.inputWidget.parentXNode.gxePath;"/metadata/dataIdInfo/resConst/LegConsts/accessConsts/RestrictCd/@value"===s?t.emitInteractionOccurred():"/metadata/dataIdInfo/resConst/SecConsts/class/ClasscationCd/@value"===s&&t.emitInteractionOccurred()}}catch(t){console.error(t)}})),this.own(n.subscribe("gxe/tab-activated",function(e){try{t.parentXNode&&e&&e.tabs&&e.tabs.isResConstElementChoice&&t.emitInteractionOccurred()}catch(t){console.error(t)}})),this.own(n.subscribe("gxe/after-xnode-destroyed",function(e){try{if(t.parentXNode&&e&&e.xnode){var s=e.xnode.target;"resConst"!==s&&"accessConsts"!==s||t.emitInteractionOccurred()}}catch(t){console.error(t)}}))},ensureFocus:function(){c.ensureVisibility(this.parentXNode),s.some(this.parentXNode.getChildren(),function(t){if(t._isGxeTabs)return s.some(t.getChildren(),function(e){if(e.isConstraintsSection)return t.ensureActiveTab(e),!0}),!0})},validateConditionals:function(t){var e=this.newStatus({message:a.conditionals[this.key]}),s=!1,n=this.parentXNode.domNode;return this.forActiveXNodes("/metadata/dataIdInfo/resConst/LegConsts/accessConsts/RestrictCd/@value,/metadata/dataIdInfo/resConst/SecConsts/class/ClasscationCd/@value",n,function(t){if(!this.isXNodeInputEmpty(t))return s=!0,!0},this),e.isValid=s,this.track(e,t),e}});return i("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.base.conditionals.INSPIRE_AccessLimitation",d,o),d});