/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../SnappingConstraint","../snappingUtils","./FeatureSnappingCandidate","../hints/LineSnappingHint"],(function(n,e,t,i,a,r){"use strict";let s=function(n){function a(e){return n.call(this,{...e,constraint:new t.LineConstraint(e.coordinateHelper,e.edgeStart,e.edgeEnd)})||this}return e._inheritsLoose(a,n),e._createClass(a,[{key:"hints",get:function(){return[new r.LineSnappingHint(i.LineSegmentHintType.REFERENCE,this.constraint.start,this.constraint.end)]}}]),a}(a.FeatureSnappingCandidate);n.EdgeSnappingCandidate=s,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
