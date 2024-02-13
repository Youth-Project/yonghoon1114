
const vegetable = [
  // 채소
  { name: '가지', amount: 0, unit: '' , img: require('../assets/ingredients/EggplantIcon.png'), category: 'vegetable'},
  { name: '고추', amount: 0, unit: '', img:require('../assets/ingredients/PepperIcon.png'),category: 'vegetable'},
  { name: '김치', amount: 0, unit: '', img:require('../assets/ingredients/KimchiIcon.png'),category: 'vegetable'},
  { name: '깻잎', amount: 0, unit: '' , img:require('../assets/ingredients/SesameIcon.png'),category: 'vegetable'},
  { name: '당근', amount: 0, unit: '' , img:require('../assets/ingredients/CarrotIcon.png'),category: 'vegetable'},
  { name: '대파', amount: 0, unit: '' , img:require('../assets/ingredients/GreenonionIcon.png'),category: 'vegetable'},
  { name: '마늘', amount: 0, unit: '' , img:require('../assets/ingredients/GarlicIcon.png'),category: 'vegetable'},
  { name: '무', amount: 0, unit: '', img:require('../assets/ingredients/RadishIcon.png'),category: 'vegetable'},
  { name: '배추', amount: 0, unit: '', img:require('../assets/ingredients/NapacabbageIcon.png'),category: 'vegetable'},
  { name: '브로콜리', amount: 0, unit: '' , img:require('../assets/ingredients/BroccoliIcon.png'),category: 'vegetable'},
  { name: '비트', amount: 0, unit: '' , img:require('../assets/ingredients/BeetIcon.png'),category: 'vegetable'},
  { name: '상추', amount: 0, unit: '' , img:require('../assets/ingredients/LettuceIcon.png'),category: 'vegetable'},
  { name: '샐러리', amount: 0, unit: '' , img:require('../assets/ingredients/CeleryIcon.png'),category: 'vegetable'},
  { name: '시금치', amount: 0, unit: '', img:require('../assets/ingredients/SpinachIcon.png'),category: 'vegetable'},
  { name: '아스파라거스', amount: 0, unit: '', img:require('../assets/ingredients/AsparagusIcon.png'),category: 'vegetable'},
  { name: '애호박', amount: 0, unit: '' , img:require('../assets/ingredients/SquashIcon.png'),category: 'vegetable'},
  { name: '양배추', amount: 0, unit: '' , img:require('../assets/ingredients/CabbageIcon.png'),category: 'vegetable'},
  { name: '양송이버섯', amount: 0, unit: '' , img:require('../assets/ingredients/WhiteMushroomIcon.png'),category: 'vegetable'},
  { name: '양파', amount: 0, unit: '' , img:require('../assets/ingredients/OnionIcon.png'),category: 'vegetable'},
  { name: '열무', amount: 0, unit: '', img:require('../assets/ingredients/YeolmuIcon.png'),category: 'vegetable'},
  { name: '오이', amount: 0, unit: '', img:require('../assets/ingredients/CucumberIcon.png'),category: 'vegetable'},
  { name: '콩나물', amount: 0, unit: '' , img:require('../assets/ingredients/BeansproutsIcon.png'),category: 'vegetable'},
  { name: '토마토', amount: 0, unit: '' , img:require('../assets/ingredients/TomatoIcon.png'),category: 'vegetable'},
  { name: '파프리카', amount: 0, unit: '' , img:require('../assets/ingredients/PaprikaIcon.png'),category: 'vegetable'},
  { name: '팽이버섯', amount: 0, unit: '' , img:require('../assets/ingredients/EnokiMushroomIcon.png'),category: 'vegetable'},
  { name: '표고버섯', amount: 0, unit: '', img:require('../assets/ingredients/ShiitakeMushroomIcon.png'),category: 'vegetable'},
  { name: '호박', amount: 0, unit: '', img:require('../assets/ingredients/PumpkinIcon.png'),category: 'vegetable'},
  { name: '숙주', amount: 0, unit: '' , img:require('../assets/ingredients/MungBeanSproutsIcon.png'),category: 'vegetable'},
];

