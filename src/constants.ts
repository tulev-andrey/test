export const checkboxesOptions = [
  { label: '1 звезда', value: 1 },
  { label: '2 звезды', value: 2 },
  { label: '3 звезды', value: 3 },
  { label: '4 звезды', value: 4 },
  { label: '5 звезд', value: 5 }
]

export const typesOptions = [
  { label: 'Апартаменты', key: 0, value: 'Апартаменты' },
  { label: 'Отель', key: 1, value: 'Отель' }
]

export const hotelsConst = [
  {
    name: 'Marina Inn',
    country: 'Греция',
    address: 'Фалираки, Родос, Греция',
    stars: 4,
    type: 'Отель',
    description:
      'Этот 4-звездочный отель расположен в центре города. На его территории есть бассейн с террасой и сауна. Из номеров открывается вид на море или на средневековый город.',
    services: [
      'Пляж',
      'Кондиционер',
      'Открытый бассейн',
      'Бесплатная парковка',
      'Бесплатный WiFi',
      'Вид на море',
      'Бесплатный завтрак'
    ],
    min_price: 2789.0,
    currency: 'RUR',
    rating: 4.5,
    reviews_amount: 18,
    last_review: 'Отличное расположение. Вкусный завтрак. Отдыхали с детьми - все понравилось.'
  },
  {
    name: 'Mondrian Suites',
    country: 'Греция',
    address: 'Фалираки, Родос, Греция',
    stars: 5,
    type: 'Апартаменты',
    description:
      'Из окон открывается вид на город.К услугам гостей номера-студио с балконом и чайником в 2,7 км от пляжа.',
    services: ['Пляж', 'Кондиционер', 'Открытый бассейн', 'Платная парковка', 'Бесплатный WiFi', 'Вид на море'],
    min_price: 3245.2,
    currency: 'RUR',
    rating: 5,
    reviews_amount: 4,
    last_review: 'Потрясающее место, в номере есть все необходимое. Красивый вид на море.'
  },
  {
    name: 'Sunny Appartments',
    country: 'Греция',
    address: 'Родос, Родос, Греция',
    stars: 2,
    type: 'Апартаменты',
    description:
      'Все номера и апартаменты оборудованы кондиционером и телевизором с плоским экраном. Также в распоряжении гостей тостер и чайник.',
    services: ['Пляж', 'Кондиционер', 'Бесплатная парковка', 'Бесплатный WiFi'],
    min_price: 1153.0,
    currency: 'RUR',
    rating: 2.4,
    reviews_amount: 36,
    last_review: 'Бассейн очень маленький. Кормят невкусно. Больше не поедем.'
  },
  {
    name: 'Super All Inclusive Hotel',
    country: 'Греция',
    address: 'Родос, Родос, Греция',
    stars: 4,
    type: 'Отель',
    description:
      'Все номера оснащены телевизором с плоским экраном. Из некоторых номеров открывается вид на море или город.',
    services: ['Пляж', 'Кондиционер', 'Открытый бассейн', 'Бесплатный WiFi', 'Вид на море', 'Бесплатный завтрак'],
    min_price: 3689.0,
    currency: 'RUR',
    rating: 4.1,
    reviews_amount: 14,
    last_review: 'Недалёко от пляжа и старого города, вокруг много разных магазинчиков'
  },
  {
    name: 'Adams Hotel',
    country: 'Греция',
    address: 'Родос, Родос, Греция',
    stars: 3,
    type: 'Отель',
    description:
      'Отель расположен всего в 100 метрах от пляжа и в 5-ти минутах ходьбы от исторической части города, недалеко от всех основных достопримечательностей. Из отеля открывается вид на море. К услугам гостей спокойный открытый бассейн.',
    services: [
      'Пляж',
      'Кондиционер',
      'Открытый бассейн',
      'Бесплатная парковка',
      'Бесплатный WiFi',
      'Бесплатный завтрак'
    ],
    min_price: 1896.0,
    currency: 'RUR',
    rating: 0,
    reviews_amount: 0,
    last_review: ''
  }
]

