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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["./Widgette","./support/AnchorElementViewModel","dojo/i18n!./Spinner/nls/Spinner","dojo/dom-class","dojo/dom-construct","dojo/dom-style"],function(i,e,s,t,o,n){var r={base:"esri-spinner",visible:"esri-spinner--visible",spinnerStart:"esri-spinner--start",spinnerFinish:"esri-spinner--finish"};return i.createSubclass({properties:{viewModel:{type:e}},declaredClass:"esri.widgets.Spinner",baseClass:r.base,postCreate:function(){this.inherited(arguments),this.own(this.viewModel.watch("point",function(i){this._setDomClasses(i)}.bind(this)),this.viewModel.watch("screenPoint",function(i){this._positionDomNode(i)}.bind(this)))},destroy:function(){this._clearTimeout()},_css:r,_i18n:s,animationDelay:500,visible:!0,_setVisibleAttr:function(i){this._set("visible",i),this._visibleChange()},_clearTimeout:function(){this._resetTimeout&&clearTimeout(this._resetTimeout)},_setDomClasses:function(i){this.visible&&i?(t.remove(this.domNode,r.spinnerStart),t.remove(this.domNode,r.spinnerFinish),this.domNode.offsetWidth=this.domNode.offsetWidth,t.add(this.domNode,r.spinnerStart)):this.visible&&!i?t.add(this.domNode,r.spinnerFinish):(t.remove(this.domNode,r.spinnerStart),t.remove(this.domNode,r.spinnerFinish))},_positionDomNode:function(i){i?n.set(this.domNode,{left:i.x+"px",top:i.y+"px"}):(this._clearTimeout(),this._resetTimeout=setTimeout(function(){n.set(this.domNode,{left:"",top:""}),this._resetTimeout=0}.bind(this),this.animationDelay))},_visibleChange:function(){t.toggle(this.domNode,r.visible,this.visible)}})});