const bread =[
  // 빵/떡
  { name: '가래떡', amount: 0, unit: '' , img:require('../assets/ingredients/RicecakeIcon.png'),category: 'bread_ricecake'},
  { name: '떡국떡', amount: 0, unit: '' , img:require('../assets/ingredients/TteokgukricecakeIcon.png'),category: 'bread_ricecake'},
  { name: '떡볶이 떡', amount: 0, unit: '' , img:require('../assets/ingredients/TteokbokkiricecakeIcon.png'),category: 'bread_ricecake'},
  { name: '바게트', amount: 0, unit: '', img:require('../assets/ingredients/BaguetteIcon.png'),category: 'bread_ricecake'},
  { name: '베이글', amount: 0, unit: '', img:require('../assets/ingredients/BagelIcon.png'),category: 'bread_ricecake'},
  { name: '식빵', amount: 0, unit: '' , img:require('../assets/ingredients/BreadIcon.png'),category: 'bread_ricecake'},
  { name: '모닝빵', amount: 0, unit: '' , img:require('../assets/ingredients/MorningBreadIcon.png'),category: 'bread_ricecake'},
];

const sausage=[
  // 햄/소시지
  { name: '미트볼', amount: 0, unit: '' , img:require('../assets/ingredients/MeatballIcon.png'),category: 'ham_sausage'},
  { name: '베이컨', amount: 0, unit: '' , img:require('../assets/ingredients/BaconIcon.png'),category: 'ham_sausage'},
  { name: '비엔나 소시지', amount: 0, unit: '', img:require('../assets/ingredients/ViennaSausageIcon.png'),category: 'ham_sausage'},
  { name: '소시지', amount: 0, unit: '', img:require('../assets/ingredients/SausageIcon.png'),category: 'ham_sausage'},
  { name: '순대', amount: 0, unit: '' , img:require('../assets/ingredients/SundaeIcon.png'),category: 'ham_sausage'},
  { name: '스팸', amount: 0, unit: '' , img:require('../assets/ingredients/SpamIcon.png'),category: 'ham_sausage'},
  { name: '햄', amount: 0, unit: '' , img:require('../assets/ingredients/HamIcon.png'),category: 'ham_sausage'},
];

const seafood=[
  // 해산물
  { name: '갈치', amount: 0, unit: '' , img:require('../assets/ingredients/CutlassfishIcon.png'),category: 'seafood'},
  { name: '건새우', amount: 0, unit: '', img:require('../assets/ingredients/DriedshrimpIcon.png'),category: 'seafood'},
  { name: '게맛살', amount: 0, unit: '', img:require('../assets/ingredients/CrabmeatIcon.png'),category: 'seafood'},
  { name: '고등어', amount: 0, unit: '' , img:require('../assets/ingredients/MackerelIcon.png'),category: 'seafood'},
  { name: '골뱅이', amount: 0, unit: '' , img:require('../assets/ingredients/WhelkIcon.png'),category: 'seafood'},
  { name: '굴', amount: 0, unit: '' , img:require('../assets/ingredients/OysterIcon.png'),category: 'seafood'},
  { name: '꼬막', amount: 0, unit: '' , img:require('../assets/ingredients/CockleIcon.png'),category: 'seafood'},
  { name: '꽁치', amount: 0, unit: '', img:require('../assets/ingredients/PacificSauryIcon.png'),category: 'seafood'},
  { name: '꽃게', amount: 0, unit: '', img:require('../assets/ingredients/CrabIcon.png'),category: 'seafood'},
  { name: '낙지', amount: 0, unit: '' , img:require('../assets/ingredients/SmallOctopusIcon.png'),category: 'seafood'},
  { name: '다시마', amount: 0, unit: '' , img:require('../assets/ingredients/KelpIcon.png'),category: 'seafood'},
  { name: '대합', amount: 0, unit: '' , img:require('../assets/ingredients/ClamIcon.png'),category: 'seafood'},
  { name: '도다리', amount: 0, unit: '' , img:require('../assets/ingredients/FlounderIcon.png'),category: 'seafood'},
  { name: '동태', amount: 0, unit: '', img:require('../assets/ingredients/FrozenPollackIcon.png'),category: 'seafood'},
  { name: '멸치', amount: 0, unit: '', img:require('../assets/ingredients/AnchovyIcon.png'),category: 'seafood'},
  { name: '명태', amount: 0, unit: '' , img:require('../assets/ingredients/PollockIcon.png'),category: 'seafood'},
  { name: '문어', amount: 0, unit: '' , img:require('../assets/ingredients/OctopusIcon.png'),category: 'seafood'},
  { name: '미역', amount: 0, unit: '' , img:require('../assets/ingredients/SeaweedIcon.png'),category: 'seafood'},
  { name: '바지락', amount: 0, unit: '' , img:require('../assets/ingredients/ClamsIcon.png'),category: 'seafood'},
  { name: '새우', amount: 0, unit: '', img:require('../assets/ingredients/ShrimpIcon.png'),category: 'seafood'},
  { name: '소라', amount: 0, unit: '', img:require('../assets/ingredients/ConchIcon.png'),category: 'seafood'},
  { name: '아귀', amount: 0, unit: '' , img:require('../assets/ingredients/CrotchIcon.png'),category: 'seafood'},
  { name: '어묵', amount: 0, unit: '' , img:require('../assets/ingredients/FishcakeIcon.png'),category: 'seafood'},
  { name: '연어', amount: 0, unit: '' , img:require('../assets/ingredients/SalmonIcon.png'),category: 'seafood'},
  { name: '오징어', amount: 0, unit: '' , img:require('../assets/ingredients/SquidIcon.png'),category: 'seafood'},
  { name: '전복', amount: 0, unit: '', img:require('../assets/ingredients/AbaloneIcon.png'),category: 'seafood'},
  { name: '전어', amount: 0, unit: '', img:require('../assets/ingredients/ShadIcon.png'),category: 'seafood'},
  { name: '조개', amount: 0, unit: '' , img:require('../assets/ingredients/ShellFishIcon.png'),category: 'seafood'},
  { name: '조기', amount: 0, unit: '' , img:require('../assets/ingredients/CroakerIcon.png'),category: 'seafood'},
  { name: '쭈꾸미', amount: 0, unit: '' , img:require('../assets/ingredients/WebfootoctopusIcon.png'),category: 'seafood'},
  { name: '홍합', amount: 0, unit: '' , img:require('../assets/ingredients/MusselIcon.png'),category: 'seafood'},
];

