// COPYRIGHT © 2018 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/lang","./WKIDUnitConversion"],function(e,r,i,a){function _(e,r){return!(!e||!r)&&(e===r||(null!=e.wkid||null!=r.wkid?e.wkid===r.wkid||M(e)&&M(r)||null!=r.latestWkid&&e.wkid===r.latestWkid||null!=e.latestWkid&&r.wkid===e.latestWkid:!(!e.wkt||!r.wkt)&&e.wkt.toUpperCase()===r.wkt.toUpperCase()))}function t(e){return d(e)&&e.wkid?o[e.wkid]:null}function l(e){return!!d(e)&&(e.wkid?null==a[e.wkid]:!!e.wkt&&!!/^\s*GEOGCS/i.test(e.wkt))}function n(e){return d(e)&&4326===e.wkid}function M(e){return d(e)&&!0===S[e.wkid]}function E(e){return d(e)&&!0===R[e.wkid]}function d(e){return null!=e&&(null!=e.wkid&&e.wkid>=2e3||null!=e.wkt)}Object.defineProperty(r,"__esModule",{value:!0});var S={102113:!0,102100:!0,3857:!0,3785:!0},R={102113:!0,102100:!0,3857:!0,3785:!0,4326:!0},A='PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]',G=[-20037508.342788905,20037508.342788905],T=[-20037508.342787,20037508.342787],o={102113:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:G,origin:T,dx:1e-5},102100:{wkTemplate:A,valid:G,origin:T,dx:1e-5},3785:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:G,origin:T,dx:1e-5},3857:{wkTemplate:A,valid:G,origin:T,dx:1e-5},4326:{wkTemplate:'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",{Central_Meridian}],UNIT["Degree",0.0174532925199433]]',altTemplate:'PROJCS["WGS_1984_Plate_Carree",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Plate_Carree"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],UNIT["Degrees",111319.491]]',valid:[-180,180],origin:[-180,180],dx:1e-5}};r.equals=_,r.getInfo=t,r.isGeographic=l,r.isWGS84=n,r.isWebMercator=M,r.isWrappable=E,r.isValid=d,r.WGS84={wkid:4326,wkt:i.substitute({Central_Meridian:"0.0"},t({wkid:4326}).wkTemplate)},r.WebMercator={wkid:102100,latestWkid:3857}});