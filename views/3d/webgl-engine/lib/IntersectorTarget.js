/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../chunks/vec3f64"],(function(t,e,r,i){"use strict";let n=function(t,e,r){this.object=t,this.geometryId=e,this.triangleNr=r},o=function(t){function n(e,n,o,u){var c;return(c=t.call(this,e,n,o)||this).center=r.isSome(u)?i.clone(u):null,c}return e._inheritsLoose(n,t),n}(n),u=function(t){function r(){return t.apply(this,arguments)||this}return e._inheritsLoose(r,t),r}(o),c=function(t){this.layerUid=t},s=function(t){function r(e,r){var i;return(i=t.call(this,e)||this).graphicUid=r,i}return e._inheritsLoose(r,t),r}(c);t.Graphic3DTarget=s,t.HudTarget=o,t.LayerTarget=c,t.ObjectTarget=n,t.ValidHudTarget=u,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
