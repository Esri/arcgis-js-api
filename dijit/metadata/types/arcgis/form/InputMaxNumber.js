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

define(["dojo/_base/declare","dojo/_base/lang","dojo/query","dijit/registry","dojo/has","../../../../../kernel","../../../base/etc/docUtil","../../../form/InputNumber"],function(e,t,r,n,a,i,o,d){var c=e([d],{postCreate:function(){this.inherited(arguments)},emitInteractionOccurred:function(e){this.inherited(arguments);try{var t=this.parentXNode.target,r=null;if("maxVal"===t?r="minVal":"rdommax"===t?r="rdommin":"vertMaxVal"===t&&(r="vertMinVal"),null!==r){var n=this.parentXNode.parentElement.gxePath+"/",a=this.parentXNode.domNode.parentNode,i=o.findInputWidget(n+r,a);i&&i.emitInteractionOccurred()}}catch(e){console.error(e)}}});return a("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.form.InputMaxNumber",c,i),c});