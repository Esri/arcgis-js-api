/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../support/actions/ActionButton.js";const s={iconZoom:"esri-icon-zoom-in-magnifying-glass",iconTrash:"esri-icon-trash",iconBrowseClusteredFeatures:"esri-icon-table"},o=new e({id:"zoom-to-feature",title:"{messages.zoom}",className:s.iconZoom}),t=new e({id:"remove-selected-feature",title:"{messages.remove}",className:s.iconTrash}),r=new e({id:"zoom-to-clustered-features",title:"{messages.zoom}",className:s.iconZoom}),i=new e({id:"browse-clustered-features",title:"{messages.browseClusteredFeatures}",className:s.iconBrowseClusteredFeatures}),a=[o,t,i,r];export{a as all,i as browseClusteredFeatures,t as removeSelectedFeature,r as zoomToClusteredFeatures,o as zoomToFeature};
