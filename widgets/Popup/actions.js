/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../support/actions/ActionButton"],(function(e,s){"use strict";const o={iconZoom:"esri-icon-zoom-in-magnifying-glass",iconTrash:"esri-icon-trash",iconBrowseClusteredFeatures:"esri-icon-table"},t=new s({id:"zoom-to-feature",title:"{messages.zoom}",className:o.iconZoom}),r=new s({id:"remove-selected-feature",title:"{messages.remove}",className:o.iconTrash}),a=new s({id:"zoom-to-clustered-features",title:"{messages.zoom}",className:o.iconZoom}),i=new s({id:"browse-clustered-features",title:"{messages.browseClusteredFeatures}",className:o.iconBrowseClusteredFeatures}),l=[t,r,i,a];e.all=l,e.browseClusteredFeatures=i,e.removeSelectedFeature=r,e.zoomToClusteredFeatures=a,e.zoomToFeature=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
