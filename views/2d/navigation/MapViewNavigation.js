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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/Accessor","./actions/Pan","./actions/Zoom","./actions/Rotate","../input/handlers/DoubleClickZoom","../input/handlers/DragPan","../input/handlers/DragRotate","../input/handlers/KeyPan","../input/handlers/KeyZoom","../input/handlers/KeyRotate","../input/handlers/MouseWheelZoom","../input/handlers/PinchAction","../viewpointUtils"],function(t,o,n,i,e,a,r,s,p,c,u,w,h,v,l,y,m,g){var d={counter:"Ctrl",pan:{left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown"},zoom:{zoomInOption1:"=",zoomInOption2:"+",zoomOutOption1:"-",zoomOutOption2:"_"},rotate:{dragRotate:"Alt",clockwiseOption1:"a",clockwiseOption2:"A",counterClockwiseOption1:"d",counterClockwiseOption2:"D",resetOption1:"n",resetOption2:"N"}},f=10,z=1,C=function(t){function o(o){var n=t.call(this)||this;return n.animationManager=null,n}return n(o,t),o.prototype.initialize=function(){this.pan=new r({navigation:this}),this.zoom=new s({navigation:this}),this.rotate=new p({navigation:this}),this.inputManager.installHandlers("navigation",[new m.PinchRotateAndZoom(this.view),new y.MouseWheelZoom(this.view),new c.DoubleClickZoom(this.view),new u.DragPan(this.view,"primary"),new h.KeyPan(this.view,d.pan),new v.KeyZoom(this.view,d.zoom),new l.KeyRotate(this.view,d.rotate),new w.DragRotate(this.view,"secondary"),new c.DoubleClickZoom(this.view,[d.counter]),new w.DragRotate(this.view,"primary",[d.rotate.dragRotate])])},o.prototype.begin=function(){this._set("interacting",!0)},o.prototype.update=function(){},o.prototype.end=function(){this._set("interacting",!1)},o.prototype.zoomIn=function(){var t=this.view.size,o={data:{x:t[0]/2,y:t[1]/2}};this.zoom.stepScreen(this.view,o,2)},o.prototype.zoomOut=function(){var t=this.view.size,o={data:{x:t[0]/2,y:t[1]/2}};this.zoom.stepScreen(this.view,o,.5)},o.prototype.continousRotateClockwise=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){g.rotateBy(t,t,-z)})},o.prototype.continousRotateCounterclockwise=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){g.rotateBy(t,t,z)})},o.prototype.resetRotation=function(){var t=this.get("view.viewpoint");this.view.rotation=0,this.animationManager.animateTo(t,t,null)},o.prototype.continousPanLeft=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){g.translateBy(t,t,[-f,0])})},o.prototype.continousPanRight=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){g.translateBy(t,t,[f,0])})},o.prototype.continousPanUp=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){g.translateBy(t,t,[0,f])})},o.prototype.continousPanDown=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){g.translateBy(t,t,[0,-f])})},o.prototype.stop=function(){this.animationManager.stop()},o}(e.declared(a));return i([e.property()],C.prototype,"inputManager",void 0),i([e.property({type:Boolean,readOnly:!0})],C.prototype,"interacting",void 0),i([e.property()],C.prototype,"pan",void 0),i([e.property()],C.prototype,"rotate",void 0),i([e.property()],C.prototype,"view",void 0),i([e.property()],C.prototype,"zoom",void 0),C=i([e.subclass("esri.views.2d.navigation.MapViewNavigation")],C)});