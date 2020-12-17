/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./Collection"],(function(e,r){"use strict";e.castForReferenceSetter=function(e){return e},e.referenceSetter=function(e,t,n=r){return t||(t=new n),t===e||(t.removeAll(),!function(e){return e&&(Array.isArray(e)||"items"in e&&Array.isArray(e.items))}(e)?e&&t.add(e):t.addMany(e)),t},Object.defineProperty(e,"__esModule",{value:!0})}));
