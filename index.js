// import React from "react"
const express=require("express");
const cors=require("cors");
const app = express();
const port = 8080;

// json 형식의 데이터를 처리할 수 있게 설정
app.use(express.json());
app.use(cors());

// method, 경로설정(요청,응답)
app.get('/products',(req,res)=>{
    const query=req.query;
    console.log(query);
    res.send({
        "products":[
    {
        "id":1,
        "name":"습식사료",
        "price": 24000,
        "seller": "내추럴코어",
        "imageUrl":"images/products/food1.jpg",
        "desc":"습식사료입니다 사람이 먹어도 기가막힘"
    },
    {
        "id":2,
        "name":"하네스",
        "price": 20000,
        "seller": "도기멍",
        "imageUrl":"images/products/acc1.jpg",
        "desc":"습식사료입니다 사람이 먹어도 기가막힘"
    },
    {
        "id":3,
        "name":"배변패드",
        "price": 16000,
        "seller": "흡수혁명",
        "imageUrl":"images/products/house1.jpg",
        "desc":"습식사료입니다 사람이 먹어도 기가막힘"
    },
    {
        "id":4,
        "name":"강아지옷",
        "price": 35000,
        "seller": "봄옷",
        "imageUrl":"images/products/toy1.jpg",
        "desc":"습식사료입니다 사람이 먹어도 기가막힘"
    },
    {
        "id":5,
        "name":"간식",
        "price": 14000,
        "seller": "간식",
        "imageUrl":"images/products/snack1.jpg",
        "desc":"습식사료입니다 사람이 먹어도 기가막힘"
    },
    {
        "id":6,
        "name":"간식2",
        "price": 21000,
        "seller": "간식",
        "imageUrl":"images/products/snack2.jpg",
        "desc":"습식사료입니다 사람이 먹어도 기가막힘"
    },
    {
        "id":7,
        "name":"하우스2",
        "price": 87000,
        "seller": "하우스2",
        "imageUrl":"images/products/house2.jpg",
        "desc":"습식사료입니다 사람이 먹어도 기가막힘"
    }
        ],
    })
});
app.get('/products/:id/events/:eventId',(req,res)=>{
    const params=req.params;
    // const id=params.id;
    const {id,eventId}=params;
    res.send(`id는 ${id}이고 eventId는 ${eventId}입니다`);
});
app.post('/products',(req,res)=>{
    const body=req.body;
    console.log(body);
    res.send({body});
});
// method:post, /login 로그인이 완료되었습니다
app.post('/login',(req,res)=>{
    res.send('로그인이 완료되었습니다.')
});


// app 실행
app.listen(port,()=>{
    console.log("🙄망고샵의 쇼핑몰 서버가 돌아가고 있습니다😫");
})