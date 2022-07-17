const express = require('express');
const cors = require('cors');
const userRouter = require("./Routes/user/index")
const app = express();
const port =process.env.PORT || 5000
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})