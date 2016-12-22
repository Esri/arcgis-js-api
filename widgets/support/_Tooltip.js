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

define(["../../core/declare","dijit/Tooltip","dojo/_base/lang","dojo/dom"],function(t,o,i,n){return t(null,{declaredClass:"esri.widgets.support._Tooltip",constructor:function(){this._tooltips=[]},startup:function(){this.inherited(arguments),this._started||this._tooltips.forEach(function(t){t.startup()})},destroy:function(){this._tooltips.forEach(function(t){t.destroy()}),this._tooltips=null},_tooltips:null,createTooltips:function(t){t.forEach(function(t){this.createTooltip(t.node,t.label)},this)},createTooltip:function(t,n){var e,r,s=this._getConnectId(t);s&&(e="object"==typeof n?i.mixin({},n,{connectId:s}):{connectId:s,label:n},r=new o(e),this._started&&r.startup(),this._tooltips.push(r))},findTooltip:function(t){var o,i,n,e,r=this._getNode(t);if(t){o=this._tooltips,i=o.length;for(var s=0;i>s;s++)if(n=o[s],e=Array.isArray(n.connectId)?n.connectId.indexOf(r)>-1:n.connectId===r)return n}},_getConnectId:function(t){var o,i;if(t){if(Array.isArray(t)){if(o=[],t.forEach(function(t){i=this._getNode(t),i&&o.push(i)},this),0===o.length)return}else if(o=this._getNode(t),!o)return;return o}},_getNode:function(t){return n.byId(t.domNode||t)}})});