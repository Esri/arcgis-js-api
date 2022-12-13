/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const _=8388607,t=8388608,A=254,I=255,E=0,i=1,D=e=>(e&t)>>>23,T=e=>e&_,n=e=>D(e)===i?A:I;function r(e){return D(e)===i}function s(e,_){return((_?t:0)|e)>>>0}e.AGGREGATE_VALID_FILTERS_MASK=A,e.DISPLAY_ID_TEXEL_MASK=_,e.DISPLAY_ID_TYPE_AGGREGATE=i,e.DISPLAY_ID_TYPE_FEATURE=E,e.DISPLAY_ID_TYPE_MASK=t,e.NONAGGREGATE_VALID_FILTERS_MASK=I,e.createDisplayId=s,e.getDisplayIdFilterMask=n,e.getDisplayIdTexel=T,e.getDisplayIdType=D,e.isAggregateId=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
