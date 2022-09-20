
/*
경주(INF) 0
속초(EST) 1
부산(ENF) 2
제주(ESF) 3
통영(IST) 4
여수(ISF) 5
강릉(ENT) 6
포항(INT) 7
*/
const qnaList = [
    {
      q: '1. 혼자 여행 갈수있다?',
      a: [
        { answer: 'a. 한번쯤은 가고싶은데,, 아직은 때가 아냐', type: [1, 2, 6] },
        { answer: 'b. 여행은 다같이 가는 재미지~ 갈생각 없어', type: [0, 3, 5, 7] },
        { answer: 'c. 혼자 여행?? 오히려 좋아', type: [4, 8 ] },
      ]
    },
    {
      q: '2. 여행가기전의 계획 스타일은? ',
      a: [
        { answer: 'a. 계획이 뭐죠??? ', type: [0, 3, 2] },
        { answer: 'b. 숙소랑 주요 일정정도는 짜야지~', type: [1,  7] },
        { answer: 'c. 기상시간부터 식시시간정도는 짜야 마음이 편해...', type: [ 4, 6, 8] },
      ]
    },
    {
      q: '3. 맛집을 갈때 주로 어디로?',
      a: [
        { answer: 'a. 친구가 극찬한 식당', type: [1, 3, 2, 7, 5] },
        { answer: 'b. 인터넷 핫 플레이스 ', type: [4, 6, 8] },
        { answer: 'c. 아..귀찮아 그냥 직감으로 간다!', type: [0,  4] }
      ]
    },
    {
      q: '4. 여행갈때의 하루당 인스타그램 스토리 개수는?',
      a: [
        { answer: 'a. 딱히 올리는거에 흥미없어, 0~1개', type: [1, 2 ] },
        { answer: 'b. 나 여기왔다는거 정도는??  3~5개 ', type: [4, 7, 5, 6, 8 ] },
        { answer: 'c. 나의 모든 일정을 스토리에! 6개 이상 ', type: [0, 3 ] },
      ]
    },
    {
      q: '여행지에서 술을 마실 때 어디서 마실까?',
      a: [
        { answer: 'a. 사람이 바글바글한 핫플 술집', type: [1, 4, 7, 6] },
        { answer: 'b. 고즈넉한 야경이 좋은 술집', type: [0, 3, 8]},
        { answer: 'c. 뭔 술집이야... 그냥 숙소가서 까자', type: [2,5] },
      ]
    },
  
    {
      q: '6.짐은 언제쌀까?',
      a: [
        { answer: 'a. 하루전날 밤이나 그 당일', type: [ 6, 8] },
        { answer: 'b. 일주일전부터 생각해놓은 코디대로 짐을 싼다', type: [0, 3,  7 ] },
        { answer: 'c. 2일전부터 직진배송으로 ...', type: [1, 4, 2,5 ] },
      ]
    },
    {
      q: '7. 숙소를 고르자',
      a: [
        { answer: 'a. 가성비도 챙기고 인연을 만날수 있는 게스트하우스지', type: [1, 4, 8 ] },
        { answer: 'b. 숙소는 좀 편하게 있고싶다... 호텔', type: [2,  6 ] },
        { answer: 'c. 펜션정도는 잡아야 여행이라 할수있지', type: [0, 3,  5, 7 ] },
      ]
    },
    {
      q: '8. 호감가는 여행 파트너는?',
      a: [
        { answer: 'a. "우리 이제 여기가야해" 주도적인 스타일의 파트너', type: [0,  6 ] },
        { answer: 'b. 군말 없이 너만 믿고 가는 파트너', type: [3, 2, 5, 7 ] },
        { answer: 'c. 거기 갈거라고? 예약해줄게.... 파트너', type: [1, 4, 8 ] },
      ]
    },
    {
      q: '9. 여행갈때의 나의 옷 스타일은?',
      a: [
        { answer: 'a. 여행까지 왔는데,, 평소에 못해본 스타일을 입는다', type: [4, 0, 6] },
        { answer: 'b. 여행은 편해야지.. 평소처럼 입는다!', type: [1, 3,  8 ] },
        { answer: 'c. 포인트 될수 있는 아이템 정도는 착용한다', type: [2, 7, 5 ] },
      ]
    },
    {
      q: '10. 여행을 갈때 숙소에 있는 시간은? ',
      a: [
        { answer: 'a. 잠자고 준비할 시간 정도? ', type: [ 6, 8] },
        { answer: 'b. 일정하나 소화할때마다 한번씩 숙소를 가야한다', type: [0, 2 ] },
        { answer: 'c. 애들아.. 오늘 너무 귀찮지 않아? 일정하나 뛰고 계속 숙소', type: [1, 4, 3, 7, 5 ] },
      ]
    },
    {
      q: '나의 여행 스타일은',
      a: [
        { answer: 'a. 나만 따라와', type: [1,  6, 8 ] },
        { answer: 'b. 너만 따라가', type: [4, 0, 3, 7] },
        { answer: 'c. 헐 여기도 갈래? 중간중간 의견내는 스타일', type: [2, 5 ] },
      ]
    },
    {
      q: '12. 여행중 새로운 음식을 보았다!!',
      a: [
        { answer: 'a. 무리 중에서 제일 먼저 먹어봄', type: [3, 6 ] },
        { answer: 'b. 한입 정도야.. 용기내고 먹어본다', type: [0, 2, 5, 7] },
        { answer: 'c. 뭐야..? 안먹어...', type: [1, 4, 8] },
      ]
    }
  ]
  
  const infoList = [
    {
      name: '경주',
      desc: ''
     },
    {
      name: '속초',
      desc: ''
    },
    {
      name: '부산',
      desc: '' },
    {
      name: '제주',
      desc: '' },
  
    {
      name: '통영',
      desc: '' },
    {
      name: '여수',
      desc: ''
     },
    {
      name: '강릉',
      desc: ''
    },
    {
      name: '포항',
      desc: ''},
    
  ]
  