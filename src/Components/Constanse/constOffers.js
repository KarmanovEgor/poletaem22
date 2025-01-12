import remos from "../../img/Remos.jpeg";
import a33 from "../../img/a33.jpeg";
import cessna from "../../img/cessna.jpg";
import tecnam from "../../img/tecn.jpeg";
import yk18 from "../../img/yk.jpeg";
import socata from "../../img/Scott.jpg";
import photosessia from '../../img/session.jpg';
import genderParty from '../../img/gparty.jpg';
import helic from '../../img/helicopter.JPG'

const plane = {
  title: "Полеты на мировых легендах",
  text: "3 в 1: комфорт, безопасность, удобство управления",
  detail: [
    {
      textPlane:
        "Remos GX — двухместный немецкий сверхлегкий самолёт, оборудован спас системой.",
      planeImage: remos,
      priceList: [
        {
          time: "15 минут полета. Полеты осуществляются над окрестностями Барнаула -",
          price: "6000 рублей",
        },
        {
          time: "20 минут полета",
          price: "8000 рублей",
        },
        {
          time: "30 минут полета. Полеты осуществляются над Барнаулом",
          price: "12000 рублей",
        },
        {
          time: "45 минут полета",
          price: "17000 рублей",
        },
        {
          time: "60 минут полета",
          price: "23000 рублей",
        },
      ],
    },
    {
      textPlane:
        "Аэропракт А-33 – новый самолет производства Самара, оборудован спас системой. ",
      planeImage: a33,
      priceList: [
        {
          time: "15 минут полета. Полеты осуществляются над окрестностями Барнаула",
          price: "6000 рублей",
        },
        {
          time: "20 минут полета",
          price: "8000 рублей",
        },
        {
          time: "30 минут полета. Полеты осуществляются над Барнаулом",
          price: "12000 рублей",
        },
        {
          time: "45 минут полета",
          price: "17000 рублей",
        },
        {
          time: "60 минут полета",
          price: "23000 рублей",
        },
      ],
    },
    {
      textPlane:
        "Cessna 182 ― американский самолет, известный надежностью, комфортом и мягкой посадкой. Он управляется одним пилотом и вмещает 3 пассажиров, поэтому в полет с вами может отправиться фотограф или оператор. Развивает скорость до 302 км/ч.",
      planeImage: cessna,
      priceList: [
        {
            time: "15 минут полета. Полеты осуществляются над окрестностями Барнаула",
            price: "10000 рублей",
          },
          {
            time: "20 минут полета",
            price: "13000 рублей",
          },
          {
            time: "30 минут полета",
            price: "21000 рублей",
          },
          {
            time: "40 минут полета. Полет над окрестностями Барнаула + Новый мост",
            price: "25000 рублей",
          },
          {
            time: "60 минут полета. Большой незабываемый полет над городом",
            price: "33000 рублей",
          },
      ],
    },
    {
      textPlane:
        "Еще одна легенда Tecnam – четырёхместный одномоторный лёгкий самолёт с высоким крылом, после полета на котором вы будете в восторге!",
      planeImage: tecnam,
      priceList: [
        {
            time: "15 минут полета. Полеты осуществляются над окрестностями Барнаула",
            price: "10000 рублей",
          },
          {
            time: "20 минут полета",
            price: "13000 рублей",
          },
          {
            time: "30 минут полета",
            price: "21000 рублей",
          },
          {
            time: "40 минут полета. Полет над окрестностями Барнаула + Новый мост",
            price: "25000 рублей",
          },
          {
            time: "60 минут полета. Большой незабываемый полет над городом",
            price: "33000 рублей",
          },
      ],
    },
    {
      textPlane:
        "Як-18Т отличается отличными летными характеристиками, что делает его идеальным для спортивных полетов и в качестве легкого транспортного средства. Полет на Як-18 оставит у вас яркие впечатления и желание вернуться в небо!",
      planeImage: yk18,
      priceList: [
        {
          time: "15 минут полета. Полеты осуществляются над окрестностями Барнаула",
          price: "6000 рублей",
        },
        {
          time: "20 минут полета ",
          price: "8000 рублей",
        },
        {
          time: "30 минут полета. Полеты осуществляются над Барнаулом",
          price: "12000 рублей",
        },
        {
          time: "45 минут полета",
          price: "17000 рублей",
        },
        {
          time: "60 минут полета",
          price: "23000 рублей",
        },
      ],
    },
    {
      textPlane:
        "Socata Rallye — Легкий спортивный четырехместный самолет французского производства. В кабине пассажир займет место рядом с пилотом, а панорамное остекление кабины позволит наслаждаться захватывающими пейзажами. Самолет способен развивать скорость до 225 км/ч.",
      planeImage: socata,
      priceList: [
        {
            time: "15 минут полета. Полеты осуществляются над окрестностями Барнаула",
            price: "10000 рублей",
          },
          {
            time: "20 минут полета",
            price: "13000 рублей",
          },
          {
            time: "30 минут полета",
            price: "21000 рублей",
          },
          {
            time: "40 минут полета. Полет над окрестностями Барнаула + Новый мост",
            price: "25000 рублей",
          },
          {
            time: "60 минут полета. Большой незабываемый полет над городом",
            price: "33000 рублей",
          },
      ],
    },
  ],
};

const helicopter = {
  text: "Robinson R-44 готов наполнить вашу жизнь незабываемыми эмоциями. Все полеты осуществляются над городом! Вместимость: пилот +3 пассажира",
  img: helic,
  title: "Полёт на вертолёте",
  priceList: [
   { 
    time: '30 минут',
    price: '33000 рублей'
    
   },
   { 
    time: '45 минут',
    price: '33000 рублей'
    
   },
   { 
    time: '30 минут',
    price: '33000 рублей'
    
   }
  ]
};

const photosession = {
    title: 'Фотосессия',
    text: 'У вас есть возможность провести шикарную фотосессию возле самолетов и вертолёта!',
    img: photosessia,
    priceList: [
{
    time: '60 минут с самолетом',
    price: '9000 рублей',
},
{
    time: '60 минут с вертолетом',
    price: '10000 рублей',
}
    ]
};
const party = {
    title: 'Гендер пати',
    img: genderParty ,
    text: 'Устройте незабываемое Гендер-пати, которое запомнится вам и вашим гостям на всю жизнь! Наш самолет пронесется над вами запуская дым в воздухе, символизируя пол вашего будущего ребенка. Ваши друзья и семья будут в восторге от этого уникального мероприятия. ',
    priceList: '13000 рублей'
}
export {plane, helicopter, photosession, party}