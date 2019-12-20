// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/iterator","../../../../../core/has","../../../../../core/maybe","../enums"],function(r,e,u,b,c,t){Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function r(r,e){this.brushes=r,this.name=e.name,this.drawPhase=e.drawPhase||t.WGLDrawPhase.MAP,this._targetFn=e.target,this.effects=e.effects||[],this.has=e.has}return r.prototype.render=function(r){var e=r.context,t=r.profiler,a=this._targetFn(),s=this.drawPhase&r.drawPhase;if(t.recordPassStart(this.name),s&&(!this.has||b(this.has))){this._doRender(r,a),t.recordPassEnd();for(var i=0,n=this.effects;i<n.length;i++){var o=n[i];if(o.enable()){var h=o.apply;t.recordPassStart(this.name+"."+h.name),t.recordBrushStart(h.name);var d=o.args&&o.args(),f=e.getViewport(),u=f.x,c=f.y,p=f.width,l=f.height,m=e.getBoundFramebufferObject();h.bind(r,d),this._doRender(r,a,h.defines),h.draw(r,d),h.unbind(r,d),e.bindFramebuffer(m),e.setViewport(u,c,p,l),t.recordBrushEnd(),t.recordPassEnd()}}}},r.prototype._doRender=function(r,e,t){if(!c.isNone(e))if(u.isArrayLike(e))for(var a=0,s=e;a<s.length;a++){var i=s[a];if(i.isReady&&i.visible)for(var n=0,o=this.brushes;n<o.length;n++){var h=o[n];r.profiler.recordBrushStart(h.name),h.prepareState(r,i,t),h.draw(r,i,t),r.profiler.recordBrushEnd()}}else for(var d=0,f=this.brushes;d<f.length;d++){h=f[d];r.profiler.recordBrushStart(h.name),h.prepareState(r,e,t),h.draw(r,e,t),r.profiler.recordBrushEnd()}},r}();e.default=a});