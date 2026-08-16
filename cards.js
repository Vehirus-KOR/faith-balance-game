const cards = [

    // ==================================================
    // 일반 카테고리
    // ==================================================

    // ★☆☆☆☆
    {
        id: 1,
        category: "일반",
        difficulty: 1,
        question: "평생 하나만 마실 수 있다면?",
        optionA: "커피",
        optionB: "탄산음료"
    },
    {
        id: 2,
        category: "일반",
        difficulty: 1,
        question: "여행을 간다면?",
        optionA: "계획을 완벽하게 세우고 가기",
        optionB: "일단 가서 즉흥적으로 정하기"
    },
    {
        id: 3,
        category: "일반",
        difficulty: 1,
        question: "하루 종일 하나만 할 수 있다면?",
        optionA: "집에서 푹 쉬기",
        optionB: "밖에서 하루 종일 놀기"
    },
    {
        id: 4,
        category: "일반",
        difficulty: 1,
        question: "맛집을 선택한다면?",
        optionA: "맛은 최고지만 웨이팅 1시간",
        optionB: "맛은 평범하지만 바로 입장"
    },
    {
        id: 5,
        category: "일반",
        difficulty: 1,
        question: "여름휴가를 간다면?",
        optionA: "바다",
        optionB: "산"
    },

    // ★★☆☆☆
    {
        id: 6,
        category: "일반",
        difficulty: 2,
        question: "친구들과 놀러 갔는데 일정이 비었다면?",
        optionA: "바로 다음 장소를 검색한다",
        optionB: "그냥 걸어 다니다가 정한다"
    },
    {
        id: 7,
        category: "일반",
        difficulty: 2,
        question: "친구에게 연락한다면?",
        optionA: "카톡으로 오래 이야기하기",
        optionB: "바로 전화하기"
    },
    {
        id: 8,
        category: "일반",
        difficulty: 2,
        question: "약속 장소에 도착했는데 친구가 30분 늦는다면?",
        optionA: "근처에서 혼자 구경하며 기다리기",
        optionB: "카페에 앉아서 기다리기"
    },
    {
        id: 9,
        category: "일반",
        difficulty: 2,
        question: "단체여행에서 맡는다면?",
        optionA: "일정 계획 담당",
        optionB: "맛집 담당"
    },
    {
        id: 10,
        category: "일반",
        difficulty: 2,
        question: "친구들과 하루를 보낸다면?",
        optionA: "여러 장소를 돌아다니기",
        optionB: "한 장소에서 오래 이야기하기"
    },

    // ★★★☆☆
    {
        id: 11,
        category: "일반",
        difficulty: 3,
        question: "친구와 의견이 완전히 다를 때?",
        optionA: "끝까지 이야기해서 결론을 내기",
        optionB: "서로 다름을 인정하고 넘어가기"
    },
    {
        id: 12,
        category: "일반",
        difficulty: 3,
        question: "친구가 고민을 이야기하면?",
        optionA: "해결 방법을 같이 찾아준다",
        optionB: "해결책보다 이야기를 오래 들어준다"
    },
    {
        id: 13,
        category: "일반",
        difficulty: 3,
        question: "중요한 선택을 해야 한다면?",
        optionA: "충분히 고민하고 결정한다",
        optionB: "처음 느낀 직감을 믿는다"
    },
    {
        id: 14,
        category: "일반",
        difficulty: 3,
        question: "친구 10명을 사귄다면?",
        optionA: "자주 만나지만 조금 얕은 관계",
        optionB: "자주는 못 만나도 아주 깊은 관계"
    },
    {
        id: 15,
        category: "일반",
        difficulty: 3,
        question: "나에게 더 중요한 것은?",
        optionA: "안정적인 삶",
        optionB: "새로운 경험이 많은 삶"
    },

    // ★★★★☆
    {
        id: 16,
        category: "일반",
        difficulty: 4,
        question: "가까운 친구가 나에게 큰 실수를 했다면?",
        optionA: "바로 이야기해서 해결한다",
        optionB: "먼저 시간을 가지고 감정을 정리한다"
    },
    {
        id: 17,
        category: "일반",
        difficulty: 4,
        question: "둘 중 하나를 선택해야 한다면?",
        optionA: "내가 좋아하는 일을 하면서 적당히 벌기",
        optionB: "좋아하지 않지만 돈을 많이 벌기"
    },
    {
        id: 18,
        category: "일반",
        difficulty: 4,
        question: "친구 관계에서 더 힘든 것은?",
        optionA: "서로 자주 만나지만 깊은 이야기를 못 하는 관계",
        optionB: "깊이 친하지만 거의 만나지 못하는 관계"
    },
    {
        id: 19,
        category: "일반",
        difficulty: 4,
        question: "나를 평가하는 사람이 있다면?",
        optionA: "나를 정확히 이해하지만 좋게 평가하지 않는 사람",
        optionB: "나를 잘 모르지만 좋게 평가하는 사람"
    },
    {
        id: 20,
        category: "일반",
        difficulty: 4,
        question: "중요한 일을 실패했다면?",
        optionA: "원인을 철저하게 분석하고 다시 도전하기",
        optionB: "미련을 내려놓고 새로운 길 찾기"
    },

    // ★★★★★
    {
        id: 21,
        category: "일반",
        difficulty: 5,
        question: "내 삶에서 하나만 얻을 수 있다면?",
        optionA: "내가 원하는 일을 이루는 성공",
        optionB: "내가 사랑하는 사람들과 오래 함께하는 삶"
    },
    {
        id: 22,
        category: "일반",
        difficulty: 5,
        question: "둘 중 하나를 알 수 있다면?",
        optionA: "10년 뒤 내가 어떤 사람이 되어 있는지",
        optionB: "사람들이 지금의 나를 실제로 어떻게 생각하는지"
    },
    {
        id: 23,
        category: "일반",
        difficulty: 5,
        question: "내 과거에서 하나를 선택한다면?",
        optionA: "가장 후회되는 선택 하나를 바꿀 수 있기",
        optionB: "가장 행복했던 순간 하나를 다시 경험하기"
    },
    {
        id: 24,
        category: "일반",
        difficulty: 5,
        question: "인간관계에서 하나를 선택한다면?",
        optionA: "나를 완전히 이해하지만 항상 동의하지 않는 사람",
        optionB: "나를 완전히 이해하지 못하지만 항상 내 편인 사람"
    },
    {
        id: 25,
        category: "일반",
        difficulty: 5,
        question: "인생에서 하나만 확실하게 보장된다면?",
        optionA: "하고 싶은 일을 이루는 삶",
        optionB: "후회하지 않는 삶"
    },


    // ==================================================
    // 신앙 카테고리
    // ==================================================

    // ★☆☆☆☆
    {
        id: 26,
        category: "신앙",
        difficulty: 1,
        question: "예배에서 하나를 더 오래 한다면?",
        optionA: "찬양",
        optionB: "말씀"
    },
    {
        id: 27,
        category: "신앙",
        difficulty: 1,
        question: "개인 경건 시간을 가진다면?",
        optionA: "아침 QT",
        optionB: "자기 전 QT"
    },
    {
        id: 28,
        category: "신앙",
        difficulty: 1,
        question: "성경을 읽는다면?",
        optionA: "한 권을 천천히 깊게 읽기",
        optionB: "성경 전체를 빠르게 통독하기"
    },
    {
        id: 29,
        category: "신앙",
        difficulty: 1,
        question: "교회에서 하나의 활동만 참여할 수 있다면?",
        optionA: "찬양팀·봉사 활동",
        optionB: "소그룹·나눔 모임"
    },
    {
        id: 30,
        category: "신앙",
        difficulty: 1,
        question: "신앙 콘텐츠를 본다면?",
        optionA: "설교·강의 듣기",
        optionB: "찬양·워십 듣기"
    },

    // ★★☆☆☆
    {
        id: 31,
        category: "신앙",
        difficulty: 2,
        question: "힘든 일이 생겼을 때 먼저 한다면?",
        optionA: "혼자 기도하기",
        optionB: "믿음의 사람에게 이야기하기"
    },
    {
        id: 32,
        category: "신앙",
        difficulty: 2,
        question: "기도할 때 더 편한 방식은?",
        optionA: "혼자 조용히 기도하기",
        optionB: "함께 소리 내어 기도하기"
    },
    {
        id: 33,
        category: "신앙",
        difficulty: 2,
        question: "말씀을 묵상할 때?",
        optionA: "한 구절을 오래 묵상하기",
        optionB: "한 장 전체의 흐름을 이해하기"
    },
    {
        id: 34,
        category: "신앙",
        difficulty: 2,
        question: "교회 공동체에서 더 중요하게 느껴지는 것은?",
        optionA: "함께 예배하는 시간",
        optionB: "예배 후 함께 교제하는 시간"
    },
    {
        id: 35,
        category: "신앙",
        difficulty: 2,
        question: "신앙적으로 성장하는 데 더 도움이 된다고 느끼는 것은?",
        optionA: "좋은 설교를 많이 듣는 것",
        optionB: "말씀을 직접 읽고 고민하는 것"
    },

    // ★★★☆☆
    {
        id: 36,
        category: "신앙",
        difficulty: 3,
        question: "신앙적으로 힘든 시간이 찾아오면?",
        optionA: "믿음으로 계속 버티며 기다리기",
        optionB: "주변 사람들에게 적극적으로 도움 요청하기"
    },
    {
        id: 37,
        category: "신앙",
        difficulty: 3,
        question: "하나님께 기도할 때 하나에 더 집중한다면?",
        optionA: "내가 원하는 것을 솔직하게 구하기",
        optionB: "하나님의 뜻이 무엇인지 구하기"
    },
    {
        id: 38,
        category: "신앙",
        difficulty: 3,
        question: "신앙생활에서 하나가 더 어렵다면?",
        optionA: "말씀을 알고도 실천하지 못하는 것",
        optionB: "하나님의 뜻이 무엇인지 알지 못하는 것"
    },
    {
        id: 39,
        category: "신앙",
        difficulty: 3,
        question: "내 신앙을 성장시키는 데 하나를 선택한다면?",
        optionA: "좋은 믿음의 공동체",
        optionB: "꾸준한 개인 경건생활"
    },
    {
        id: 40,
        category: "신앙",
        difficulty: 3,
        question: "하나님을 더 가까이 느끼는 순간은?",
        optionA: "기도나 찬양 중 강한 감동이 있을 때",
        optionB: "평범한 일상에서 하나님의 인도하심을 발견할 때"
    },

    // ★★★★☆
    {
        id: 41,
        category: "신앙",
        difficulty: 4,
        question: "기도했지만 원하는 결과가 나오지 않았다면?",
        optionA: "계속 같은 내용을 놓고 기도하기",
        optionB: "다른 뜻이 있을 수 있다고 받아들이기"
    },
    {
        id: 42,
        category: "신앙",
        difficulty: 4,
        question: "믿음의 선택을 해야 하는데 확신이 없다면?",
        optionA: "충분히 기다리며 하나님의 뜻을 더 구하기",
        optionB: "기도한 뒤 일단 선택하고 걸어가기"
    },
    {
        id: 43,
        category: "신앙",
        difficulty: 4,
        question: "나에게 하나의 신앙적 변화가 생긴다면?",
        optionA: "하나님을 더 깊이 아는 것",
        optionB: "알고 있는 말씀을 더 잘 살아내는 것"
    },
    {
        id: 44,
        category: "신앙",
        difficulty: 4,
        question: "공동체에서 누군가 신앙적으로 힘들어한다면?",
        optionA: "말씀과 조언을 적극적으로 이야기해주기",
        optionB: "먼저 옆에서 오래 함께 있어주기"
    },
    {
        id: 45,
        category: "신앙",
        difficulty: 4,
        question: "내 신앙의 부족함을 하나 바꿀 수 있다면?",
        optionA: "의심 없이 믿을 수 있는 믿음",
        optionB: "믿는 것을 실제 행동으로 옮기는 용기"
    },

    // ★★★★★
    {
        id: 46,
        category: "신앙",
        difficulty: 5,
        question: "하나님께 한 가지를 물을 수 있다면?",
        optionA: "앞으로 내 삶에 어떤 일이 일어날지",
        optionB: "하나님이 지금 나에게 무엇을 원하시는지"
    },
    {
        id: 47,
        category: "신앙",
        difficulty: 5,
        question: "둘 중 하나의 시간을 반드시 지나야 한다면?",
        optionA: "오랫동안 기도의 응답을 기다리는 시간",
        optionB: "내가 원하지 않았던 응답을 받아들이는 시간"
    },
    {
        id: 48,
        category: "신앙",
        difficulty: 5,
        question: "신앙생활에서 하나를 잃게 된다면 더 힘든 것은?",
        optionA: "하나님의 존재가 잘 느껴지지 않는 시간",
        optionB: "교회 공동체와 멀어지는 시간"
    },
    {
        id: 49,
        category: "신앙",
        difficulty: 5,
        question: "하나님이 내 삶을 인도하신다는 확신이 있지만 방향을 선택해야 한다면?",
        optionA: "안정적이지만 내가 기대했던 길과 다른 길",
        optionB: "불확실하지만 내가 오래 꿈꿔온 길"
    },
    {
        id: 50,
        category: "신앙",
        difficulty: 5,
        question: "하나님 앞에서 하나만 더 분명해질 수 있다면?",
        optionA: "하나님이 나를 얼마나 사랑하시는지에 대한 확신",
        optionB: "내가 앞으로 어떻게 살아가야 하는지에 대한 확신"
    }

];