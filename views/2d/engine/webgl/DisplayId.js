/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const n=8388607,t=8388608,r=254,o=255,u=0,c=1,e=n=>(n&t)>>>23,f=t=>t&n,i=n=>e(n)===c?r:o;function p(n){return e(n)===c}function s(n,r){return((r?t:0)|n)>>>0}export{r as AGGREGATE_VALID_FILTERS_MASK,n as DISPLAY_ID_TEXEL_MASK,c as DISPLAY_ID_TYPE_AGGREGATE,u as DISPLAY_ID_TYPE_FEATURE,t as DISPLAY_ID_TYPE_MASK,o as NONAGGREGATE_VALID_FILTERS_MASK,s as createDisplayId,i as getDisplayIdFilterMask,f as getDisplayIdTexel,e as getDisplayIdType,p as isAggregateId};
