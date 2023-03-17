/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const n=new Set;function t(e){n.add(e),e.finally((()=>n.delete(e)))}function i(){return n.size>0}e.hasPendingLoading=i,e.registerLoading=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
