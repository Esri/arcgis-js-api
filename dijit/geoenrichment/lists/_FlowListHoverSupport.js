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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/on","../utils/MouseUtil"],(function(e,t,i){var n=e(null,{_list:null,_checkIntervalH:null,constructor:function(e){this._list=e},setHoveredItem:function(e){clearInterval(this._checkIntervalH),this._emitHoverEvent(e),this._checkIntervalH=setInterval(function(){i.isMouseOver(e)||this.setHoveredItem(null)}.bind(this),100)},_emitHoverEvent:function(e){this._list.onItemHovered({type:"itemHover",index:e?e.index:-1,item:e?e.item:null,value:e?e.item[this._list.idProperty]:void 0})}});return e(null,{_mouseHelper:null,postCreate:function(){this._mouseHelper=new n(this),this.inherited(arguments)},_addClickHandler:function(e){this.inherited(arguments),this._clickHandles.push(t(e,"mouseover",function(){this._mouseHelper.setHoveredItem(e)}.bind(this)))},onItemHovered:function(e){}})}));