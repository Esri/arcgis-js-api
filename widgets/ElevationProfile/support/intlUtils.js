/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe"],(function(e,t){"use strict";function r(e,{profiles:r}){const n=e.title;if(t.isSome(n))return n;switch(e.type){case"ground":return r.ground;case"input":return r.input;case"query":return r.query;case"view":return r.view;default:return""}}e.getTranslatedLineTitle=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
