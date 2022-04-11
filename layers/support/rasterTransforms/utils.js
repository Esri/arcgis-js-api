/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./GCSShiftTransform","./IdentityTransform","./PolynomialTransform"],(function(n,e,o,r){"use strict";const t={GCSShiftXform:e,IdentityXform:o,PolynomialXform:r},i=Object.keys(t);function l(n){const e=null==n?void 0:n.type;return!n||i.includes(e)}function u(n){if(!(null==n?void 0:n.type))return null;const e=t[null==n?void 0:n.type];if(e){const o=new e;return o.read(n),o}return null}n.isTransformSupported=l,n.readTransform=u,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
