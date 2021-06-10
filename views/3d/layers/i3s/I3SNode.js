/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec4f64"],(function(e,t,i){"use strict";let s=function(e,t){this.id=e,this.mbs=t,this.renderMbs=i.fromArray([0,0,0,-1]),this.imModificationImpact=4,this.filterImpact=2},r=function(e){function i(t,i,s,r,o,n,a,c,l,u){var h;return(h=e.call(this,t,s)||this).index=i,h.childCount=r,h.level=o,h.resources=n,h.version=a,h.lodMetric=c,h.maxError=l,h.numFeatures=u,h.failed=!1,h.hasModifications=!1,h.cacheState=0,h.vertexCount=0,h.memory=0,h}return t._inheritsLoose(i,e),i}(s),o=function(e,t,i,s){this.nodeHasLOD=e,this.isChosen=t,this.lodLevel=i,this.version=s};e.Node=r,e.NodeBase=s,e.NodeTraversalState=o,Object.defineProperty(e,"__esModule",{value:!0})}));
