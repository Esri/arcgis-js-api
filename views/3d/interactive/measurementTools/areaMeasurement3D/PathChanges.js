/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../support/setUtils"],(function(e){"use strict";return function(){function n(){this.change="none",this.updatedVertices=new Set}var t=n.prototype;return t.fullChange=function(){this.change="full"},t.incrementalChange=function(e){"none"===this.change&&(this.change="incremental"),this.updatedVertices.add(e)},t.clear=function(){this.change="none",this.updatedVertices.clear()},t.assign=function(n){this.change=n.change,this.updatedVertices=e.clone(n.updatedVertices)},t.merge=function(e){switch(this.change){case"none":this.assign(e);break;case"full":break;case"incremental":"incremental"===e.change?e.updatedVertices.forEach((e=>{this.updatedVertices.add(e)})):"full"===e.change&&(this.change="full")}},n}()}));
