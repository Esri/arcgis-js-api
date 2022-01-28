/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../../../chunks/vec3","../../../../../chunks/vec3f64","./viewUtils"],(function(t,i,e){"use strict";return function(){function n(){this.origin=i.create(),this.start=i.create(),this.end=i.create()}return n.prototype.update=function(i,n,s){if(t.copy(this.start,i),t.copy(this.end,n),s)switch(s){case"start":t.copy(this.origin,this.start);break;case"center":e.midpoint([i,n],this.origin);break;case"end":t.copy(this.origin,this.end);break;default:t.copy(this.origin,s)}else e.midpoint([i,n],this.origin)},n}()}));
