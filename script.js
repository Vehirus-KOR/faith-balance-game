// ==============================
// 기본 상태
// ==============================

let selectedCategory = "전체";

let isAnimating = false;

// 바로 직전에 나온 카드가
// 연속으로 다시 나오지 않도록 저장
let lastCardId = null;

// ==============================
// 사운드 설정
// ==============================

let bgmEnabled = true;
let sfxEnabled = true;

let bgmVolumeValue = 0.35;
let sfxVolumeValue = 1;

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
// 카드 도감 요소 가져오기
// ==============================

const collectionButton =
    document.getElementById(
        "collectionButton"
    );

const collectionModal =
    document.getElementById(
        "collectionModal"
    );

const collectionCloseButton =
    document.getElementById(
        "collectionCloseButton"
    );

const collectionGrid =
    document.getElementById(
        "collectionGrid"
    );

const collectionFilterButtons =
    document.querySelectorAll(
        ".collection-filter-btn"
    );

// ==============================
// 도감 상세보기 요소
// ==============================

const collectionDetailModal =
    document.getElementById(
        "collectionDetailModal"
    );

const collectionDetailCard =
    document.getElementById(
        "collectionDetailCard"
    );

const collectionDetailCloseButton =
    document.getElementById(
        "collectionDetailCloseButton"
    );


const collectionDetailCategory =
    document.getElementById(
        "collectionDetailCategory"
    );

const collectionDetailNumber =
    document.getElementById(
        "collectionDetailNumber"
    );

const collectionDetailDifficulty =
    document.getElementById(
        "collectionDetailDifficulty"
    );

const collectionDetailQuestion =
    document.getElementById(
        "collectionDetailQuestion"
    );

const collectionDetailOptionA =
    document.getElementById(
        "collectionDetailOptionA"
    );

const collectionDetailOptionB =
    document.getElementById(
        "collectionDetailOptionB"
    );

let selectedCollectionCategory =
    "전체";

// ==============================
// 설정 요소 가져오기
// ==============================

const settingsButton =
    document.getElementById(
        "settingsButton"
    );

const settingsModal =
    document.getElementById(
        "settingsModal"
    );

const settingsCloseButton =
    document.getElementById(
        "settingsCloseButton"
    );

const settingsConfirmButton =
    document.getElementById(
        "settingsConfirmButton"
    );

const bgmToggle =
    document.getElementById(
        "bgmToggle"
    );

const sfxToggle =
    document.getElementById(
        "sfxToggle"
    );

const bgmVolume =
    document.getElementById(
        "bgmVolume"
    );

const sfxVolume =
    document.getElementById(
        "sfxVolume"
    );

const backToast =
    document.getElementById(
        "backToast"
    );

// ==============================
// 게임 시작 화면 요소
// ==============================

const gameContainer =
    document.getElementById(
        "gameContainer"
    );

const startModal =
    document.getElementById(
        "startModal"
    );

const startConfirmButton =
    document.getElementById(
        "startConfirmButton"
    );

// ==============================
// 효과음 요소 가져오기
// ==============================

const bgm =
    document.getElementById("bgm");

const shuffleSound =
    document.getElementById(
        "shuffleSound"
    );

const revealSound =
    document.getElementById(
        "revealSound"
    );

const checkSound =
    document.getElementById(
        "checkSound"
    );


function playSound(sound) {

    if (
        !sound ||
        !sfxEnabled
    ) {
        return;
    }


    sound.volume =
        sfxVolumeValue;


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
        !bgm ||
        !bgmEnabled
    ) {
        return;
    }


    bgm.volume =
        bgmVolumeValue;


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

// ==============================
// 설정 저장
// ==============================

function saveSettings() {

    const settings = {

        bgmEnabled:
            bgmEnabled,

        sfxEnabled:
            sfxEnabled,

        bgmVolume:
            bgmVolumeValue,

        sfxVolume:
            sfxVolumeValue

    };


    localStorage.setItem(
        "pickOneSettings",
        JSON.stringify(settings)
    );

}


// ==============================
// 설정 UI 반영
// ==============================

