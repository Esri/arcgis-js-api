/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../core/screenUtils","../../renderers/visualVariables/support/visualVariableUtils"],(function(e,r,t){"use strict";const i="simple-marker",n="picture-marker",o="simple-line",a="simple-fill",s="shield-label-symbol",l="text";function u(e,u){const{graphic:y,renderer:p,symbol:f}=u,c=f.type;if(c===l||c===s||!("visualVariables"in p)||!p.visualVariables)return;const g=p.getVisualVariablesForType("size"),m=p.getVisualVariablesForType("color"),d=p.getVisualVariablesForType("opacity"),L=p.getVisualVariablesForType("rotation"),b=g[0],V=m[0],h=d[0],w=L[0];if(b){const a=c===i?f.style:null,s=t.getSize(b,y,{shape:a});null!=s&&(c===i?e.size=r.px2pt(s):c===n?(e.width=r.px2pt(s),e.height=r.px2pt(s)):c===o?e.width=r.px2pt(s):e.outline&&(e.outline.width=r.px2pt(s)))}if(V){const r=t.getColor(V,y);(r&&c===i||c===o||c===a)&&(e.color=r?r.toJSON():void 0)}if(h){const r=t.getOpacity(h,y);null!=r&&e.color&&(e.color[3]=Math.round(255*r))}w&&(e.angle=-t.getRotationAngle(p,y))}function y(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}}function p(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}}function f(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}}function c(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}}function g(e,r=15){const t=e.canvas.width,i=e.canvas.height,n=e.getImageData(0,0,t,i).data;let o,a,s,l,u,y;e:for(a=i;a--;)for(o=t;o--;)if(n[4*(t*a+o)+3]>r){y=a;break e}if(!y)return null;e:for(o=t;o--;)for(a=y+1;a--;)if(n[4*(t*a+o)+3]>r){u=o;break e}e:for(o=0;o<=u;++o)for(a=y+1;a--;)if(n[4*(t*a+o)+3]>r){s=o;break e}e:for(a=0;a<=y;++a)for(o=s;o<=u;++o)if(n[4*(t*a+o)+3]>r){l=a;break e}return{x:s,y:l,width:u-s,height:y-l}}function m(e,r){const t=e.allLayerViews.items;if(r===e.scale)return t.filter((e=>!e.suspended));const i=new Array;for(const n of t)T(n.parent)&&!i.includes(n.parent)||!n.visible||r&&"isVisibleAtScale"in n&&!n.isVisibleAtScale(r)||i.push(n);return i}function d(e){return e&&"bing-maps"===e.type}function L(e){return e&&"csv"===e.type}function b(e){return e&&"feature"===e.type}function V(e){return e&&"geojson"===e.type}function h(e){return e&&"graphics"===e.type}function w(e){return e&&"group"===e.type}function T(e){return e&&"esri.views.2d.layers.GroupLayerView2D"===e.declaredClass}function S(e){return e&&"imagery"===e.type}function v(e){return e&&"kml"===e.type}function G(e){return e&&"map-image"===e.type}function M(e){return e&&"map-notes"===e.type}function x(e){return e&&"open-street-map"===e.type}function P(e){return e&&"stream"===e.type}function k(e){return e&&"tile"===e.type}function I(e){return e&&"vector-tile"===e.type}function D(e){return e&&"web-tile"===e.type}function F(e){return e&&"wms"===e.type}function O(e){return e&&"wmts"===e.type}e.applyVisualVariables=u,e.createMultipointLayer=y,e.createPointLayer=f,e.createPolygonLayer=p,e.createPolylineLayer=c,e.getContextBoundingBox=g,e.getVisibleLayerViews=m,e.isBingMapsLayer=d,e.isCSVLayer=L,e.isFeatureLayer=b,e.isGeoJSONLayer=V,e.isGraphicsLayer=h,e.isGroupLayer=w,e.isImageryLayer=S,e.isKMLLayer=v,e.isMapImageLayer=G,e.isMapNotesLayer=M,e.isOpenStreetMapLayer=x,e.isStreamLayer=P,e.isTileLayer=k,e.isVectorTileLayer=I,e.isWMSLayer=F,e.isWMTSLayer=O,e.isWebTileLayer=D,Object.defineProperty(e,"__esModule",{value:!0})}));
