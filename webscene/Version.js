/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Version as s}from"../core/Version.js";class e extends s{constructor(s,e){super(s,e,"webscene")}get supportsGround(){return this.since(1,8)}get supportsVisibleElevationLayersInSlides(){return this.lessThan(1,8)}}export{e as Version};