function updateSettingsUI() {

    bgmToggle.classList.toggle(
        "active",
        bgmEnabled
    );

    bgmToggle.textContent =
        bgmEnabled
            ? "ON"
            : "OFF";

    bgmToggle.setAttribute(
        "aria-pressed",
        String(bgmEnabled)
    );


    sfxToggle.classList.toggle(
        "active",
        sfxEnabled
    );

    sfxToggle.textContent =
        sfxEnabled
            ? "ON"
            : "OFF";

    sfxToggle.setAttribute(
        "aria-pressed",
        String(sfxEnabled)
    );


    bgmVolume.value =
        Math.round(
            bgmVolumeValue * 100
        );

    sfxVolume.value =
        Math.round(
            sfxVolumeValue * 100
        );

}


// ==============================
// 저장된 설정 불러오기
// ==============================

function loadSettings() {

    const savedSettings =
        localStorage.getItem(
            "pickOneSettings"
        );


    if (savedSettings) {

        try {

            const settings =
                JSON.parse(
                    savedSettings
                );


            if (
                typeof settings.bgmEnabled
                === "boolean"
            ) {

                bgmEnabled =
                    settings.bgmEnabled;

            }


            if (
                typeof settings.sfxEnabled
                === "boolean"
            ) {

                sfxEnabled =
                    settings.sfxEnabled;

            }


            if (
                typeof settings.bgmVolume
                === "number"
            ) {

                bgmVolumeValue =
                    settings.bgmVolume;

            }


            if (
                typeof settings.sfxVolume
                === "number"
            ) {

                sfxVolumeValue =
                    settings.sfxVolume;

            }

        }
        catch (error) {

            console.log(
                "설정 불러오기 실패:",
                error
            );

        }

    }


    if (bgm) {

        bgm.volume =
            bgmVolumeValue;

    }


    updateSettingsUI();

}


loadSettings();

// ==============================
// 게임 시작 화면
// ==============================

function startGame() {

    // 확인 효과음
    playSound(
        checkSound
    );


    // 사용자 입력을 통해
    // 배경음악 재생 시작
    startBgm();


    // 시작 화면 닫기
    startModal.classList.add(
        "hidden"
    );


    // 게임 화면 조작 활성화
    gameContainer.removeAttribute(
        "inert"
    );

}


startConfirmButton.addEventListener(
    "click",
    startGame
);

// ==============================
// 설정 모달 열기 / 닫기
// ==============================

function openSettings() {

    settingsModal.classList.remove(
        "hidden"
    );

}


function closeSettings() {

    settingsModal.classList.add(
        "hidden"
    );

}


settingsButton.addEventListener(
    "click",
    event => {

        event.stopPropagation();


        // 설정 버튼 효과음
        playSound(
            checkSound
        );


        openSettings();

    }
);


// ==============================
// 설정 X 버튼
// ==============================

settingsCloseButton.addEventListener(
    "click",
    () => {

        // X 버튼 효과음
        playSound(
            checkSound
        );


        // 설정창 닫기
        closeSettings();

    }
);


// ==============================
// 설정 확인 버튼
// ==============================

settingsConfirmButton.addEventListener(
    "click",
    () => {

        // 확인 효과음
        playSound(
            checkSound
        );


        // 설정창 닫기
        closeSettings();

    }
);

// 모달 바깥 영역 터치 시 닫기

settingsModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            settingsModal
        ) {

            closeSettings();

        }

    }
);

// ==============================
// 배경음악 ON / OFF
// ==============================

bgmToggle.addEventListener(
    "click",
    () => {

        // ON / OFF 버튼 효과음
        playSound(
            checkSound
        );


        bgmEnabled =
            !bgmEnabled;


        if (bgmEnabled) {

            bgm.volume =
                bgmVolumeValue;


            bgm.play()
                .then(() => {

                    bgmStarted =
                        true;

                })
                .catch(error => {

                    console.log(
                        "배경음악 재생 실패:",
                        error
                    );

                });

        }
        else {

            bgm.pause();

        }


        updateSettingsUI();
        saveSettings();

    }
);

// ==============================
// 효과음 ON / OFF
// ==============================

sfxToggle.addEventListener(
    "click",
    () => {

        // 먼저 상태 변경
        sfxEnabled =
            !sfxEnabled;


        // OFF → ON일 때만
        // 확인 효과음 재생
        if (sfxEnabled) {

            playSound(
                checkSound
            );

        }


        updateSettingsUI();
        saveSettings();

    }
);

// ==============================
// 배경음악 볼륨
// ==============================

bgmVolume.addEventListener(
    "input",
    () => {

        bgmVolumeValue =
            Number(
                bgmVolume.value
            ) / 100;


        if (bgm) {

            bgm.volume =
                bgmVolumeValue;

        }


        saveSettings();

    }
);

