/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,a){"use strict";function l(e){const l=a.glsl`bool isNaN( float val )
{
return ( val < 0.0 || 0.0 < val || val == 0.0 ) ? false : true;
}`;e.code.add(l)}e.IsNaN=l,Object.defineProperty(e,"__esModule",{value:!0})}));
