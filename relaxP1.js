const questions = [
    {
      question:"'ยินดีที่ได้พบกันอีกครั้งนะ'",
      options: ["ยินดีเหมือนกัน"],
    },
    {
      question:"คนตรงหน้าฉันเป็นยังไงบ้าง?",
      options: ["ฉันสบายดี","เหนื่อยมากเลยล่ะ"],
    },
    {
      question:"แล้วความฝันที่เคยวาดไว้เธอทำมันได้หรือเปล่า?",
      options: ["ไม่เลยมันไม่เป็นเหมือนที่คิดไว้สักอย่าง", "ทำได้สิมันคือความฝันของฉันเชียวนะ"],
    },
    {
      question:["'ไม่ว่าจะดีหรือร้ายฉันภูมิใจในตัวเธอมากเลยนะ'"],
      options: ["ขอบคุณนะ"],
    },
    {
      question:["'มีอะไรอยากบอกกับฉันไหม..'"],
      options: ["มีสิ"],
    },
    {
      question:["'มองเข้าไปในกระจก..แล้วพูดมันออกมาให้หมดเลยนะ'"],
      options: ["Next"],
    },
    {
      question:["'เข้าใจแล้วล่ะ..ไม่ว่ายังไงก็ตามเธอคือผู้ใหญ่ที่ฉันภูมิใจที่สุดจงเติบโตในแบบที่ตัวเองชอบนะ'"],
      options: ["Next"],
    },
    {
      question:["'เมื่อประตูบานหนึ่งปิดประตูอีกบานหนึ่งจะเปิดให้เธออยู่เสมอฉันภูมิใจในตัวเธอมากๆเลยนะ(ผู้ใหญ่ในอนาคตของฉัน)'"],
      options: ["Next"],
    },
    {
      question:["'ออกไปใช้ชีวิตในแบบที่ตัวเองชอบนะคนเก่งของฉัน...ฉันรอวันที่จะได้พบเธอในอนาคตอยู่นะ'"],
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const question = questions[currentQuestion];
  
    questionElement.textContent = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.setAttribute("data-index", index);
      optionButton.onclick = selectAnswer;
      optionsElement.appendChild(optionButton);
    });
  }
  
  function selectAnswer(event) {
    const selectedOptionIndex = event.target.getAttribute("data-index");
    const selectedOption = questions[currentQuestion].options[selectedOptionIndex];
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (selectedOption === correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
  
  function displayResult() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `คะแนนของคุณคือ ${score} คะแนนจาก ${questions.length} คำถาม`;
  }
  
  function checkAnswer() {
    const optionsElement = document.getElementById("options");
    const optionButtons = optionsElement.querySelectorAll("button");
  
    optionButtons.forEach((button) => {
      button.disabled = true;
    });
  }
  
  displayQuestion();
  