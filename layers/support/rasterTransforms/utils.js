/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","./IdentityTransform","./PolynomialTransform"],(function(n,e,r){"use strict";const t={PolynomialXform:r,IdentityXform:e},o=Object.keys(t);function i(n){const e=null==n?void 0:n.type;return!n||o.includes(e)}function l(n){if(!(null==n?void 0:n.type))return null;const e=t[null==n?void 0:n.type];if(e){const r=new e;return r.read(n),r}return null}n.isTransformSupported=i,n.readTransform=l,Object.defineProperty(n,"__esModule",{value:!0})}));
