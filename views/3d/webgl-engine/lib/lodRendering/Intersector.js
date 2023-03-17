/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../IntersectorInterfaces","../IntersectorTarget","../intersectorUtils"],(function(e,t,r,n,i){"use strict";let o=function(e){function r(t,r,n,i,o,s){var c;return(c=e.call(this,t,r)||this).layerUid=t,c.graphicUid=r,c.geometryId=n,c.triangleNr=i,c.baseBoundingSphere=o,c.numLodLevels=s,c}return t._inheritsLoose(r,e),r}(n.Graphic3DTarget);function s(e){return i.isValidIntersectorResult(e)&&e.intersector===r.IntersectorType.LOD&&!!e.target}e.LodTarget=o,e.isLodIntersectorResult=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
