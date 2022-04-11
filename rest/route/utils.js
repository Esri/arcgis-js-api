/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe"],(function(e,n){"use strict";function t(e,t){if(n.isNone(e))return null;const o={},r=new RegExp(`^${t}`,"i");for(const n in e)e.hasOwnProperty(n)&&r.test(n)&&(o[n.substring(t.length)]=e[n]);return o}function o(e,t){return n.isNone(e)||n.isNone(t)?null:Math.round((e-t)/6e4)}e.getPrefixedProperties=t,e.getTimezoneOffset=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
