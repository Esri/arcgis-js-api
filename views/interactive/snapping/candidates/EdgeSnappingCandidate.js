/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../SnappingConstraint","./FeatureSnappingCandidate","../hints/LineSnappingHint"],(function(n,e,t,i,a){"use strict";let r=function(n){function i(e){return n.call(this,{...e,constraint:new t.LineConstraint(e.coordinateHelper,e.edgeStart,e.edgeEnd)})||this}return e._inheritsLoose(i,n),e._createClass(i,[{key:"hints",get:function(){return[new a.LineSnappingHint(1,this.constraint.start,this.constraint.end)]}}]),i}(i.FeatureSnappingCandidate);n.EdgeSnappingCandidate=r,Object.defineProperty(n,"__esModule",{value:!0})}));
