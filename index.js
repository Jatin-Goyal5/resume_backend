const express = require('express');
const cors = require('cors');
const userRouter = require("./Routes/user/index")
const projectRouter = require("./Routes/Projects/index");
const skillRouter = require("./Routes/skills/index");


const app = express();
const port =process.env.PORT || 5000
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/skill", skillRouter);
app.use("/project",projectRouter)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})