/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/maybe","../shaderTechnique/BindType"],(function(e,i,t){"use strict";let n=function(){function e(e,n,r,s,a=null){this.name=e,this.type=n,this.arraySize=a,this.bind={[t.BindType.Pass]:null,[t.BindType.Draw]:null},i.isSome(r)&&i.isSome(s)&&(this.bind[r]=s)}return e.prototype.equals=function(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize},e}();e.Uniform=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
