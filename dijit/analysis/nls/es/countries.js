// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define({countryCodes:{WORLD:"Mundo",AD:"Andorra",AE:"Emiratos Árabes Unidos",AF:"Afganistán",AG:"Antigua y Barbuda",AI:"Anguila",AL:"Albania",AM:"Armenia",AO:"Angola",AQ:"Antártida",AR:"Argentina",AS:"Samoa americana",AT:"Austria",AU:"Australia",AW:"Aruba",AZ:"Azerbaiyán",BA:"Bosnia y Herzegovina",BB:"Barbados",BD:"Bangladés",BE:"Bélgica",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahréin",BI:"Burundi",BJ:"Benín",BL:"Saint Barthélemy",BM:"Bermudas",BN:"Brunéi Darussalam",BO:"Estado plurinacional de Bolivia",BQ:"Bonaire, San Eustaquio y Saba",BR:"Brasil",BS:"Bahamas",BT:"Bután",BV:"Isla Bouvet",BW:"Botsuana",BY:"Bielorruso",BZ:"Belice",CA:"Canadá",CD:"República Democrática del Congo",CF:"República Africana Central",CG:"Congo",CH:"Suiza",CI:"Costa de Marfil",CK:"Islas Cook",CL:"Chile",CM:"Camerún",CN:"China",CO:"Colombia",CR:"Costa Rica",CU:"Cuba",CV:"Cabo Verde",CW:"Curaçao",CY:"Chipre",CZ:"República checa",DE:"Alemania",DJ:"Yibuti",DK:"Dinamarca",DM:"Dominica",DO:"República Dominicana",DZ:"Argelia",EC:"Ecuador",EE:"Estonia",EG:"Egipto",EH:"Sahara Occidental",ER:"Eritrea",ES:"España",ET:"Etiopía",FI:"Finlandia",FJ:"Fiyi",FK:"Islas Malvinas",FM:"Micronesia, Estados Federados de",FO:"Islas Faroe",FR:"Francia",GA:"Gabón",GB:"Reino Unido",GD:"Granada",GE:"Georgia",GF:"Guayana Francesa",GG:"Guernesey",GH:"Ghana",GI:"Gibraltar",GL:"Groenlandia",GM:"Gambia",GN:"Guinea",GP:"Guadalupe",GQ:"Guinea Ecuatorial",GR:"Grecia",GS:"Islas Sandwich del Sur y Georgia del Sur",GT:"Guatemala",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong",HM:"Islas Heard y Mcdonald",HN:"Honduras",HR:"Croacia",HT:"Haití",HU:"Hungría",ID:"Indonesia",IE:"Irlanda",IL:"Israel",IM:"Isla de Man",IN:"India",IO:"Territorio británico del Océano Índico",IQ:"Irak",IR:"República Islámica de Irán",IS:"Islandia",IT:"Italia",JE:"Jersey",JM:"Jamaica",JO:"Jordania",JP:"Japón",KE:"Kenia",KG:"Kirguizistán",KH:"Camboya",KI:"Kiribati",KM:"Comoras",KN:"San Cristóbal y Nieves",KP:"República Popular Democrática de Corea",KR:"Corea, República de",KW:"Kuwait",KY:"Islas Caimán",KZ:"Kazajstán",LA:"República Democrática Popular de Lao",LB:"Líbano",LC:"Santa Lucía",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesoto",LT:"Lituania",LU:"Luxemburgo",LV:"Letonia",LY:"Libia",MA:"Marruecos",MC:"Mónaco",MD:"Moldavia, República de",ME:"Montenegro",MF:"San Martín (Francia)",MG:"Madagascar",MH:"Islas Marshall",MK:"Macedonia, Antigua República Yugoslava de",ML:"Malí",MM:"Myanmar",MN:"Mongolia",MO:"Macao",MP:"Islas Marianas del Norte",MQ:"Martinica",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Isla Mauricio",MV:"Maldivas",MW:"Malaui",MX:"México",MY:"Malasia",MZ:"Mozambique",NA:"Namibia",NC:"Nueva Caledonia",NE:"Níger",NG:"Nigeria",NI:"Nicaragua",NL:"Países Bajos",NO:"Noruega",NP:"Nepal",NR:"Nauru",NU:"Niue",NZ:"Nueva Zelanda",OM:"Omán",PA:"Panamá",PE:"Perú",PF:"Polinesia Francesa",PG:"Papua Nueva Guinea",PH:"Filipinas",PK:"Pakistán",PL:"Polonia",PM:"San Pedro y Miquelón",PN:"Islas Pitcairn",PS:"Estado de Palestina",PT:"Portugal",PW:"Paláu",PY:"Paraguay",QA:"Qatar",RE:"Reunión",RO:"Rumanía",RS:"Serbia",RU:"Federación rusa",RW:"Ruanda",SA:"Arabia Saudí",SB:"Islas Salomón",SC:"Seychelles",SD:"Sudán",SE:"Suecia",SG:"Singapur",SH:"Santa Elena, Ascensión y Tristan de Acuña",SI:"Eslovenia",SJ:"Islas Svaldard y Jan Mayen",SK:"Eslovaquia",SL:"Sierra Leona",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Surinam",SS:"Sudán del Sur",ST:"Santo Tomé y Príncipe",SV:"El Salvador",SX:"San Martín (Holanda)",SY:"República Árabe Siria",SZ:"Suazilandia",TC:"Islas Turcas y Caicos",TD:"República del Chad",TF:"Territorios Australes Franceses",TG:"Togo",TH:"Tailandia",TJ:"Tajikistán",TK:"Tokelau",TL:"Timor-Oriental",TM:"Turkmenistán",TN:"Túnez",TO:"Tonga",TR:"Turquía",TT:"Trinidad y Tobago",TV:"Tuvalu",TW:"Taiwán, Provincia de China",TZ:"República Unida de Tanzania",UA:"Ucrania",UG:"Uganda",UM:"Islas Menores de Estados Unidos",US:"Estados Unidos",UY:"Uruguay",UZ:"Uzbekistán",VA:"Santa Sede (Estado de la Ciudad del Vaticano)",VC:"San Vicente y las Granadinas",VE:"Venezuela, República Bolivariana de",VG:"Islas Vírgenes británicas",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis y Futuna",WS:"Samoa",XK:"República de Kosovo",YE:"Yemen",YT:"Mayotte",ZA:"Sudáfrica",ZM:"Zambia",ZW:"Zimbabue"}});