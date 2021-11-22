const quotes = [
    {
        quote : "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author : "사무엘존슨",
    },
    {
        quote : "피할수 없으면 즐겨라.",
        author : "로버트 엘리엇",
    },
    {
        quote : "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
        author : "L.론허바드",
    },
    {
        quote : "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
        author : "앙드레 말로",
    },
    {
        quote : "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
        author : "단테",
    },
    {
        quote : "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
        author : "톰 모나건",
    },
    {
        quote : "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author : "괴테",
    },
    {
        quote : "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author : "이소룡",
    },
    {
        quote : "작은 기회로 부터 종종 위대한 업적이 시작된다.",
        author : "데모스테네스",
    },
    {
        quote : "세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다.",
        author : "헨렌켈러",
    },
]


const $quote = document.querySelector("#quote span:first-child")
const $autor = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

$quote.innerText = todaysQuote.quote
$autor.innerText = todaysQuote.author
