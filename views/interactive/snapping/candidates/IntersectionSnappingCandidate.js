/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../SnappingConstraint","../SnappingDomain","./SnappingCandidate","../hints/IntersectionSnappingHint"],(function(t,n,i,e,s,a){"use strict";let r=function(t){function s(n,s,a,r){var o;return(o=t.call(this,n,new i.IntersectionConstraint(n,s.constraint,a.constraint),r,e.SnappingDomain.ALL)||this).first=s,o.second=a,o}return n._inheritsLoose(s,t),n._createClass(s,[{key:"hints",get:function(){return this.first.targetPoint=this.targetPoint,this.second.targetPoint=this.targetPoint,[...this.first.hints,...this.second.hints,new a.IntersectionSnappingHint(this.targetPoint,this.isDraped,this.domain)]}}]),s}(s.SnappingCandidate);t.IntersectionSnappingCandidate=r,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
