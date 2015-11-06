// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional"],function(t,e,a,o,n,r,i,s){var d=t(s,{key:"ISO19139A1_ROW6",postCreate:function(){this.inherited(arguments);var t=this;this.own(o.subscribe("gxe/optional-content-toggled",function(e){try{if(t.parentXNode&&e&&e.src&&e.src.target){var a=e.src.target;("aggrDSIdent"===a||"aggrDSName"===a)&&t.emitInteractionOccurred()}}catch(o){console.error(o)}}))},validateConditionals:function(t){var e=this.newStatus({message:i.conditionals[this.key]}),a=!0,o=this.parentXNode.domNode,n="/metadata/dataIdInfo/aggrInfo/aggrDSIdent",r="/metadata/dataIdInfo/aggrInfo/aggrDSName";return this.isXNodeOff(this.parentXNode)||(a=!1,this.forActiveXNodes(n+","+r,o,function(){return a=!0,!0})),e.isValid=a,this.track(e,t),e}});return n("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.base.conditionals.ISO19139A1_ROW6",d,r),d});