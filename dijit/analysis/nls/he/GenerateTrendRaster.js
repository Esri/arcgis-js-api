// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define({toolDefine:"צור רסטר קו מגמה",outputLayerName:"${layername}_trend",dimensionLabel:"בחר ממד שלפיו מגמת משתנה תנותח",variablesLabel:"בחר משתנה/ים לניתוח קו מגמה",variablesListLabel:"משתנים [Dimension Info] (תיאור)",trendLineTypeLabel:"בחר את סוג הקו להתאמת ערכי משתנה לפי ממד",linear:"לינארי",harmonic:"הרמוני",polynomial:"פולינום",mannKendall:"Mann-Kendall",seasonalKendall:"Seasonal-Kendall",seasonalPeriod:"ציין את יחידת הזמן עבור אורך תקופת העונה",cycleLength:"ציין את האורך של מעגל הרמוני",cycleUnit:"בחר את יחידת הזמן של אורך מעגל הרמוני",years:"שנים",days:"ימים",months:"חודשים",frequencyLabel:"ציין את מספר התדירות עבור התאמת קו מגמה הרמוני",polynomialOrderLabel:"ציין את מספר הסדר הפולינומיאלי עבור התאמת קו המגמה",modelStatistics:"בחר נתונים סטטיסטיים של מודל שייכללו ברסטר המגמה",rmse:"RMSE",r2:"R-squared",slopePValue:"ערך-P של מקדם שיפוע",ignoreNodataLabel:"התעלם מערכים חסרים בחישוב",ignore:"התעלם",analysisLayerLabel:"בחר שכבת תמונה רב-ממדית לניתוח קו מגמה",itemDescription:"ניתוח שירות התמונה שנוצר מתוך יצירת רסטר קו מגמה",itemTags:"תוצאת ניתוח רסטר, יצירת רסטר קו מגמה, ${layername}",itemSnippet:"ניתוח שירות התמונה שנוצר מיצירת רסטר קו מגמה"});