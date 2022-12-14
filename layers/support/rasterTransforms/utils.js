/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./GCSShiftTransform","./IdentityTransform","./PolynomialTransform"],(function(n,e,t,r){"use strict";const o={GCSShiftXform:e,IdentityXform:t,PolynomialXform:r},i=Object.keys(o);function s(n){const e=n?.type;return!n||i.includes(e)}function f(n){const e=n?.type;if(!e)return null;const t=o[n?.type];if(t){const e=new t;return e.read(n),e}return null}n.isTransformSupported=s,n.readTransform=f,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
