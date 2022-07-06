/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"./GCSShiftTransform.js";import t from"./IdentityTransform.js";import n from"./PolynomialTransform.js";const o={GCSShiftXform:r,IdentityXform:t,PolynomialXform:n},e=Object.keys(o);function f(r){const t=r?.type;return!r||e.includes(t)}function i(r){const t=r?.type;if(!t)return null;const n=o[r?.type];if(n){const t=new n;return t.read(r),t}return null}export{f as isTransformSupported,i as readTransform};
