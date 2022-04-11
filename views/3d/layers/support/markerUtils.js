/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../graphics/sdfPrimitives"],(function(e,r,t){"use strict";const n=64,i=n/2,o=i/5;function u(e,t){return r.isSome(t)?s(e,a(t.style)):null}function s(e,r){return e.fromData(r,(()=>t.createTexture(r,n,i,o)))}function a(e){return"diamond"===e?"kite":e}e.MARKER_SYMBOL_SIZE=i,e.MARKER_TEXTURE_SIZE=n,e.MARKER_THICKNESS=o,e.parseLineMarkerStyle=a,e.prepareMarkerResources=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
