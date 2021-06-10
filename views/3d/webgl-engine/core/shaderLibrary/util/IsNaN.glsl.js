/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,o){"use strict";function a(e){const a=o.glsl`
    bool isNaN( float val )
    {
      return ( val < 0.0 || 0.0 < val || val == 0.0 ) ? false : true;
      // important: some nVidias failed to cope with version below.
      // Probably wrong optimization.
      /*return ( val <= 0.0 || 0.0 <= val ) ? false : true;*/
    }
  `;e.code.add(a)}e.IsNaN=a,Object.defineProperty(e,"__esModule",{value:!0})}));
