/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../LayerAdapter","../FeatureLayerAdapter","../CSVLayerAdapter","../SceneLayerAdapter","../PointCloudLayerAdapter"],(function(e,a,t,r,n,p){"use strict";const l={0:{adapter:r,type:"csv",label:"CSVLayer"},2:{adapter:t,type:"feature",label:"FeatureLayer"},1:{adapter:t,type:"geojson",label:"GeoJSONLayer"},3:{adapter:n,type:"scene",label:"SceneLayer"},4:{adapter:p,type:"point-cloud",label:"PointCloudLayer"}},y=[0,2,1,3,4];e.createLayerAdapter=function(e,t=y){if(e instanceof a)return e;let r=null;return t.some((a=>{const t=e.type===l[a].type;if(t){const t=l[a].adapter;r=new t({layer:e})}return t})),r},e.getLayerTypeLabels=function(e){return e.map((e=>l[e].label))},Object.defineProperty(e,"__esModule",{value:!0})}));
