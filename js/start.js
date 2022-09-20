const main=document.querySelector("#main");
const qna= document.querySelector("#qna");
const endPoint= 12; //질문수
const result= document.querySelector("#result");
const select = [0,0,0,0,0,0,0,0,0,0,0,0]; //버튼 선택마다 원소 추가


function calResult(){

    var result = select.indexOf(Math.max(...select));
    return result;

}

function setResult(){
    let point= calResult();
    const resultName= document.querySelector('.resultname');
    resultName.innerHTML= infoList[point].name;

    // var resultimg= document.createElement('img');
    // const imgDiv =document.querySelector('#resultImg');
    // var imgUrl= 'img/image-'+point+ '.png';
    // resultimg.src= imgUrl;
    // resultimg.alt=point;
    resultimg.classList.add('img-fluid');
    // imgDiv.appendChild(resultimg);
    const resultDesc= document.querySelector('.resultDesc');
    resultDesc.innerHTML= infoList[point].desc;
}

function goResult(){
    qna.style.WebkitAnimation="fadeout 1s";
    qna.style.animation="fadeout 1s";

    setTimeout(()=>{
        result.style.WebkitAnimation="fadein 1s";
        result.style.animation="fadein 1s";
        setTimeout(()=>{
            qna.style.display="none";
            result.style.display="block";
        }, 450)})
        setResult();
       
}

function addAnswer(answerText, qIdx ,idx){

    var a=document.querySelector('.answerBox');
    var answer= document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadein');

    a.appendChild(answer);
    answer.innerHTML= answerText;

    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');
        for(let i=0; i< children.length; i++){
            children[i].disabled=true;
            children[i].style.WebkitAnimation="fadeout 0.5s";
            children[i].style.animation="fadeout 0.5s";
        }
        setTimeout(()=>{
            var target= qnaList[qIdx].a[idx].type;
            for(let n=0; n< target.length; n++){
                select[target[n]] += 1; 
            }
           
            for(let i=0; i< children.length; i++){
                children[i].style.display='none';
            }
            goNext(++qIdx);

        },450)
    },false )

}

function goNext(qIdx){
    if(qIdx ==endPoint){
        goResult();
        return;
    }
    var q=document.querySelector('.qbox');
    q.innerHTML=qnaList[qIdx].q;
    
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);

    }
    var status= document.querySelector('.statusbar');
    status.style.width=(100/endPoint) * (qIdx+1) + '%';


}

function begin(){
    //시작하기 버튼이 눌렸을 때 실행되는 함수
    main.style.WebkitAnimation="fadeout 1s";
    main.style.animation="fadeout 1s";

    setTimeout(()=>{
        qna.style.WebkitAnimation="fadein 1s";
        qna.style.animation="fadein 1s";

        setTimeout(()=>{
            main.style.display="none";
            qna.style.display="block";
        }, 450)

        let qIdx=0;
        goNext(qIdx);
    }, 450)

}
