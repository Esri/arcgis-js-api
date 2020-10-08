// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(a,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.spheroids=e.earthEllipsoidConstants=e.earthSqEccentricity=e.earthEccentricity=e.densificationRatio=e.earthInverseFlattening=e.earthFlattening=e.metersPerDegree=e.halfEarthCircumference=e.halfEarthRadius=e.earthRadius=e.WKT_SPHEROID_REGEX=e.toRadians=void 0,e.toRadians=Math.PI/180,e.WKT_SPHEROID_REGEX=/SPHEROID\[([^\]]+)]/i,e.earthRadius=6378137,e.halfEarthRadius=e.earthRadius/2,e.halfEarthCircumference=Math.PI*e.earthRadius,e.metersPerDegree=e.halfEarthCircumference/180,e.earthFlattening=1/298.257223563,e.earthInverseFlattening=1/(1-e.earthFlattening)-1,e.densificationRatio=.0015696101447650193,e.earthEccentricity=.0818191908426215,e.earthSqEccentricity=.006694379990137799,e.earthEllipsoidConstants={a:e.earthRadius,e2:e.earthSqEccentricity,a1:e.earthRadius*e.earthSqEccentricity,a2:e.earthRadius*e.earthSqEccentricity*e.earthRadius*e.earthSqEccentricity,a3:e.earthRadius*e.earthSqEccentricity*e.earthSqEccentricity/2,a4:e.earthRadius*e.earthSqEccentricity*e.earthRadius*e.earthSqEccentricity*2.5,a5:e.earthRadius*e.earthSqEccentricity+e.earthRadius*e.earthSqEccentricity*e.earthSqEccentricity/2,a6:1-e.earthSqEccentricity},e.spheroids={4326:{a:e.earthRadius,f:e.earthFlattening},104900:{a:2439700,f:0},104901:{a:6051e3,f:0},104902:{a:6051800,f:0},104903:{a:1737400,f:0},104904:{a:3393400,f:.005207166853303471},104905:{a:3396190,f:.005886007555525457},104906:{a:6200,f:0},104907:{a:11100,f:0},104908:{a:71492e3,f:.06487439154031222},104909:{a:8200,f:0},104910:{a:83500,f:0},104911:{a:1e4,f:0},104912:{a:2409300,f:0},104913:{a:15e3,f:0},104914:{a:4e4,f:0},104915:{a:1562090,f:0},104916:{a:2632345,f:0},104917:{a:85e3,f:0},104918:{a:1821460,f:0},104919:{a:5e3,f:0},104920:{a:12e3,f:0},104921:{a:3e4,f:3},104922:{a:18e3,f:0},104923:{a:14e3,f:0},104924:{a:49300,f:0},104925:{a:60268e3,f:.09796243445941462},104926:{a:16e3,f:0},104927:{a:9500,f:0},104928:{a:56e4,f:0},104929:{a:249400,f:0},104930:{a:59500,f:0},104931:{a:16e3,f:0},104932:{a:133e3,f:0},104933:{a:718e3,f:0},104934:{a:888e3,f:0},104935:{a:1986300,f:0},104936:{a:1e4,f:0},104937:{a:41900,f:0},104938:{a:11e4,f:0},104939:{a:50100,f:0},104940:{a:764e3,f:0},104941:{a:11e3,f:0},104942:{a:529800,f:0},104943:{a:2575e3,f:0},104944:{a:25559e3,f:.022927344575296365},104945:{a:578900,f:0},104946:{a:33e3,f:0},104947:{a:21e3,f:0},104948:{a:13e3,f:0},104949:{a:31e3,f:0},104950:{a:27e3,f:0},104951:{a:42e3,f:0},104952:{a:235800,f:0},104953:{a:761400,f:0},104954:{a:15e3,f:0},104955:{a:54e3,f:0},104956:{a:77e3,f:0},104957:{a:27e3,f:0},104958:{a:788900,f:0},104959:{a:584700,f:0},104960:{a:24764e3,f:.01708124697141011},104961:{a:74e3,f:0},104962:{a:79e3,f:0},104963:{a:104e3,f:.14423076923076922},104964:{a:29e3,f:0},104965:{a:17e4,f:0},104966:{a:208e3,f:0},104967:{a:4e4,f:0},104968:{a:1352600,f:0},104969:{a:1195e3,f:0},104970:{a:593e3,f:0},104971:{a:3396190,f:0},104972:{a:47e4,f:0},104973:{a:255e3,f:0},104974:{a:2439400,f:0}}}));