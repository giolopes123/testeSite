
let questions = [
    {
    numb: 1,
    question: "(Enem 2019) As redes de alta tensão para transmissão de energia elétrica geram campo magnético variável o suficiente para induzir corrente elétrica no arame das cercas. Tanto os animais quanto os funcionários das propriedades rurais ou das concessionárias de energia devem ter muito cuidado ao se aproximarem de uma cerca quando esta estiver próxima a uma rede de alta tensão, pois, se tocarem no arame da cerca, poderão sofrer choque elétrico.<br>Para minimizar este tipo de problema, deve-se:",
    answer: "A) Fazer o aterramento dos arames da cerca.",
    options: [
      "A) Fazer o aterramento dos arames da cerca.",
      "B) Acrescentar fusível de segurança na cerca.",
      "C) Realizar o aterramento da rede de alta tensão.",
      "D) Utilizar fios encapados com isolante na rede de alta tensão.",
      "E) Instalar fusível de segurança na rede de alta tensão."
    ],
    solution: "<strong>Letra A.</strong> Ao tocar na cerca, a corrente elétrica pode percorrer o corpo de uma pessoa, deslocando-se da cerca para o solo ou do solo para a cerca. <i>A função do fio terra é desviar essa corrente elétrica</i> do corpo dessa pessoa para o fio conectado na terra, pois esse fio fornecerá um caminho para eletricidade com uma resistência elétrica praticamente nula."
  },
    {
    numb: 2,
    question: "Com o avanço das multifunções dos dispositivos eletrônicos portáteis, como os smartphones, o gerenciamento da duração da bateria desses equipamentos torna-se cada vez mais crítico. O manual de um telefone celular diz que a quantidade de carga fornecida pela sua bateria é de 1500 mAh.<br>A quantidade de carga fornecida por essa bateria, em coulomb, é de",
    answer: "C) 5400",
    options: [
      "A) 90",
      "B) 1500",
      "C) 5400",
      "D) 5.400.000",
      "E) 90.000"
    ],
    solution: "<br><strong>Letra C.</strong> A carga de 1500 mAh significa que a bateria consegue manter uma corrente elétrica i = 1500 ∙ 10-3A durante um intervalo de tempo de Δt = 1 h = 3600 s. <br><b> i=Q/Δt <br> 1500 * 10^-3 = Q/3600<br>Q = 3600 * 1500 * 10^-3 <br>Q = 5400 C</b>"
  },
    {
    numb: 3,
    question: "A figura mostra a bateria de um computador portátil, a qual necessita de uma corrente elétrica de 2 A para funcionar corretamente.<br><img src='assets/img/q3 enemm.png' alt='imagem' width='400px'><br>Quando a bateria está completamente carregada, o tempo máximo, em minuto, que esse notebook pode ser usado antes que ela “descarregue” completamente é",
    answer: "C) 132",
    options: [
      "A) 24,4",
      "B) 36,7",
      "C) 132",
      "D) 333",
      "E) 528"
    ],
    solution: "<strong>Letra C.</strong> Na figura, nós observamos que Q = 4400 mAh.<br> <strong>i = Q/Δt <br> 2 = (4400 * 10^-3)/Δt <br> Δt = (4400 * 10^-3)/2<br>Δt = 2,2 horas <br> Δt = 2,2 * 60 = 132 min</strong>"
  },
    {
    numb: 4,
    question: "(Enem) No território brasileiro, existem períodos do ano que apresentam queda na umidade do ar, fazendo com que o ar fique bastante seco. Nessa época, é comum observar que as pessoas, ao saírem do carro e tocarem a maçaneta da porta, levam pequenos choques elétricos. Além disso, pessoas que ficam muito tempo em contato com aparelhos eletrodomésticos, ou que dormem com roupas feitas de determinados materiais, como a seda, ao tocarem objetos metálicos, também sentem as descargas elétricas, ou seja, levam um choque elétrico.<br>O corpo humano sofre com esse fenômeno de descarga elétrica, comportando-se como um condutor, pois",
    answer: "B) permite que uma quantidade líquida de carga se desloque com facilidade através do corpo.",
    options: [
      "A) oferece resistência nula ao movimento da quantidade líquida de carga através do corpo.",
      "B) permite que uma quantidade líquida de carga se desloque com facilidade através do corpo.",
      "C) permite que uma quantidade líquida de carga se desloque com dificuldade através do corpo.",
      "D) reduz o deslocamento da quantidade líquida de carga em função do aumento da diferença de potencial.",
      "E) alterna a capacidade de deslocamento da quantidade líquida de carga no corpo, facilitando ou dificultando o fenômeno."
    ],
    solution: "<strong>Letra B. </strong> Embora seja condutor de eletricidade, nosso corpo possui uma resistência elétrica, e essa resistência elétrica, por ser baixa, permite com que ele seja facilmente percorrido por uma corrente elétrica."
  },
    {
    numb: 5,
    question: "(Enem) Um circuito em série é formado por uma pilha, uma lâmpada incandescente e uma chave interruptora. Ao se ligar a chave, a lâmpada acende quase instantaneamente, irradiando calor e luz. Popularmente, associa-se o fenômeno da irradiação de energia a um desgaste da corrente elétrica, ao atravessar o filamento da lâmpada, e à rapidez com que a lâmpada começa a brilhar. Essa explicação está em desacordo com o modelo clássico de corrente. <br> De acordo com o modelo mencionado, o fato de a lâmpada acender quase instantaneamente está relacionado à rapidez com que",
    answer: "D) o campo elétrico se estabelece em todos os pontos do circuito.",
    options: [
      "A) o fluido elétrico se desloca no circuito.",
      "B) as cargas negativas móveis atravessam o circuito.",
      "C) a bateria libera cargas móveis para o filamento da lâmpada.",
      "D) o campo elétrico se estabelece em todos os pontos do circuito.",
      "E) as cargas positivas e negativas se chocam no filamento da lâmpada."
    ],
    solution: "<strong>Letra D.</strong> Ao ligar a chave, a bateria faz surgir no circuito um campo elétrico que puxará ou empurrará os elétrons livres no filamento da lâmpada, e a interação das cargas com o campo elétrico ocorrerá quase instantaneamente."
  },
  

     {
     numb: 6,
     question: "(Enem 2020) Um estudante tem uma fonte de tensão com corrente contínua que opera em tensão fixa de 12 V. Como precisa alimentar equipamentos que operam em tensões menores, ele emprega quatro resistores de 100 para construir um divisor de tensão. Obtém-se esse divisor associando os resistores, como exibido na figura. Os aparelhos podem ser ligados entre os pontos A, B, C, D e E, dependendo da tensão especificada. <img src='assets/img/q6 enem.png'><br>Ele tem um equipamento que opera em 9,0 V com uma resistência interna de 10 kΩ.<br>Entre quais pontos do divisor de tensão esse equipamento deve ser ligado para funcionar corretamente e qual será o valor da intensidade da corrente nele estabelecida?",
     answer: "D) Entre B e E; 0,9 mA.",
     options: [
       "A) Entre A e C; 30 mA.",
       "B) Entre B e E; 30 mA.",
       "C) Entre A e D; 1,2 mA.",
       "D) Entre B e E; 0,9 mA.",
       "E) Entre A e E; 0,9 mA."
    ],
    solution: "<strong> Letra D</strong> <br><strong> 9 = 10 * 10^-3 * i<br>i = 0,9 * 10^-3<br>i = 0,9mA</strong><br>As alternativas D e E estão coerentes quanto à corrente.<br>Com os quatro resistores de 100 Ω associados em série, a ddp total (12 volts) será distribuída em partes iguais:<br>12/4 resistores = 3 volts em cada resistor<br>Entre os pontos B e E, temos UBE = UBC + UCD + UDE = 3 + 3 + 3 = 9 V, o que torna a letra D a alternativa correta."
   },

   {
    numb: 7,
    question: "<div style='margin-top: 50px'>(Enem 2016) Três lâmpadas idênticas foram ligadas no circuito esquematizado. A bateria apresenta resistência interna desprezível, e os fios possuem resistência nula. Um técnico fez uma análise do circuito para prever a corrente elétrica nos pontos: A, B, C, D e E; e rotulou essas correntes de IA, IB, IC, ID e IE respectivamente.<br><img src='assets/img/q7 enem.png'><br>O técnico concluiu que as correntes que apresentam o mesmo valor são</div>",
    answer: "A) IA = IE e IC = ID.",
    options: [
       "A) IA = IE e IC = ID.",
       "B) IA = IB = IE e IC = ID.",
       "C) IA = IB, apenas.",
       "D) IA = IB = IE, apenas.",
       "E) IC = IB, apenas."
    ],
    solution: "<strong>Letra A.</strong> Como as lâmpadas têm a mesma resistência elétrica, a corrente total será dividida em partes iguais, e as lâmpadas serão percorridas pela mesma corrente.<br>- IA= IB, que é a corrente total.<br>- IC = ID, que é um terço da corrente total (a corrente que passa em cada uma das 3 lâmpadas)."
   },

   {
    numb: 8,
    question: "(Enem 2018) Muitos smartphones e tablets não precisam mais de teclas, uma vez que todos os comandos podem ser dados ao se pressionar a própria tela. Inicialmente essa tecnologia foi proporcionada por meio das telas resistivas, formadas basicamente por duas camadas de material condutor transparente que não se encostam até que alguém as pressione, modificando a resistência total do circuito de acordo com o ponto onde ocorre o toque. A imagem é uma simplificação do circuito formado pelas placas, em que A e B representam pontos onde o circuito pode ser fechado por meio do toque.<img src='assets/img/q8 enem.png'><br>Qual é a resistência equivalente no circuito provocada por um toque que fecha o circuito no ponto A?",
    answer: "C) 6,0",
    options: [
       "A) 1,3",
       "B) 4,0",
       "C) 6,0",
       "D) 6,7",
       "E) 12,0"
    ],
    solution: "<strong>Letra C.</strong> Fechando o circuito em A, teremos dois resistores de 4 KΩ em paralelo que podem ter uma resistência equivalente de 2 KΩ, que ficará em série com o resistor de 4 KΩ, tendo assim uma resistência equivalente de:<br>Req = 2 + 4 = 6 kΩ"
   },
];
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    //timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location = './index.html'; //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        //timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    const gabarito = document.querySelector(".gabarito");

    gabarito.innerHTML = '';

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[4] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }

    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option

    const gabarito = document.querySelector(".gabarito");
    

          
    /*This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          */

    let video_tag = '<div class="accordion accordion-flush" id="accordionFlushExample"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"><strong>Veja a Resolução da questão:</strong></button></h2><div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"><div class="accordion-body">' + questions[que_count].solution + '</div></div></div>';
    gabarito.innerHTML = video_tag;
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>e meus parabéns 🎉, você conseguiu <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>e que legal 😎, você conseguiu <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>e sinto muito 😐, você acertou <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
   
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  
}
