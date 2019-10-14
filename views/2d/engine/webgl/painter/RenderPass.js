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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/iterator","../../../../../core/has","../../../../../core/maybe","../enums"],function(e,r,u,b,c,a){Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(e,r){this.brushes=e,this.name=r.name,this.drawPhase=r.drawPhase||a.WGLDrawPhase.MAP,this._targetFn=r.target,this.effects=r.effects||[],this.has=r.has}return e.prototype.render=function(e){var r=e.context,a=e.profiler,t=this._targetFn(),s=this.drawPhase&e.drawPhase;if(a.recordPassStart(this.name),s&&(!this.has||b(this.has))){this._doRender(e,t),a.recordPassEnd(this.name);for(var n=0,i=this.effects;n<i.length;n++){var h=i[n];if(h.enable()){var o=h.apply;a.recordPassStart(this.name+"."+o.name),a.recordBrushStart(o.name);var d=h.args&&h.args(),f=r.getViewport(),u=f.x,c=f.y,m=f.width,p=f.height,l=r.getBoundFramebufferObject();o.bind(e,d),this._doRender(e,t,o.defines),o.draw(e,d),o.unbind(e,d),r.bindFramebuffer(l),r.setViewport(u,c,m,p),a.recordBrushEnd(o.name),a.recordPassEnd(this.name+"."+o.name)}}}},e.prototype._doRender=function(e,r,a){if(!c.isNone(r))if(u.isArrayLike(r))for(var t=0,s=r;t<s.length;t++){var n=s[t];if(n.isReady)for(var i=0,h=this.brushes;i<h.length;i++){var o=h[i];e.profiler.recordBrushStart(o.name),o.prepareState(e,n,a),o.draw(e,n,a),e.profiler.recordBrushEnd(o.name)}}else for(var d=0,f=this.brushes;d<f.length;d++){o=f[d];e.profiler.recordBrushStart(o.name),o.prepareState(e,r,a),o.draw(e,r,a),e.profiler.recordBrushEnd(o.name)}},e}();r.default=t});