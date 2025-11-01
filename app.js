// Quiz Data
const quizzes = [
  {
    id: 1,
    name: "Exp 1: Basic Logic Gates & Boolean Theorems",
    questions: [
      { q: "Which gate outputs 1 only when both inputs are 1?", options: ["OR gate", "AND gate", "NOT gate", "NOR gate"], answer: 1 },
      { q: "According to De Morgan's Law 1, A+B equals:", options: ["A.B", "Ā.B̄", "A+B̄", "Ā.B"], answer: 1 },
      { q: "The NOT gate is also called:", options: ["Inverter", "Buffer", "Amplifier", "Converter"], answer: 0 },
      { q: "The XOR gate outputs 1 when:", options: ["Both inputs are same", "Inputs are different", "At least one input is 1", "Both inputs are 0"], answer: 1 },
      { q: "The NAND gate is the combination of ___ gate followed by ___ gate:", options: ["AND and NOT", "OR and NOT", "NOR and NOT", "XOR and NOT"], answer: 0 },
      { q: "According to De Morgan's Law 2, A.B equals:", options: ["A+B", "Ā+B̄", "A.B̄", "Ā+B"], answer: 1 },
      { q: "TTL stands for:", options: ["Transistor Transfer Logic", "Transistor Transistor Logic", "Total Transfer Logic", "Triple Transistor Logic"], answer: 1 },
      { q: "CMOS stands for:", options: ["Complementary Metal Oxide Semiconductor", "Complementary Minority Oxide Structure", "Combined Metal Oxide Signal", "Complementary MOS"], answer: 0 },
      { q: "The NOR gate outputs 1 when:", options: ["Both inputs are 1", "Both inputs are 0", "At least one input is 1", "Inputs are different"], answer: 1 },
      { q: "De Morgan's theorems are used to:", options: ["Increase circuit complexity", "Simplify Boolean expressions", "Convert binary to decimal", "Design multiplexers"], answer: 1 }
    ]
  },
  {
    id: 2,
    name: "Exp 3.1: Adders & Subtractors",
    questions: [
      { q: "A Half Adder performs addition of:", options: ["Two bits with carry-in", "Two bits without carry-in", "Three bits", "Four bits"], answer: 1 },
      { q: "The Sum output of half adder is obtained using:", options: ["AND gate", "XOR gate", "NAND gate", "NOR gate"], answer: 1 },
      { q: "The Carry output of half adder is obtained using:", options: ["OR gate", "AND gate", "XOR gate", "NOT gate"], answer: 1 },
      { q: "For half adder input (1,1), the outputs are:", options: ["S=0, C=0", "S=1, C=0", "S=0, C=1", "S=1, C=1"], answer: 2 },
      { q: "What is the main difference between half adder and full adder?", options: ["Half adder is slower", "Full adder takes carry-in from previous stage", "Half adder uses more gates", "Full adder works only with 1-bit"], answer: 1 },
      { q: "The Sum output of full adder is:", options: ["A⊕B⊕Cin", "A.B.Cin", "A+B+Cin", "(A⊕B)⊕Cin"], answer: 0 },
      { q: "For half subtractor input (0,1), the outputs are:", options: ["D=0, Bout=0", "D=1, Bout=1", "D=0, Bout=1", "D=1, Bout=0"], answer: 2 },
      { q: "The Difference output in half subtractor is:", options: ["A.B", "A⊕B", "A+B", "Ā.B"], answer: 1 },
      { q: "The Borrow output in half subtractor is:", options: ["A.B", "Ā.B", "A.B̄", "A⊕B"], answer: 1 },
      { q: "How many NAND gates are required to implement a half adder Sum function?", options: ["2", "3", "4", "5"], answer: 2 }
    ]
  },
  {
    id: 3,
    name: "Exp 3.2: Code Converters",
    questions: [
      { q: "Gray code is a binary number system in which:", options: ["All bits are same", "Every successive pair differs in only one bit", "MSB is always 1", "All bits are different"], answer: 1 },
      { q: "In Binary to Gray conversion, which output bit is same as MSB of binary?", options: ["G₁", "G₂", "G₄", "G₃"], answer: 2 },
      { q: "Gray code is used mainly to:", options: ["Reduce power consumption", "Minimize errors during transitions", "Increase processing speed", "Reduce IC size"], answer: 1 },
      { q: "The Boolean expression G₁ = B₂⊕B₁ uses which gate?", options: ["AND gate", "OR gate", "XOR gate", "NAND gate"], answer: 2 },
      { q: "Excess-3 code is obtained by adding ___ to BCD code:", options: ["2", "3", "4", "5"], answer: 1 },
      { q: "The number of invalid input combinations in BCD are:", options: ["4", "5", "6", "7"], answer: 2 },
      { q: "For BCD input 0101, the Excess-3 output is:", options: ["0111", "1000", "1001", "0110"], answer: 1 },
      { q: "How many 4-bit binary combinations are there?", options: ["8", "12", "16", "32"], answer: 2 },
      { q: "The self-complementary property of Excess-3 means:", options: ["It is same as binary complement", "Ones complement of XS-3 equals XS-3 of nines complement", "All bits are complemented", "It has no complement"], answer: 1 },
      { q: "Which code is useful for easier decimal complementation?", options: ["Binary", "Gray code", "Excess-3 code", "BCD"], answer: 2 }
    ]
  },
  {
    id: 4,
    name: "Exp 3.3a: Multiplexers & Demultiplexers",
    questions: [
      { q: "A 4×1 multiplexer has ___ selection lines:", options: ["1", "2", "3", "4"], answer: 1 },
      { q: "A multiplexer is also called:", options: ["Data converter", "Data selector", "Data combiner", "Data decoder"], answer: 1 },
      { q: "For S₁=1, S₀=0 in a 4×1 multiplexer, which input is selected?", options: ["I₀", "I₁", "I₂", "I₃"], answer: 2 },
      { q: "The number of selection lines required for a 1×8 demultiplexer:", options: ["2", "3", "4", "8"], answer: 1 },
      { q: "A 1×4 demultiplexer transfers data to:", options: ["1 output line", "2 output lines", "4 output lines", "8 output lines"], answer: 2 },
      { q: "Multiplexer means:", options: ["One to many", "Many to one", "One to one", "Many to many"], answer: 1 },
      { q: "De-multiplexer means:", options: ["One to many", "Many to one", "One to one", "Many to many"], answer: 0 },
      { q: "In a 1×4 demultiplexer, when S₁=0, S₀=0, data goes to:", options: ["Y₀", "Y₁", "Y₂", "Y₃"], answer: 0 },
      { q: "Multiplexers are used mainly for:", options: ["Parallel-to-serial conversion", "Serial-to-parallel conversion", "Both A and B", "Data storage"], answer: 2 },
      { q: "How many AND gates are required to implement a 4×1 multiplexer?", options: ["2", "3", "4", "5"], answer: 2 }
    ]
  },
  {
    id: 5,
    name: "Exp 3.3b: Decoders",
    questions: [
      { q: "A 3-to-8 line decoder has:", options: ["3 input lines and 3 output lines", "3 input lines and 8 output lines", "8 input lines and 3 output lines", "8 input lines and 8 output lines"], answer: 1 },
      { q: "A 3-to-8 decoder is also called:", options: ["Binary to decimal decoder", "Binary to octal decoder", "Octal to binary encoder", "Decimal to binary decoder"], answer: 1 },
      { q: "For binary input ABC = 000, the active output is:", options: ["D₀", "D₁", "D₇", "All outputs"], answer: 0 },
      { q: "In a 3-to-8 decoder, only ___ output can be active at a time:", options: ["Two", "Three", "One", "Multiple"], answer: 2 },
      { q: "The decoder output is obtained using:", options: ["Only AND gates", "Only OR gates", "AND and NOT gates", "OR and NOT gates"], answer: 2 },
      { q: "The Boolean expression D₇ = ABC means D₇ is 1 when:", options: ["A=0, B=0, C=0", "A=1, B=1, C=1", "A=1, B=0, C=0", "A=0, B=1, C=1"], answer: 1 },
      { q: "A decoder with enable input can function as:", options: ["Encoder", "Multiplexer", "Demultiplexer", "Comparator"], answer: 2 },
      { q: "For 3-line-to-8-line decoder, the number of outputs = 2^___:", options: ["2", "3", "4", "5"], answer: 1 },
      { q: "The output D₅ = AB̄C means binary input is:", options: ["101", "010", "100", "011"], answer: 0 },
      { q: "How many AND gates are required for a 3-to-8 decoder?", options: ["3", "6", "8", "16"], answer: 2 }
    ]
  },
  {
    id: 6,
    name: "Exp 4: Flip-Flops",
    questions: [
      { q: "What does IC 7473 contain?", options: ["Dual D-type flip-flop", "Dual JK flip-flop", "Single JK flip-flop", "Quad AND gate"], answer: 1 },
      { q: "JK flip-flops in IC 7473 operate on:", options: ["Rising edge of clock", "Falling edge of clock", "Both edges", "Steady state level"], answer: 1 },
      { q: "When CLR = L (Low) in IC 7473, the output is:", options: ["Q=1", "Q=0", "Toggles", "Remains unchanged"], answer: 1 },
      { q: "When J=0 and K=0, the JK flip-flop:", options: ["Resets", "Sets", "Toggles", "Holds current state"], answer: 3 },
      { q: "The IC 7474 responds to:", options: ["Falling edge of clock", "Rising edge of clock", "Both edges", "Steady level"], answer: 1 },
      { q: "When J=1 and K=1, the JK flip-flop:", options: ["Resets", "Sets", "Toggles", "Holds state"], answer: 2 },
      { q: "The number of independent flip-flops in IC 7474:", options: ["One", "Two", "Three", "Four"], answer: 1 },
      { q: "In D flip-flop, the output Q follows:", options: ["Input D at clock edge", "Complements input D", "Toggles with each clock", "Remains constant"], answer: 0 },
      { q: "When PRE = L (Low) in IC 7474:", options: ["Q = 0", "Q = 1", "State toggles", "No change"], answer: 1 },
      { q: "Flip-flops are used primarily for:", options: ["Amplification", "Memory storage", "Signal inversion", "Power conversion"], answer: 1 }
    ]
  },
  {
    id: 7,
    name: "Exp 5a: Asynchronous Counters",
    questions: [
      { q: "A 3-bit asynchronous up counter consists of:", options: ["2 JK flip-flops", "3 JK flip-flops", "4 JK flip-flops", "5 JK flip-flops"], answer: 1 },
      { q: "A 3-bit MOD-8 counter cycles through:", options: ["4 states", "6 states", "8 states", "16 states"], answer: 2 },
      { q: "In an asynchronous down counter, the ___ output is fed as clock to next FF:", options: ["Q", "Q̅", "Clock", "Reset"], answer: 1 },
      { q: "The propagation delay in an asynchronous counter is:", options: ["Small and fixed", "Proportional to number of FFs", "Independent of frequency", "Zero"], answer: 1 },
      { q: "All J and K inputs in a 3-bit counter are connected to:", options: ["Logic 0", "Logic 1", "Clock", "Ground"], answer: 1 },
      { q: "For an asynchronous down counter starting from 000, after first clock pulse:", options: ["000", "001", "111", "110"], answer: 2 },
      { q: "The maximum frequency of operation for asynchronous counters is:", options: ["Very high", "Limited by propagation delay", "Unlimited", "Depends on JK values"], answer: 1 },
      { q: "In a 3-bit asynchronous up counter, the output of FFO drives:", options: ["Only FF1", "FF2 only", "Both FF1 and FF2", "No other flip-flop"], answer: 0 },
      { q: "The output conditions for 3-bit counter at reset are:", options: ["001", "010", "100", "000"], answer: 3 },
      { q: "When the first clock pulse is applied to asynchronous up counter:", options: ["001", "010", "100", "111"], answer: 0 }
    ]
  },
  {
    id: 8,
    name: "Exp 5b: MOD-6 Counter",
    questions: [
      { q: "A MOD-6 counter has ___ stable states:", options: ["4", "6", "8", "16"], answer: 1 },
      { q: "How many flip-flops are required for MOD-6 counter?", options: ["2", "3", "4", "5"], answer: 1 },
      { q: "Invalid states in MOD-6 counter are:", options: ["000, 001", "110, 111", "101, 110", "011, 100"], answer: 1 },
      { q: "A MOD-6 counter is also known as:", options: ["Divide-by-3 counter", "Divide-by-6 counter", "Divide-by-8 counter", "Divide-by-4 counter"], answer: 1 },
      { q: "The expression CLR = Q̅ᵦ.Q̅ᵨ resets the counter when:", options: ["Both Q̅ᵦ and Q̅ᵨ are 1", "Either is 1", "Both are 0", "Alternating states"], answer: 0 },
      { q: "MOD-6 counter divides input frequency by:", options: ["3", "4", "6", "8"], answer: 2 },
      { q: "How many possible states can 3 flip-flops have?", options: ["4", "6", "8", "16"], answer: 2 },
      { q: "The 6 stable states in MOD-6 counter are:", options: ["000-101", "000-110", "001-110", "000-111"], answer: 0 },
      { q: "When the sixth clock pulse is applied to MOD-6 counter:", options: ["Counter remains in 110", "Counter resets to 000", "Counter goes to 111", "Counter stops"], answer: 1 },
      { q: "Unused states in MOD-6 counter should be treated as:", options: ["Error states", "Valid states", "Don't cares", "Reset states"], answer: 2 }
    ]
  },
  {
    id: 9,
    name: "Exp 6a: Synchronous Counters",
    questions: [
      { q: "In a synchronous counter, all flip-flops are triggered:", options: ["Sequentially", "Simultaneously", "Randomly", "Asynchronously"], answer: 1 },
      { q: "The propagation delay of synchronous counter is:", options: ["Sum of all FF delays", "Equal to one FF delay plus gate delay", "Proportional to number of FFs", "Very large"], answer: 1 },
      { q: "Synchronous counters can operate at:", options: ["Lower frequencies than asynchronous", "Higher frequencies than asynchronous", "Same as asynchronous", "Unpredictable frequencies"], answer: 1 },
      { q: "A 3-bit synchronous counter requires:", options: ["2 flip-flops", "3 flip-flops", "4 flip-flops", "5 flip-flops"], answer: 1 },
      { q: "In synchronous counter design, step 1 is to:", options: ["Choose gates", "Draw state diagram", "Determine FF inputs", "Simplify K-maps"], answer: 1 },
      { q: "For a 3-bit synchronous counter, JC = QBQA means:", options: ["AND of QB and QA", "OR of QB and QA", "XOR of QB and QA", "NOR of QB and QA"], answer: 0 },
      { q: "The main advantage of synchronous over asynchronous counters is:", options: ["Lower cost", "Higher speed", "Simpler design", "Less power consumption"], answer: 1 },
      { q: "How many states does a 3-bit synchronous up counter have?", options: ["4", "6", "8", "16"], answer: 2 },
      { q: "The excitation table for synchronous counter design is obtained from:", options: ["Truth table", "State diagram", "K-maps", "Flip-flop characteristics"], answer: 3 },
      { q: "The final step in synchronous counter design is:", options: ["Draw K-maps", "Construct the circuit", "Determine FF inputs", "Simplify expressions"], answer: 1 }
    ]
  },
  {
    id: 10,
    name: "Exp 6b: Sequence Generator",
    questions: [
      { q: "For sequence 0→1→3→4→5→7→0, how many flip-flops are needed?", options: ["2", "3", "4", "5"], answer: 1 },
      { q: "T flip-flops are used in sequence generators because:", options: ["They toggle on each clock", "They provide simpler excitation table", "They consume less power", "They are cheaper"], answer: 1 },
      { q: "The sequence 0→1→3→4→5→7→0 uses ___ states:", options: ["4", "5", "6", "7"], answer: 2 },
      { q: "For T flip-flop, when Qt = 0 and Qt+1 = 1, T input should be:", options: ["0", "1", "X (don't care)", "Depends on clock"], answer: 1 },
      { q: "The state diagram is useful for:", options: ["Calculating power", "Designing sequence", "Testing circuits", "Measuring speed"], answer: 1 },
      { q: "K-maps in sequence generator design are used to:", options: ["Select gates", "Simplify Boolean expressions", "Draw circuits", "Verify truth table"], answer: 1 },
      { q: "For T flip-flop excitation, when Qt = 0 and Qt+1 = 0, T is:", options: ["0", "1", "X", "Depends on input"], answer: 0 },
      { q: "The purpose of feedback in sequence generator is:", options: ["Increase speed", "Create desired sequence", "Reduce power", "Amplify signal"], answer: 1 },
      { q: "How many different sequence states are used in the 0→1→3→4→5→7 sequence?", options: ["4", "5", "6", "7"], answer: 2 },
      { q: "The excitation table for T flip-flop shows ___ for each state transition:", options: ["Set/Reset values", "Toggle values", "Clear values", "Preset values"], answer: 1 }
    ]
  }
];

