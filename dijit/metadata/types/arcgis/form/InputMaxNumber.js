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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/query","dijit/registry","dojo/has","../../../../../kernel","../../../base/etc/docUtil","../../../form/InputNumber"],function(e,t,r,n,a,i,o,d){var s=e([d],{postCreate:function(){this.inherited(arguments)},emitInteractionOccurred:function(){this.inherited(arguments);try{var e=this.parentXNode.target,t=null;if("maxVal"===e?t="minVal":"rdommax"===e?t="rdommin":"vertMaxVal"===e&&(t="vertMinVal"),null!==t){var r=this.parentXNode.parentElement.gxePath+"/",n=this.parentXNode.domNode.parentNode,a=o.findInputWidget(r+t,n);a&&a.emitInteractionOccurred()}}catch(i){console.error(i)}}});return a("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.form.InputMaxNumber",s,i),s});