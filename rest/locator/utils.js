/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(n){return n&&"number"==typeof n.x&&"number"==typeof n.y}function e(n){return n&&"number"==typeof n.xmin&&"number"==typeof n.ymin&&"number"==typeof n.xmax&&"number"==typeof n.ymax}function r(n){return n?n.clone().normalize():null}function t(n){return n?n.shiftCentralMeridian():null}export{e as isValidExtent,n as isValidLocation,t as normalizeExtent,r as normalizePoint};