const milk =[
  // 유제품
  { name: '계란', amount: 0, unit: '', img:require('../assets/ingredients/EggIcon.png'),category: 'dairy'},
  { name: '메추리알', amount: 0, unit: '', img:require('../assets/ingredients/QuailEggIcon.png'),category: 'dairy'},
  { name: '모짜렐라 치즈', amount: 0, unit: '' , img:require('../assets/ingredients/MozzarellaIcon.png'),category: 'dairy'},
  { name: '요거트', amount: 0, unit: '' , img:require('../assets/ingredients/YogurtIcon.png'),category: 'dairy'},
  { name: '체다치즈', amount: 0, unit: '' , img:require('../assets/ingredients/CheddarCheeseIcon.png'),category: 'dairy'},
];

const meat=[
  // 고기류
  { name: '닭고기', amount: 0, unit: '', img:require('../assets/ingredients/ChickenIcon.png'),category: 'meat'},
  { name: '돼지고기', amount: 0, unit: '', img:require('../assets/ingredients/PorkIcon.png'),category: 'meat'},
  { name: '소고기', amount: 0, unit: '' , img:require('../assets/ingredients/BeefIcon.png'),category: 'meat'},
  { name: '양고기', amount: 0, unit: '' , img:require('../assets/ingredients/LambIcon.png'),category: 'meat'},
  { name: '오리고기', amount: 0, unit: '' , img:require('../assets/ingredients/DuckMeatIcon.png'),category: 'meat'},
];

