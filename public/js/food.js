// 모달창 켜기



// 특정 버튼을 누르면 모달창이 켜지게 하기

const modal = document.getElementById("food_modal")
const btnModal = document.getElementById("food_btn-modal")
const modalbehind = document.getElementById("food_modal_behind");

btnModal.addEventListener("click", e => {
    modal.style.display = "flex"
    modalbehind.style.display = "block";
})


// 모달창의 클로즈(x) 버튼을 누르면 모달창이 꺼지게 하기
const closeBtn = modal.querySelector(".food_close-area")
closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
    modalbehind.style.display = "none";
})

// 모달창 바깥 영역을 클릭하면 모달창이 꺼지게 하기
modal.addEventListener("click", e => {
    const evTarget = e.target
    if(evTarget.classList.contains("food_modal-overlay")) {
        modal.style.display = "none"
    }
})

// 모달창이 켜진 상태에서 ESC 버튼을 누르면 모달창이 꺼지게 하기
window.addEventListener("keyup", e => {
    if(modal.style.display === "flex" && e.key === "Escape") {
        modal.style.display = "none"
        modalbehind.style.display = "none";
    }
})


// 더보기 버튼 구현

$(function(){
    $(".food_more").slice(0, 6).show(); // 최초 3개 선택
    $("#food_btn_wrap").click(function(f){ // Load More를 위한 클릭 이벤트e
    f.preventDefault();
    $(".food_more:hidden").slice(0, 3).show(); // 숨김 설정된 다음 10개를 선택하여 표시
    if($(".food_more:hidden").length == 0){ // 숨겨진 DIV가 있는지 체크
        $('.food_more_bar').hide();
    }
    });
    });