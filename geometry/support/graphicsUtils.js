/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../core/Collection.js";import{unwrap as t}from"../../core/maybe.js";import n from"../Extent.js";function o(o){if(!o||!o.length)return null;let l=t(e.isCollection(o)?o.getItemAt(0).geometry:o[0].geometry),r=l.extent&&l.extent.clone(),i=l;null===r&&(r=new n(i.x,i.y,i.x,i.y,l.spatialReference));for(let m=1;m<o.length;m++){l=t(e.isCollection(o)?o.getItemAt(m).geometry:o[m].geometry),i=l;let c=l.extent;null===c&&(c=new n(i.x,i.y,i.x,i.y,l.spatialReference)),r=r.union(c)}return r.width<0&&r.height<0?null:r}export{o as graphicsExtent};
