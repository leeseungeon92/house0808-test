var express = require('express');
var router = express.Router();
var expressLayouts = require('express-ejs-layouts');

const {check, validationResult} = require('express-validator')

const db = require('./../db.js');

router.use(expressLayouts);
//route.routing
router.get('/',(req, res) => {
    res.render('seo_main')
    //서문시장야시장의 메인페이지를 지정
})

// 페이지 연결
router.get('/notice_main', function(req, res, next) {

    db.getAllMemos((rows) => {
        res.render('notice_main',{rows : rows})
    }
    
)
    //res.send('test');

})
//page move
router.get('/notice_write', function(req, res, next){
    res.render('notice_write')
})

router.post('/notice_write', 
    [check('notice_title').isLength({min: 1, max:100})],
    function(req,res, next){
    let errs = validationResult(req);
    console.log(errs); //콘솔 에러 출력하기
    if(errs['errors'].length > 0){ //화면 에러 출력하기
        res.render('notice_write',{errs:errs['errors']});
    } else{
        let param = JSON.parse(JSON.stringify(req.body));
        let re_title = param['notice_title'] //db에 던져주기위해서 json의 형태로 만들어줌.
        let inner_content = param['inner_content']
        db.insertMemo(re_title, inner_content, () => {
            res.redirect('/');
        });
}
    });

    //업데이트(수정) 되기전에 또 데이터 불러와야하는거 아닌가?

// router.post('/notice_update', 
//     [check('content').isLength({min: 1, max:100})], //content인가 notice_title이 되어야하는가?
//     function(req,res, next){
//     let errs = validationResult(req);
//     console.log(errs); //콘솔 에러 출력하기
//     if(errs['errors'].length > 0){ //화면 에러 출력하기
//         res.render('notice_write',{errs:errs['errors']});
//     } else{
//         let param = JSON.parse(JSON.stringify(req.body));
//         db.insertMemo(param['number'],param['info'],param['date'],() => { //여기도 바꿔줘야하는거아닌가?
//             res.redirect('/');
//         });
// }
//     });


router.get('/notice_edit', (req,res) => {
    let id = req.query.id;

    db.getMemoById(id, (row) => {
        if (typeof id == 'undefined' || row.length <= 0) {
            res.status(404).json({error:'undefined memo'});
        } else{
                res.render('notice_edit', {row : row[0] });
        }
    })
})

router.post('/store',
    [check('content').isLength({min: 1, max:300})],
    (req,res) => {
        let errs = validationResult(req);
        let param = JSON.parse(JSON.stringify(req.body));
        let id = param['id'];
        let content = param['content'];
        let inner_content = param['inner_content'];

        if (errs['errors'].length>0){

            db.getMemoById(id, (row) => {
                res.render('notice_edit',{row:row[0],errs : errs['errors']})
            });
        } else{
            db.updateMemoById(id, content, inner_content, () => {
                res.redirect('/');
            })
        }
});

router.get('/notice_content', (req,res) => {
    let id = req.query.id;

    db.getMemoById(id, (row) => {
        if (typeof id == 'undefined' || row.length <= 0) {
            res.status(404).json({error:'undefined memo'});
        } else{
                res.render('notice_content', {row : row[0] });
        }
    })
})

router.get('/notice_delete', (req,res) => {
    let id = req.query.id;
    db.deleteMemoById(id,() => {
        res.redirect('/');
    });
});

//공지사항 컨텐츠 페이지 수정로 이동
router.get('/notice_edit', function(req, res, next){
    res.render('notice_edit')
})


//수정버튼을 눌렀을때 나오는 하는 화면 함수 
router.get('/notice_edit', (req,res) => {
    let id = req.query.id;

    db.getMemoById(id, (row) => {
        if (typeof id == 'undefined' || row.length <= 0) {
            res.status(404).json({error:'undefined memo'});
        } else{
                res.render('notice_edit', {row : row[0] });
        }
    })
})

//////////////////////////////
// router.post('/store',
//     [check('content').isLength({min: 1, max:300})],
//     (req,res) => {
//         let errs = validationResult(req);
//         let param = JSON.parse(JSON.stringify(req.body));
//         let id = param['id'];
//         let content = param['content'];
//         let inner_content = param['inner_content'];

//         if (errs['errors'].length>0){

//             db.getMemoById(id, (row) => {
//                 res.render('notice_edit',{row:row[0],errs : errs['errors']})
//             });
//         } else{
//             db.updateMemoById(id, content, inner_content, () => {
//                 res.redirect('/');
//             })
//         }
// });


//route.routing
router.get('/',(req, res) => {
    res.render('seo_main')
    //서문시장야시장의 메인페이지를 지정
})

router.get('/intro',(req, res) => {
    res.render('seo_intro');
});

router.get('/notice',(req, res) => {
    res.render('seo_notice');
});

router.get('/food',(req, res) => {
    res.render('seo_food');
});

router.get('/map',(req, res) => {
    res.render('seo_map');
});

router.get('/join',(req, res) => {
    res.render('join');
});

router.get('/buyer_join',(req, res) => {
    res.render('register_buyer');
});

router.get('/seller_join',(req, res) => {
    res.render('register_seller');
});

router.get('/login',(req, res) => {
    res.render('login');
});

router.get('/notice_contents',(req, res) => {
    res.render('seo_notice_contents');
});

router.get('/bar',(req, res) => {
    res.render('seo_bar');
});


module.exports = router;