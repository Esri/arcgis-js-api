/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let i=function(){function e(e,i){this.lockedSchemaPixelSize=e,this.isGCS=i}var i=e.prototype;return i.getLevelRowColumn=function(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e},i.adjustLevel=function(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e},i.getShift=function(e,i){let t=0,l=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(t=i),e[1]%2&&(l=i)),[t,l]},i.getScale=function(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2},e}();e.SchemaHelper=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
