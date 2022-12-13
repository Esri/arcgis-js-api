/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../core/Error"],(function(e,i){"use strict";function r(e,r){if(!e.view)throw new i(`${r}:missing-parameters`,"'view' parameter is required for binning");if(e.sqlExpression)throw new i(`${r}:invalid-parameters`,"'sqlExpression' parameter is not supported for binning");if("3d"===e.view.type)throw new i(`${r}:invalid-parameters`,"3d view is not supported for binning")}e.verifyBinningParams=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
