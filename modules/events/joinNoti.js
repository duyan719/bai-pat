module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`» 𝙆𝙀𝙏 𝙉𝙊𝙄 𝙏𝙃𝘼𝙉𝙃 𝘾𝙊𝙉𝙂«

◆━━━━━━━━━━━━━◆
⚠𝙍𝙐𝙇𝙀
1. Cấm spam nhiều lệnh 10 lệnh trên 2 phút sẽ bị auto ban
2. Cấm 2 bot 1 box (=ban uid + thread)
3. Hạn chế menu và help (nên copy lại)
4. Thêm bot ko xin (=ban)
5. Đừng có mà chửi bot ăn ban đấy :)))
6. Gõ "luật bot" để xem các luật của bot.
◆━━━━━━━━━━━━━◆
👤Nhập /ad sẽ có thông tin của adminbot
📌Liên hệ khi cần thiết
⚜QTV có thể dùng '/help rule' để xem hướng dẫn và set bảng luật box
⚜TVien dùng '/rule' để xem luật box của mình
Thank you for using❤
Xin cảm ơn đã đọc...UwU
© Admin: NGUYỄN DUY AN`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "Hello con vợ: {name}.\nChào mừng đã đến với: {threadName}.\n{type} là thành viên thứ {soThanhVien} của nhóm 🥳, Không tương tác là bị kick đó nha" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}