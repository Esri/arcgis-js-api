/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/handleUtils","../../../../core/maybe","../../webgl-engine/lib/Object3DStateID"],(function(e,t,i,n,o){"use strict";let h=function(){function e(e){this.context=e,this.highlights=new Set}var n=e.prototype;return n.destroy=function(){this.highlights=null},n.add=function(e){const t=new s(e);return this.highlights.add(t),this.enableSet(t),i.makeHandle((()=>this.removeSet(t)))},n.removeSet=function(e){this.disableSet(e),this.highlights.delete(e)},n.enableSet=function(e){e.enabled||(e.enabled=!0,this.context.forEachNode((t=>this.enableSetForNode(e,t))))},n.enableSetForNode=function(e,t){if(!e.enabled)return;const i=e.ids.get(t.id);i&&i.forEach((i=>this.context.addHighlight(t,i,e.id)))},n.disableSet=function(e){e.enabled&&(e.enabled=!1,this.context.forEachNode((t=>this.disableSetForNode(e,t))))},n.disableSetForNode=function(e,t){e.enabled||this.context.removeHighlight(t,e.id)},n.nodeAdded=function(e){this.highlights.forEach((t=>this.enableSetForNode(t,e)))},n.nodeRemoved=function(e){this.highlights.forEach((t=>this.disableSetForNode(t,e)))},n.removeAll=function(){this.highlights.forEach((e=>this.disableSet(e)))},t._createClass(e,[{key:"hasHighlights",get:function(){return this.highlights.size>0}}]),e}(),s=function(){function e(e){this.id=new o.Object3DStateID(0),this.ids=new Map,this.enabled=!1;for(const t of e)n.isSome(t)&&this.add(t.nodeId,t.pointId)}return e.prototype.add=function(e,t){const i=this.ids.get(e);i?i.add(t):this.ids.set(e,new Set([t]))},e}();e.PointHighlights=h,Object.defineProperty(e,"__esModule",{value:!0})}));
