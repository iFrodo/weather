const apiKey ='42d632e68eef4abc9ae151808232006';
// http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London
const query = 'https://api.weatherapi.com/v1/current.json?key=42d632e68eef4abc9ae151808232006&q=Simferopol,Ukraine&aqi=no'


fetch(query).then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
    console.log(data.current.temp_c)
    document.querySelector('.weather__temp').innerHTML = `Температура : ${data.current.temp_c} C`
    document.querySelector('.weather__wind').innerHTML= `Скорость ветра: ${Math.ceil(data.current.wind_kph / 3.6)}м/c (${data.current.wind_kph} км/ч)`
    document.querySelector('.weather__humidity').innerHTML = `Влажность: ${data.current.humidity}%`
    document.querySelector('.weather__condition').innerHTML = data.current.condition.text
    document.querySelector('.weather__ico').src = data.current.condition.icon
    document.querySelector('.weather__feeling').innerHTML = `По ощущению: ${data.current.feelslike_c} С`
    document.querySelector('.weather__city').innerHTML = `г. ${data.location.name}`

})

// let query1 = 'https://catfact.ninja/fact'
// fetch(query1).then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data)

//     document.querySelector('.title1').innerHTML = ` ${data.fact} `
// })





// const Http = new XMLHttpRequest();
// Http.open('GET',query)
// Http.send();
// Http.onreadystatechange=(e)=>{
//     console.log(Http.response)
// }

