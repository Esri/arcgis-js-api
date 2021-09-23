/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../SnappingConstraint","./SnappingCandidate","../hints/IntersectionSnappingHint"],(function(t,n,i,e,s){"use strict";let r=function(t){function e(n,e,s,r){var a;return(a=t.call(this,n,e,new i.IntersectionConstraint(n,e,s.constraint,r.constraint))||this).first=s,a.second=r,a}return n._inheritsLoose(e,t),n._createClass(e,[{key:"hints",get:function(){return this.first.targetPoint=this.targetPoint,this.second.targetPoint=this.targetPoint,[...this.first.hints,...this.second.hints,new s.IntersectionSnappingHint(this.targetPoint)]}}]),e}(e.SnappingCandidate);t.IntersectionSnappingCandidate=r,Object.defineProperty(t,"__esModule",{value:!0})}));
