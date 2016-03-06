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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional"],function(e,t,n,o,i,r,a,s){var c=e(s,{key:"ISO19139A1_ROW9",postCreate:function(){this.inherited(arguments);var e=this;this.own(o.subscribe("gxe/interaction-occurred",function(t){try{if(e.parentXNode&&t&&t.inputWidget&&t.inputWidget.parentXNode){var n=t.inputWidget.parentXNode.gxePath;"/metadata/dqInfo/dqScope/scpLvl/ScopeCd/@value"===n?e.emitInteractionOccurred():null!==n&&0===n.indexOf("/metadata/dqInfo/dqScope/scpLvlDesc/")&&e.emitInteractionOccurred()}}catch(o){console.error(o)}})),this.own(o.subscribe("gxe/optional-content-toggled",function(t){try{if(e.parentXNode&&t&&t.src&&t.src.target){var n=t.src.target;"scpLvlDesc"===n&&e.emitInteractionOccurred()}}catch(o){console.error(o)}})),this.own(o.subscribe("gxe/after-xnode-destroyed",function(t){try{if(e.parentXNode&&t&&t.xnode){var n=t.xnode.target;"scpLvlDesc"===n&&e.emitInteractionOccurred()}}catch(o){console.error(o)}}))},hasLevelDescription:function(e,t){var o=!1,i=this;return this.forActiveXNodes(e,t,function(e){return n.some(e.getChildren(),function(e){return e._isGxeNode&&!i.isXNodeInputEmpty(e)?(o=!0,!0):n.some(e.getChildren(),function(e){return e._isGxeNode&&!i.isXNodeInputEmpty(e)?(o=!0,!0):void 0})})}),o},validateConditionals:function(e){var n=this.newStatus({message:a.conditionals[this.key]}),o=!0,i=this.parentXNode.parentElement.domNode,r="/metadata/dqInfo/dqScope/scpLvl/ScopeCd/@value",s="/metadata/dqInfo/dqScope/scpLvlDesc";if(!this.isXNodeOff(this.parentXNode)){var c=this.findInputValue(r,i);null!==c&&t.trim(c).length>0&&"005"!==c&&"006"!==c&&(o=this.hasLevelDescription(s,i))}return n.isValid=o,this.track(n,e),n}});return i("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.base.conditionals.ISO19139A1_ROW9",c,r),c});