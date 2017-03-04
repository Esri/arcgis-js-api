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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(e,n,o,t){var i=function(e){function n(n,o,t){var i=e.call(this,"esri.views.2d.input.handlers.KeyZoom",!0)||this;return i.view=n,i.keys=o,i._keyToScale=(r={},r[o.zoomInOption1]=2,r[o.zoomInOption2]=2,r[o.zoomOutOption1]=.5,r[o.zoomOutOption2]=.5,r),i.registerIncoming("key-down",t,function(e){return i._handleKeyDown(e)}),i;var r}return o(n,e),n.prototype._handleKeyDown=function(e){this._handleKey(e)},n.prototype._handleKey=function(e){var n=e.modifiers;if(!(n.size>0)||n.has("Shift")){var o=this._keyToScale[e.data.key],t=this.view.size,i={data:{x:t[0]/2,y:t[1]/2}};o&&(this.view.navigation.zoom.stepScreen(this.view,i,o),e.stopPropagation())}},n}(t.InputHandler);n.KeyZoom=i});