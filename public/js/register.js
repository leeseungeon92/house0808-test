
//jquery 회원가입 유효성검사

    function registerchecks(){
        var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
        var getCheck= RegExp(/^[a-zA-Z0-9]{6,12}$/);
        var getName= RegExp(/^[가-힣]+$/);
        var fmt = RegExp(/^\d{6}[1234]\d{6}$/); //형식 설정
        var buf = new Array(13); //주민등록번호 배열
    }

    let frm = document.buyer_join;
    let isEqual = false;
    
        //아이디 유효성 검사
        frm.uid.onchange = function() {
        let chkId = document.getElementById("chkId");
        let str = "";

        if(frm.uid.value == "") {
            str = "아이디를 입력해주세요";
            chkId.style.color = "red";
            isEqual = false;
        }else {
            str = "사용할 수 있는 아이디입니다";
            chkId.style.color = "green";
            isEqual = true;
        }
        chkId.innerHTML = str;
        }

        //비밀번호 유효성검사
        frm.reupw.onchange = function() {
            let chkPw = document.getElementById("chkPw");
            let str = "";
            
            if(frm.upw.value != frm.reupw.value) {
                str = "비밀번호가 다릅니다";
                chkPw.style.color = "red";
                isEqual = false;
            }else {
                str = "비밀번호로 사용 가능합니다.";
                chkPw.style.color = "green";
                isEqual = true;
            }
            chkPw.innerHTML = str;
        }
        
        frm.register_btn.onclick = function() {
            let required = document.getElementsByClassName("required");
            
            for(let i=0; i<required.length; i++) {
                if(required[i].value == ""){
                    let label = required[i].previousElementSibling.textContent;
                    alert(label + "을(를) 입력 해주세요");
                    required[i].focus();
                    return false;
                }
            }
            
            if(isEqual == false) {
                alert("비밀번호가 다릅니다");
                frm.pwd.value = "";
                frm.pwd2.value = "";
                frm.pwd.focus();
            }else {
                let rtn = confirm("저장 하시겠습니까?");
                if(rtn == true){
                    alert("저장 되었습니다");
                }else {
                    alert("취소 하였습니다");
                }
            }
        }