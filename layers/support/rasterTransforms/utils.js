/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./GCSShiftTransform","./IdentityTransform","./PolynomialTransform"],(function(n,r,e,t){"use strict";const o={GCSShiftXform:r,IdentityXform:e,PolynomialXform:t},i=Object.keys(o);function f(n){const r=null==n?void 0:n.type;return!n||i.includes(r)}function l(n){if(!(null==n?void 0:n.type))return null;const r=o[null==n?void 0:n.type];if(r){const e=new r;return e.read(n),e}return null}n.isTransformSupported=f,n.readTransform=l,Object.defineProperty(n,"__esModule",{value:!0})}));
