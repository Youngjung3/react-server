const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const models = require("./models");

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  models.Product.findAll({
	// '참조컬럼','ASC'||'DESC'
	order:[['createdAt','DESC']],
	attributes:["id","name","price","seller","imageUrl","createdAt"]
  })
    .then((result) => {
      console.log("product 조회결과:", result);
      res.send({ product: result });
    })
    .catch((err) => {
      console.error(err);
      res.send("에러발생");
    });
});

app.get("/products/:id", (req, res) => {
  const params = req.params;
  //const id=params.id;
  const { id } = params;
  models.Product.findOne({
    where: { id: id },
  })
    .then((result) => {
      console.log("조회결과");
      res.send({
        product: result,
      });
    })
    .catch((error) => {
      console.error(error);
	  res.send("상품조회시 에러가 발생했습니다");
    });
});
//상품생성데이터를  데이터베이스 추가
app.post("/products", (req, res) => {
  const body = req.body;
  const { name, description, price, seller } = body;
  if (!name || !description || !price || !seller) {
    res.send("모든 필드를 입력해주세요");
  }
  models.Product.create({
    name,
    description,
    price,
    seller,
  })
    .then((result) => {
      console.log("상품생성결과:", result);
      res.send({ result });
    })
    .catch((error) => {
      console.error(error);
      //res.send("상품업로드에 문제가 발생했습니다");
    });
});

app.post("/login", (req, res) => {
  res.send("로그인이 완료되었습니다");
});

//app 실행
app.listen(port, () => {
  console.log("👩망고샵의 쇼핑몰 서버가 돌아가고 있습니다.🐶멍");
  //sequelize.sync() DB에 필요한 테이블 생성
  models.sequelize
    .sync()
    .then(() => {
      console.log("😁DB연결성공");
    })
    .catch((err) => {
      console.error(err);
      console.log("😨DB연결에러");
      process.exit();
    });
});
