import "dotenv/config";
import "./db";
import "./models/Video";
//db를 mongoose와 연결시켜서 video model을 인식시킴
//model을 미리 compile하고 필요할때 쓸수 있도록 함
import "./models/User";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
