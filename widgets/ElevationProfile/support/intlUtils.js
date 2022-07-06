/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"../../../core/maybe.js";function r(r,{profiles:t}){const u=r.title;if(e(u))return u;switch(r.type){case"ground":return t.ground;case"input":return t.input;case"query":return t.query;case"view":return t.view;default:return""}}export{r as getTranslatedLineTitle};
