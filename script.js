// ==============================
// 기본 상태
// ==============================

let selectedCategory = "전체";

let isAnimating = false;

// 바로 직전에 나온 카드가
// 연속으로 다시 나오지 않도록 저장
let lastCardId = null;


// ==============================
// HTML 요소 가져오기
// ==============================

const cardArea =
    document.querySelector(".card-area");

const cardButton =
    document.getElementById("cardButton");

const cardBack =
    document.getElementById("cardBack");

const cardFront =
    document.getElementById("cardFront");

const deckLabel =
    document.getElementById("deckLabel");

const nextButton =
    document.getElementById("nextButton");


const categoryText =
    document.getElementById("category");

const cardNumberText =
    document.getElementById("cardNumber");

const difficultyText =
    document.getElementById("difficulty");

const questionText =
    document.getElementById("question");

const optionAText =
    document.getElementById("optionA");

const optionBText =
    document.getElementById("optionB");


const filterButtons =
    document.querySelectorAll(".filter-btn");


// ==============================
// 효과음 요소 가져오기
// ==============================

const bgm =
    document.getElementById("bgm");

const shuffleSound =
    document.getElementById("shuffleSound");

const revealSound =
    document.getElementById("revealSound");


// ==============================
// 효과음 재생 함수
// ==============================

function playSound(sound) {

    if (!sound) {
        return;
    }

    // 같은 소리를 빠르게 다시 실행해도
    // 처음부터 재생되도록 초기화
    sound.currentTime = 0;

    sound.play().catch(error => {

        console.log(
            "효과음 재생 실패:",
            error
        );

    });

}

// ==============================
// 배경음악
// ==============================

let bgmStarted = false;


function startBgm() {

    if (
        bgmStarted ||
        !bgm
    ) {
        return;
    }


    bgm.volume = 0.35;


    bgm.play()
        .then(() => {

            bgmStarted = true;

        })
        .catch(error => {

            console.log(
                "배경음악 재생 실패:",
                error
            );

        });

}

// 최초 사용자 조작 시 BGM 시작
document.addEventListener(
    "pointerdown",
    startBgm
);

// ==============================
// 난이도 별 표시
// ==============================

function getDifficultyStars(level) {

    return (
        "★".repeat(level) +
        "☆".repeat(5 - level)
    );

}


// ==============================
// 현재 카테고리에 맞는 카드 가져오기
// ==============================

function getFilteredCards() {

    if (selectedCategory === "전체") {

        return cards;

    }

    return cards.filter(
        card =>
            card.category ===
            selectedCategory
    );

}


// ==============================
// 랜덤 카드 선택
// ==============================

function getRandomCard() {

    let availableCards =
        getFilteredCards();


    // 선택 가능한 카드가 없는 경우
    if (availableCards.length === 0) {

        return null;

    }


    // 카드가 2장 이상이라면
    // 직전에 나온 카드 제외
    if (
        availableCards.length > 1 &&
        lastCardId !== null
    ) {

        const cardsWithoutLast =
            availableCards.filter(
                card =>
                    card.id !==
                    lastCardId
            );


        if (
            cardsWithoutLast.length > 0
        ) {

            availableCards =
                cardsWithoutLast;

        }

    }


    // 랜덤 인덱스 생성
    const randomIndex =
        Math.floor(
            Math.random() *
            availableCards.length
        );


    const selectedCard =
        availableCards[randomIndex];


    // 이번 카드 ID 저장
    lastCardId =
        selectedCard.id;


    return selectedCard;

}


// ==============================
// 카드 내용 표시
// ==============================

