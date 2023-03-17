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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional"],(function(t,e,o,i,r,a,n,s){var d=t(s,{key:"ISO19139A1_ROW18",postCreate:function(){this.inherited(arguments);var t=this;this.own(i.subscribe("gxe/optional-content-toggled",(function(e){try{if(t.parentXNode&&e&&e.src&&e.src.target){var o=e.src.target;"distFormat"!==o&&"distributor"!==o&&"distorFormat"!==o||t.emitInteractionOccurred()}}catch(t){console.error(t)}}))),this.own(i.subscribe("gxe/xnode-destroyed",(function(e){try{if(t.parentXNode&&e&&e.xnode)"/metadata/distInfo/distributor"===e.xnode.gxePath&&t.emitInteractionOccurred()}catch(t){console.error(t)}})))},validateConditionals:function(t){var e=this.newStatus({message:n.conditionals[this.key]}),o=!0,i=this.parentXNode.domNode;return this.isXNodeOff(this.parentXNode)||(o=!1,this.forActiveXNodes("/metadata/distInfo/distFormat,/metadata/distInfo/distributor/distorFormat",i,(function(t){return o=!0,!0}))),e.isValid=o,this.track(e,t),e}});return r("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.base.conditionals.ISO19139A1_ROW18",d,a),d}));