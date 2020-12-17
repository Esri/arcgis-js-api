/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../../chunks/vec3f64","../../../../../chunks/vec3","./viewUtils"],(function(t,i,e){"use strict";return function(){function n(){this.origin=t.create(),this.start=t.create(),this.end=t.create()}return n.prototype.update=function(t,n,s){if(i.copy(this.start,t),i.copy(this.end,n),s)switch(s){case"start":i.copy(this.origin,this.start);break;case"center":e.midpoint([t,n],this.origin);break;case"end":i.copy(this.origin,this.end);break;default:i.copy(this.origin,s)}else e.midpoint([t,n],this.origin)},n}()}));
