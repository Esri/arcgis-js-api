/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import o from"../../core/Collection.js";import e from"./ElevationProfileLine.js";import i from"./ElevationProfileLineGround.js";import r from"./ElevationProfileLineInput.js";import t from"./ElevationProfileLineQuery.js";import n from"./ElevationProfileLineView.js";const l={base:e,key:"type",typeMap:{ground:i,input:r,query:t,view:n},errorContext:"elevation-profile-line"},p=o.ofType(l);export{p as ElevationProfileLineCollection,l as elevationProfileLineTypes};
