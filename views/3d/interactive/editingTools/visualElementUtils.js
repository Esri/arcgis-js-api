/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","./lineGraphicVisualElementUtils","./originGraphicVisualElementUtils"],(function(e,t,l,i){"use strict";function n(e){switch(t.unwrap(e.graphic.geometry).type){case"point":case"mesh":return i.createVisualElements(e);case"polygon":case"polyline":return l.createVisualElements(e);default:return null}}e.createVisualElements=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
