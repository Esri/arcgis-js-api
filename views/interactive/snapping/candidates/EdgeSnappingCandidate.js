/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../SnappingConstraint","../snappingUtils","./FeatureSnappingCandidate","../hints/LineSnappingHint"],(function(n,t,e,i,a,s){"use strict";let r=function(n){function a(t){return n.call(this,{...t,constraint:new e.LineConstraint(t.edgeStart,t.edgeEnd)})||this}return t._inheritsLoose(a,n),t._createClass(a,[{key:"hints",get:function(){return[new s.LineSnappingHint(i.LineSegmentHintType.REFERENCE,this.constraint.start,this.constraint.end,this.isDraped,this.domain)]}}]),a}(a.FeatureSnappingCandidate);n.EdgeSnappingCandidate=r,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