let facts = 
`Всего существует 33 основных кошачьих породы. А количество домашних кошек в мире достигает 500 миллионов.
Частота пульса у кошки гораздо выше, чем у человека и составляет от 110 до 140 ударов сердца в минуту.
В среднем кошки весят около пяти килограммов, а вот кошки Сингапурской породы – всего два с небольшим килограмма.
Самыми маленькими кошками считаются представители индийской рыжей пятнистой породы, живущие в Шри-Ланке. Их вес не превосходит полутора килограмм, а размер составляет около 15 сантиметров.
Хоть лев и считается царем зверей, но он не самый крупный представитель кошачьих. Гораздо крупнее льва тигры, вырастающие до трех метров и имеющие вес около трехсот килограммов. Тигр может съесть за один раз около 40 килограммов мяса.
В Англии кошек охотно привлекают для охраны зернохранилищ. Одна кошка, охотящаяся на мышей, за год способна спасти до 10 тонн зерна. Также кошки используются для охраны пищевых складов, причем их официально ставят на довольствие.
Если кошка стоит около вас с поднятым трубой и чуть подрагивающим хвостом – это выражение ее любви к вам.
Кошка размахивает хвостом в том случае, когда она не может сделать выбор.
От удовольствия кошки зачастую растопыривают пальцы, выпуская и втягивая когти.
В дикой природе кошачьи держат хвост горизонтально или опущенным вниз и только домашние кошки могут ходить, подняв хвост трубой.
Домашние кошки друг с другом не общаются с помощью мяуканья. Этот «язык» они используют исключительно для общения с людьми.
За свою жизнь кошка может принести до сотни котят.
В пятидесятых годах прошлого века в Техасе кот по кличке Dusty поставил рекорд по плодовитости – за его долгую жизнь от него родилось более 400 котят. Причем последние котята от него родились, когда ему уже было более 18 лет.
Самое большое число выживших котят в одном помете составляет 14 шт и было зафиксировано у кошки по кличке Bluebell в Южной Африке.
Рисунок кожи на носу у кошки по своей уникальности сравним с отпечатками пальцев.
У кошки 517 мускулов. При этом 12 из них используется для управления каждым ухом.
В скелете кошки почти на 40 костей больше, чем в скелете человека.
Возраст кошки соотносится с человеческим примерно так: когда кошке 3 года – это соответствует примерно 21 человеческому году, когда 8 лет – 40 человеческим годам, а 14 лет – 70-ти человеческим годам.
Дольше всех прожила кошка по кличке Puss в Англии. Она скончалась через пару дней после своего 36 дня рождения.
Средний срок жизни диких кошек гораздо меньше, чем у домашних и составляет около 5 лет.
Одна кошка в Аргентине прожила на дереве шесть лет, где принесла несколько пометов котят.
Температура тела у кошек почти такая же, как у человека – 38 градусов.
Люди, имеющие дома кошку менее подвержены сердечным приступам и в среднем живут дольше тех, кто кошки не имеет.
Кошки ненавидят запах цитрусовых. Это используется для создания средств, отбивающих охоту гадить в определенных местах или точить коготки.
Кошки хорошо понимают ваше настроение и тон голоса, даже если при этом и не показывают вида.
Чем больше вы разговариваете с кошкой, тем больше она разговаривает с вами.
Кошки плохо различают мелкие детали, но довольно хорошо видят в темноте – им вполне хватает нескольких сотых от той освещенности, когда человеческий глаз уже перестает что-то различать во тьме.
Кошка спит почти 16 часов в день. А из того времени, когда она не спит – треть времени ухаживает за собой.
Усы помогают кошке не только определить, пролезет ли она в отверстие, но и ориентироваться в пространстве в целом и получать информацию о температуре, направлении ветра и других параметрах окружающей среды.
Усы у кошки все время находятся в движении. Если кошка чем-то заинтересована – усы смотрят вперед, если усы смотрят назад – она чем-то напугана.
В Англии по статистике на десять жителей приходится девять домашних кошек.
На еду для кошек в среднем американцы тратят около четырех миллиардов долларов в год, что составляет на миллиард меньше, чем на питание для грудных детей.
Самым тяжелым в мире был кот Himmy из Австралии. Его вес составлял 21 кг. Объем его талии составлял 84 см.
Самым маленьким домашним котиком был гималайский кот Tinker Toy, весивший чуть более чем полкило и имевший в холке рост 7 см.
У кошек потеют только подушечки на лапках.
Кошки могут издавать около 100 различных звуков – это в десять раз больше, чем собаки.
Кошки довольно дальнозорки и хорошо видят, начиная с расстояния не менее 70 см.
Кошки втрое чувствительней к громкости звуков. Диапазон частот, воспринимаемый кошками, составляет от 50 Гц до 60 кГц, в то время как человек с трудом в состоянии расслышать даже звук высотой в 20 кГц.
Кошка чувствует запах в среднем в 14 раз лучше, чем человек.
Если кошка защищается – она прижимает уши к голове, а когда нападает – уши расправляет в стороны для большего устрашения.
По некоторым данным мурчанье кошек может благоприятно сказываться на здоровье человека, а их биоэнергетика положительно влияет на работу сердечно-сосудистой системы.
Кошки имеют паранормальные способности, предчувствуя беду до того, как она случится – они предчувствуют землетрясения, пожары, наводнения и другие стихийные бедствия.
В средневековой Европе кошек уничтожали, сжигая на кострах как слуг дьявола. Считается, что именно истребление кошек способствовало эпидемиям чумы, разносившейся расплодившимися грызунами.
Кошки во сне – к обману в любви. Если кошка во сне вас царапает – наяву вы можете заболеть.
Считается, что приютить бездомного котенка, – это привлечь удачу в дом. Если же прогнать прибившегося котенка – 7 лет не видать удачи.
Топить котят – в течение 7 поколений обречь свой род на возможные насильственные смерти в том числе и через утопление.

Если кошка шипит на человека, пришедшего к вам в дом, – человек настроен к вам недоброжелательно, если же ластится к нему – значит человек имеет добрые намерения.
Если кошка ложится на вас или мнет своими лапами определенную часть тела, то там возможна какая-то развивающаяся болезнь, которую она чувствует и от которой хочет помочь вам избавиться.
Места, где любит спать кошка, обычно неблагоприятны для человека и их не следует выбирать для установки кровати или кресла.
Если кошка моется – к скорым гостям, а если свернулась клубочком, укрыв хвостом свой нос, – это к холодам.`;

facts = facts.split(/[\t\n]/)
function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    document.querySelector('.title1').innerHTML = ` ${arr[rand]} `
    // return arr[rand];
}
let ip = `https://api.ipify.org/?format=json`
fetch(ip).then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
    document.querySelector('.ip').innerHTML =  `${data.ip} `


})


console.log(arrayRandElement(facts))