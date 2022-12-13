/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./sdfPrimitives"],(function(e,r){"use strict";const t=64,E=t/2,R=E/5,_=t/R,o=.25;function i(e,_){return e.fromData(`${_}-marker`,(()=>r.createTexture(_,t,E,R)))}e.MARKER_SIZE_PER_LINE_WIDTH=_,e.MARKER_SYMBOL_SIZE=E,e.MARKER_TEXTURE_SIZE=t,e.MARKER_THICKNESS=R,e.MARKER_TIP_THICKNESS_FACTOR=o,e.prepareMarkerResources=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
