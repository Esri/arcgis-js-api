/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/unitUtils","../../geometry/support/Ellipsoid"],(function(e,t,r){"use strict";const s={inches:t.convertUnit(1,"meters","inches"),feet:t.convertUnit(1,"meters","feet"),"us-feet":t.convertUnit(1,"meters","us-feet"),yards:t.convertUnit(1,"meters","yards"),miles:t.convertUnit(1,"meters","miles"),"nautical-miles":t.convertUnit(1,"meters","nautical-miles"),millimeters:t.convertUnit(1,"meters","millimeters"),centimeters:t.convertUnit(1,"meters","centimeters"),decimeters:t.convertUnit(1,"meters","decimeters"),meters:t.convertUnit(1,"meters","meters"),kilometers:t.convertUnit(1,"meters","kilometers"),"decimal-degrees":1/t.lengthToDegrees(1,"meters",r.earth.radius)};e.meterIn=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
