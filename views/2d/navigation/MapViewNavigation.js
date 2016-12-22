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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/Accessor","./actions/Pan","./actions/Zoom","./actions/Rotate","../input/handlers/DoubleClickZoom","../input/handlers/DragPan","../input/handlers/DragRotate","../input/handlers/MouseWheelZoom","../input/handlers/PinchAction"],function(t,e,o,i,n,r,a,p,s,c,u,l,h,d){var v={rotate:"Alt",counter:"Ctrl"},y=function(t){function e(e){t.call(this)}return o(e,t),e.prototype.initialize=function(){this.pan=new a({navigation:this}),this.zoom=new p({navigation:this}),this.rotate=new s({navigation:this}),this.inputManager.installHandlers("navigation",[new d.PinchRotateAndZoom(this.view),new h.MouseWheelZoom(this.view),new c.DoubleClickZoom(this.view),new u.DragPan(this.view,"primary"),new l.DragRotate(this.view,"secondary"),new c.DoubleClickZoom(this.view,[v.counter]),new l.DragRotate(this.view,"primary",[v.rotate])])},e.prototype.begin=function(){this._set("interacting",!0)},e.prototype.update=function(){},e.prototype.end=function(){this._set("interacting",!1)},i([n.property()],e.prototype,"inputManager",void 0),i([n.property({type:Boolean,readOnly:!0})],e.prototype,"interacting",void 0),i([n.property()],e.prototype,"pan",void 0),i([n.property()],e.prototype,"rotate",void 0),i([n.property()],e.prototype,"view",void 0),i([n.property()],e.prototype,"zoom",void 0),e=i([n.subclass("esri.views.2d.navigation.MapViewNavigation")],e)}(n.declared(r));return y});