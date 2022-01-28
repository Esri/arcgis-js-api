/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../support/actions/ActionButton"],(function(e,s){"use strict";const o={iconZoom:"esri-icon-zoom-in-magnifying-glass",iconTrash:"esri-icon-trash",iconBrowseClusteredFeatures:"esri-icon-table"},t=new s({id:"zoom-to-feature",title:"{messages.zoom}",className:o.iconZoom}),r=new s({id:"remove-selected-feature",title:"{messages.remove}",className:o.iconTrash}),a=new s({id:"zoom-to-clustered-features",title:"{messages.zoom}",className:o.iconZoom}),i=new s({id:"browse-clustered-features",title:"{messages.browseClusteredFeatures}",className:o.iconBrowseClusteredFeatures}),n=[t,r,i,a];e.all=n,e.browseClusteredFeatures=i,e.removeSelectedFeature=r,e.zoomToClusteredFeatures=a,e.zoomToFeature=t,Object.defineProperty(e,"__esModule",{value:!0})}));
