/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../geometry/support/Ellipsoid","../../core/unitUtils"],(function(e,t,r){"use strict";const s={inches:r.convertUnit(1,"meters","inches"),feet:r.convertUnit(1,"meters","feet"),"us-feet":r.convertUnit(1,"meters","us-feet"),yards:r.convertUnit(1,"meters","yards"),miles:r.convertUnit(1,"meters","miles"),"nautical-miles":r.convertUnit(1,"meters","nautical-miles"),millimeters:r.convertUnit(1,"meters","millimeters"),centimeters:r.convertUnit(1,"meters","centimeters"),decimeters:r.convertUnit(1,"meters","decimeters"),meters:r.convertUnit(1,"meters","meters"),kilometers:r.convertUnit(1,"meters","kilometers"),"decimal-degrees":1/r.lengthToDegrees(1,"meters",t.earth.radius)};e.meterIn=s,Object.defineProperty(e,"__esModule",{value:!0})}));
