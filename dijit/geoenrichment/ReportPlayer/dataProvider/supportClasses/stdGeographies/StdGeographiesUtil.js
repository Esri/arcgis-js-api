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

define(["esri/dijit/geoenrichment/ReportPlayer/countryConfig"],function(e){var t={};t.US_STATES_IDS={"01":"AL","02":"AK","03":"AS","04":"AZ","05":"AR","06":"CA","08":"CO","09":"CT",10:"DE",11:"DC",12:"FL",13:"GA",14:"GU",15:"HI",16:"ID",17:"IL",18:"IN",19:"IA",20:"KS",21:"KY",22:"LA",23:"ME",24:"MD",25:"MA",26:"MI",27:"MN",28:"MS",29:"MO",30:"MT",31:"NE",32:"NV",33:"NH",34:"NJ",35:"NM",36:"NY",37:"NC",38:"ND",39:"OH",40:"OK",41:"OR",42:"PA",43:"PR",44:"RI",45:"SC",46:"SD",47:"TN",48:"TX",49:"UT",50:"VT",51:"VA",53:"WA",54:"WV",55:"WI",56:"WY"},t.CA_PROVINCE_IDS={10:"NL",59:"BC",60:"YT",61:"NT",62:"NU",11:"PE",12:"NS",13:"NB",24:"QC",35:"ON",46:"MB",47:"SK",48:"AB"};t.BUILDER_DATA={US_census:{"US.CD":"%name%, %state%","US.CSD":"%name%, %state%","US.Counties":"%name%, %state%","US.Places":"%city%, %state%","US.ZIP5":"%id% (%name%)"},CA_census:{"CAN.FSA":"%id% (%name%)","CAN.CD":"%name%, %province%"}};return t.getAreaName=function(n){var r=e.getCountryID(),i=e.getHierarchyID();if(!r||!i)return n.StdGeographyName;var u=r+"_"+i,a=t.BUILDER_DATA[u];if(!a){var o=e.getGeographiesModel();a=t.BUILDER_DATA[u]={},o.getLevels(!0).forEach(function(e){a[e.id.toUpperCase()]="%id% (%name%)"})}return t.buildDescription(n.StdGeographyID,n.StdGeographyName,n.StdGeographyLevel,a)},t.buildDescription=function(e,n,r,i){var u=i&&i[r.toUpperCase()];return n=n||e,"%id% (%name%)"===u&&n.indexOf(e)>=0?n:u?u.replace(/%(\w+)%/g,function(i){return t._buildDescriptionPart(arguments[0],arguments[1],e,n,r)}):n},t._buildDescriptionPart=function(e,n,r,i,u){try{var a=(u.substr(0,u.indexOf(".")).toLowerCase(),t["_build_"+n]);return a&&a(r,i)}catch(e){}return e},t._build_id=function(e,t){return e},t._build_name=function(e,t){return t},t._build_city=function(e,t){return t.replace(/(\s|^)(\w)/g,function(e){return arguments[1]+arguments[2].toUpperCase()})},t._build_state=function(e,n){var r=e&&e.length>=2?t.US_STATES_IDS[e.substr(0,2)]:null;return r||"??"},t._build_province=function(e,n){var r=e&&e.length>=2?t.CA_PROVINCE_IDS[e.substr(0,2)]:null;return r||"??"},t});