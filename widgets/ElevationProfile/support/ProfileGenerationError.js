/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers"],(function(e,r){"use strict";const o="ProfileGenerationError";var n;e.ProfileGenerationErrorCause=void 0,(n=e.ProfileGenerationErrorCause||(e.ProfileGenerationErrorCause={})).TooComplex="too-complex",n.InvalidGeometry="invalid-geometry",n.InvalidElevationInfo="invalid-elevation-info",n.ElevationQueryError="elevation-query-error";let i=function(e){function n(r){var n;return(n=e.call(this,"profile could not be generated")||this).cause=r,n.type=o,n}return r._inheritsLoose(n,e),n}(r._wrapNativeSuper(Error));function t(e){return e.type===o}e.ProfileGenerationError=i,e.isProfileGenerationError=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
