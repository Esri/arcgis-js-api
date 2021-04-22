/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../../core/string","./WKIDUnitConversion"],(function(e,r,i,a){"use strict";const n={102113:!0,102100:!0,3857:!0,3785:!0},t={102113:!0,102100:!0,3857:!0,3785:!0,4326:!0},_='PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]',l=[-20037508.342788905,20037508.342788905],M=[-20037508.342787,20037508.342787],d={102113:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:l,origin:M,dx:1e-5},102100:{wkTemplate:_,valid:l,origin:M,dx:1e-5},3785:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:l,origin:M,dx:1e-5},3857:{wkTemplate:_,valid:l,origin:M,dx:1e-5},4326:{wkTemplate:'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",{Central_Meridian}],UNIT["Degree",0.0174532925199433]]',altTemplate:'PROJCS["WGS_1984_Plate_Carree",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Plate_Carree"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],UNIT["Degrees",111319.491]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104971:{wkTemplate:'GEOGCS["Mars_2000_(Sphere)",DATUM["Mars_2000_(Sphere)",SPHEROID["Mars_2000_(Sphere)",3396190.0,0.0]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104905:{wkTemplate:'GEOGCS["GCS_Mars_2000",DATUM["D_Mars_2000",SPHEROID["Mars_2000_IAU_IAG",3396190.0,169.8944472236118]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5}};function E(e,i){return!r.isNone(e)&&!r.isNone(i)&&(e===i||(null!=e.wkid||null!=i.wkid?e.wkid===i.wkid||G(e)&&G(i)||null!=i.latestWkid&&e.wkid===i.latestWkid||null!=e.latestWkid&&i.wkid===e.latestWkid:!(!e.wkt||!i.wkt)&&e.wkt.toUpperCase()===i.wkt.toUpperCase()))}function S(e){return C(e)&&e.wkid?d[e.wkid]:null}function o(e){return!!C(e)&&(e.wkid?null==a[e.wkid]:!!e.wkt&&!!/^\s*GEOGCS/i.test(e.wkt))}function R(e){return!(T(e)||w(e))}function s(e){return C(e)&&4326===e.wkid}function u(e){return C(e)&&4490===e.wkid}function G(e){return C(e)&&null!=e.wkid&&!0===n[e.wkid]}function A(e){return 104971===e||104905===e}function T(e){return C(e)&&null!=e.wkid&&A(e.wkid)}function k(e){return 104903===e}function w(e){return C(e)&&null!=e.wkid&&k(e.wkid)}function P(e){return C(e)&&null!=e.wkid&&!0===t[e.wkid]}function C(e){return r.isSome(e)&&(null!=e.wkid&&e.wkid>=2e3||null!=e.wkt)}const c={wkid:4326,wkt:i.replace(d[4326].wkTemplate,{Central_Meridian:"0.0"})},I={wkid:102100,latestWkid:3857};e.WGS84=c,e.WebMercator=I,e.equals=E,e.getInfo=S,e.isCGCS2000=u,e.isEarth=R,e.isGeographic=o,e.isMars=T,e.isMoon=w,e.isValid=C,e.isWGS84=s,e.isWKIDFromMars=A,e.isWKIDFromMoon=k,e.isWebMercator=G,e.isWrappable=P,Object.defineProperty(e,"__esModule",{value:!0})}));
