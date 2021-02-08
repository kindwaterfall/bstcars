export const reasons = [
    {
        title: 'Про', 
        span: 'Нас',
        text: 'Будучи на ринку авто вже багато років, ми еволюціонували в компанію, яка старається максимально легко і швидко розуміти свого клієнта. Ми надаємо можливість отримати в нове авто зі США для сім’ї, бізнесу та роботи за розумні гроші.'
    },
    {
        title: 'Чому',
        span: 'BST',
        text: 'Buy – допоможемо Вам купити саме те авто, про яке Ви мрієте Service – обслужимо Ваше авто якнайкраще Time – збережемо Ваш дорогоцінний час'
    },
    {
        title: 'Чому варто прибдати авто саме в',
        span: 'нас:',
        children: [
            { 
                title: 'Вибір',
                text: 'Широкий вибір як сучасних авто, так і легендарні американські моделі.'
            },
            { 
                title: 'Ціна',
                text: 'Придбати авто в США можна в середньому на 20-40% дешевше, ніж аналогічний авто в Україні або Європі.'
            },
            { 
                title: 'Якість',
                text: 'Якість збірки авто з США відрізняється від європейських і азіатських аналогів. Американці більш вимогливі до комфорту автомобіля і його безпеки.'
            },
            { 
                title: 'Пробіг',
                text: 'Ви можете не переживати, що колишній власник скрутив пробіг, оскільки пробіг заноситься і зберігається в спеціальній базі.'
            }
        ]
    }
];

export let carsFrom = ['Усі', 'США', 'Європа'];

export let carsList = [
    {name: 'Audi', models: ['A4', 'A8']},
    {name: 'Kia', models: ['A1', 'A2']},
    {name: 'Renault', models: ['A1', 'A2']},
    {name: 'Honda', models: ['A1', 'A2']},
    {name: 'Fiat', models: ['A1', 'A2']},
    {name: 'Nissan', models: ['A1', 'A2']},
    {name: 'Toyota', models: ['A1', 'A2']}
];

export let carsBodyType = [
    'https://bstcars.com.ua/wp-content/uploads/2020/09/%D1%81%D0%B5%D0%B4%D0%B0%D0%BD.jpeg',
    'https://bstcars.com.ua/wp-content/uploads/2020/09/%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%BA%D1%83%D0%BF%D0%B5.jpeg',
    'https://bstcars.com.ua/wp-content/uploads/2020/09/Minivan.jpeg',
    'https://bstcars.com.ua/wp-content/uploads/2020/09/%D0%9F%D0%BE%D0%B7%D0%B0%D1%88%D0%BB%D1%8F%D1%85%D0%BE%D0%B2%D0%B8%D0%BA.jpeg'
]

export let carsFuelType = ['Гібрид', 'Електро', 'Petrol+CNG'];

export let cars = [
    {
        id: 1,
        name: 'Volkswagen Atlas V6 SEL 4MOTION 2019 blue',
        model: 'Atlas',
        description: 'Представляю ваші увазі великий шести місний кроссовер. Можна сказати лідер у своєму сeгменті. На одометрі 5220 км. Авто нове 11го місяця 2019 року. Салон шкіряний дуже гарно виглядає. Має 2 екрана один з яких сенсорний. Потужність 280 к/с. Має велику панорамну. Ну і просто надійне авто. Детальніше за номером. Торг біля машини.',
        picture: 'https://bstcars.com.ua/wp-content/uploads/2021/01/IMG_0152-235x196.jpg',
        details: [
            { name: 'Рік випуску', value: '2019' },
            { name: 'Пробіг (Км)', value: '5000' },
            { name: 'Пальне', value: 'Бензин' },
            { name: 'Об\'єм двигуна', value: '3.6' },
            { name: 'Потужність двигуна (К/c)', value: '280' },
            { name: 'Коробка передач', value: 'Автомат' },
            { name: 'Привід', value: 'Передній' },
            { name: 'Кількість сидінь', value: '7' },
            { name: 'Кількість дверей', value: '5' },
            { name: 'VIN Код', value: '1V2MR2CA2KC616922' },
            { name: 'Стан автомобіля', value: 'Ідеальний' },
            { name: 'Пригнаний з', value: 'США' }
        ],
        specifications: [
            {name: 'Кондиціонер', status: true},
            {name: 'Литі диски', status: true},
            {name: 'ESP', status: true},
            {name: 'Підігрів сидінь', status: true},
            {name: 'Шкіряний салон', status: true},
            {name: 'Круіз контроль', status: true},
            {name: 'Аудіо вхід', status: true},
            {name: 'USB вхід', status: true},
            {name: 'Ксенонові фари', status: true},
            {name: 'ABS', status: true},
            {name: 'Bluetooth', status: true}
        ],
        contacts: [
            { state: 'Львівська'},
            { city: 'Львів'}
        ],
        price: "33,000"
    }
]

export let carsAmountOnPage = ['10', '20', '50', 'Усі'];
export let carsSort = ['Останні додані', 'Перші додані', 'Від дешевших', 'Від дорожчих'];