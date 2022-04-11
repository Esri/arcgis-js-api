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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","../../lang","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/_base/lang","dojo/text!./templates/RFxCellSizeInput.html"],(function(e,i,t,l,a,n,s){return e("RFxCellSizeInput",[t,l,a],{templateString:s,value:{x:0,y:0},postCreate:function(){this.inherited(arguments),this._readValues()},_readValues:function(){var e=this.value;if(e){var i=e.x||e.y?e.x:0;this.cellSize.set("value",i)}else this.cellSize.set("value",0)},_onCellSizeChange:function(e){i.isDefined(e)&&isNaN(e)||(this.value={x:e,y:e},this.emit("change",n.clone(this.value)))}})}));