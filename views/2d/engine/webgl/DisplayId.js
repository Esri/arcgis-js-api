/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const t=8388607,A=8388608,_=254,I=255,E=0,D=1,i=e=>(e&A)>>>23,T=e=>e&t,n=e=>i(e)===D?_:I;function r(e){return i(e)===D}function S(e,t){return((t?A:0)|e)>>>0}e.AGGREGATE_VALID_FILTERS_MASK=_,e.DISPLAY_ID_TEXEL_MASK=t,e.DISPLAY_ID_TYPE_AGGREGATE=D,e.DISPLAY_ID_TYPE_FEATURE=E,e.DISPLAY_ID_TYPE_MASK=A,e.NONAGGREGATE_VALID_FILTERS_MASK=I,e.createDisplayId=S,e.getDisplayIdFilterMask=n,e.getDisplayIdTexel=T,e.getDisplayIdType=i,e.isAggregateId=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
