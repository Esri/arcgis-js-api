/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const e="ProfileGenerationError";var o;!function(e){e.TooComplex="too-complex",e.InvalidGeometry="invalid-geometry",e.InvalidElevationInfo="invalid-elevation-info",e.ElevationQueryError="elevation-query-error"}(o||(o={}));class r extends Error{constructor(o){super("profile could not be generated"),this.cause=o,this.type=e}}function n(o){return o.type===e}export{r as ProfileGenerationError,o as ProfileGenerationErrorCause,n as isProfileGenerationError};