// Application State
let currentQuizIndex = null;
let currentQuestionIndex = 0;
let userAnswers = [];

// DOM Elements
const selectionScreen = document.getElementById('selection-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const quizGrid = document.getElementById('quiz-grid');
const quizTitle = document.getElementById('quiz-title');
const questionProgress = document.getElementById('question-progress');
const progressFill = document.getElementById('progress-fill');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const backToSelectionBtn = document.getElementById('back-to-selection');
const scoreDisplay = document.getElementById('score-display');
const percentageDisplay = document.getElementById('percentage-display');
const resultsDetails = document.getElementById('results-details');
const retakeBtn = document.getElementById('retake-btn');
const tryAnotherBtn = document.getElementById('try-another-btn');

// Initialize Application
function init() {
  renderQuizSelection();
  setupEventListeners();
}

// Render Quiz Selection Screen
function renderQuizSelection() {
  quizGrid.innerHTML = '';
  quizzes.forEach((quiz, index) => {
    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.innerHTML = `
      <span class="quiz-number">Quiz ${index + 1}</span>
      <h3>${quiz.name}</h3>
    `;
    card.addEventListener('click', () => startQuiz(index));
    quizGrid.appendChild(card);
  });
}

// Start Quiz
function startQuiz(quizIndex) {
  currentQuizIndex = quizIndex;
  currentQuestionIndex = 0;
  userAnswers = new Array(quizzes[quizIndex].questions.length).fill(null);
  showScreen('quiz');
  quizTitle.textContent = quizzes[quizIndex].name;
  renderQuestion();
}

// Render Current Question
function renderQuestion() {
  const quiz = quizzes[currentQuizIndex];
  const question = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  
  // Update progress
  questionProgress.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
  progressFill.style.width = `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`;
  
  // Update question text
  questionText.textContent = question.q;
  
  // Render options
  optionsContainer.innerHTML = '';
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option;
    
    // Highlight if this option was previously selected
    if (userAnswers[currentQuestionIndex] === index) {
      button.classList.add('selected');
    }
    
    button.addEventListener('click', () => selectAnswer(index));
    optionsContainer.appendChild(button);
  });
  
  // Update navigation buttons
  prevBtn.disabled = currentQuestionIndex === 0;
  
  if (currentQuestionIndex === totalQuestions - 1) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline-flex';
  } else {
    nextBtn.style.display = 'inline-flex';
    submitBtn.style.display = 'none';
  }
}

