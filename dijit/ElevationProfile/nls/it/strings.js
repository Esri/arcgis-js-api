// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"Profilo di elevazione",showMe:"mostra",selectLine:"<b>Selezionare</b> una feature nella mappa.",popupRequirement:"NOTA: la feature deve trovarsi in un layer in cui i popup sono abilitati.",digitizeDistanceMeasureTool:"Utilizzare gli strumenti <b>Misura</b>.",selectFeatureHelpUrl:"http://help.arcgis.com/it/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/it/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Passare il mouse o toccare sul grafico Profilo di elevazione per visualizzare le elevazioni e mostrare la posizione nella mappa.",directionLabel:"Direzione profilo"},buttons:{measureLabel:"Misura",helpLabel:"Guida",profileForward:"Avanti",profileReverse:"Inverti",flipProfileTitle:"Fare clic per capovolgere Direzione profilo",aggregationShowLabel:"Mostra informazioni di aggregazione",aggregationHideLabel:"Nascondi informazioni di aggregazione",aggregateElevationGainForward:"Aggrega guadagno elevazione avanti",aggregateElevationLossForward:"Aggrega perdita elevazione avanti",aggregateElevationGainReverse:"Aggrega guadagno elevazione indietro",aggregateElevationLossReverse:"Aggrega perdita elevazione indietro"},chart:{title:"Profilo di elevazione",demResolution:"Risoluzione DEM",elevationTitleTemplate:"Elevazione in {0}",distanceTitleTemplate:"Distanza in {0}",gainLossTemplate:"Min: {min}   Max: {max}   Inizio: {start}   Fine: {end}   Variazione: {gainloss}"},errors:{MissingConstructorParameters:"Parametro constructor mancante.",InvalidConfiguration:"Configurazione non valida.",UnableToProcessResults:"Impossibile elaborare i risultati dell\\'analisi.",UnableToNormalizeGeometry:"Impossibile normalizzare geometria polilinea di input",NullGeometry:"La geometria polilinea di input è null. Impossibile aggiornare profilo",InvalidProfileResults:"ProfileChart.update(...) con parametro 'profileResults' mancante."}});