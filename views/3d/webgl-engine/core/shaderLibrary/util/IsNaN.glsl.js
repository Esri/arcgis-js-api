/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,o){"use strict";e.IsNaN=function(e){const a=o.glsl`
    bool isNaN( float val )
    {
      return ( val < 0.0 || 0.0 < val || val == 0.0 ) ? false : true;
      // important: some nVidias failed to cope with version below.
      // Probably wrong optimization.
      /*return ( val <= 0.0 || 0.0 <= val ) ? false : true;*/
    }
  `;e.code.add(a)},Object.defineProperty(e,"__esModule",{value:!0})}));
