/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isMars as r,isMoon as o}from"../../../../../../geometry/support/spatialReferenceUtils.js";var t;function a(a){return a&&r(a)?t.Mars:a&&o(a)?t.Moon:t.Earth}!function(r){r[r.Earth=1]="Earth",r[r.Mars=2]="Mars",r[r.Moon=3]="Moon",r[r.COUNT=4]="COUNT"}(t||(t={}));export{t as EllipsoidMode,a as getEllipsoidMode};
