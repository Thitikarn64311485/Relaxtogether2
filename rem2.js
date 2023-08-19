const questions = [
    {
        question:"'ยินดีต้อนรับสู่ประตูอนาคต'",
        options: ["อะ อืม สวัสดี"],
      },
    {
      question:"'สบายดีไหม ขอบคุณที่พยายามอย่างหนักนะ'",
      options: ["ขอบคุณเรื่องอะไร?","ฉันไม่เข้าใจ"],
    },
    {
      question:"ขอบคุณที่เธอพยายามอย่างหนักขอบคุณที่อดทนความกดดันและความจ็บปวด ตอนนี้มีดคงปักเต็มหลังเลยใช่ไหมล่ะ ฮ่า ฮ่า",
      options: ["พูดเรื่องอะไรเนี่ย","เข้าใจแล้วล่ะ"],
    },
    {
      question:"เหนื่อยแย่เลยนะ เจ้าตัวเล็ก",
      options: ["ยินดีมากๆ", "เฮ้ อย่ามาเรียกแบบนั้นนะ"],
    },
    {
      question:["'ไม่ว่ายังไงเธอก็เก่งมากๆอยู่ดี ฉันอยากให้เธอเห็นฉันตอนนี้จังเลยล่ะ'"],
      options: ["ตัวฉันเป็นยังไงหรอ!"],
    },
    {
      question:["'อืม...งดงามราวกับดอกไม้เลยล่ะ'"],
      options: ["ตอบให้ตรงประเด็นสิ!","ยังไงหรอ"],
    },
    {
      question:["'ฮ่า ฮ่า โทษทีไม่ได้ตั้งใจจะกวนประสาทนะ'"],
      options: ["หื้ม..."],
    },
    {
      question:["'งดงามราวกับดอกไม้และเติบโตมาอย่างงดงามเหมือนที่ตั้งใจไว้ยังไงล่ะ'"],
      options: ["จริงหรอ!"],
    },
    {
      question:["'ใช่ ตัวของฉันจะเป็นอย่างไร มันก็คือสิ่งที่เธอคิดอยู่ตอนนี้ซึ่งแน่นอนว่าเธอต้องคิดว่าฉันจะมีความสุข ใช่ไหม?'"],
      options: ["ใช่แน่นอน","ไม่มันไม่ใช่แบบนั้น"],
    },
    {
      question:["'ถ้าเธอตอบว่าไม่จงนึกถึงฉันเธออยากให้ฉันจมปลักอยู่กับความทุกข์หรืออยากให้ฉันเเข็งแกร่งและเติบโตอย่างสวยงาม เธออยากให้ฉันเป็นแบบไหน?'"],
      options: ["Next"],
    },
    {
        question:[" 'อย่างไรก็ตามอย่ายอมแพ้นะไม่ว่ายังไงก็ตาม จงสู้ให้ถึงที่สุดสู้จนเธอไม่รู้สึกเสียดายอะไร'"],
        options: ["Next"],
      },
      {
        question:[" 'ฉันรอเธอที่อนาคตอยู่นะ คนเก่งเราจะมาร่วมใช้ชีวิตที่เบ่งบานด้วยความสุขไปพร้อมกัน'"],
        options: ["Next"],
      },
      {
        question:[" 'แต่ถ้าเธอตอบว่าใช่ สมควรแล้วที่ฉันถึงมีความสุขอยู่ตรงนี้ขนาดนี้มันคุ้มค่ามากๆสำหรับความทุ่มเทของเธอ'"],
        options: ["Next"],
      },
      {
        question:[" 'ขอบคุณมากๆเลยนะเจ้าตัวเล็ก...'"],
        options: ["ขอบคุณเช่นกันนะ"],
      },
      {
        question:[" 'ฉันรอเจอเธอที่อนาคตอยู่นะ! รอวันที่จะพบและใช้ชีวิตที่อัศจรรย์นี้ด้วยกัน'"],
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
  