/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let t=function(){function e(e,t=[]){this.eventType=e,this.keyModifiers=t}return e.prototype.matches=function(e){if(e.type!==this.eventType)return!1;if(0===this.keyModifiers.length)return!0;const t=e.modifiers;for(const i of this.keyModifiers)if(!t.has(i))return!1;return!0},e}();e.EventMatch=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