export const countries = [
  {
    label: 'Австралия',
    key: 'AU',
    value: 'Австралия'
  },
  {
    label: 'Австрия',
    key: 'AT',
    value: 'Австрия'
  },
  {
    label: 'Азербайджан',
    key: 'AZ',
    value: 'Азербайджан'
  },
  {
    label: 'Аландские острова',
    key: 'AX',
    value: 'Аландские острова'
  },
  {
    label: 'Албания',
    key: 'AL',
    value: 'Албания'
  },
  {
    label: 'Алжир',
    key: 'DZ',
    value: 'Алжир'
  },
  {
    label: 'Виргинские Острова (США)',
    key: 'VI',
    value: 'Виргинские Острова (США)'
  },
  {
    label: 'Американское Самоа',
    key: 'AS',
    value: 'Американское Самоа'
  },
  {
    label: 'Ангилья',
    key: 'AI',
    value: 'Ангилья'
  },
  {
    label: 'Ангола',
    key: 'AO',
    value: 'Ангола'
  },
  {
    label: 'Андорра',
    key: 'AD',
    value: 'Андорра'
  },
  {
    label: 'Антарктида',
    key: 'AQ',
    value: 'Антарктида'
  },
  {
    label: 'Антигуа и Барбуда',
    key: 'AG',
    value: 'Антигуа и Барбуда'
  },
  {
    label: 'Аргентина',
    key: 'AR',
    value: 'Аргентина'
  },
  {
    label: 'Армения',
    key: 'AM',
    value: 'Армения'
  },
  {
    label: 'Аруба',
    key: 'AW',
    value: 'Аруба'
  },
  {
    label: 'Афганистан',
    key: 'AF',
    value: 'Афганистан'
  },
  {
    label: 'Багамы',
    key: 'BS',
    value: 'Багамы'
  },
  {
    label: 'Бангладеш',
    key: 'BD',
    value: 'Бангладеш'
  },
  {
    label: 'Барбадос',
    key: 'BB',
    value: 'Барбадос'
  },
  {
    label: 'Бахрейн',
    key: 'BH',
    value: 'Бахрейн'
  },
  {
    label: 'Белиз',
    key: 'BZ',
    value: 'Белиз'
  },
  {
    label: 'Белоруссия',
    key: 'BY',
    value: 'Белоруссия'
  },
  {
    label: 'Бельгия',
    key: 'BE',
    value: 'Бельгия'
  },
  {
    label: 'Бенин',
    key: 'BJ',
    value: 'Бенин'
  },
  {
    label: 'Бермуды',
    key: 'BM',
    value: 'Бермуды'
  },
  {
    label: 'Болгария',
    key: 'BG',
    value: 'Болгария'
  },
  {
    label: 'Боливия',
    key: 'BO',
    value: 'Боливия'
  },
  {
    label: 'Бонэйр, Синт-Эстатиус и Саба',
    key: 'BQ',
    value: 'Бонэйр, Синт-Эстатиус и Саба'
  },
  {
    label: 'Босния и Герцеговина',
    key: 'BA',
    value: 'Босния и Герцеговина'
  },
  {
    label: 'Ботсвана',
    key: 'BW',
    value: 'Ботсвана'
  },
  {
    label: 'Бразилия',
    key: 'BR',
    value: 'Бразилия'
  },
  {
    label: 'Британская территория в Индийском океане',
    key: 'IO',
    value: 'Британская территория в Индийском океане'
  },
  {
    label: 'Британские Виргинские острова',
    key: 'VG',
    value: 'Британские Виргинские острова'
  },
  {
    label: 'Бруней',
    key: 'BN',
    value: 'Бруней'
  },
  {
    label: 'Буркина-Фасо',
    key: 'BF',
    value: 'Буркина-Фасо'
  },
  {
    label: 'Бурунди',
    key: 'BI',
    value: 'Бурунди'
  },
  {
    label: 'Бутан',
    key: 'BT',
    value: 'Бутан'
  },
  {
    label: 'Вануату',
    key: 'VU',
    value: 'Вануату'
  },
  {
    label: 'Ватикан',
    key: 'VA',
    value: 'Ватикан'
  },
  {
    label: 'Великобритания',
    key: 'GB',
    value: 'Великобритания'
  },
  {
    label: 'Венгрия',
    key: 'HU',
    value: 'Венгрия'
  },
  {
    label: 'Венесуэла',
    key: 'VE',
    value: 'Венесуэла'
  },
  {
    label: 'Внешние малые острова (США)',
    key: 'UM',
    value: 'Внешние малые острова (США)'
  },
  {
    label: 'Восточный Тимор',
    key: 'TL',
    value: 'Восточный Тимор'
  },
  {
    label: 'Вьетнам',
    key: 'VN',
    value: 'Вьетнам'
  },
  {
    label: 'Габон',
    key: 'GA',
    value: 'Габон'
  },
  {
    label: 'Гаити',
    key: 'HT',
    value: 'Гаити'
  },
  {
    label: 'Гайана',
    key: 'GY',
    value: 'Гайана'
  },
  {
    label: 'Гамбия',
    key: 'GM',
    value: 'Гамбия'
  },
  {
    label: 'Гана',
    key: 'GH',
    value: 'Гана'
  },
  {
    label: 'Гваделупа',
    key: 'GP',
    value: 'Гваделупа'
  },
  {
    label: 'Гватемала',
    key: 'GT',
    value: 'Гватемала'
  },
  {
    label: 'Гвиана',
    key: 'GF',
    value: 'Гвиана'
  },
  {
    label: 'Гвинея',
    key: 'GN',
    value: 'Гвинея'
  },
  {
    label: 'Гвинея-Бисау',
    key: 'GW',
    value: 'Гвинея-Бисау'
  },
  {
    label: 'Германия',
    key: 'DE',
    value: 'Германия'
  },
  {
    label: 'Гернси',
    key: 'GG',
    value: 'Гернси'
  },
  {
    label: 'Гибралтар',
    key: 'GI',
    value: 'Гибралтар'
  },
  {
    label: 'Гондурас',
    key: 'HN',
    value: 'Гондурас'
  },
  {
    label: 'Гонконг',
    key: 'HK',
    value: 'Гонконг'
  },
  {
    label: 'Гренада',
    key: 'GD',
    value: 'Гренада'
  },
  {
    label: 'Гренландия',
    key: 'GL',
    value: 'Гренландия'
  },
  {
    label: 'Греция',
    key: 'GR',
    value: 'Греция'
  },
  {
    label: 'Грузия',
    key: 'GE',
    value: 'Грузия'
  },
  {
    label: 'Гуам',
    key: 'GU',
    value: 'Гуам'
  },
  {
    label: 'Дания',
    key: 'DK',
    value: 'Дания'
  },
  {
    label: 'Джерси',
    key: 'JE',
    value: 'Джерси'
  },
  {
    label: 'Джибути',
    key: 'DJ',
    value: 'Джибути'
  },
  {
    label: 'Доминика',
    key: 'DM',
    value: 'Доминика'
  },
  {
    label: 'Доминиканская Республика',
    key: 'DO',
    value: 'Доминиканская Республика'
  },
  {
    label: 'Демократическая Республика Конго',
    key: 'CD',
    value: 'Демократическая Республика Конго'
  },
  {
    label: 'Европейский союз',
    key: 'EU',
    value: 'Европейский союз'
  },
  {
    label: 'Египет',
    key: 'EG',
    value: 'Египет'
  },
  {
    label: 'Замбия',
    key: 'ZM',
    value: 'Замбия'
  },
  {
    label: 'САДР',
    key: 'EH',
    value: 'САДР'
  },
  {
    label: 'Зимбабве',
    key: 'ZW',
    value: 'Зимбабве'
  },
  {
    label: 'Израиль',
    key: 'IL',
    value: 'Израиль'
  },
  {
    label: 'Индия',
    key: 'IN',
    value: 'Индия'
  },
  {
    label: 'Индонезия',
    key: 'ID',
    value: 'Индонезия'
  },
  {
    label: 'Иордания',
    key: 'JO',
    value: 'Иордания'
  },
  {
    label: 'Ирак',
    key: 'IQ',
    value: 'Ирак'
  },
  {
    label: 'Иран',
    key: 'IR',
    value: 'Иран'
  },
  {
    label: 'Ирландия',
    key: 'IE',
    value: 'Ирландия'
  },
  {
    label: 'Исландия',
    key: 'IS',
    value: 'Исландия'
  },
  {
    label: 'Испания',
    key: 'ES',
    value: 'Испания'
  },
  {
    label: 'Италия',
    key: 'IT',
    value: 'Италия'
  },
  {
    label: 'Йемен',
    key: 'YE',
    value: 'Йемен'
  },
  {
    label: 'Кабо-Верде',
    key: 'CV',
    value: 'Кабо-Верде'
  },
  {
    label: 'Казахстан',
    key: 'KZ',
    value: 'Казахстан'
  },
  {
    label: 'Острова Кайман',
    key: 'KY',
    value: 'Острова Кайман'
  },
  {
    label: 'Камбоджа',
    key: 'KH',
    value: 'Камбоджа'
  },
  {
    label: 'Камерун',
    key: 'CM',
    value: 'Камерун'
  },
  {
    label: 'Канада',
    key: 'CA',
    value: 'Канада'
  },
  {
    label: 'Катар',
    key: 'QA',
    value: 'Катар'
  },
  {
    label: 'Кения',
    key: 'KE',
    value: 'Кения'
  },
  {
    label: 'Кипр',
    key: 'CY',
    value: 'Кипр'
  },
  {
    label: 'Киргизия',
    key: 'KG',
    value: 'Киргизия'
  },
  {
    label: 'Кирибати',
    key: 'KI',
    value: 'Кирибати'
  },
  {
    label: 'Китайская Республика',
    key: 'TW',
    value: 'Китайская Республика'
  },
  {
    label: 'КНДР',
    key: 'KP',
    value: 'КНДР'
  },
  {
    label: 'КНР',
    key: 'CN',
    value: 'КНР'
  },
  {
    label: 'Кокосовые острова',
    key: 'CC',
    value: 'Кокосовые острова'
  },
  {
    label: 'Колумбия',
    key: 'CO',
    value: 'Колумбия'
  },
  {
    label: 'Коморы',
    key: 'KM',
    value: 'Коморы'
  },
  {
    label: 'Коста-Рика',
    key: 'CR',
    value: 'Коста-Рика'
  },
  {
    label: 'Кот-д’Ивуар',
    key: 'CI',
    value: 'Кот-д’Ивуар'
  },
  {
    label: 'Куба',
    key: 'CU',
    value: 'Куба'
  },
  {
    label: 'Кувейт',
    key: 'KW',
    value: 'Кувейт'
  },
  {
    label: 'Кюрасао',
    key: 'CW',
    value: 'Кюрасао'
  },
  {
    label: 'Лаос',
    key: 'LA',
    value: 'Лаос'
  },
  {
    label: 'Латвия',
    key: 'LV',
    value: 'Латвия'
  },
  {
    label: 'Лесото',
    key: 'LS',
    value: 'Лесото'
  },
  {
    label: 'Либерия',
    key: 'LR',
    value: 'Либерия'
  },
  {
    label: 'Ливан',
    key: 'LB',
    value: 'Ливан'
  },
  {
    label: 'Ливия',
    key: 'LY',
    value: 'Ливия'
  },
  {
    label: 'Литва',
    key: 'LT',
    value: 'Литва'
  },
  {
    label: 'Лихтенштейн',
    key: 'LI',
    value: 'Лихтенштейн'
  },
  {
    label: 'Люксембург',
    key: 'LU',
    value: 'Люксембург'
  },
  {
    label: 'Маврикий',
    key: 'MU',
    value: 'Маврикий'
  },
  {
    label: 'Мавритания',
    key: 'MR',
    value: 'Мавритания'
  },
  {
    label: 'Мадагаскар',
    key: 'MG',
    value: 'Мадагаскар'
  },
  {
    label: 'Майотта',
    key: 'YT',
    value: 'Майотта'
  },
  {
    label: 'Макао',
    key: 'MO',
    value: 'Макао'
  },
  {
    label: 'Македония',
    key: 'MK',
    value: 'Македония'
  },
  {
    label: 'Малави',
    key: 'MW',
    value: 'Малави'
  },
  {
    label: 'Малайзия',
    key: 'MY',
    value: 'Малайзия'
  },
  {
    label: 'Мали',
    key: 'ML',
    value: 'Мали'
  },
  {
    label: 'Мальдивы',
    key: 'MV',
    value: 'Мальдивы'
  },
  {
    label: 'Мальта',
    key: 'MT',
    value: 'Мальта'
  },
  {
    label: 'Марокко',
    key: 'MA',
    value: 'Марокко'
  },
  {
    label: 'Мартиника',
    key: 'MQ',
    value: 'Мартиника'
  },
  {
    label: 'Маршалловы Острова',
    key: 'MH',
    value: 'Маршалловы Острова'
  },
  {
    label: 'Мексика',
    key: 'MX',
    value: 'Мексика'
  },
  {
    label: 'Микронезия',
    key: 'FM',
    value: 'Микронезия'
  },
  {
    label: 'Мозамбик',
    key: 'MZ',
    value: 'Мозамбик'
  },
  {
    label: 'Молдавия',
    key: 'MD',
    value: 'Молдавия'
  },
  {
    label: 'Монако',
    key: 'MC',
    value: 'Монако'
  },
  {
    label: 'Монголия',
    key: 'MN',
    value: 'Монголия'
  },
  {
    label: 'Монтсеррат',
    key: 'MS',
    value: 'Монтсеррат'
  },
  {
    label: 'Мьянма',
    key: 'MM',
    value: 'Мьянма'
  },
  {
    label: 'Намибия',
    key: 'NA',
    value: 'Намибия'
  },
  {
    label: 'Науру',
    key: 'NR',
    value: 'Науру'
  },
  {
    label: 'Непал',
    key: 'NP',
    value: 'Непал'
  },
  {
    label: 'Нигер',
    key: 'NE',
    value: 'Нигер'
  },
  {
    label: 'Нигерия',
    key: 'NG',
    value: 'Нигерия'
  },
  {
    label: 'Нидерланды',
    key: 'NL',
    value: 'Нидерланды'
  },
  {
    label: 'Никарагуа',
    key: 'NI',
    value: 'Никарагуа'
  },
  {
    label: 'Ниуэ',
    key: 'NU',
    value: 'Ниуэ'
  },
  {
    label: 'Новая Зеландия',
    key: 'NZ',
    value: 'Новая Зеландия'
  },
  {
    label: 'Новая Каледония',
    key: 'NC',
    value: 'Новая Каледония'
  },
  {
    label: 'Норвегия',
    key: 'NO',
    value: 'Норвегия'
  },
  {
    label: 'ОАЭ',
    key: 'AE',
    value: 'ОАЭ'
  },
  {
    label: 'Оман',
    key: 'OM',
    value: 'Оман'
  },
  {
    label: 'Остров Буве',
    key: 'BV',
    value: 'Остров Буве'
  },
  {
    label: 'Остров Мэн',
    key: 'IM',
    value: 'Остров Мэн'
  },
  {
    label: 'Острова Кука',
    key: 'CK',
    value: 'Острова Кука'
  },
  {
    label: 'Остров Норфолк',
    key: 'NF',
    value: 'Остров Норфолк'
  },
  {
    label: 'Остров Рождества',
    key: 'CX',
    value: 'Остров Рождества'
  },
  {
    label: 'Острова Питкэрн',
    key: 'PN',
    value: 'Острова Питкэрн'
  },
  {
    label: 'Острова Святой Елены, Вознесения и Тристан-да-Кунья',
    key: 'SH',
    value: 'Острова Святой Елены, Вознесения и Тристан-да-Кунья'
  },
  {
    label: 'Пакистан',
    key: 'PK',
    value: 'Пакистан'
  },
  {
    label: 'Палау',
    key: 'PW',
    value: 'Палау'
  },
  {
    label: 'Государство Палестина',
    key: 'PS',
    value: 'Государство Палестина'
  },
  {
    label: 'Панама',
    key: 'PA',
    value: 'Панама'
  },
  {
    label: 'Папуа — Новая Гвинея',
    key: 'PG',
    value: 'Папуа — Новая Гвинея'
  },
  {
    label: 'Парагвай',
    key: 'PY',
    value: 'Парагвай'
  },
  {
    label: 'Перу',
    key: 'PE',
    value: 'Перу'
  },
  {
    label: 'Польша',
    key: 'PL',
    value: 'Польша'
  },
  {
    label: 'Португалия',
    key: 'PT',
    value: 'Португалия'
  },
  {
    label: 'Пуэрто-Рико',
    key: 'PR',
    value: 'Пуэрто-Рико'
  },
  {
    label: 'Республика Конго',
    key: 'CG',
    value: 'Республика Конго'
  },
  {
    label: 'Республика Корея',
    key: 'KR',
    value: 'Республика Корея'
  },
  {
    label: 'Реюньон',
    key: 'RE',
    value: 'Реюньон'
  },
  {
    label: 'Россия',
    key: 'RU',
    value: 'Россия'
  },
  {
    label: 'Руанда',
    key: 'RW',
    value: 'Руанда'
  },
  {
    label: 'Румыния',
    key: 'RO',
    value: 'Румыния'
  },
  {
    label: 'Сальвадор',
    key: 'SV',
    value: 'Сальвадор'
  },
  {
    label: 'Самоа',
    key: 'WS',
    value: 'Самоа'
  },
  {
    label: 'Сан-Марино',
    key: 'SM',
    value: 'Сан-Марино'
  },
  {
    label: 'Сан-Томе и Принсипи',
    key: 'ST',
    value: 'Сан-Томе и Принсипи'
  },
  {
    label: 'Саудовская Аравия',
    key: 'SA',
    value: 'Саудовская Аравия'
  },
  {
    label: 'Свазиленд',
    key: 'SZ',
    value: 'Свазиленд'
  },
  {
    label: 'Северные Марианские острова',
    key: 'MP',
    value: 'Северные Марианские острова'
  },
  {
    label: 'Сейшельские Острова',
    key: 'SC',
    value: 'Сейшельские Острова'
  },
  {
    label: 'Сен-Бартелеми',
    key: 'BL',
    value: 'Сен-Бартелеми'
  },
  {
    label: 'Сен-Мартен',
    key: 'MF',
    value: 'Сен-Мартен'
  },
  {
    label: 'Сен-Пьер и Микелон',
    key: 'PM',
    value: 'Сен-Пьер и Микелон'
  },
  {
    label: 'Сенегал',
    key: 'SN',
    value: 'Сенегал'
  },
  {
    label: 'Сент-Винсент и Гренадины',
    key: 'VC',
    value: 'Сент-Винсент и Гренадины'
  },
  {
    label: 'Сент-Китс и Невис',
    key: 'KN',
    value: 'Сент-Китс и Невис'
  },
  {
    label: 'Сент-Люсия',
    key: 'LC',
    value: 'Сент-Люсия'
  },
  {
    label: 'Сербия',
    key: 'RS',
    value: 'Сербия'
  },
  {
    label: 'Сингапур',
    key: 'SG',
    value: 'Сингапур'
  },
  {
    label: 'Синт-Мартен',
    key: 'SX',
    value: 'Синт-Мартен'
  },
  {
    label: 'Сирия',
    key: 'SY',
    value: 'Сирия'
  },
  {
    label: 'Словакия',
    key: 'SK',
    value: 'Словакия'
  },
  {
    label: 'Словения',
    key: 'SI',
    value: 'Словения'
  },
  {
    label: 'Соломоновы Острова',
    key: 'SB',
    value: 'Соломоновы Острова'
  },
  {
    label: 'Сомали',
    key: 'SO',
    value: 'Сомали'
  },
  {
    label: 'Судан',
    key: 'SD',
    value: 'Судан'
  },
  {
    label: 'СССРсентября1992 года',
    key: 'SU',
    value: 'СССРсентября1992 года'
  },
  {
    label: 'Суринам',
    key: 'SR',
    value: 'Суринам'
  },
  {
    label: 'США',
    key: 'US',
    value: 'США'
  },
  {
    label: 'Сьерра-Леоне',
    key: 'SL',
    value: 'Сьерра-Леоне'
  },
  {
    label: 'Таджикистан',
    key: 'TJ',
    value: 'Таджикистан'
  },
  {
    label: 'Таиланд',
    key: 'TH',
    value: 'Таиланд'
  },
  {
    label: 'Танзания',
    key: 'TZ',
    value: 'Танзания'
  },
  {
    label: 'Тёркс и Кайкос',
    key: 'TC',
    value: 'Тёркс и Кайкос'
  },
  {
    label: 'Того',
    key: 'TG',
    value: 'Того'
  },
  {
    label: 'Токелау',
    key: 'TK',
    value: 'Токелау'
  },
  {
    label: 'Тонга',
    key: 'TO',
    value: 'Тонга'
  },
  {
    label: 'Тринидад и Тобаго',
    key: 'TT',
    value: 'Тринидад и Тобаго'
  },
  {
    label: 'Тувалу',
    key: 'TV',
    value: 'Тувалу'
  },
  {
    label: 'Тунис',
    key: 'TN',
    value: 'Тунис'
  },
  {
    label: 'Туркмения',
    key: 'TM',
    value: 'Туркмения'
  },
  {
    label: 'Турция',
    key: 'TR',
    value: 'Турция'
  },
  {
    label: 'Уганда',
    key: 'UG',
    value: 'Уганда'
  },
  {
    label: 'Узбекистан',
    key: 'UZ',
    value: 'Узбекистан'
  },
  {
    label: 'Украина',
    key: 'UA',
    value: 'Украина'
  },
  {
    label: 'Уоллис и Футуна',
    key: 'WF',
    value: 'Уоллис и Футуна'
  },
  {
    label: 'Уругвай',
    key: 'UY',
    value: 'Уругвай'
  },
  {
    label: 'Фареры',
    key: 'FO',
    value: 'Фареры'
  },
  {
    label: 'Фиджи',
    key: 'FJ',
    value: 'Фиджи'
  },
  {
    label: 'Филиппины',
    key: 'PH',
    value: 'Филиппины'
  },
  {
    label: 'Финляндия',
    key: 'FI',
    value: 'Финляндия'
  },
  {
    label: 'Фолклендские острова',
    key: 'FK',
    value: 'Фолклендские острова'
  },
  {
    label: 'Франция',
    key: 'FR',
    value: 'Франция'
  },
  {
    label: 'Французская Полинезия',
    key: 'PF',
    value: 'Французская Полинезия'
  },
  {
    label: 'Французские Южные и Антарктические Территории',
    key: 'TF',
    value: 'Французские Южные и Антарктические Территории'
  },
  {
    label: 'Херд и Макдональд',
    key: 'HM',
    value: 'Херд и Макдональд'
  },
  {
    label: 'Хорватия',
    key: 'HR',
    value: 'Хорватия'
  },
  {
    label: 'ЦАР',
    key: 'CF',
    value: 'ЦАР'
  },
  {
    label: 'Чад',
    key: 'TD',
    value: 'Чад'
  },
  {
    label: 'Черногория',
    key: 'ME',
    value: 'Черногория'
  },
  {
    label: 'Чехия',
    key: 'CZ',
    value: 'Чехия'
  },
  {
    label: 'Чили',
    key: 'CL',
    value: 'Чили'
  },
  {
    label: 'Швейцария',
    key: 'CH',
    value: 'Швейцария'
  },
  {
    label: 'Швеция',
    key: 'SE',
    value: 'Швеция'
  },
  {
    label: 'Шпицберген и Ян-Майен',
    key: 'SJ',
    value: 'Шпицберген и Ян-Майен'
  },
  {
    label: 'Шри-Ланка',
    key: 'LK',
    value: 'Шри-Ланка'
  },
  {
    label: 'Эквадор',
    key: 'EC',
    value: 'Эквадор'
  },
  {
    label: 'Экваториальная Гвинея',
    key: 'GQ',
    value: 'Экваториальная Гвинея'
  },
  {
    label: 'Эритрея',
    key: 'ER',
    value: 'Эритрея'
  },
  {
    label: 'Эстония',
    key: 'EE',
    value: 'Эстония'
  },
  {
    label: 'Эфиопия',
    key: 'ET',
    value: 'Эфиопия'
  },
  {
    label: 'ЮАР',
    key: 'ZA',
    value: 'ЮАР'
  },
  {
    label: 'Южная Георгия и Южные Сандвичевы острова',
    key: 'GS',
    value: 'Южная Георгия и Южные Сандвичевы острова'
  },
  {
    label: 'Южный Судан',
    key: 'SS',
    value: 'Южный Судан'
  },
  {
    label: 'Ямайка',
    key: 'JM',
    value: 'Ямайка'
  },
  {
    label: 'Япония',
    key: 'JP',
    value: 'Япония'
  }
]
