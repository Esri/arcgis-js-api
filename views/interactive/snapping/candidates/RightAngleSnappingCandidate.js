/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../hints/LineSnappingHint","../hints/RightAngleSnappingHint","./SnappingCandidate"],(function(e,n,t,i,r){"use strict";let a=function(e){function r({coordinateHelper:n,targetPoint:i,constraint:r,previousVertex:a,centerVertex:s}){var p;return(p=e.call(this,n,i,r)||this).previousVertex=a,p.centerVertex=s,p.referenceLine=new t.LineSnappingHint(1,a,r.start),p}return n._inheritsLoose(r,e),n._createClass(r,[{key:"hints",get:function(){return[new t.LineSnappingHint(0,this.constraint.start,this.targetPoint),this.referenceLine,new i.RightAngleSnappingHint(this.previousVertex,this.centerVertex,this.targetPoint)]}}]),r}(r.SnappingCandidate);e.RightAngleSnappingCandidate=a,Object.defineProperty(e,"__esModule",{value:!0})}));
