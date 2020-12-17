/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../Extent","../../core/Collection"],(function(e,t,n,l){"use strict";e.graphicsExtent=function(e){if(!e||!e.length)return null;let o=t.unwrap(l.isCollection(e)?e.getItemAt(0).geometry:e[0].geometry),r=o.extent&&o.extent.clone(),i=o;null===r&&(r=new n(i.x,i.y,i.x,i.y,o.spatialReference));for(let u=1;u<e.length;u++){o=t.unwrap(l.isCollection(e)?e.getItemAt(u).geometry:e[u].geometry),i=o;let c=o.extent;null===c&&(c=new n(i.x,i.y,i.x,i.y,o.spatialReference)),r=r.union(c)}return r.width<0&&r.height<0?null:r},Object.defineProperty(e,"__esModule",{value:!0})}));
