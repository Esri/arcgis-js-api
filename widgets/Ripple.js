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

define(["./Widgette","./support/AnchorElementViewModel","dojo/dom-class","dojo/dom-style"],function(e,i,t,s){var o={base:"esri-ripple",visible:"esri-ripple--visible",rippleStart:"esri-ripple--start"};return e.createSubclass({properties:{viewModel:{type:i}},declaredClass:"esri.widgets.Ripple",baseClass:o.base,postCreate:function(){this.inherited(arguments),this.own(this.viewModel.watch("point",function(e){this._setDomClasses(e)}.bind(this)),this.viewModel.watch("screenPoint",function(e){this._positionDomNode(e)}.bind(this)))},destroy:function(){this._clearTimeout()},_css:o,animationDelay:300,visible:!0,_setVisibleAttr:function(e){this._set("visible",e),this._visibleChange()},_clearTimeout:function(){this._resetTimeout&&clearTimeout(this._resetTimeout)},_setDomClasses:function(e){t.remove(this.domNode,o.rippleStart),this.domNode.offsetWidth=this.domNode.offsetWidth,e&&t.add(this.domNode,o.rippleStart)},_positionDomNode:function(e){e?(s.set(this.domNode,{left:e.x+"px",top:e.y+"px"}),this._setDomClasses(this.point),this._clearTimeout(),this._resetTimeout=setTimeout(function(){this.viewModel.point=null,this._resetTimeout=0}.bind(this),this.animationDelay)):s.set(this.domNode,{left:"",top:""})},_visibleChange:function(){t.toggle(this.domNode,o.visible,this.visible)}})});