const fruit=[
  // 과일
  { name: '감', amount: 0, unit: '' , img:require('../assets/ingredients/PersimmonIcon.png'),category: 'fruit'},
  { name: '건포도', amount: 0, unit: '', img:require('../assets/ingredients/RaisinIcon.png'),category: 'fruit'},
  { name: '귤', amount: 0, unit: '', img:require('../assets/ingredients/MandarinIcon.png'),category: 'fruit'},
  { name: '딸기', amount: 0, unit: '' , img:require('../assets/ingredients/StrawberryIcon.png'),category: 'fruit'},
  { name: '라임', amount: 0, unit: '' , img:require('../assets/ingredients/LimeIcon.png'),category: 'fruit'},
  { name: '레몬', amount: 0, unit: '' , img:require('../assets/ingredients/LemonIcon.png'),category: 'fruit'},
  { name: '망고', amount: 0, unit: '', img:require('../assets/ingredients/MangoIcon.png'),category: 'fruit'},
  { name: '메론', amount: 0, unit: '', img:require('../assets/ingredients/MelonIcon.png'),category: 'fruit'},
  { name: '바나나', amount: 0, unit: '' , img:require('../assets/ingredients/BananaIcon.png'),category: 'fruit'},
  { name: '배', amount: 0, unit: '' , img:require('../assets/ingredients/PearIcon.png'),category: 'fruit'},
  { name: '복숭아', amount: 0, unit: '' , img:require('../assets/ingredients/PeachIcon.png'),category: 'fruit'},
  { name: '블루베리', amount: 0, unit: '', img:require('../assets/ingredients/BlueberriesIcon.png'),category: 'fruit'},
  { name: '사과', amount: 0, unit: '', img:require('../assets/ingredients/AppleIcon.png'),category: 'fruit'},
  { name: '수박', amount: 0, unit: '' , img:require('../assets/ingredients/WatermelonIcon.png'),category: 'fruit'},
  { name: '아보카도', amount: 0, unit: '' , img:require('../assets/ingredients/AvocadoIcon.png'),category: 'fruit'},
  { name: '오렌지', amount: 0, unit: '' , img:require('../assets/ingredients/OrangeIcon.png'),category: 'fruit'},
  { name: '자두', amount: 0, unit: '', img:require('../assets/ingredients/PlumIcon.png'),category: 'fruit'},
  { name: '체리', amount: 0, unit: '', img:require('../assets/ingredients/CherryIcon.png'),category: 'fruit'},
  { name: '키위', amount: 0, unit: '' , img:require('../assets/ingredients/KiwiIcon.png'),category: 'fruit'},
  { name: '파인애플', amount: 0, unit: '' , img:require('../assets/ingredients/PineappleIcon.png'),category: 'fruit'},
  { name: '포도', amount: 0, unit: '' , img:require('../assets/ingredients/GrapeIcon.png'),category: 'fruit'},
];

const grain=[
  // 곡물
  { name: '감자', amount: 0, unit: '', img:require('../assets/ingredients/PotatoIcon.png'),category: 'grain'},
  { name: '고구마', amount: 0, unit: '', img:require('../assets/ingredients/SweetPotatoIcon.png'),category: 'grain'},
  { name: '귀리', amount: 0, unit: '' , img:require('../assets/ingredients/OatsIcon.png'),category: 'grain'},
  { name: '누룽지', amount: 0, unit: '' , img:require('../assets/ingredients/NurungjiIcon.png'),category: 'grain'},
  { name: '밀가루', amount: 0, unit: '' , img:require('../assets/ingredients/FlourIcon.png'),category: 'grain'},
  { name: '부침가루', amount: 0, unit: '', img:require('../assets/ingredients/PancakePowderIcon.png'),category: 'grain'},
  { name: '빵가루', amount: 0, unit: '', img:require('../assets/ingredients/BreadcrumbsIcon.png'),category: 'grain'},
  { name: '옥수수', amount: 0, unit: '' , img:require('../assets/ingredients/CornIcon.png'),category: 'grain'},
  { name: '찹쌀가루', amount: 0, unit: '' , img:require('../assets/ingredients/GlutinousRicePowderIcon.png'),category: 'grain'},
  { name: '통밀', amount: 0, unit: '' , img:require('../assets/ingredients/WholeWheatIcon.png'),category: 'grain'},
];

