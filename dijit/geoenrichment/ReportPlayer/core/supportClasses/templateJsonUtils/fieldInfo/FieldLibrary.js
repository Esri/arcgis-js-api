// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/i18n!esri/nls/jsapi"],function(e){e=e.geoenrichment.dijit.ReportPlayer.FieldInfoPreview;var i={SPECIAL_HEADER_FIELDS_NAME_MAP:{SITE_NAME:"SiteName",STORE_ADDR:"SiteAddr",AREA_DESC2:"SiteDesc",STORE_LAT:"Latitude",STORE_LONG:"Longitude",AREA_ID:"AreaID",AREA_DESC:"AreaDesc",STORE_ID:"StoreID",RING:"Ring",STORE_NAME:"StoreName",SITENOTE:"SiteNote",SITENOTES:"SiteNotes"},REPORT_VAR_FIELDS_MAP:{REPORTNAME:"Title",REPORTTITLE2:"Subtitle",CURRPAGE:"Page",COPYRIGHT:"Copyright",TRIALURLTEXT:"TrialUrlText",PHONENUMBER:"PhoneNumber",PRODUCTURL:"ProductUrl",PRODUCTLABEL:"ProductLabel",SOURCE:"Source",CENSUSYEAR:"CensusYear",CURRENTYEAR:"CurrentYear",FUTUREYEAR:"FutureYear",LATITUDELABEL:"LatitudeLabel",LONGITUDELABEL:"LongitudeLabel",PAGEFORMAT:"PageFormat",BANDFROM0TO1UNIT2:"BandFrom0To1Unit2",RADIUS0UNIT1:"Radius0Unit1",AREADELIMITER:"AreaDelimiter",BANDREGIONFROM0TO1:"BandRegionFrom0To1",ET_AL:"ET_AL",LINEBUFFERSEGMENTFROM0TO1UNIT2RADIUS:"LineBufferSegmentFrom0To1Unit2Radius",LINEBUFFERRADIUS0UNIT1RADIUS:"LineBufferRadius0Unit1Radius",RINGVALUE0UNIT1RADIUS:"RingValue0Unit1Radius",RINGSVALUES0UNIT1RADII:"RingsValues0Unit1Radii",RINGBUFFERBANDFROM0TO1UNIT2RADIUS:"RingBufferBandFrom0To1Unit2Radius",DRIVETIMEBANDFROM0TO1UNIT2RADIUS:"DriveTimeBandFrom0To1Unit2Radius",RINGBUFFERBANDSBANDS0UNIT1RADII:"RingBufferBandsBands0Unit1Radii",RINGBUFFERBANDRING0UNIT1RADIUS:"RingBufferBandRing0Unit1Radius",DRIVETIMEBANDBAND0UNIT1RADIUS:"DriveTimeBandBand0Unit1Radius",DRIVETIMESRINGS0UNIT1RADII:"DriveTimesRings0Unit1Radii",DRIVETIMERING0UNIT1RADIUS:"DriveTimeRing0Unit1Radius",DRIVEDISTANCEVALUE0UNIT1RADIUS:"DriveDistanceValue0Unit1Radius",DRIVEDISTANCESRINGS0UNIT1RADII:"DriveDistancesRings0Unit1Radii",DRIVEDISTANCERING0UNIT1RADIUS:"DriveDistanceRing0Unit1Radius"},SPECIAL_HEADER_FIELDS_NAME_MAP_BACK:{},REPORT_VAR_FIELDS_MAP_BACK:{},PREVIEW:{Title:e.fieldPreviewTitle,Title_graphic:e.fieldPreviewTitleGraphic,Subtitle:e.fieldPreviewSubtitle,Date:e.fieldPreviewDate,Page:e.fieldPreviewPage,Copyright:e.fieldPreviewCopyright,TrialUrlText:e.fieldPreviewTrialUrlText,PhoneNumber:e.fieldPreviewPhoneNumber,ProductUrl:e.fieldPreviewProductUrl,ProductLabel:e.fieldPreviewProductLabel,Source:e.fieldPreviewSource,"headers.SITE_NAME":e.fieldPreviewSiteName,"headers.SITE_NAME_multi":e.fieldPreviewSiteNameMulti,"headers.STORE_LAT":e.fieldPreviewLat,"headers.STORE_LONG":e.fieldPreviewLong,"headers.AREA_DESC2":e.fieldPreviewAreaDesc2,"headers.STORE_ADDR":e.fieldPreviewStoreAddr,"headers.AREA_DESC":e.fieldPreviewAreaDesc,SiteNote:e.fieldPreviewSiteNote,SiteNotes:e.fieldPreviewSiteNotes},DATE_FIELD_NAME:"Date",DATE_FIELD_ALIAS:"Date",DATE_FIELD_DEFAULT_FORMAT:"d-MMMM dd, yyyy",SITENOTE_FIELD_NAME:"SiteNote",SITENOTE_FIELD_ALIAS:"SiteNote",SITENOTES_FIELD_NAME:"SiteNotes",SITENOTES_FIELD_ALIAS:"SiteNotes",init:function(){for(var e in this.SPECIAL_HEADER_FIELDS_NAME_MAP)this.SPECIAL_HEADER_FIELDS_NAME_MAP_BACK[this.SPECIAL_HEADER_FIELDS_NAME_MAP[e].toUpperCase()]=e;for(e in this.REPORT_VAR_FIELDS_MAP)this.REPORT_VAR_FIELDS_MAP_BACK[this.REPORT_VAR_FIELDS_MAP[e].toUpperCase()]=e},templateToUIHeader:function(e){return e?(0===e.indexOf("headers.")&&(e=e.substr(e.indexOf(".")+1)),this.SPECIAL_HEADER_FIELDS_NAME_MAP[e]):null},qualifyTemplateHeaderName:function(e){return e?0===e.indexOf("headers.")?e:"headers."+e.toUpperCase():e},templateToUIReportVar:function(e){return this.REPORT_VAR_FIELDS_MAP[e]},uiToTemplate:function(e){return this.SPECIAL_HEADER_FIELDS_NAME_MAP_BACK[e]||this.REPORT_VAR_FIELDS_MAP_BACK[e]},getPreview:function(e,i,E){return i&&"Title"===e&&(e+="_graphic"),E&&"headers.SITE_NAME"===e&&(e+="_multi"),this.PREVIEW[e]}};return i.init(),i});