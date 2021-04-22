/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../core/Logger","../../../../core/Error","./enums","./Utils"],(function(e,s,i,l,r){"use strict";const a=s.getLogger("esri.views.2d.engine.webgl");function n(e){return r.isNumber(e.minDataValue)&&r.isNumber(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?l.WGLVVFlag.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?l.WGLVVFlag.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?l.WGLVVFlag.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?l.WGLVVFlag.SIZE_UNIT_VALUE:(a.error(new i("mapview-bad-type","Found invalid size VisualVariable",e)),l.WGLVVFlag.NONE)}e.getTypeOfSizeVisualVariable=n,Object.defineProperty(e,"__esModule",{value:!0})}));
