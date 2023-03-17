/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./GCSShiftTransform","./IdentityTransform","./PolynomialTransform"],(function(n,t,r,e){"use strict";const o={GCSShiftXform:t,IdentityXform:r,PolynomialXform:e},f=Object.keys(o);function i(n){const t=n?.type;return!n||f.includes(t)}function s(n){const t=n?.type;if(!t)return null;const r=o[n?.type];if(r){const t=new r;return t.read(n),t}return null}n.isTransformSupported=i,n.readTransform=s,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