const bean=[
  // 콩/견과류
  { name: '검은콩', amount: 0, unit: '', img:require('../assets/ingredients/BlackBeansIcon.png'),category: 'bean_nuts'},
  { name: '깨', amount: 0, unit: '', img:require('../assets/ingredients/SesameIcon.png'),category: 'bean_nuts'},
  { name: '두부', amount: 0, unit: '' , img:require('../assets/ingredients/TofuIcon.png'),category: 'bean_nuts'},
  { name: '땅콩', amount: 0, unit: '' , img:require('../assets/ingredients/PeanutIcon.png'),category: 'bean_nuts'},
  { name: '순두부', amount: 0, unit: '' , img:require('../assets/ingredients/SoftTofuIcon.png'),category: 'bean_nuts'},
  { name: '아몬드', amount: 0, unit: '', img:require('../assets/ingredients/AlmondIcon.png'),category: 'bean_nuts'},
  { name: '완두콩', amount: 0, unit: '', img:require('../assets/ingredients/PeaIcon.png'),category: 'bean_nuts'},
  { name: '콩', amount: 0, unit: '' , img:require('../assets/ingredients/BeanIcon.png'),category: 'bean_nuts'},
  { name: '호두', amount: 0, unit: '' , img:require('../assets/ingredients/WalnutIcon.png'),category: 'bean_nuts'},
];

const spice=[
  // 조미료/양념
  { name: '간장', amount: 0, unit: '' , img:require('../assets/ingredients/SoySauceIcon.png'),category: 'seasoning'},
  { name: '고추장', amount: 0, unit: '', img:require('../assets/ingredients/ChiliPepperPasteIcon.png'),category: 'seasoning'},
  { name: '고춧가루', amount: 0, unit: '', img:require('../assets/ingredients/ChiliPowderIcon.png'),category: 'seasoning'},
  { name: '굴소스', amount: 0, unit: '' , img:require('../assets/ingredients/OysterSauceIcon.png'),category: 'seasoning'},
  { name: '굵은소금', amount: 0, unit: '' , img:require('../assets/ingredients/CoarseSaltIcon.png'),category: 'seasoning'},
  { name: '까나리액젓', amount: 0, unit: '' , img:require('../assets/ingredients/CanaryFishSauceIcon.png'),category: 'seasoning'},
  { name: '깨소금', amount: 0, unit: '', img:require('../assets/ingredients/SesameSaltIcon.png'),category: 'seasoning'},
  { name: '꿀', amount: 0, unit: '', img:require('../assets/ingredients/HoneyIcon.png'),category: 'seasoning'},
  { name: '다진마늘', amount: 0, unit: '' , img:require('../assets/ingredients/ChoppedGarlicIcon.png'),category: 'seasoning'},
  { name: '데리야끼 소스', amount: 0, unit: '' , img:require('../assets/ingredients/TeriyakiSauceIcon.png'),category: 'seasoning'},
  { name: '돈까스 소스', amount: 0, unit: '' , img:require('../assets/ingredients/TonkatsuSauceIcon.png'),category: 'seasoning'},
  { name: '된장', amount: 0, unit: '', img:require('../assets/ingredients/SoybeanPasteIcon.png'),category: 'seasoning'},
  { name: '마요네즈', amount: 0, unit: '', img:require('../assets/ingredients/MayonnaiseIcon.png'),category: 'seasoning'},
  { name: '머스타드 소스', amount: 0, unit: '' , img:require('../assets/ingredients/MustardIcon.png'),category: 'seasoning'},
  { name: '멸치액젓', amount: 0, unit: '' , img:require('../assets/ingredients/AnchovyFishSauceIcon.png'),category: 'seasoning'},
  { name: '명란젓갈', amount: 0, unit: '' , img:require('../assets/ingredients/SaltedPollackRoeIcon.png'),category: 'seasoning'},
  { name: '물엿', amount: 0, unit: '', img:require('../assets/ingredients/CornSyrupIcon.png'),category: 'seasoning'},
  { name: '미원', amount: 0, unit: '', img:require('../assets/ingredients/MiwonIcon.png'),category: 'seasoning'},
  { name: '버터', amount: 0, unit: '' , img:require('../assets/ingredients/ButterIcon.png'),category: 'seasoning'},
  { name: '설탕', amount: 0, unit: '' , img:require('../assets/ingredients/SugarIcon.png'),category: 'seasoning'},
  { name: '소금', amount: 0, unit: '' , img:require('../assets/ingredients/SaltIcon.png'),category: 'seasoning'},
  { name: '쇠고기 다시다', amount: 0, unit: '', img:require('../assets/ingredients/BeefSeasoningIcon.png'),category: 'seasoning'},
  { name: '식초', amount: 0, unit: '', img:require('../assets/ingredients/VinegarIcon.png'),category: 'seasoning'},
  { name: '쌈장', amount: 0, unit: '' , img:require('../assets/ingredients/SsamjangIcon.png'),category: 'seasoning'},
  { name: '오징어 젓갈', amount: 0, unit: '' , img:require('../assets/ingredients/SaltedSquidIcon.png'),category: 'seasoning'},
  { name: '올리고당', amount: 0, unit: '' , img:require('../assets/ingredients/OligosaccharideIcon.png'),category: 'seasoning'},
  { name: '올리브유', amount: 0, unit: '', img:require('../assets/ingredients/OliveOilIcon.png'),category: 'seasoning'},
  { name: '짜장가루', amount: 0, unit: '', img:require('../assets/ingredients/JjajangPowderIcon.png'),category: 'seasoning'},
  { name: '참기름', amount: 0, unit: '' , img:require('../assets/ingredients/SesameOilIcon.png'),category: 'seasoning'},
  { name: '청국정', amount: 0, unit: '' , img:require('../assets/ingredients/CheonggukjangIcon.png'),category: 'seasoning'},
  { name: '초고추장', amount: 0, unit: '' , img:require('../assets/ingredients/SuperRedPepperPasteIcon.png'),category: 'seasoning'},
  { name: '춘장', amount: 0, unit: '', img:require('../assets/ingredients/ChunjangIcon.png'),category: 'seasoning'},
  { name: '칠리소스', amount: 0, unit: '', img:require('../assets/ingredients/ChiliSauceIcon.png'),category: 'seasoning'},
  { name: '카레가루', amount: 0, unit: '' , img:require('../assets/ingredients/CurryPowderIcon.png'),category: 'seasoning'},
  { name: '케첩', amount: 0, unit: '' , img:require('../assets/ingredients/KetchupIcon.png'),category: 'seasoning'},
  { name: '토마토소스', amount: 0, unit: '' , img:require('../assets/ingredients/TomatoSauceIcon.png'),category: 'seasoning'},
  { name: '핫소스', amount: 0, unit: '', img:require('../assets/ingredients/HotSauceIcon.png'),category: 'seasoning'},
  { name: '후추', amount: 0, unit: '', img:require('../assets/ingredients/PepperIcon.png'),category: 'seasoning'},
];

