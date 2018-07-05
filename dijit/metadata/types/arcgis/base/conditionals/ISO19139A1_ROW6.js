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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional"],function(t,e,a,o,n,i,r,s){var d=t(s,{key:"ISO19139A1_ROW6",postCreate:function(){this.inherited(arguments);var t=this;this.own(o.subscribe("gxe/optional-content-toggled",function(e){try{if(t.parentXNode&&e&&e.src&&e.src.target){var a=e.src.target;"aggrDSIdent"!==a&&"aggrDSName"!==a||t.emitInteractionOccurred()}}catch(t){console.error(t)}}))},validateConditionals:function(t){var e=this.newStatus({message:r.conditionals[this.key]}),a=!0,o=this.parentXNode.domNode;return this.isXNodeOff(this.parentXNode)||(a=!1,this.forActiveXNodes("/metadata/dataIdInfo/aggrInfo/aggrDSIdent,/metadata/dataIdInfo/aggrInfo/aggrDSName",o,function(t){return a=!0,!0})),e.isValid=a,this.track(e,t),e}});return n("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.base.conditionals.ISO19139A1_ROW6",d,i),d});