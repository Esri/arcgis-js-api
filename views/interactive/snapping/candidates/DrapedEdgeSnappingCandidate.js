/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../SnappingConstraint","../snappingUtils","./FeatureSnappingCandidate","../hints/LineSnappingHint"],(function(n,t,e,i,a,r){"use strict";let s=function(n){function a(t){return n.call(this,{...t,isDraped:!0,constraint:new e.DrapedLineConstraint(t.edgeStart,t.edgeEnd,t.getGroundElevation)})||this}return t._inheritsLoose(a,n),t._createClass(a,[{key:"hints",get:function(){return[new r.LineSnappingHint(i.LineSegmentHintType.REFERENCE,this.constraint.start,this.constraint.end,this.isDraped,this.domain)]}}]),a}(a.FeatureSnappingCandidate);n.DrapedEdgeSnappingCandidate=s,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
