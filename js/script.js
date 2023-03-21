let current_index_questions = 0;
let correct_index = 0;
let current_answeres;
let answered = false;
let total_answered = 0;
let total_correct = 0;

let questions = [
  // {
  //   type: "vanlig",
  //   sporsmal:
  //     "",
  //   svar: "",
  //   alt: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  {
    type: "vanlig",
    sporsmal: "Hva er innkapsling i Java?",
    svar: "En måte å begrense tilgangen til egenskaper og metoder i en klasse",
    alt: [
      "En måte å skjule implementasjonen av en metode fra andre klasser",
      "En måte å legge til nye egenskaper og metoder i en klasse",
      "En måte å lage nye klasser fra eksisterende klasser",
    ],
  },
  {
    type: "vanlig",
    sporsmal: "Hva er en konstruktør i Java?",
    svar: "En metode som kan kalles på en klasse for å opprette et nytt objekt",
    alt: [
      "En metode som kan kalles på et objekt for å endre dets tilstand",
      "En metode som kan kalles på en klasse for å slette et objekt",
      "En metode som kan kalles på en klasse for å kopiere et objekt",
    ],
  },
  {
    type: "vanlig",
    sporsmal: "Hva er en grensesnitt i Java?",
    svar: "En samling av egenskaper og metoder som må implementeres av en klasse",
    alt: [
      "En klasse som ikke kan instansieres",
      "En klasse som kan ha statiske metoder og variabler",
      "En samling av metoder og egenskaper som kan implementeres av en klasse, men ikke må",
    ],
  },
  {
    type: "vanlig",
    sporsmal: "Hva er arv i Java?",
    svar: "En måte å lage nye klasser fra eksisterende klasser",
    alt: [
      "En måte å kopiere kode fra én klasse til en annen",
      "En måte å legge til nye egenskaper og metoder i en klasse",
      "En måte å begrense tilgangen til egenskaper og metoder i en klasse",
    ],
  },
  {
    type: "vanlig",
    sporsmal:
      "Hva er forskjellen mellom en abstrakt klasse og et interface i Java?",
    svar: "En abstrakt klasse kan implementere metoder, mens et interface ikke kan det.",
    alt: [
      "En abstrakt klasse kan ikke ha konstruktører, mens et interface kan det.",
      "En abstrakt klasse kan ikke arves, mens et interface kan.",
      "En abstrakt klasse og et interface er det samme i Java.",
    ],
  },
  {
    type: "vanlig",
    sporsmal: 'Hva betyr det å si at et objekt i Java er "immutable"?',
    svar: "Det betyr at objektet kan ikke endres etter at det er opprettet.",
    alt: [
      "Det betyr at objektet er ugyldig.",
      "Det betyr at objektet er et grensesnitt.",
      "Det betyr at objektet kan endres etter at det er opprettet.",
    ],
  },
  {
    type: "vanlig",
    sporsmal: "Hva er forskjellen mellom en klasse og et objekt i Java?",
    svar: "En klasse er en mal for å skape objekter, mens et objekt er en instans av en klasse.",
    alt: [
      "En klasse er en samling av objekter, mens et objekt er en samling av metoder.",
      "En klasse og et objekt er det samme i Java.",
      "En klasse er en datatype, mens et objekt er en variabel.",
    ],
  },
  {
    type: "vanlig",
    sporsmal: "Hva er en klasse i Java?",
    svar: "En mal for å skape objekter",
    alt: [
      "En type variabel",
      "En samling av metoder",
      "En samling av objekter",
    ],
  },

  {
    type: "vanlig",
    sporsmal: "Alle klasser untatt ___ arver fra en klasse.",
    svar: "Objekt",
    alt: ["String", "Character", "Integer"],
  },

  {
    type: "vanlig",
    sporsmal: "Når bør du bruke final i deklarasjonen til et felt?",
    svar: "Når feltet aldri skal endre verdi",
    alt: [
      "Når feltet ikke skal ha en get-metode",
      "Når feltet skal kunne være null",
      "Når feltet er av typen List",
    ],
  },

  {
    type: "vanlig",
    sporsmal:
      "For en assosiasjon mellom klassen `Student` som har en tilstand med navn, og en klasse `ExamResult` med tilstand karakter. Hva vil best beskrive assosiasjonen?",
    svar: "en-mange/mange-en",
    alt: ["mange-mange", "en-en", "En annen assosiasjon"],
  },

  {
    type: "vanlig",
    sporsmal:
      "For en assosiasjon mellom klassen `Country`, og klassen `President` som representerer presidenten i landet. Hva vil best beskrive assosiasjonen sett fra `President`?",
    svar: "en-en",
    alt: ["mange-mange", "en-mange/mange-en", "En annen assosiasjon"],
  },

  {
    type: "vanlig",
    sporsmal:
      "Du har to klasser, Student og Course. Hver gang feltet examDate til et Course-objekt endrer seg ønsker du å gi beskjed til alle studentene som er meldt opp til eksamen i emnet om endringen.\nHvilken teknikk er best egnet til å løse dette problemet?",
    svar: "Observatør-observert",
    alt: ["Innkapsling", "Arv", "Grensesnitt"],
  },

  {
    type: "vanlig",
    sporsmal:
      "Du har to klasser, Student og ExchangeStudent. Disse deler mange implementasjons-detaljer, men varierer noe på andre. Blant annet er hver Student tilknyttet et visst institutt og fakultet, mens ExchangeStudent ikke er det. Du ønsker å kunne dele mest mulig kode mellom disse klassene i implementasjonen din.\nHvilken teknikk er best egnet til å løse dette problemet?",
    svar: "Arv",
    alt: ["Innkapsling", "Grensesnitt", "Observatør-observert"],
  },

  {
    type: "vanlig",
    sporsmal:
      "Hva er gyldig å skrive på høyresiden av uttrykket `y instanceof x`? (Hva er gyldige substitutter for x).",
    svar: "Interface",
    alt: ["Objekt", "Primitiv type", "boolean"],
  },

  {
    type: "vanlig",
    sporsmal:
      "En metode skal ved hjelp av en Comparator sortere en liste av klassen `Student` basert på kandidatnummer fra minst til størst. Hva bør Comparator-metoden returnere når den sammenligner 001 (kandidatnummer til første objekt) mot 110 (kandidatnummer til andre objekt)?",
    svar: "-1",
    alt: ["Et hvilket som helst positivt tall", "1", "0"],
  },

  {
    type: "vanlig",
    sporsmal:
      "Anta følgende klasser, grensesnitt og metoder:\n1. Klasse K deklarerer metoden K methodK()\n2. Grensesnittet G deklarerer metoden G methodG(K)\n3. Klasse M arver fra K, implementerer G og deklarerer metoden M methodM(K)\n4. Klasse C implementerer G og deklarerer metoden C methodC(G)\nHvilken av følgende deklarasjoner vil IKKE kompilere:",
    svar: "G g1 = new K();",
    alt: ["G g2 = new M();", "K k = new M();", "G g3 = new C();"],
  },

  {
    type: "vanlig",
    sporsmal:
      "Hvilken av disse metodene er IKKE hensiktsmessig å ha med for den observerte parten i observatør-observert-teknikken?",
    svar: "updateState",
    alt: ["removeListener", "addListener", "fireStateChanged"],
  },

  {
    type: "vanlig",
    sporsmal:
      "Gitt en JavaFX-kontroller UIController, en FXML-fil UI.fxml og en modell Model.\nBrukergrensesnittet skal oppdatere seg hver gang tilstanden i et Model-objekt endrer seg. Du tenker å løse dette ved hjelp av observatør-observert teknikken. Hvem er den observerte i denne sammenhengen?",
    svar: "Model",
    alt: [
      "UIController",
      "UI.fxml",
      "Det gir ingen mening å bruke observatør-observert",
    ],
  },

  {
    type: "forstoelse",
    index: 1,
    sporsmal:
      "Du kjører `Account account = new Account();` i main-metoden til denne klassen i Java.\nHva stemmer?",
    svar: "account.balance == 0",
    alt: [
      "account.balance == 1",
      "account.balance == null",
      "Ingen stemmer. Får ikke tak i balance uten getter.",
    ],
  },

  {
    type: "forstoelse",
    index: 2,
    sporsmal:
      "Hvilken synlighetsmodifikator vil det i de fleste tilfeller være hensiktsmessig å bruke på feltene i klassen?",
    svar: "private",
    alt: ["public", "Ingen modifikator", "protected"],
  },

  {
    type: "forstoelse",
    index: 3,
    sporsmal:
      "Hva er tilstanden til number i test-objektet etter at følgende kode er kjørt?",
    svar: "-5",
    alt: ["0", "Utløses IllegalArgumentException", "Vil ikke kompilere"],
  },

  {
    type: "forstoelse",
    index: 4,
    sporsmal:
      "Hvilken av set-metodene er IKKE et brudd på god innkapslingsskikk?",
    svar: "setText",
    alt: ["setNumber", "setList", "Alle er brudd på god innkapslingsskikk"],
  },

  {
    type: "forstoelse",
    index: 5,
    sporsmal:
      "Hvilken kodelinje erstatter (// ...) vil tilfredstille typen til consumer og vil kompilere?",
    svar: "list.stream().map(a -> a.getB()).peek(consumer);",
    alt: [
      "list.stream().forEach(consumer);",
      "list.stream().peek(consumer);",
      "list.match(consumer);",
    ],
  },

  {
    type: "forstoelse",
    index: 6,
    sporsmal:
      "Basert kun på denne koden, hva kan vi vite er feil med denne metoden?",
    svar: "Metoden returnerer ikke noe",
    alt: [
      "Metoden setter ikke number til å være noen verdi",
      "NumberValidator er ikke opprettet og vi kan derfor ikke bruke metodene derfra",
      "Metoden burde utløse IllegalStateException",
    ],
  },

  {
    type: "forstoelse",
    index: 7,
    sporsmal:
      "Hva blir printet til konsollen?",
    svar: "15",
    alt: [
      "10",
      "5",
      "Error",
    ],
  },

  {
    type: "forstoelse",
    index: 8,
    sporsmal:
      "Hva blir printet til konsollen?",
    svar: "10",
    alt: [
      "15",
      "5",
      "Error",
    ],
  },
];

