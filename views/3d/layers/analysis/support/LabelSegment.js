/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/vec3","../../../../../chunks/vec3f64","./viewUtils"],(function(t,e,i,s){"use strict";let n=function(){function t(){this.origin=i.create(),this.start=i.create(),this.end=i.create()}return t.prototype.update=function(t,i,n){if(e.copy(this.start,t),e.copy(this.end,i),n)switch(n){case"start":e.copy(this.origin,this.start);break;case"center":s.midpoint([t,i],this.origin);break;case"end":e.copy(this.origin,this.end);break;default:e.copy(this.origin,n)}else s.midpoint([t,i],this.origin)},t}();t.LabelSegment=n,Object.defineProperty(t,"__esModule",{value:!0})}));
