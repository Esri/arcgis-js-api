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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../../core/Accessoire","../../../core/HandleRegistry","./cssUtils","./Container","./RenderContext"],function(t,e,r,i,n){var s=t.createSubclass({classMetadata:{properties:{clipVisible:{}}},constructor:function(){this._handles=new e},getDefaults:function(t){return{context:new n,root:new i,wrapper:new i({stage:this,parent:this,surface:t.container})}},initialize:function(){this._handles.add(this.watch("clipVisible",this.rerender.bind(this)))},destroy:function(){this.stop(),this._handles.destroy(),this._handles=null},_rerender:!1,clipVisible:!0,_stateSetter:function(t,e){return e&&this._handles.remove("version"),t&&this._handles.add(t.watch("version",this.rerender.bind(this)),"version"),t},rerender:function(){this._rerender||(this._rerender=!0,this._running&&this.task.isPaused()&&this.task.resume())},run:function(){this._running||(this.wrapper.addChild(this.root),this.task=this.scheduler.addFrameTask({render:this._render.bind(this)}),this._running=!0)},stop:function(){this._running&&(this.wrapper.removeChild(this.root),this.task.remove(),this.task=null,this._running=!1)},addChild:function(t){return this.root.addChild(t)},addChildAt:function(t,e){return this.root.addChildAt(t,e)},removeChild:function(t){return this.root.removeChild(t)},removeAllChildren:function(){this.root.removeAllChildren()},removeChildAt:function(t){return this.root.removeChildAt(t)},contains:function(t){return this.root.contains(t)},getChildIndex:function(t){return this.root.getChildIndex(t)},getChildAt:function(t){return this.root.getChildAt(t)},setChildIndex:function(t,e){return this.root.setChildIndex(t,e)},requestChildRender:function(){this.rerender()},_render:function(){if(this._rerender){var t=this.context,e=this.state,i=this.wrapper,n=this.root;this._rerender=!1,t.setViewTransform(e.transformNoRotation),i.reflow(t),i.render(t),n.render(t);var s=n.surface.style,o=e.screenCenter,h=this.clipVisible&&e.clipRect;r.setOrigin(s,o),r.setTransformStyle(s,r.rotateZ(e.rotation)),r.clip(s,h),t.reset(),this._rerender||this.task.pause()}}});return s});