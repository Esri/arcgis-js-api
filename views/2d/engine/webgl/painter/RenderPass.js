// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/iterator","../../../../../core/has","../../../../../core/maybe","../enums"],(function(r,e,t,a,s,i){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function r(r,e){this.brushes=r,this.name=e.name,this.drawPhase=e.drawPhase||i.WGLDrawPhase.MAP,this._targetFn=e.target,this.effects=e.effects||[],this.has=e.has}return r.prototype.render=function(r){var e=r.context,t=r.profiler,s=this._targetFn(),i=this.drawPhase&r.drawPhase;if(t.recordPassStart(this.name),i&&(!this.has||a(this.has))){this._doRender(r,s),t.recordPassEnd();for(var n=0,o=this.effects;n<o.length;n++){var h=o[n];if(h.enable()){var d=h.apply;t.recordPassStart(this.name+"."+d.name),t.recordBrushStart(d.name);var f=h.args&&h.args(),u=e.getViewport(),c=u.x,p=u.y,l=u.width,m=u.height,b=e.getBoundFramebufferObject();d.bind(r,f),this._doRender(r,s,d.defines),d.draw(r,f),d.unbind(r,f),e.bindFramebuffer(b),e.setViewport(c,p,l,m),t.recordBrushEnd(),t.recordPassEnd()}}}},r.prototype._doRender=function(r,e,a){if(!s.isNone(e))if(t.isArrayLike(e))for(var i=0,n=e;i<n.length;i++){var o=n[i];if(o.isReady&&o.visible)for(var h=0,d=this.brushes;h<d.length;h++){var f=d[h];r.profiler.recordBrushStart(f.name),f.prepareState(r,o,a),f.draw(r,o,a),r.profiler.recordBrushEnd()}}else for(var u=0,c=this.brushes;u<c.length;u++){f=c[u];r.profiler.recordBrushStart(f.name),f.prepareState(r,e,a),f.draw(r,e,a),r.profiler.recordBrushEnd()}},r}();e.default=n}));