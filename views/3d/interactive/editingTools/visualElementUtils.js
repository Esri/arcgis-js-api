/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","./lineGraphicVisualElementUtils","./pointGraphicVisualElementUtils"],(function(e,t,l,n){"use strict";e.createVisualElements=function(e){switch(t.unwrap(e.graphic.geometry).type){case"point":return n.createVisualElements(e);case"polygon":case"polyline":return l.createVisualElements(e);default:return null}},Object.defineProperty(e,"__esModule",{value:!0})}));
