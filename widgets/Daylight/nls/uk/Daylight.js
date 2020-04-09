// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define({title:"Денне світло",directShadow:"Показати тіні",notSupportedInHW:"Цей об'єкт не підтримується у цьому браузері",unsupported:"Інструмент денного світла підтримується тільки в SceneView.",datePattern:"МММММ д, рррр",playDay:"Анімувати сонце та тіні протягом дня",playYear:"Анімувати сонце та тіні протягом року",pause:"Пауза",season:"Сезон",spring:"Джерело",summer:"Літо",winter:"Зима",fall:"Осінь",timezoneHAST:"HAST",timezoneAKST:"AKST",timezonePST:"PST",timezoneMST:"MST",timezoneCST:"CST",timezoneEST:"EST",timezoneCET:"CET",timezoneEET:"EET",timezoneMSK:"MSK",timezoneGST:"GST",timezoneICT:"ICT",timezoneCCT:"CCT",timezoneJST:"JST",timezoneAEST:"AEST",timezoneNZST:"NZST",timezoneDateline:"Міжнародна лінія зміни дати",timezoneHawaii:"Гаваї",timezoneAlaska:"Аляска",timezoneBaja:"Нижня Каліфорнія",timezoneMountain:"Гірський часовий пояс (США та Канада)",timezoneLaPaz:"Чихуахуа, Ла-Пас, Мазатлан",timezoneArizona:"Арізона",timezoneSaskatchewan:"Саскачеван",timezoneCentralAmerica:"Центральна Америка",timezoneCentralTime:"Центральний часовий пояс (США та Канада)",timezoneMexico:"Гвадалахара, Мехіко, Монтеррей",timezoneEasternUS:"Східний часовий пояс (США та Канада)",timezoneLima:"Богота, Ліма, Кіто",timezoneIndiana:"Індіана (схід) ",timezoneAtlantic:"Атлантичний час (Канада)",timezoneCuiaba:"Куяба",timezoneSantiago:"Сантьяго",timezoneManaus:"Джорджтаун, Ла-Пас, Манаус, Сан-Хуан",timezoneAsuncion:"Асунсьйон",timezoneBrasilia:"Бразиліа",timezoneGreenland:"Гренландія",timezoneMontevideo:"Монтевідео",timezoneCayenne:"Кайенна, Форталеза",timezoneBuenosAires:"Буенос-Айрес",timezoneMidAtlantic:"Середньоатлантичний",timezoneAzores:"Азорські острови",timezoneCaboVerde:"Республіка Кабо-Верде",timezoneDublin:"Дублін, Едінбург, Лісабон, Лондон",timezoneReykjavik:"Монровія, Рейк'явік",timezoneCasablanca:"Касабланка",timezoneBelgrade:"Белград, Братислава, Будапешт, Любляна, Прага",timezoneSarajevo:"Сараєво, Скоп'є, Варшава, Загреб",timezoneBrussels:"Брюссель, Копенгаген, Мадрид, Париж",timezoneWCAfrica:"Західна та Центральна Африка",timezoneAmsterdam:"Амстердам, Берлін, Берн, Рим, Стокгольм, Відень",timezoneWindhoek:"Віндхук",timezoneMinsk:"Мінськ",timezoneCairo:"Каїр",timezoneHelsinki:"Гельсінкі, Київ, Рига, Софія, Таллінн, Вільнюс",timezoneAthens:"Афіни, Бухарест",timezoneJerusalem:"Єрусалим",timezoneAmman:"Амман",timezoneBeirut:"Бейрут",timezoneHarare:"Хараре, Преторія",timezoneDamascus:"Дамаск",timezoneIstanbul:"Стамбул",timezoneKuwait:"Кувейт, Ер-Ріяд",timezoneBaghdad:"Багдад",timezoneNairobi:"Найробі",timezoneKaliningrad:"Калінінград",timezoneMoscow:"Москва Санкт-Петербург, Волгоград",timezoneMuscat:"Абу-Дабі, Мускат",timezoneBaku:"Баку",timezoneYerevan:"Єреван",timezoneTbilisi:"Тбілісі",timezonePortLouis:"Порт-Луї",timezoneTashkent:"Ташкент",timezoneIslamabad:"Ісламабад, Карачі",timezoneEkaterinburg:"Єкатеринбург",timezoneAstana:"Астана",timezoneDhaka:"Дакка",timezoneNovosibirsk:"Новосибірськ",timezoneBangkok:"Бангкок, Ханой, Джакарта",timezoneKrasnoyarsk:"Красноярськ",timezoneBeijing:"Пекін, Чунцин, Гонконг, Урумчі",timezoneSingapore:"Куала-Лумпур, Сінгапур",timezoneTaipei:"Тайбей",timezonePerth:"Перт",timezoneUlaanbaatar:"Улан-Батор",timezoneIrkutsk:"Іркутськ",timezoneSeoul:"Сеул",timezoneOsaka:"Осака, Саппоро, Токіо",timezoneYakutsk:"Якутськ",timezoneCanberra:"Канберра, Мельбурн, Сідней",timezoneBrisbane:"Брісбен",timezoneHobart:"Хобарт",timezoneGuam:"Гуам, Порт-Морсбі",timezoneVladivostok:"Владивосток",timezoneSolomon:"Соломонові Острови, Нова Каледонія",timezoneMagadan:"Магадан",timezoneFiji:"Фіджі",timezoneAuckland:"Окленд, Веллінгтон",timezoneNukualofa:"Нукуалофа",timezoneSamoa:"Самоа",chooseTimezone:"Виберіть свій часовий пояс"});