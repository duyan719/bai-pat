module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Kiểm tra thông tin admin bot.",
  commandCategory: "Thông tin adminbot",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/FNRRTy7.jpg",
"https://i.imgur.com/GDEBTl2.jpg",
"https://i.imgur.com/dOZwgSd.jpg",
"https://i.imgur.com/Sh0kRwG.jpg",
"https://i.imgur.com/M0AYNug.jpg",
"https://i.imgur.com/vmU9UAM.jpg",
"https://i.imgur.com/QIcueNQ.jpg",
"https://i.imgur.com/xAU0nhF.jpg",
"https://i.imgur.com/YrfpgRK.jpg",
"https://i.imgur.com/gZzXhlI.jpg",
"https://i.imgur.com/m6pQwFY.jpg",
"https://i.imgur.com/g4VArWU.jpg",
"https://i.imgur.com/5j5OboX.jpg",
"https://i.imgur.com/DrjPCxZ.jpg",
"https://i.imgur.com/k5nG1hR.jpg",
"https://i.imgur.com/tpqGDGf.jpg",
"https://i.imgur.com/Q8VLAUw.jpg",
"https://i.imgur.com/lyPc2A8.jpg",
"https://i.imgur.com/ATOUNQL.jpg",
"https://i.imgur.com/iGzMHrV.png",
"https://i.imgur.com/jppLuim.jpg",
"https://i.imgur.com/GORiYUe.jpg",
"https://i.imgur.com/vmwkLa2.jpg",
"https://i.imgur.com/zv8RhN7.jpg",
"https://i.imgur.com/jUMfLcS.jpg",
"https://i.imgur.com/l17Ory1.jpg",
"https://i.imgur.com/DE1TKsQ.jpg",
"https://i.imgur.com/mosyDBJ.jpg",
"https://i.imgur.com/BQu1WQ8.jpg",
"https://i.imgur.com/wof8jon.jpg",
"https://i.imgur.com/IMZGA08.jpg",
"https://i.imgur.com/bW0lHwr.jpg",
"https://i.imgur.com/YdB116g.jpg",
"https://i.imgur.com/ZMQXntv.jpg",
"https://i.imgur.com/x3Zqf83.jpg",
  ];
  var callback = () => api.sendMessage({body:`梁ADMIN BOT梁
  👀 Tên: Nguyễn Duy An 
  ❎ Tuổi: 17
  👤 Giới tính: Nam
  🙄 Sinh ngày: 29-07-2004
  💫 Chiều cao / cân nặng: 1m70 / 50kg
  💘 Mối quan hệ: None
  😎 Quê quán: HÀ TĨNH
  🤔 Nơi ở: DĂK LĂK
  👫 Gu: Lùn cute, tóc ngắn, biết nấu cơm ko biết thì tập, lo lắng quan tâm vậy là đủ :)))
  🌸 Tính cách: Là một con người thích khám phá vọc vạch những cái mới <3
  📱 Facebook: https://fb.me/nguyenduyan29072004
  📱 FANPAGE: https://www.facebook.com/profile.php?id=100072642465193
📢 Lưu ý cho các qtv và tv trong box: 
- Vui lòng không spam khi sử dụng để tránh die bot
- Không sử dụng lệnh nhiều của lệnh đó
- Đừng chửi bot vì nó được lập trình tự động rời box
- Đừng report bot vì nó cute lắm ><
- Nếu bot ko hoạt động hay bị lỗi hay liên hệ qua sdt hoặc nhắn tin mess để được liên hệ trực tiếp với mình
=> Yêu mọi người nhiều lắm <3 hãy đồng hành cùng với bot và mình nhé <3
------------
✔Donate:
💳MB: none :)
💳VCB: 1021140617
📲MoMo: 0899396536

----Nguyễn Duy An----`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
