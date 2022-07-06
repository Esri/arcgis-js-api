/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{WGLSymbologyType as o}from"../enums.js";import r from"./WGLGeometryBrushMarker.js";import{assertRendererSchema as e}from"../techniques/utils.js";import{DataType as t}from"../../../../webgl/enums.js";class s extends r{supportsSymbology(r){return r===o.PIE_CHART}_drawMarkers(o,r,s,n,l,f,u){const{context:i}=o,{rendererInfo:m}=o,{rendererSchema:a}=m;e(a,"pie-chart"),s.setUniform4fv("u_colors",a.colors),s.setUniform4fv("u_defaultColor",a.defaultColor),s.setUniform4fv("u_othersColor",a.othersColor),s.setUniform4fv("u_outlineColor",a.outlineColor),s.setUniform1f("u_donutRatio",a.holePercentage),s.setUniform1f("u_sectorThreshold",a.sectorThreshold),s.setUniform1f("u_outlineWidth",a.outlineWidth),i.drawElements(n,l,t.UNSIGNED_INT,f)}}export{s as default};