function drawRandomCard() {

    const selectedCard =
        getRandomCard();


    if (!selectedCard) {

        return;

    }


// 카테고리
categoryText.textContent =
    selectedCard.category;


// 카드 번호
cardNumberText.textContent =
    `#${selectedCard.id}`;


// 난이도
difficultyText.textContent =
    getDifficultyStars(
        selectedCard.difficulty
    );


    // 질문
    questionText.textContent =
        selectedCard.question;


    // 선택지 1
    optionAText.textContent =
        selectedCard.optionA;


    // 선택지 2
    optionBText.textContent =
        selectedCard.optionB;


    // 카드 뒷면 숨기기
    cardBack.classList.add(
        "hidden"
    );


    // 카드 앞면 표시
    cardFront.classList.remove(
        "hidden"
    );


    // 다음 카드 버튼 표시
    nextButton.classList.remove(
        "hidden"
    );

}


// ==============================
// 카드 초기화
// ==============================

function resetCard() {

    if (isAnimating) {

        return;

    }


    // 카드 앞면 숨기기
    cardFront.classList.add(
        "hidden"
    );


    // 카드 뒷면 표시
    cardBack.classList.remove(
        "hidden"
    );


    // 다음 카드 버튼 숨기기
    nextButton.classList.add(
        "hidden"
    );


    // 혹시 남아 있는
    // 애니메이션 클래스 제거

cardButton.classList.remove(
    "card-stream"
);

}


// ==============================
// 카드 터치 이벤트
// ==============================

cardButton.addEventListener(
    "click",
    () => {

        // 카드가 이미 공개되어 있다면
        // 다시 터치해도 반응하지 않음
        if (
            cardBack.classList.contains(
                "hidden"
            )
        ) {

            return;

        }


        // 애니메이션 실행 중
        // 연속 클릭 방지
        if (isAnimating) {

            return;

        }


        isAnimating = true;


        // 카드 대기 애니메이션 잠시 정지
        cardBack.style.animation =
            "none";

                    // ==========================
        // 1. 카드 스트림 시작
        // ==========================

        playSound(
            shuffleSound
        );


        // 메인 카드가
        // 천천히 공중으로 부상
        cardButton.classList.add(
            "card-stream"
        );


        // ==========================
        // 0.80초
        // 빠른 낙하 후 충돌
        // 동시에 질문 공개
        // ==========================

        setTimeout(
            () => {

                drawRandomCard();


                playSound(
                    revealSound
                );

            },
            800
        );


        // ==========================
        // 1.20초
        // 전체 애니메이션 종료
        // ==========================

        setTimeout(
            () => {

                cardButton.classList.remove(
                    "card-stream"
                );


                isAnimating = false;

            },
            1200
        );
    }
);


// ==============================
// 다음 카드 버튼
// ==============================

nextButton.addEventListener(
    "click",
    () => {

        if (isAnimating) {

            return;

        }


        resetCard();


        // 카드 뒷면의
        // 대기 애니메이션 재시작
        setTimeout(
            () => {

                cardBack.style.animation =
                    "";

            },
            20
        );

    }
);


// ==============================
// 카테고리 버튼
// ==============================

filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                // 카드 애니메이션 중에는
                // 카테고리 변경 방지
                if (isAnimating) {

                    return;

                }


                // 모든 버튼의
                // active 제거
                filterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                // 클릭한 버튼 활성화
                button.classList.add(
                    "active"
                );


                // 선택한 카테고리 저장
selectedCategory =
    button.dataset.category;


// ==========================
// 카드덱 테마 변경
// ==========================

document.body.classList.remove(
    "theme-normal",
    "theme-faith"
);


if (
    selectedCategory === "일반"
) {

    document.body.classList.add(
        "theme-normal"
    );

}


if (
    selectedCategory === "신앙"
) {

    document.body.classList.add(
        "theme-faith"
    );

}


// 카드 뒷면에
// 현재 선택된 카드덱 표시
deckLabel.textContent =
    `${selectedCategory} 카드덱`;
                

                // 카테고리가 바뀌었으므로
                // 이전 카드 기록 초기화
                lastCardId =
                    null;


                // 카드 초기화
                resetCard();


                // 대기 애니메이션 재시작
                setTimeout(
                    () => {

                        cardBack.style.animation =
                            "";

                    },
                    20
                );

            }
        );

    }
);