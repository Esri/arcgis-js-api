/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const _=8388607,A=8388608,t=254,I=255,E=0,D=1,i=e=>(e&A)>>>23,T=e=>e&_,n=e=>i(e)===D?t:I;function r(e){return i(e)===D}function s(e,_){return((_?A:0)|e)>>>0}e.AGGREGATE_VALID_FILTERS_MASK=t,e.DISPLAY_ID_TEXEL_MASK=_,e.DISPLAY_ID_TYPE_AGGREGATE=D,e.DISPLAY_ID_TYPE_FEATURE=E,e.DISPLAY_ID_TYPE_MASK=A,e.NONAGGREGATE_VALID_FILTERS_MASK=I,e.createDisplayId=s,e.getDisplayIdFilterMask=n,e.getDisplayIdTexel=T,e.getDisplayIdType=i,e.isAggregateId=r,Object.defineProperty(e,"__esModule",{value:!0})}));
