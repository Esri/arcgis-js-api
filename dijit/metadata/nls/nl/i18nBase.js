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

define({general:{cancel:"Annuleren",close:"Sluiten",none:"Geen",ok:"OK",other:"Anders",stamp:"Stempel",now:"Nu",choose:"Kies één:"},editor:{noMetadata:"Er is geen metadata voor dit item.",xmlViewOnly:"Het type metadata geassocieerd met dit item wordt niet ondersteund door de editor. Metadata moet in de ArcGIS-indeling zijn.",editorDialog:{caption:"Metadata",captionPattern:"Metadata voor {title}"},primaryToolbar:{view:"Weergeven",viewXml:"XML weergeven",edit:"Bewerken",initializing:"Bezig met laden...",startingEditor:"Editor starten...",loadingDocument:"Document laden...",updatingDocument:"Document updateb...",generatingView:"Weergave genereren...",errors:{errorGeneratingView:"Er is een fout opgetreden tijdens het genereren van de weergave.",errorLoadingDocument:"Er is een fout opgetreden bij het laden van het document."}},changesNotSaved:{prompt:"Uw document bevat wijzigingen die niet zijn opgeslagen.",dialogTitle:"Metadata Editor sluiten",closeButton:"Sluiten"},download:{caption:"Downloaden",dialogTitle:"Downloaden",prompt:"Klik hier om uw bestand te downloaden."},load:{caption:"Openen",dialogTitle:"Openen",typeTab:"Nieuw document",fileTab:"Bestand openen",templateTab:"Een template",itemTab:"Uw item",filePrompt:"Selecteer een lokaal ArcGIS Metadata XML-bestand. Metadata moet in ArcGIS-indeling zijn.",templatePrompt:"Metadata maken",pullItem:"Metadata invullen met item details.",importWarning:"Het geselecteerde bestand lijkt geen ArcGIS-indeling te hebben. Geüploade metadata moet de ArcGIS-indeling hebben.",loading:"Bezig met laden...",noMetadata:"Metadata kunnen gemaakt worden voor dit item door één van de volgende opties te kiezen.",unrecognizedMetadata:"Het type metadata geassocieerd met dit item wordt niet ondersteund door de editor. Ondersteunde metadata kunnen worden gemaakt door een van de volgende opties te kiezen.",errorLoading:"Er is een fout opgetreden tijdens het laden.",warnings:{badFile:"Het geselecteerde bestand kon niet worden geladen.",notAnXml:"Het geselecteerde bestand is niet een XML-bestand.",notSupported:"Dit type bestand wordt niet ondersteund."},portalCaption:"Overschrijven"},save:{caption:"Opslaan",dialogTitle:"Metadata opslaan",working:"Metadata opslaan...",errorSaving:"Er is een fout opgetreden, uw metadata is niet opgeslagen.",saveDialog:{pushCaption:"Wijzigingen toepassen op uw item"}},saveAndClose:{caption:"Opslaan en sluiten"},saveDraft:{caption:"Downloaden",dialogTitle:"Downloaden"},validate:{caption:"Valideren",dialogTitle:"Validatie",docIsValid:"Uw document is geldig."},viewHtml:{caption:"Weergeven",dialogTitle:"Metadata bekijken",savePrompt:"Uw document bevat niet-opgeslagen wijzigingen. U moet wijzigingen opslaan om ze te kunnen zien wanneer u de metadata bekijkt.",saveButton:"Opslaan en weergeven",portalNone:"Op standaarden gebaseerde metadata is niet aangemaakt. U moet eerst opslaan voordat u de metadata kunt bekijken."},del:{caption:"Verwijderen",dialogTitle:"Metagegevens verwijderen",prompt:"Weet u zeker dat u deze metadata wilt verwijderen?",working:"Metadata verwijderen",errorDeleting:"Er is een fout opgetreden, uw metadata is niet verwijderd.",portalNone:"Er is geen metadatadocument beschikbaar om te verwijderen. Op standaarden gebaseerde metadata is niet aangemaakt.",portalPrompt:"Hierdoor zal het metadatadocument worden gewist en worden de metadata van dit item weer ingesteld op item-informatie, zoals Titel, Beschrijving enz.",portalPrompt2:"Hierdoor zullen de op standaarden gebaseerde metadata worden verwijderd. Weet u zeker dat u deze metadata wilt verwijderen?",portalButton:"Annuleren en sluiten"},transform:{caption:"Transformeren",dialogTitle:"Transformeren naar",prompt:"",working:"Bezig met transformeren...",errorTransforming:"Er is een fout opgetreden bij het transformeren van uw document."},errorDialog:{dialogTitle:"Er is een fout opgetreden"}},arcgis:{portal:{metadataButton:{caption:"Metadata"}}},calendar:{button:"Kalender...",title:"Kalender"},geoExtent:{button:"Geografische extent instellen...",title:"Geografische extent",navigate:"Navigeren",draw:"Rechthoek tekenen",drawHint:"Druk om te starten en laat los om te stoppen."},hints:{date:"(jjjj of jjjj-mm of jjjj-mm-dd)",dateTime:"(jjjj-mm-ddTuu:mm:ss.sss[+-]uu:mm)",dateOrDateTime:"(jjjj of jjjj-mm of jjjj-mm-dd of jjjj-mm-ddTuu:mm:ss.sss[+-]uu:mm)",delimitedTextArea:"(Gebruik een komma of nieuwe regel om te scheiden)",fgdcDate:"(jjjj of jjjj-mm of jjjj-mm-dd)",fgdcTime:"(uu:mm:ss.sss[+-]uu:mm)",integer:"(een integer invoeren)",latitude:"(decimale graden)",longitude:"(decimale graden)",number:"(getal invoeren)",numberGreaterThanZero:"(getal invoeren > 0)"},isoTopicCategoryCode:{caption:"Onderwerpcategorie",boundaries:"Bestuurlijke en politieke grenzen",farming:"Landbouw en veeteelt",climatologyMeteorologyAtmosphere:"Atmosfeer en klimaat",biota:"Biologie en ecologie",economy:"Zakelijk en economie",planningCadastre:"Kadastraal",society:"Cultureel, sociaal en demografie",elevation:"Hoogte en afgeleide producten",environment:"Milieu en behoud",structure:"Voorzieningen en structuren",geoscientificInformation:"Geologisch en geofysisch",health:"Volksgezondheid en ziekte",imageryBaseMapsEarthCover:"Satellietbeelden en basiskaarten",inlandWaters:"Binnenlandse waterbronnen",location:"Locaties en geodetische netwerken",intelligenceMilitary:"Leger",oceans:"Zeeën en estuaria",transportation:"Transportnetwerken",utilitiesCommunication:"Nutsbedrijven en communicatie"},multiplicity:{moveElementDown:"Sectie omlaag verplaatsen",moveElementUp:"Sectie omhoog verplaatsen",removeElement:"Sectie verwijderen",repeatElement:"Sectie herhalen"},optionalNode:{switchTip:"Deze sectie opnemen of uitsluiten."},serviceTypes:{featureService:"Functieservice",mapService:"Kaartenservice",imageService:"Afbeeldingenservice",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {bericht}",patternWithHint:"{label} - {bericht} {hint}",ok:"OK",empty:"Er is een waarde vereist.",date:"De waarde moet een datum zijn.",integer:"De waarde moet een integer zijn.",number:"De waarde moet een getal zijn.",other:"Ongeldige waarde."},validationPane:{clearMessages:"Berichten wissen",prompt:"(klik op elk onderstaande bericht en geef de benodigde informatie op in het opgegeven veld)"}});