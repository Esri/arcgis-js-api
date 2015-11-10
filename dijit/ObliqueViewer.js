define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../tasks/QueryTask","../tasks/query","./_EventedWidget","dijit/_Widget","./_ObliqueRotationWidget","dojo/_base/array","../ImageSpatialReference","../tasks/ImageServiceProjectTask","../tasks/ProjectParameters","../layers/MosaicRule","../geometry/Extent","../geometry/Polygon","../lang","../config","./RasterList","dojo/store/Observable","dojo/store/Memory","dojo/Deferred"],function(e,t,i,r,s,a,n,o,h,d,c,l,u,f,m,p,R,g,y,v,_,x){var S=e([n,o],{declaredClass:"esri.dijit.ObliqueViewer",azimuthField:"SensorAzimuth",elevationThreshold:70,elevationField:"SensorElevation",snap:!0,_refreshOK:!0,isNadir:!1,showThumbnail:!0,noQueryOnExtentChange:!1,azimuthTolerance:10,rasterListRefresh:!0,_isICS:function(e){return!(!e.ics&&!e.icsid)},_initializeTasks:function(){this.obliqueRecordsQueryTask=new s(this.imageServiceUrl),this.projectTask=new l},_verifyRasterInfoFields:function(){return this.rasterInfoFields&&this.rasterInfoFields.length},_setupRasterList:function(){var e=this,t=[{name:this.imageServiceLayer.objectIdField,alias:"Object ID",display:!0},{name:this.azimuthField,alias:"Azimuth",display:!0},{name:this.elevationField,alias:this.elevationField,display:!0}];this.rasterInfoFields=this._verifyRasterInfoFields()?this.rasterInfoFields:t,this.rasterList=new y({data:new v(new _),showThumbnail:this.showThumbnail,imageServiceUrl:this.imageServiceLayer.url,fields:this.rasterInfoFields},this.rasterListDiv),this.rasterList.on("raster-select",function(t){e.selectedRasterId=t[e.imageServiceLayer.objectIdField],e.setImage(e.selectedRasterId,e.map.extent),d.forEach(e.filteredRecords,function(t){delete t.attributes.selected,t.attributes[e.imageServiceLayer.objectIdField]===e.selectedRasterId&&(t.attributes.selected=!0)}),e._rotationWidget&&e._rotationWidget.setAzimuth(t[e.azimuthField])}),this.rasterList.startup()},_setupRotationWidget:function(){var e=this;this._rotationWidget=new h({snap:this.snap,azimuthAngle:this.azimuthAngle},this.rotationDiv),this._rotationWidget.startup(),this.own(this._rotationWidget.on("azimuth-change",function(t){var i=t.azimuth;e.emit("azimuth-change",{azimuth:i}),i?(e.isNadir=!1,e.azimuthAngle=i,e._filterByAzimuth(),e._rotationWidget.refresh({features:e.records}),e._refreshListDijit(e.filteredRecords),e._refreshImage(e.map.extent)):e._switchToNadir()}))},_refreshListDijit:function(e){var t=this._prepareListData(e);this.rasterList&&this.rasterListRefresh&&this.rasterList.setData(t),this.emit("records-refresh",{records:this.records,filteredRecords:this.filteredRecords})},_prepareListData:function(e){var t,i=[],r=this.imageServiceLayer.objectIdField;return d.forEach(e,function(e){t=e.attributes,t.thumbnailUrl=this.imageServiceUrl+"/"+t[r]+"/thumbnail",i.push(t)},this),new v(new _({data:i,idProperty:this.imageServiceLayer.objectIdField}))},_switchToNadir:function(){var e=!!this.map.extent.spatialReference.icsid,t=new f;if(t.method=f.METHOD_NONE,t.where=this.elevationField+">"+this.elevationThreshold,this.imageServiceLayer.setMosaicRule(t,e),e){var i,r=this;this.projectGeometry(this.map.extent,this.nadirSpatialReference).then(function(e){r._verifyExtent(e[0])&&(r._refreshOK=!1,r.map.spatialReference=e[0].spatialReference,i=g.defaults.map.zoomDuration,g.defaults.map.zoomDuration=0,r.map.setExtent(new m(e[0]).setSpatialReference(e[0].spatialReference)).then(function(){r._refreshOK=!0,r.isNadir=!0,g.defaults.map.zoomDuration=i,r.selectedRasterId=null,r.selectedRaster=null,r.filteredRecords=null}))})}},projectGeometry:function(e,t){var i=new u;return t=t||this.map.spatialReference,i.geometries=[e],i.outSR=t,this.projectTask.execute(i)},_verifyExtent:function(e){return!(isNaN(e.xmin)||isNaN(e.xmax)||isNaN(e.ymin)||isNaN(e.ymax))},_refreshRecords:function(e){function t(t){i._verifyExtent(t[0])?(i.nadirExtent=t[0],i.search(i.nadirExtent).then(function(t){return t&&t.features&&t.features.length?(i.records=t.features,i._rotationWidget&&i._rotationWidget.refresh({features:i.records}),void(i.isNadir?i._refreshListDijit(i.records):(i._filterByAzimuth(),i._refreshListDijit(i.filteredRecords),e&&i.filteredRecords&&i.filteredRecords.length&&i._refreshImage(i.map.extent)))):console.log("Oblique viewer: no records returned")})):(console.error("Oblique viewer: Project Operation returned invalid extent"),i.search(i.map.extent).then(function(t){return t&&t.features&&t.features.length?(i.records=t.features,i._rotationWidget&&i._rotationWidget.refresh({features:i.records}),void(i.isNadir?i._refreshListDijit(i.records):(i._filterByAzimuth(),i._refreshListDijit(i.filteredRecords),e&&i.filteredRecords&&i.filteredRecords.length&&i._refreshImage(new p(i.filteredRecords[0].geometry).getExtent())))):console.log("Oblique viewer: no records returned")}))}var i=this;this.nadirSpatialReference.equals(this.map.extent.spatialReference)?t([this.map.extent]):this.projectGeometry(this.map.extent,this.nadirSpatialReference).then(t)},postCreate:function(){this.inherited(arguments),this.map&&this.imageServiceLayer||console.error("ObliqueViewer: Map or Image service layer not provided."),this.imageServiceUrl=this.imageServiceLayer.url,this.nadirSpatialReference=this.map.extent.spatialReference,this._initializeTasks(),this.isNadir=!R.isDefined(this.azimuthAngle),this.isNadir&&this._switchToNadir(),this.rotationDiv&&this._setupRotationWidget(),this.rasterListDiv&&(this.imageServiceLayer.loaded?this._setupRasterList():this.imageServiceLayer.on("load",t.hitch(this,this._setupRasterList))),this.sorter||(this.sorter=this._sortSpatially),this.own(this.map.on("extent-change",t.hitch(this,function(){this._refreshOK&&!this.noQueryOnExtentChange&&(this._isICS(this.map.extent.spatialReference)||(this._nadirExtent=this.map.extent,this._switchToNadir()),this._refreshRecords(!0))}))),R.isDefined(this.azimuthAngle)&&!this.noQueryOnExtentChange&&this._refreshRecords()},_refreshImage:function(e){this.filteredRecords&&this.filteredRecords.length&&this.selectedRasterId!==this.filteredRecords[0].attributes[this.imageServiceLayer.objectIdField]&&this._setSelectedRaster(e)},setImage:function(e,t){if(!e)return console.error("Object ID of raster to be displayed not provided");var i,r,s=this;this.imageSpatialReference=new c({icsid:e,url:this.imageServiceUrl}),this.projectGeometry(this._adjustExtentAspectRatio(t),this.imageSpatialReference).then(function(t){return s._verifyExtent(t[0])?(i=new f,i.method=f.METHOD_LOCKRASTER,i.lockRasterIds=[e],s.imageServiceLayer.setMosaicRule(i,!0),s._refreshOK=!1,s.map.spatialReference=t[0].spatialReference,r=g.defaults.map.zoomDuration,g.defaults.map.zoomDuration=0,void s.map.setExtent(new m(t[0]).setSpatialReference(t[0].spatialReference)).then(function(){s._refreshOK=!0,g.defaults.map.zoomDuration=r})):console.log("Project operation returned invalid extent.")})},search:function(e){if(!e)return console.error("Oblique viewer: no geometry provided for search.");var t,i=new x,r=this;return t=new a,t.geometry=e,t.outFields=this._getQueryFields()||[this.imageServiceLayer.objectIdField,this.azimuthField],t.returnGeometry=!0,t.where=this.elevationField+"<"+this.elevationThreshold,t.outSpatialReference=e.spatialReference,t.spatialRel="esriSpatialRelContains",this.obliqueRecordsQueryTask.execute(t).then(function(e){i.resolve({features:r.sorter(r._processRecords(e.features))})}),i.promise},_sortSpatially:function(e){if(e&&e.length&&this.map.loaded){var t,i,r,s,a,n=0,o=0,h=e[0],c=0,l=this.nadirExtent||this.map.extent;for(a=l.getCenter(),this.selectedRaster&&this._extentContained(this.selectedRaster,this.nadirExtent)&&(d.some(e,function(t,i){return t.attributes[this.imageServiceLayer.objectIdField]===this.selectedRasterId?(r=e[i],e[i]=h,e[0]=r,!0):void 0},this),c=1),n=c;n<e.length;n++){for(t=Math.sqrt((e[n].center.x-a.x)*(e[n].center.x-a.x)+(e[n].center.y-a.y)*(e[n].center.y-a.y)),s=n,o=n+1;o<e.length;o++)i=Math.sqrt((e[o].center.x-a.x)*(e[o].center.x-a.x)+(e[o].center.y-a.y)*(e[o].center.y-a.y)),t>i&&(h=e[o],t=i,s=o);n!==s&&(r=e[n],e[n]=h,e[s]=r)}}return e},_filterByAzimuth:function(){this.filteredRecords=[],d.forEach(this.records,function(e){Math.min(Math.abs(e.attributes[this.azimuthField]-this.azimuthAngle),Math.abs(e.attributes[this.azimuthField]-this.azimuthAngle-360))<=this.azimuthTolerance&&this.filteredRecords.push(e)},this),this.filteredRecords&&this.filteredRecords.length&&(this.filteredRecords[0].attributes.selected=!0)},_processRecords:function(e){var t;return d.forEach(e,function(e){t=new p(e.geometry).setSpatialReference(this.nadirSpatialReference).getCentroid(),e.center=t},this),e},_computeAzimuthFilter:function(){var e,t=(this.azimuthAngle+350)%360,i=(this.azimuthAngle+10)%360;return e=i>t?this.azimuthField+" BETWEEN "+t+" AND "+i:"("+this.azimuthField+" BETWEEN 0 AND "+i+" OR "+this.azimuthField+" BETWEEN "+t+" AND 360)"},_getIds:function(e){var t=[],i=this;return d.forEach(e,function(e){t.push(e.attributes[i.imageServiceLayer.objectIdField])}),t},_adjustExtentAspectRatio:function(e){var t,i,r,s,a;return i=e.ymax-e.ymin,r=e.xmax-e.ymin,t=Math.min(i,r)/2,s=e.getCenter(),a=new m(s.x-t,s.y-t,s.x+t,s.y+t,e.spatialReference),e},_setRasterListRefreshAttr:function(e){if(this._set("rasterListRefresh",e),e){var t=this.isNadir?this.records:this.filteredRecords;this._refreshListDijit(t)}},_extentContained:function(e,t){if(!e||!t)return!1;var i,r,s,a,n,o,h=new p(e.geometry).getExtent(),d=.2;return r=h.ymax-h.ymin,s=h.xmax-h.xmin,a=r*(1-d),n=s*(1-d),o=h.getCenter(),i=new m({xmin:o.x-n/2,ymin:o.y-a/2,xmax:o.x+n/2,ymax:o.y+a/2,spatialReference:h.spatialReference}),i.contains(t)},setData:function(e,i){return e?(i=i||this.map.extent,this._set("records",e),this._filterByAzimuth(),void(this.filteredRecords&&this.filteredRecords.length?(this._refreshListDijit(this.filteredRecords),this.imageServiceLayer.loaded?this._setSelectedRaster(i):this.imageServiceLayer.on("load",t.hitch(this,function(){this._setSelectedRaster(i)}))):(this.selectedRaster=null,this.selectedRasterId=null,this.emit("raster-select",{selectedRasterId:null})))):console.error("Oblique viewer: records not provided.")},_setSelectedRaster:function(e){this.selectedRaster=this.filteredRecords[0],this.selectedRasterId=this.selectedRaster.attributes[this.imageServiceLayer.objectIdField],this.setImage(this.selectedRaster.attributes[this.imageServiceLayer.objectIdField],e),this.emit("raster-select",{selectedRasterId:this.selectedRasterId})},setExtent:function(e){var t=new x,i=this;return this.projectGeometry(e,this.map.spatialReference).then(function(e){i._verifyExtent(e[0])&&i.map.setExtent(e[0]).then(function(){t.resolve()})}),t.promise},zoomToSelectedImage:function(){if(!R.isDefined(this.selectedRasterId))return console.error("Oblique viewer: no selected raster.");if(this.isNadir)return console.log("Viewer in nadir mode, no selected raster.");var e,t=this;this._getImageGeometry(this.selectedRasterId,this.map.spatialReference).then(function(i){i.features&&i.features.length&&(e=new p(i.features[0].geometry).setSpatialReference(t.map.spatialReference),t.map.setExtent(e.getExtent()))})},_getImageGeometry:function(e,t){var i=new a;return i.objectIds=[e],i.returnGeometry=!0,i.outSpatialReference=t,this.obliqueRecordsQueryTask.execute(i)},_getQueryFields:function(){var e=[];return d.forEach(this.rasterInfoFields,function(t){t.name&&e.push(t.name)}),d.indexOf(e,this.azimuthField)<0&&e.push(this.azimuthField),d.indexOf(e,this.imageServiceLayer.objectIdField)<0&&e.push(this.imageServiceLayer.objectIdField),e}});return i("extend-esri")&&t.setObject("dijit.ObliqueViewer",S,r),S});