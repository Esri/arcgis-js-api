/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../SnappingConstraint","./FeatureSnappingCandidate","../hints/PointSnappingHint"],(function(n,t,e,i,a){"use strict";let r=function(n){function i(t){return n.call(this,{...t,constraint:new e.PointConstraint(t.coordinateHelper,t.targetPoint)})||this}return t._inheritsLoose(i,n),t._createClass(i,[{key:"hints",get:function(){return[new a.PointSnappingHint(this.targetPoint)]}}]),i}(i.FeatureSnappingCandidate);n.VertexSnappingCandidate=r,Object.defineProperty(n,"__esModule",{value:!0})}));