// ==============================
// 효과음 볼륨
// ==============================

sfxVolume.addEventListener(
    "input",
    () => {

        sfxVolumeValue =
            Number(
                sfxVolume.value
            ) / 100;


        saveSettings();

    }
);

// ==============================
// 효과음 볼륨 확인음
// ==============================

sfxVolume.addEventListener(
    "change",
    () => {

        playSound(
            checkSound
        );

    }
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
// 카드 도감
// ==============================

function getCollectionCards() {

    let collectionCards =
        [...cards];


    if (
        selectedCollectionCategory
        !== "전체"
    ) {

        collectionCards =
            collectionCards.filter(
                card =>
                    card.category ===
                    selectedCollectionCategory
            );

    }


    // 카드 번호 순서대로 정렬

    collectionCards.sort(
        (a, b) =>
            a.id - b.id
    );


    return collectionCards;

}

// ==============================
// 도감 카드 상세보기 열기
// ==============================

function openCollectionDetail(card) {

    // 카테고리

    collectionDetailCategory.textContent =
        card.category;


    // 카드 번호

    collectionDetailNumber.textContent =
        `#${card.id}`;


    // 난이도

    collectionDetailDifficulty.textContent =
        getDifficultyStars(
            card.difficulty
        );


    // 질문

    collectionDetailQuestion.textContent =
        card.question;


    // 선택지 A

    collectionDetailOptionA.textContent =
        card.optionA;


    // 선택지 B

    collectionDetailOptionB.textContent =
        card.optionB;


    // 기존 테마 제거

    collectionDetailCard.classList.remove(
        "collection-card-normal",
        "collection-card-faith"
    );


    // 일반 카드

    if (
        card.category === "일반"
    ) {

        collectionDetailCard.classList.add(
            "collection-card-normal"
        );

    }


    // 신앙 카드

    if (
        card.category === "신앙"
    ) {

        collectionDetailCard.classList.add(
            "collection-card-faith"
        );

    }


    // 상세보기 표시

    collectionDetailModal.classList.remove(
        "hidden"
    );

}

// ==============================
// 도감 카드 상세보기 닫기
// ==============================

function closeCollectionDetail() {

    collectionDetailModal.classList.add(
        "hidden"
    );

}

// ==============================
// 도감 카드 생성
// ==============================

function createCollectionCard(card) {

    const cardElement =
        document.createElement(
            "article"
        );


    cardElement.classList.add(
        "collection-card"
    );


    // 카드 자체 카테고리에 따라
    // 개별 테마 적용

    if (
        card.category === "일반"
    ) {

        cardElement.classList.add(
            "collection-card-normal"
        );

    }


    if (
        card.category === "신앙"
    ) {

        cardElement.classList.add(
            "collection-card-faith"
        );

    }


cardElement.innerHTML = `

    <div class="collection-card-info">

        <div class="collection-card-category-group">

            <span class="collection-card-category">
                ${card.category}
            </span>

            <span class="collection-card-number">
                #${card.id}
            </span>

        </div>


        <span class="collection-card-difficulty">
            ${getDifficultyStars(
                card.difficulty
            )}
        </span>

    </div>


    <p class="collection-card-question">
        ${card.question}
    </p>


    <div class="collection-card-option">
        ${card.optionA}
    </div>


    <strong class="collection-card-vs">
        VS
    </strong>


    <div class="collection-card-option">
        ${card.optionB}
    </div>

`;


// ==========================
// 도감 카드 터치
// ==========================

cardElement.addEventListener(
    "click",
    () => {

        playSound(
            checkSound
        );


        openCollectionDetail(
            card
        );

    }
);


return cardElement;

}


// ==============================
// 도감 카드 목록 출력
// ==============================

function renderCollection() {

    const collectionCards =
        getCollectionCards();


    // 기존 카드 제거

    collectionGrid.innerHTML =
        "";


    // 카드 생성

    collectionCards.forEach(
        card => {

            const cardElement =
                createCollectionCard(
                    card
                );


            collectionGrid.appendChild(
                cardElement
            );

        }
    );


    // 카테고리 변경 시
    // 스크롤을 맨 위로 이동

    collectionGrid.scrollTop =
        0;

}


// ==============================
// 도감 열기
// ==============================

function openCollection() {

    renderCollection();


    collectionModal.classList.remove(
        "hidden"
    );


    // 뒤의 페이지가
    // 같이 스크롤되지 않도록 잠금

    document.body.classList.add(
        "collection-open"
    );

}


// ==============================
// 도감 닫기
// ==============================

function closeCollection() {

    // 혹시 상세 카드가
    // 열려 있다면 함께 닫기

    closeCollectionDetail();


    collectionModal.classList.add(
        "hidden"
    );


    document.body.classList.remove(
        "collection-open"
    );

}


// ==============================
// 도감 버튼
// ==============================

collectionButton.addEventListener(
    "click",
    event => {

        event.stopPropagation();


        playSound(
            checkSound
        );


        openCollection();

    }
);


// ==============================
// 도감 X 버튼
// ==============================

collectionCloseButton.addEventListener(
    "click",
    () => {

        playSound(
            checkSound
        );


        closeCollection();

    }
);

// ==============================
// 도감 상세보기 X 버튼
// ==============================

collectionDetailCloseButton.addEventListener(
    "click",
    event => {

        event.stopPropagation();


        playSound(
            checkSound
        );


        closeCollectionDetail();

    }
);

// ==============================
// 도감 바깥 영역 터치
// ==============================

collectionModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            collectionModal
        ) {

            closeCollection();

        }

    }
);

