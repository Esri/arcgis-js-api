/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{convertUnit as e,lengthToDegrees as s}from"../../core/unitUtils.js";import{earth as t}from"../../geometry/support/Ellipsoid.js";const m={inches:e(1,"meters","inches"),feet:e(1,"meters","feet"),"us-feet":e(1,"meters","us-feet"),yards:e(1,"meters","yards"),miles:e(1,"meters","miles"),"nautical-miles":e(1,"meters","nautical-miles"),millimeters:e(1,"meters","millimeters"),centimeters:e(1,"meters","centimeters"),decimeters:e(1,"meters","decimeters"),meters:e(1,"meters","meters"),kilometers:e(1,"meters","kilometers"),"decimal-degrees":1/s(1,"meters",t.radius)};export{m as meterIn};
