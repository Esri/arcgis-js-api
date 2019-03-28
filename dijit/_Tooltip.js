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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dijit/Tooltip","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom"],function(t,o,i,n,e){return i(null,{declaredClass:"esri.dijit._Tooltip",_tooltips:null,constructor:function(){this._tooltips=[]},startup:function(){this.inherited(arguments),this._started||o.forEach(this._tooltips,function(t){t.startup()})},destroy:function(){this.inherited(arguments),o.forEach(this._tooltips,function(t){t.destroy()}),this._tooltips=null},createTooltips:function(t){o.forEach(t,function(t){this.createTooltip(t.node,t.label)},this)},createTooltip:function(o,i){var e,r,s=this._getConnectId(o);s&&(e="object"==typeof i?n.mixin({},i,{connectId:s}):{connectId:s,label:i},r=new t(e),this._started&&r.startup(),this._tooltips.push(r))},_getConnectId:function(t){var i,e;if(t){if(n.isArray(t)){if(i=[],o.forEach(t,function(t){(e=this._getNode(t))&&i.push(e)}),0===i.length)return}else if(!(i=this._getNode(t)))return;return i}},_getNode:function(t){return e.byId(t.domNode||t)},findTooltip:function(t){var i,e,r,s=this._getNode(t);if(t){i=this._tooltips,e=i.length;for(var c=0;c<e;c++)if(r=i[c],n.isArray(r.connectId)?o.indexOf(r.connectId,s)>-1:r.connectId===s)return r}}})});