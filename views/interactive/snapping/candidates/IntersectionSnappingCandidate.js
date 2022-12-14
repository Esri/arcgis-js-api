/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../SnappingConstraint","../SnappingDomain","./SnappingCandidate","../hints/IntersectionSnappingHint"],(function(n,t,i,e,s,a){"use strict";let o=function(n){function s(t,s,a,o,r){var p;return(p=n.call(this,t,s,new i.IntersectionConstraint(t,s,a.constraint,o.constraint),r,e.SnappingDomain.ALL)||this).first=a,p.second=o,p}return t._inheritsLoose(s,n),t._createClass(s,[{key:"hints",get:function(){return this.first.targetPoint=this.targetPoint,this.second.targetPoint=this.targetPoint,[...this.first.hints,...this.second.hints,new a.IntersectionSnappingHint(this.targetPoint,this.elevationInfo,this.domain)]}}]),s}(s.SnappingCandidate);n.IntersectionSnappingCandidate=o,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
