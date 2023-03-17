/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","./ContentObjectType","./Geometry"],(function(e,t,n,r){"use strict";let o=function(e){function r(t,r,o,i,l,c,u,p){var s;return(s=e.call(this,t,r,o,null,n.ContentObjectType.Mesh,p)||this).path=i,s.geometrySR=l,s.upVectorAlignment=c,s.stencilWidth=u,s}return t._inheritsLoose(r,e),r}(r.Geometry);var i;function l(e){return"upVectorAlignment"in e}e.UpVectorAlignment=void 0,(i=e.UpVectorAlignment||(e.UpVectorAlignment={}))[i.World=0]="World",i[i.Path=1]="Path",e.PathGeometry=o,e.isPathGeometry=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