function checkAnswer(answer) {
  if (!answered) {
    total_answered += 1;
    if (answer == correct_index) {
      document
        .getElementById("answer" + correct_index)
        .classList.add("correct");
      total_correct += 1;
    } else {
      document
        .getElementById("answer" + correct_index)
        .classList.add("correct");
      document.getElementById("answer" + answer).classList.add("incorrect");
    }
  }
  answered = true;
  document.getElementById("stats").innerText =
    total_correct + "/" + total_answered;
}

function displayQuestion() {
  correct_index = Math.floor(Math.random() * 4);
  document.getElementById("question").innerText =
    questions[current_index_questions].sporsmal;
  current_answeres = [];
  current_answeres = [...questions[current_index_questions].alt];
  current_answeres = shuffle(current_answeres);
  current_answeres.splice(
    correct_index,
    0,
    questions[current_index_questions].svar
  );

  if (questions[current_index_questions].type == "forstoelse") {
    file =
      "assets/oppgavebilder/forstoelse" +
      questions[current_index_questions].index +
      ".png";
    document.getElementById("image").innerHTML =
      "<img src=" + file + " alt='image' />";
  } else {
    document.getElementById("image").innerHTML = "";
  }

  for (var i = 0; i < 4; i++) {
    document.getElementById("answer" + i).innerText = current_answeres[i];
  }
}

