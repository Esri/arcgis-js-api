/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../CSVLayerAdapter","../FeatureLayerAdapter","../LayerAdapter","../PointCloudLayerAdapter","../SceneLayerAdapter"],(function(e,a,t,r,n,p){"use strict";const l={0:{adapter:a,type:"csv",label:"CSVLayer"},2:{adapter:t,type:"feature",label:"FeatureLayer"},1:{adapter:t,type:"geojson",label:"GeoJSONLayer"},3:{adapter:p,type:"scene",label:"SceneLayer"},4:{adapter:n,type:"point-cloud",label:"PointCloudLayer"},5:{adapter:t,type:"wfs",label:"WFSLayer"}},y=[0,2,1,3,4,5];function o(e){return e.map((e=>l[e].label))}function d(e,a=y){if(e instanceof r)return e;let t=null;return a.some((a=>{const r=e.type===l[a].type;if(r){const r=l[a].adapter;t=new r({layer:e})}return r})),t}e.createLayerAdapter=d,e.getLayerTypeLabels=o,Object.defineProperty(e,"__esModule",{value:!0})}));
