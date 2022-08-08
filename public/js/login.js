Kakao.init('af2e8b4112dfa51cf875f64f453ba10e');
Kakao.isInitialized();

document.getElementById('logout').style.display ='none';

//로그인이 성공하면 id가 user인 곳에다 nickname을 넣어줘라 + 로그인 글씨를 사라지게 해라
function kakaoLogin(){
    Kakao.Auth.login({
        success:function(response){
            Kakao.API.request({
                url:'/v2/user/me',
                success:function (response){
                    console.log(response);
                    alert(response.kakao_account.profile.nickname + '님 로그인 되었습니다.')
                    document.getElementById('login').style.display ='none';
                    document.getElementById('logout').style.display ='block';
                    document.getElementById('user').innerHTML = 
                        response.kakao_account.profile.nickname;


            }
        })
    }
})
}

function kakaoLogout(){
    if (Kakao.Auth.getAccessToken()) {
        Kakao.API.request({
            url:'/v1/user/unlink',
            success:function (response){
                console.log(response);
                document.getElementById('user').style.display ='none';
                document.getElementById('login').style.display ='block';
                document.getElementById('logout').style.display ='none';
                alert('로그아웃 되었습니다.')
        },
        fail: function(error){
            console.log(error);
        }
    })
    Kakao.Auth.setAccessToken(undefined)
    }
}


//javasciprt 회원가입 유효성 검사

// let frm = document.buyer_join;
// let isEqual = false;

// if(!regExpTest(regExp1
//               ,userId
//               ,"아이디는 영소문자로 시작하는 4~12글자입니다."))
//     return false;
    
// if(!regExpTest(regExp2
//               ,userId
//               ,"아이디는 숫자를 하나이상 포함하세요."))
//     return false;

// //비밀번호 체크
// frm.reupw.onchange = function() {
// 	let chkPwd = document.getElementById("chkPwd");
// 	let str = "";
	
// 	if(frm.upw.value != frm.reupw.value) {
// 		str = "비밀번호가 다릅니다";
// 		chkPwd.style.color = "red";
// 		isEqual = false;
// 	}else {
// 		str = "√";
// 		chkPwd.style.color = "green";
// 		isEqual = true;
// 	}
// 	chkPwd.innerHTML = str;
// }

// 우편번호 
// frm.btnZip.onclick = function() {
// 	new daum.Postcode({
// 		oncomplete: function(data) {            
// 			frm.zip.value = data.zonecode;
// 			frm.addr.value = data.address;
// 		}
// 	}).open();
// }

// //저장
// frm.register_btn.onclick = function() {
// 	let required = document.getElementsByClassName("required");
	
// 	for(let i=0; i<required.length; i++) {
// 		if(required[i].value == ""){
// 			let label = required[i].previousElementSibling.textContent;
// 			alert(label + "을(를) 입력 해주세요");
// 			required[i].focus();
// 			return false;
// 		}
// 	}
	
// 	if(isEqual == false) {
// 		alert("비밀번호가 다릅니다");
// 		frm.pwd.value = "";
// 		frm.pwd2.value = "";
// 		frm.pwd.focus();
// 	}else {
// 		let rtn = confirm("저장 하시겠습니까?");
// 		if(rtn == true){
// 			alert("저장 되었습니다");
// 		}else {
// 			alert("취소 하였습니다");
// 		}
// 	}
// }

