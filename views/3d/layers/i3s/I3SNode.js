/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec4f64"],(function(e,i,t){"use strict";let s=function(e,i){this.id=e,this.mbs=i,this.renderMbs=t.fromArray([0,0,0,-1]),this.imModificationImpact=4},o=function(e){function t(i,t,s,o,r,n,a,c,u,l){var h;return(h=e.call(this,i,s)||this).index=t,h.childCount=o,h.level=r,h.resources=n,h.version=a,h.lodMetric=c,h.maxError=u,h.numFeatures=l,h.failed=!1,h.hasModifications=!1,h.cacheState=0,h.vertexCount=0,h.memory=0,h}return i._inheritsLoose(t,e),t}(s);e.Node=o,e.NodeBase=s,e.NodeTraversalState=function(e,i,t,s){this.nodeHasLOD=e,this.isChosen=i,this.lodLevel=t,this.version=s},Object.defineProperty(e,"__esModule",{value:!0})}));
