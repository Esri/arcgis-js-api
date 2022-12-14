/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";let e=function({values:t,width:e,height:i,noDataValue:a},h){this.pixelData=t,this.width=e,this.height=i,this.safeWidth=.99999999*(e-1),this.noDataValue=a,this.dx=(e-1)/(h[2]-h[0]),this.dy=(e-1)/(h[3]-h[1]),this.x0=h[0],this.y1=h[3]};t.ElevationSamplerData=e,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