// Select Answer
function selectAnswer(optionIndex) {
  userAnswers[currentQuestionIndex] = optionIndex;
  
  // Update UI
  const optionButtons = optionsContainer.querySelectorAll('.option-btn');
  optionButtons.forEach((btn, index) => {
    if (index === optionIndex) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });
}

// Navigate to Previous Question
function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

// Navigate to Next Question
function nextQuestion() {
  const quiz = quizzes[currentQuizIndex];
  if (currentQuestionIndex < quiz.questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  }
}

// Submit Quiz
function submitQuiz() {
  // Check if all questions are answered
  const unansweredCount = userAnswers.filter(answer => answer === null).length;
  
  if (unansweredCount > 0) {
    alert(`Please answer all questions before submitting. You have ${unansweredCount} unanswered question(s).`);
    return;
  }
  
  showResults();
}

// Show Results
function showResults() {
  const quiz = quizzes[currentQuizIndex];
  let correctCount = 0;
  
  // Calculate score
  quiz.questions.forEach((question, index) => {
    if (userAnswers[index] === question.answer) {
      correctCount++;
    }
  });
  
  const totalQuestions = quiz.questions.length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  
  // Display score
  scoreDisplay.textContent = `${correctCount}/${totalQuestions}`;
  percentageDisplay.textContent = `${percentage}%`;
  
  // Display detailed results
  resultsDetails.innerHTML = '';
  quiz.questions.forEach((question, index) => {
    const isCorrect = userAnswers[index] === question.answer;
    const resultItem = document.createElement('div');
    resultItem.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;
    
    const userAnswerText = userAnswers[index] !== null ? question.options[userAnswers[index]] : 'Not answered';
    const correctAnswerText = question.options[question.answer];
    
    resultItem.innerHTML = `
      <div class="result-question"><strong>Q${index + 1}:</strong> ${question.q}</div>
      <div class="result-answer user-answer"><strong>Your answer:</strong> ${userAnswerText}</div>
      <div class="result-answer correct-answer"><strong>Correct answer:</strong> ${correctAnswerText}</div>
    `;
    
    resultsDetails.appendChild(resultItem);
  });
  
  showScreen('results');
}

// Retake Quiz
function retakeQuiz() {
  startQuiz(currentQuizIndex);
}

// Try Another Quiz
function tryAnotherQuiz() {
  showScreen('selection');
  currentQuizIndex = null;
  currentQuestionIndex = 0;
  userAnswers = [];
}

// Show Screen
function showScreen(screenName) {
  selectionScreen.classList.remove('active');
  quizScreen.classList.remove('active');
  resultsScreen.classList.remove('active');
  
  switch(screenName) {
    case 'selection':
      selectionScreen.classList.add('active');
      break;
    case 'quiz':
      quizScreen.classList.add('active');
      break;
    case 'results':
      resultsScreen.classList.add('active');
      break;
  }
}

// Setup Event Listeners
function setupEventListeners() {
  prevBtn.addEventListener('click', prevQuestion);
  nextBtn.addEventListener('click', nextQuestion);
  submitBtn.addEventListener('click', submitQuiz);
  backToSelectionBtn.addEventListener('click', tryAnotherQuiz);
  retakeBtn.addEventListener('click', retakeQuiz);
  tryAnotherBtn.addEventListener('click', tryAnotherQuiz);
}

// Initialize app when DOM is loaded
init();