function lock_buttons() {
  if (current_index_questions == 0) {
    document.getElementById("prev").classList.add("disabled");
  } else {
    document.getElementById("prev").classList.remove("disabled");
  }

  if (current_index_questions == questions.length - 1) {
    document.getElementById("next").classList.add("disabled");
  } else {
    document.getElementById("next").classList.remove("disabled");
  }
}

function reset() {
  for (var i = 0; i < 4; i++) {
    document.getElementById("answer" + i).className = "answers";
  }
  answered = false;
  lock_buttons();
  displayQuestion();
}

function nextQuestion() {
  if (current_index_questions == questions.length - 1) {
    return;
  }
  current_index_questions++;
  reset();
}

function previousQuestion() {
  if (current_index_questions == 0) {
    return;
  }
  current_index_questions--;
  reset();
}

// COPY PASTE FROM https://stackoverflow.com/a/2450976/10880273 !
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

questions = shuffle(questions);
displayQuestion();

function toggleTheme() {
  const img = document.querySelector("#theme-svg");
  const theme = document.querySelector("#theme");

  if (theme.getAttribute("href") == "css/dark-theme.css") {
    theme.href = "css/light-theme.css";
    img.src = "assets/moon.svg";
    img.alt = "moon";
  } else {
    theme.href = "css/dark-theme.css";
    img.src = "assets/sun.svg";
    img.alt = "sun";
  }
}
