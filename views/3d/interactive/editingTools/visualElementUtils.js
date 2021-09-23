/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","./lineGraphicVisualElementUtils","./originGraphicVisualElementUtils"],(function(e,t,i,l){"use strict";function n(e){switch(t.unwrap(e.graphic.geometry).type){case"point":case"mesh":return l.createVisualElements(e);case"polygon":case"polyline":return i.createVisualElements(e);default:return null}}e.createVisualElements=n,Object.defineProperty(e,"__esModule",{value:!0})}));
