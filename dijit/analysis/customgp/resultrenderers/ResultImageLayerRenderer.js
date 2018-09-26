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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/on","dijit/_TemplatedMixin","dojo/text!./ResultImageLayerRenderer.html","../BaseResultRenderer"],function(e,t,i,s,a,r,d){return e([d,a],{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-draw-feature",templateString:r,postCreate:function(){this.inherited(arguments),this.layer&&(this._displayText(),this._addResultLayer(this.layer))},destroy:function(){this.layer&&(this.map.removeLayer(this.layer),this.layer=null),this.inherited(arguments)},_displayText:function(){i.set(this.clearNode,"display",""),this.own(s(this.clearNode,"click",t.hitch(this,function(){this.layer&&(this.map.infoWindow.isShowing&&this.map.infoWindow.hide(),this.map.removeLayer(this.layer),this.layer=null),i.set(this.clearNode,"display","none"),i.set(this.domNode,"display","none")})))},_addResultLayer:function(e){this.map.addLayers([e])}})});