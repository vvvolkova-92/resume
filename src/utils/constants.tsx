import photo from "../images/photo.jpeg";
import telegramQr from "../images/qrtelega.png";
import githubQr from "../images/qrgithub.png";
import linkedInQr from "../images/qrlinkedin.png";
import {IInitialData} from "../types/types";

export const ToolTipContent = 'Позволь мне обращаться к тебе на «ты»: в конце концов, прочитав мое резюме, ты многое обо мне узнаешь. Даже больше, чем знают друзья..';

export const ToolTipZodiac = 'Я надеюсь этот пункт был выбран ради шутки, иначе... бросай это резюме, нам не по пути XD';

export enum ThemeColor {
  Light = "light",
  Dark = "dark",
};

export const initialData:IInitialData = {
  personalInformation: {
    fullName: 'Волкова Виолетта Владимировна',
    shortName: 'Виолетта Волкова',
    photo: photo,
    city: 'МО (Домодедово) / Москва',
    age: 30,
    familyStatus: 'замужем, детей нет',
    zodiac: 'Близнецы',
    telephone: '+7 (985) 623 35 35',
    email: ['saiviolet@gmail.com', 'saivioletjob@yandex.ru'],
    telegram: 'https://t.me/violettavolkova',
    telegramQr: telegramQr,
    github: 'https://github.com/vvvolkova-92',
    githubQr: githubQr,
    linkedIn: 'www.linkedin.com/in/vvvolkova',
    linkedInQr: linkedInQr,
    hobby: ['чтение научпопа', 'рисование акварелью'],
    animals: 'И котики, и собачки =)',
    stack: ['HTML5','CSS3','SCSS', 'JavaScript', 'TypeScript', 'React', 'Webpack', 'Vite','ParselJS'],
    personalQualities: [
      'Учитывая специфику работы администратора в большой больнице, успешно разрешаю конфликтные ситуации',
      'Исходя из предыдущего пункта - весьма стрессоустойчива',
      'Инициативна - например, писала инструкции/обучение для коллег',
      'Умею адаптироваться к любым обстоятельствам: работу предметного фотографа сменила на админа регистратуры',
      'Целеустремленна - на финишной прямой в 1.5-годовом курсе Яндекс.Практикума'
    ],
  },
  education: {
    university: [
      {
        name: 'Горно-электромеханический техникум Криворожского Национального Университета',
        year: '2008-2012',
        specialization: 'Разработка программного обеспечения',
        city: 'Кривой Рог, Украина',
        status: 'окончен / красный диплом',
      },
      {
        name: 'Харьковский национальный университет радиоэлектроники',
        year: '2013-2014',
        specialization: 'Компьютерная инженерия',
        city: 'Харьков, Украина',
        status: 'не окончен / переезд',
      },
    ],
    courses: [
      {
        name: 'Яндекс.Практикум',
        year: '2021-настоящее время',
        specialization: 'Веб-разработка+',
        city: 'Москва',
        status: 'не окончен / до окончания 3 месяца',
      },
      {
        name: 'Freecodecamp',
        year: '2022-настоящее время',
        specialization: 'Frontend cources',
        city: 'Москва',
        status: 'бесплатные курсы',
      },
    ],
    projects: [
      {
        name: 'Учебная работа "Шахматный клуб"',
        description: 'Вёрстка адаптивного одностраничника согласно макета с использованием методологии БЭМ и настройки слайдера Swapper под проект.',
        stack: 'HTML / SCSS / JavaScript',
        link: 'https://vvvolkova-92.github.io/chess/'
      },
      {
        name: 'SPA "Путешествия по России"',
        description: 'Рефакторинг учебного проекта на React. Внесла свои правки в визуальную составляющую, сделала свою сборку и поигралась с API правительства Москвы.',
        stack: 'SCSS / React / TypeScript / Axios / ParselJS',
        link: 'https://vvvolkova-92.github.io/russian-travel/'
      },
      {
        name: 'Учебная работа "Место"',
        description: 'Адаптивная верстка макета + ванильный js / Добавление карточек, изменение профайла, лайк карточки',
        stack: 'HTML / CSS / JS',
        link: 'https://vvvolkova-92.github.io/mesto-project/'
      },
      {
        name: 'Реакт-бургер',
        description: 'Сервис по сборке и оформлению бургера. Авторизация, просмотр своих заказов, просмотр списка всех заказов.',
        stack: 'React / Redux / TypeScript',
        link: 'https://vvvolkova-92.github.io/react-burger'
      },
      {
        name: 'Страница с Погодой',
        description: 'Совместная работа со студентом Практикума\n' +
            'UI с нуля (например, часы и прогрессбар). Текущая погода и прогноз на 5 дней вперед. Автоматически чекается местоположение. Поиск по городам. API openweathermap',
        stack: 'React / Styled Components / linter',
        link: 'https://svdgtl.github.io/weather/'
      },
      {
        name: '"Злодеи" - визуализация алгоритмов сортировки',
        description: 'Сортировка злодеев по уровню их злодейства под песню №1 из тусовочного диска Барни Стинсона.',
        stack: 'SCSS / React /пакеты react-select и tsparticles',
        link: 'https://vvvolkova-92.github.io/villain-party/'
      },
      {
        name: 'Резюме - выбери и распечатай',
        description: 'Пошаговая форма с чекбоксами для формирования резюме с возможностью его распечатать или сохранить в .pdf',
        stack: 'REACT / TYPESCRIPT / STYLED-COMPONENTS / VITE',
        link: 'https://vvvolkova-92.github.io/resume/'
      },
    ],
  },
  works: [
    {
      spec: false,
      organization: 'ООО «Полигон»',
      name: 'Менеджер по продажам услуг',
      year: 'Январь 2011 — январь 2012',
      about: [
        'Прием входящих телефонных звонков и заявок от клиентов и партнеров',
        'Продажа услуг и продуктов провайдера (Киевстар)',
        'Работа в CRM'
      ],
    },
    {
      spec: true,
      organization: 'Фриланс',
      name: 'Контент-менеджер',
      year: 'Январь 2013 — январь 2014',
      about: [
        'Наполнение товарами сайтов (onlinedog.ru, zdorovee.com, condika.net и т.д.)',
        'Администрирование сайтов интернет-магазинов',
        'Информационное наполнение, а также доработки в дизайне и верстке сайтов (PrestaShop, Wordpress, OpenCart, самописные движки)',
        'Взаимодействие с веб-студией и фрилансерами (в подчинении 3 человека)',
        'Разработка логотипов (и/или их корректировка), фирменный стиль, дизайн страниц сайтов',
        'Разработка презентаций товара или услуг',
      ],
    },
    {
      spec: false,
      organization: 'Фриланс',
      name: 'Специалист службы техподдержки',
      year: 'Январь 2014 — январь 2015',
      about: ['Удаленная работа (техническая поддержка пользователей)'],
    },
    {
      spec: false,
      organization: 'ИП Пигарева Н.К.',
      name: 'Фотограф',
      year: 'Март 2015 — июль 2019',
      about: [
        'Предметная фотосъёмка для интернет-магазина (бижутерия, кожгалантерея, часы)',
        'Обработка фотографий, создание коллажей',
        'Подготовка фото для добавления на сайт',
        'Создание рекламных баннеров для сайта',

      ],
    },
    {
      spec: false,
      organization: 'ИП Храмушина А.А.',
      name: 'Фотограф',
      year: 'Сентябрь 2019 — декабрь 2021',
      about: [
        'Предметная фотосъёмка для интернет-магазина (бижутерия, кожгалантерея, часы)',
        'Организация процесса съемки',
        'Предметное фото согласно требований заказчика',
        'Подготовка товара к фото',
        'Выгрузка товара для дальнейшего размещения на сайт (без ретуши)'
      ],
    },
    {
      spec: false,
      organization: 'ГБУЗ «Морозовская ДГКБ ДЗМ»',
      name: 'Администратор',
      year: 'Декабрь 2021 — по настоящее время',
      about: [
        'Работа в регистратуре Консультативно-диагностического центра',
        'Запись пациентов на процедуры к врачам клиники',
        'Оперативное решение возникающих вопросов',
        'Работа в специализированной мед. программе Медиалог',
        'Оформление талонов в 1С',
        'Консультирование по приему и расценкам'
      ],
    },
    {
      spec: true,
      organization: 'Яндекс.Практикум (обучение)',
      name: 'студент курса "ВЕб-разработка+"',
      year: 'Июль 2021 — по настоящее время',
      about: [
        'Написание учебных проектов в рамках Яндекс.Практикума для закрепления пройденного материала (все работы проходят код-ревью от специалистов)',
      ],
    },
  ]
};

