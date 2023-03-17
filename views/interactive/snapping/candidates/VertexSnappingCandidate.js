/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../SnappingConstraint","./FeatureSnappingCandidate","../hints/PointSnappingHint"],(function(n,t,i,e,a){"use strict";let r=function(n){function e(t){return n.call(this,{...t,constraint:new i.PointConstraint(t.targetPoint)})||this}return t._inheritsLoose(e,n),t._createClass(e,[{key:"hints",get:function(){return[new a.PointSnappingHint(this.targetPoint,this.isDraped,this.domain)]}}]),e}(e.FeatureSnappingCandidate);n.VertexSnappingCandidate=r,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