const noodle=[
  // 면
  { name: '당면', amount: 0, unit: '' , img:require('../assets/ingredients/NoodleIcon.png'),category: 'noodle'},
  { name: '라면', amount: 0, unit: '' , img:require('../assets/ingredients/RamenIcon.png'),category: 'noodle'},
  { name: '소면', amount: 0, unit: '' , img:require('../assets/ingredients/PlainNoodlesIcon.png'),category: 'noodle'},
  { name: '수제비', amount: 0, unit: '', img:require('../assets/ingredients/SujebiIcon.png'),category: 'noodle'},
  { name: '스파게티 면', amount: 0, unit: '', img:require('../assets/ingredients/SpaghettiNoodlesIcon.png'),category: 'noodle'},
  { name: '우동면', amount: 0, unit: '' , img:require('../assets/ingredients/UdongNoodlesIcon.png'),category: 'noodle'},
  { name: '칼국수면', amount: 0, unit: '' , img:require('../assets/ingredients/KalguksuNoodlesIcon.png'),category: 'noodle'},

];

const truffle=[
  // 트러플
  { name: '트러플', amount: 0, unit: '' , img:require('../assets/ingredients/TruffleIcon.png'),category: 'truffle'},
  { name: '트러플소금', amount: 0, unit: '', img:require('../assets/ingredients/TruffleSaltIcon.png'),category: 'truffle'},
  { name: '트러플오일', amount: 0, unit: '', img:require('../assets/ingredients/TruffleOilIcon.png'),category: 'truffle'},
];

const selected=[
  // 빈어레이
  { name: '트러플소금', amount: 0, unit: 'g', img:require('../assets/ingredients/TruffleSaltIcon.png'),category: 'truffle'},
  { name: '트러플오일', amount: 0, unit: 'g', img:require('../assets/ingredients/TruffleOilIcon.png'),category: 'truffle'},
];

export { vegetable, bread, fruit, sausage, seafood, truffle, noodle, spice, bean, grain, meat, milk, selected};