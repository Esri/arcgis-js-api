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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"Немає",notComplete:"Не завершений",other:"Інше",present:"Присутній",unknown:"Невідомий",unpublishedMaterial:"Неопублікований матеріал"},hints:{integerGreaterThanOne:"(ввести ціле число > 1)",integer0To100:"(ввести ціле число 0..100)"},citeinfo:{caption:"Інформація про цитату",origin:"Засновник",pubdate:"Дата публікації",pubtime:"Час публікації",title:"Заголовок",edition:"Редакція",geoform:{caption:"Форма презентації геопросторових даних",atlas:"Атлас",audio:"Аудіо",diagram:"Діаграма",sDocument:"Документ",globe:"Глобус",map:"Карта",model:"Модель",multiMediaPresentation:"Мультимедійна презентація",profile:"Профіль",rasterDigitalData:"Растрові цифрові дані",remoteSensingImage:"Дані дистанційного зондування",section:"Розділ",spreadsheet:"Електронна таблиця",tabularDigitalData:"Табличні цифрові дані",vectorDigitalData:"Векторні цифрові дані",video:"Відео",view:"Вид"},serinfo:{caption:"Інформація про серію",sername:"Назва серії",issue:"Ідентифікація проблем"},pubinfo:{caption:"Інформація про публікацію",pubplace:"Місце публікації",publish:"Видавець"},othercit:"Інші деталі цитати",onlink:"Онлайн-звʼязування (URL)"},cntinfo:{caption:"Контактна інформація",section:{primary:"Основна",phoneAndEmail:"Телефон та електронна пошта",hoursAndInstructions:"Години та інструкції"},cntorgp:{caption:"По організаціях",cntorg:"Організація",cntper:"Особа"},cntperp:{caption:"По особах",cntper:"Особа",cntorg:"Організація"},cntpos:"Положення",cntaddr:{caption:"Адреса",addrtype:{caption:"Тип адреси",mailing:"Поштова",physical:"Фізична",mailingAndPhysical:"Поштова та фізична"},address:"Адреса",city:"Місто",state:"Штат",postal:"Поштовий індекс",country:"Країна"},cntvoice:"Голос",cnttdd:"TDD/TTY Телефон (порушення слуху)",cntfax:"Факс",cntemail:"Адреса електронної пошти",hours:"Години",cntinst:"Інструкції"},dataqual:{caption:"Інформація про якість даних",section:{attributeAccuracy:"Точність атрибутів",logicalConsistency:"Логічна узгодженість",completeness:"Повнота",positionalAccuracy:"Точність позиціонування",lineage:"Походження",cloudCover:"Хмарний покрив"},attracc:{caption:"Точність атрибутів",attraccr:"Звіт про точність атрибутів",qattracc:{caption:"Кількісна оцінка точності атрибутів",attraccv:"Значення точності атрибутів",attracce:"Пояснення точності атрибутів"}},logic:"Звіт про логічну узгодженість",complete:"Звіт про повноту",posacc:"Точність позиціонування",horizpa:{caption:"Точність горизонтального позиціонування",horizpar:"Звіт про точність горизонтального позиціонування",qhorizpa:{caption:"Кількісна оцінка точності горизонтального позиціонування",horizpav:"Значення точності горизонтального позиціонування",horizpae:"Пояснення точності горизонтального позиціонування"}},vertacc:{caption:"Точність вертикального позиціонування",vertaccr:"Звіт про точність вертикального позиціонування",qvertpa:{caption:"Кількісна оцінка точності вертикального позиціонування",vertaccv:"Значення точності вертикального позиціонування",vertacce:"Пояснення точності вертикального позиціонування"}},lineage:{caption:"Походження"},srcinfo:{caption:"Інформація про джерело",srccite:"Цитата з джерела",srcscale:"Знаменник масштабу джерела",typesrc:{caption:"Тип мультимедійних даних джерела",paper:"Папір",stableBaseMaterial:"Матеріал зі стабільною основою",microfiche:"Мікрофіша",microfilm:"Мікроплівка",audiocassette:"Аудіокасета",chart:"Діаграма",filmstrip:"Фотоплівка",transparency:"Прозорість",videocassette:"Відеокасета",videodisc:"Відеодиск",videotape:"Відеострічка",physicalModel:"Фізична модель",computerProgram:"Компʼютерна програма",disc:"Диск",cartridgeTape:"Касетна стрічка",magneticTape:"Магнітна стрічка",online:"Online",cdrom:"Компакт-диск",electronicBulletinBoard:"Електронна дошка оголошень",electronicMailSystem:"Електронна поштова система"},srctime:"Часовий період вмісту джерела",srccurr:"Довідка про актуальність джерела",srccitea:"Скорочення цитати з джерела",srccontr:"Внесок джерела"},procstep:{caption:"Крок процесу",procdesc:"Опис процесу",srcused:"Скорочення використовуваної цитати з джерела",procdate:"Дата процесу",proctime:"Час процесу",srcprod:"Скорочення згенерованої цитати з джерела",proccont:"Контакт процесу"},cloud:"Хмарний покрив"},distinfo:{caption:"Інформація про розподіл",section:{distributor:"Дистрибʼютор",description:"Опис",orderProcess:"Процес замовлення",prerequisites:"Необхідні компоненти",availability:"Доступність"},distrib:"Дистрибʼютор",resdesc:{caption:"Опис ресурсу",liveData:"«Живі» дані та карта",downloadableData:"Завантажувані дані",offlineData:"Офлайн-дані",staticMapImages:"Зображення статичної карти",sDocument:"Інші документи",application:"Додатки",geographicService:"Географічні сервіси",clearingHouse:"Центри обміну інформацією",mapFiles:"Файли карти",geographicActivies:"Географічні дії"},distliab:"Декларація про відповідальність за розповсюдження",custom:"Власний процес замовлення",techpreq:"Необхідні технічні компоненти",availabl:"Доступність"},eainfo:{caption:"Інформація про атрибут та сутність",overview:"Оглядовий опис",eaover:"Огляд сутності та атрибуту",eadetcit:"Цитата з деталей сутності та атрибуту"},idinfo:{caption:"Ідентифікаційна інформація",section:{timeAndStatus:"Час та стан",constraints:"Обмеження",contact:"Контакт",additional:"Додатково"},citeinfo:"Цитата",descript:{caption:"Опис",sAbstract:"Короткий огляд",purpose:"Призначення",supplinf:"Додаткова інформація"},timeperd:{caption:"Часовий період вмісту",current:{caption:"Довідка про актуальність",groundCondition:"Ґрунтові умови",publicationDate:"Дата публікації"}},status:{caption:"Стан",progress:{caption:"Індикатор",complete:"Виконати",inWork:"В роботі",planned:"Заплановано"},update:{caption:"Супровід та частота оновлення",continual:"Безперервний",daily:"Щодня",weekly:"Щотижня",monthly:"Щомісяця",annually:"Щорічно",unknown:"Невідомий",asNeeded:"По мірі потреби",irregular:"Нерегулярний",nonePlanned:"Не планується"}},spdom:{caption:"Екстент",bounding:{caption:"Граничні координати",westbc:"Західна гранична довгота",eastbc:"Східна гранична довгота",northbc:"Північна гранична довгота",southbc:"Південна гранична довгота"}},keywords:{caption:"Ключові слова",theme:"Тема",place:"Місце",stratum:"Шар",temporal:"Часовий",thesaursus:"Повʼязаний тезаурус",delimited:"Ключові слова",themektIsoTopicCategory:"Тема ISO...",themektIsoTopicDialog:"Тема ISO",placektGnis:"Інформаційна система географічних назв"},accconst:"Обмеження доступу",useconst:"Обмеження використання",ptcontac:"Точка контакту для ресурсу",browse:{caption:"Графіка перегляду",browsen:"URL-адреса графіки перегляду",browsed:"Опис файлу графіки перегляду",browset:"Тип файлу графіки перегляду"},datacred:"Кредит набору даних",secinfo:{caption:"Інформація про безпеку",secsys:"Система класифікації безпеки",secclass:{caption:"Класифікація безпеки",topSecret:"Цілком таємний",secret:"Таємний",confidential:"Конфіденційний",restricted:"Обмежений",unclassified:"Некласифікований",sensitive:"Чутливий"},sechandl:"Опис організації безпеки"},sNative:"Середовище набору нативних даних",crossref:"Перехресне посилання"},metadata:{idinfo:"Ідентифікація",dataqual:"Якість",spdoinfo:"Організація просторових даних",spref:"Просторова привʼязка",eainfo:"Сутність та атрибут",distinfo:"Розподіл",metainfo:"Метадані"},metainfo:{caption:"Метадані Інформація",section:{dates:"Метадані Дати",contact:"Метадані Контакт",standard:"Метадані Стандарт",additional:"Додатково"},metd:"Метадані Дата",metrd:"Метадані Дата перегляду",metfrd:"Метадані Дата майбутнього перегляду",metstdn:"Метадані Назва стандарту",metstdv:"Метадані Версія стандарту",metac:"Метадані Обмеження доступу",metuc:"Метадані Обмеження використання",metsi:{caption:"Метадані Інформація про безпеку",metscs:"Метадані Система класифікації безпеки",metsc:"Метадані Класифікація безпеки",metshd:"Метадані Опис організації безпеки"}},spref:{caption:"Інформація про просторову привʼязку",horizsys:{caption:"Горизонтальна система координат",geograph:{caption:"Географічне",latres:"Роздільна здатність широти",longres:"Роздільна здатність довготи",geogunit:{caption:"Одиниці географічних координат",decimalDegrees:"Десяткові градуси",decimalMinutes:"Десяткові хвилини",decimalSeconds:"Десяткові секунди",degreesAndDecimalMinutes:"Градуси та десяткові хвилини",degreesMinutesAndDecimalSeconds:"Градуси, хвилини та десяткові секунди",radians:"Радіани",grads:"Гради"}},planar:{caption:"Планарний"},local:{caption:"Локальний",localdes:"Локальний опис",localgeo:"Інформація про локальну просторову привʼязку"},geodetic:{caption:"Геодезична модель",horizdn:{caption:"Назва горизонтального датума",nad83:"Північноамериканський датум від 1983 р.",nad27:"Північноамериканський датум від 1927 р."},ellips:{caption:"Назва еліпсоїда",grs80:"Геодезична система привʼязки 80",clarke1866:"Кларк 1866"},semiaxis:"Велика піввісь",denflat:"Знаменник коефіцієнту стиску"}},vertdef:{caption:"Вертикальна система координат",altsys:{caption:"Система висот",altdatum:{caption:"Назва датума висот",navd88:"Північноамериканський вертикальний датум від 1988 р.",ngvd29:"Північноамериканський вертикальний датум від 1929 р."},altres:"Роздільна здатність для висоти",altunits:{caption:"Одиниці відстані для висоти",meters:"Метри",feet:"Фути"},altenc:{caption:"Метод кодування висоти",explicit:"Явні координати підвищення, включені в горизонтальні координати",implicit:"Неявні координати",attribute:"Значення атрибутів"}},depthsys:{caption:"Система глибин",depthdn:{caption:"Назва датума глибин",option1:"Локальна поверхня",option2:"Датум карти; датум для зменшення промірів",option3:"Найнижчий астрономічний приплив",option4:"Найвищий астрономічний приплив",option5:"Середня низька вода",option6:"Середня висока вода",option7:"Середній рівень моря",option8:"Датум наземної зйомки",option9:"Середня низька сизигійна вода",option10:"Середня висока сизигійна вода",option11:"Середня низька квадратурна вода",option12:"Середня висока квадратурна вода",option13:"Середня нижча вода",option14:"Середня нижча мала сизигійна вода",option15:"Середня вища повна вода",option16:"Середня вища мала вода",option17:"Середня нижча повна вода",option18:"Сизигійний приплив",option19:"Нижча тропічна мала вода",option20:"Квадратурна вода",option21:"Повна вода",option22:"Вища повна вода",option23:"Мала вода",option24:"Датум низької води",option25:"Датум високої води",option26:"Нижча низька вода",option27:"Найнижча нормальна мала вода",option28:"Середній рівень припливу",option29:"Індійська сизигійна низька вода",option30:"Прикладна година високої води",option31:"Прикладна година низької води",option32:"Датум річки Колумбія",option33:"Датум низької води Мексиканської затоки",option34:"Екваторіальна сизигійна низька вода",option35:"Приблизний найнижчий астрономічний приплив",option36:"Немає кореляції"},depthres:"Роздільна здатність для глибини",depthdu:{caption:"Одиниці відстані для глибини",meters:"Метри",feet:"Фути"},depthem:{caption:"Метод кодування глибини",explicit:"Явні координати глибини, включені в горизонтальні координати",implicit:"Неявні координати",attribute:"Значення атрибутів"}}}},timeinfo:{caption:"Інформація про часовий період",sngdate:"Одна дата",mdattim:"Декілька дат",rngdates:"Діапазон дат",caldate:"Дата",time:"Час",begdate:"Дата початку",begtime:"Час початку",enddate:"Дата завершення",endtime:"Час завершення"}});