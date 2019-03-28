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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"उन्नयन प्रोफ़ाइल",showMe:"मुझे दिखाएँ",selectLine:"मानचित्र में कोई फीचर <b>चुने</b>।",popupRequirement:"टिप्पणी: सक्रिय किए गए पॉपअप्स सहित फीचर किसी लेयर में होनी चाहिए।",digitizeDistanceMeasureTool:"<b>मापक</b> उपकरणों का उपयोग करें।",selectFeatureHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"मानचित्र पर उन्नयन दर्शाने तथा स्थान दिखाने के लिए उन्नयन प्रोफाइल लेखा चित्र पर घुमाएं या छुएं।",directionLabel:"प्रोफाइल दिशा"},buttons:{measureLabel:"माप",helpLabel:"सहायता",profileForward:"आगे करें",profileReverse:"रिवर्स करें",flipProfileTitle:"प्रोफाइल दिशा घुमाने हेतु क्लिक करें",aggregationShowLabel:"एकत्रीकरण सूचना दर्शाएं",aggregationHideLabel:"एकत्रीकरण सूचना छुपाएं",aggregateElevationGainForward:"एकत्र उन्नयन लाभ अग्रेषण",aggregateElevationLossForward:"एकत्र उन्नयन हानि अग्रेषण",aggregateElevationGainReverse:"एकत्र उन्नयन लाभ उत्क्रम",aggregateElevationLossReverse:"एकत्र उन्नयन हानि उत्क्रम"},chart:{title:"उन्नयन प्रोफ़ाइल",demResolution:"DEM वियोजन",elevationTitleTemplate:"{0} में उन्नयन",distanceTitleTemplate:"{0} में दूरी",gainLossTemplate:"न्यूनतम:{min}  अधिकतम:{max}  आरंभ:{start}  समाप्त:{end}   बदलाव:{gainloss}"},errors:{MissingConstructorParameters:"नदारद निर्माणक आयाम।",InvalidConfiguration:"अमान्य कॉन्फ़िगरेशन।",UnableToProcessResults:"विश्लेषण परिणाम संसाधित करने में नाकाम।",UnableToNormalizeGeometry:"इनपुट पॉलिलाइन geometry सामान्य करने में नाकाम",NullGeometry:"इनपुट पॉलिलाइन geometry शून्य है। प्रोफाइल अपडेट करने में नाकाम",InvalidProfileResults:"ProfileChart.update(...) नदारद 'profileResults' आयाम।"}});