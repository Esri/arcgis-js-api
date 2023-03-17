/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./ellipsoidUtils","./SpatialReference","./support/spatialReferenceUtils"],(function(e,i,a,r){"use strict";const l=new a(i.SphericalECEFSpatialReferenceLike),n=new a(i.SphericalPCPFMarsLike),t=new a(i.SphericalPCPFMoonLike),c=new a(i.WGS84ECEFSpatialReferenceLike);function p(e){return e&&(r.isMars(e)||r.equals(e,n))?n:e&&(r.isMoon(e)||r.equals(e,t))?t:l}e.SphericalECEFSpatialReference=l,e.SphericalPCPFMars=n,e.SphericalPCPFMoon=t,e.WGS84ECEFSpatialReference=c,e.getSphericalPCPF=p,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
