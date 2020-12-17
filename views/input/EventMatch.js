/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let t=function(){function e(e,t=[]){this.eventType=e,this.keyModifiers=t}return e.prototype.matches=function(e){if(e.type!==this.eventType)return!1;if(0===this.keyModifiers.length)return!0;const t=e.modifiers;for(const e of this.keyModifiers)if(!t.has(e))return!1;return!0},e}();e.EventMatch=t,Object.defineProperty(e,"__esModule",{value:!0})}));
