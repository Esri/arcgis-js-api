// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/has","../kernel","../domUtils","../geometry/Extent"],function(e,t,i,s,n,o,a){var d=e(null,{declaredClass:"esri.layers.MapImage",constructor:function(e){t.mixin(this,e),this.extent=new a(this.extent)},visible:!0,opacity:1,getLayer:function(){return this._layer},getNode:function(){return this._node},show:function(){if(!this.visible){this.visible=!0;var e,t=this._node,i=this._layer;t&&(e=i&&i._div,e&&(i.suspended||i._setPos(t,e._left,e._top),(i._active||e).appendChild(t)),o.show(t))}},hide:function(){if(this.visible){this.visible=!1;var e=this._node;e&&(o.hide(e),e.parentNode&&e.parentNode.removeChild(e))}},setOpacity:function(e){var t=this._node;this.opacity=e,t&&i.set(t,"opacity",e)}});return s("extend-esri")&&t.setObject("layers.MapImage",d,n),d});