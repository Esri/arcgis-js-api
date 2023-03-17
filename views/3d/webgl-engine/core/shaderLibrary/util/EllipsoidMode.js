/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../geometry/support/spatialReferenceUtils"],(function(o,e){"use strict";var i;function l(i){return i&&e.isMars(i)?o.EllipsoidMode.Mars:i&&e.isMoon(i)?o.EllipsoidMode.Moon:o.EllipsoidMode.Earth}o.EllipsoidMode=void 0,(i=o.EllipsoidMode||(o.EllipsoidMode={}))[i.Earth=1]="Earth",i[i.Mars=2]="Mars",i[i.Moon=3]="Moon",i[i.COUNT=4]="COUNT",o.getEllipsoidMode=l,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));