// ==============================
// 도감 상세보기 바깥 영역 터치
// ==============================

collectionDetailModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            collectionDetailModal
        ) {

            closeCollectionDetail();

        }

    }
);

// ==============================
// 도감 카테고리
// ==============================

collectionFilterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                playSound(
                    checkSound
                );


                collectionFilterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                selectedCollectionCategory =
                    button.dataset.category;


                renderCollection();

            }
        );

    }
);

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


        // 버튼 확인 효과음
        playSound(
            checkSound
        );


        resetCard();

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


        // 카테고리 버튼 효과음
        playSound(
            checkSound
        );


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
            }
        );

    }
);

// ==============================
// 우클릭 메뉴 방지
// ==============================

document.addEventListener(
    "contextmenu",
    event => {

        event.preventDefault();

    }
);

// ==============================
// 뒤로가기 토스트
// ==============================

let backToastTimer = null;


function showBackToast() {

    // 기존 타이머가 있다면 제거
    if (backToastTimer) {

        clearTimeout(
            backToastTimer
        );

    }


    // 토스트 표시
    backToast.classList.add(
        "show"
    );


    // 2초 후 숨김
    backToastTimer =
        setTimeout(
            () => {

                backToast.classList.remove(
                    "show"
                );

                backToastTimer = null;

            },
            2000
        );

}

// ==============================
// 뒤로가기 이탈 방지
// ==============================

let backPressedOnce = false;


// 현재 페이지 상태를 히스토리에 한 번 추가
history.pushState(
    { pickOne: true },
    "",
    location.href
);


window.addEventListener(
    "popstate",
    () => {

        // ==========================
        // 도감 상세 카드
        // ==========================

        if (
            !collectionDetailModal.classList.contains(
                "hidden"
            )
        ) {

            closeCollectionDetail();


            history.pushState(
                { pickOne: true },
                "",
                location.href
            );


            return;

        }


        // ==========================
        // 카드 도감
        // ==========================

        if (
            !collectionModal.classList.contains(
                "hidden"
            )
        ) {

            closeCollection();


            history.pushState(
                { pickOne: true },
                "",
                location.href
            );


            return;

        }


        // ==========================
        // 설정창
        // ==========================

        if (
            !settingsModal.classList.contains(
                "hidden"
            )
        ) {

            closeSettings();


            history.pushState(
                { pickOne: true },
                "",
                location.href
            );


            return;

        }


        // 아래의 기존
        // 뒤로가기 종료 로직은 그대로 유지


        // 첫 번째 뒤로가기
if (!backPressedOnce) {

    backPressedOnce = true;


    // 페이지 이탈 방지
    history.pushState(
        { pickOne: true },
        "",
        location.href
    );


    // 뒤로가기 안내 표시
    showBackToast();


    // 2초가 지나면
    // 다시 첫 번째 상태로 초기화
    setTimeout(
        () => {

            backPressedOnce = false;

        },
        2000
    );


    return;

}


        // 두 번째 뒤로가기
        // 실제 이전 페이지로 이동
        history.back();

    }
);