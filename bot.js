const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ">" // 우리는 이제 접두사를 추가할꺼에요! (저는 튜토야 라고 했습니다!) 접두사가 붙어야 커맨드가 실행이 될 수 있습니다!

client.on("ready", () => {
    console.log(`${client.user.tag} 봇에 로그인 하였습니다!`);
});
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content === '>음성채널') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } 
    else {
      message.reply('우선 음성채널에 들어가주세요!');
    }
  }
});
client.on("message", msg => {
    if (!msg.guild) return; // 만약에 길드 이외 다른곳이라면 return을 사용을 해줍시다. 아래도 마찬가지이지만 return을 해주어 반응을 해주지 않는 반응을 해주는 것이에요!
    if (msg.author.bot) return; // 여기도 마찬가지로 만약에 메세지 사용자가 봇이라면 return을 사용합시다.
    if (msg.content.indexOf(prefix) !== 0) return; //메세지가 prefix로 시작되지 않을시 return을 사용을 해줍시다
    var args = msg.content.slice(prefix.length).trim().split(/ +/g); // argument(args) 이 부분은 args를 원하는 방식으로 만들기 위한 과정이라고만 아시면 됩니다!
    var command = args.shift().toLowerCase(); //명령어를 가져올꺼에요 args의 어레이중 가장 앞부분을 가져옵니다 toLowerCase()는 대문자를 소문자로 변경시켜줍니다. Kick같은 실수를 방지할수 있죠
    if (command === `핑`) { // 이전에 핑을 퐁으로 답변했다면 웹소켓 지연시간을 알려주는 코드로 해봅시다!
        msg.reply(`퐁! 현재 Antimatter Beta의 핑은 ${client.ws.ping}ms입니다.`); // CLIENT에 WS(WEBSOCKET)이라는 곳에서 PING을 구해오는 값입니다.
    }
    if (command === `변`) {
        var embed = new Discord.MessageEmbed()
            .setTitle("변!") // 여기는 임베드에서 타이틀로 사용됩니다!
            .setDescription("뭐 하는 거야!") // 여기는 타이틀을 설명해주는 걸로 사용됩니다!
            .setColor("GOLD") // 여기는 색상을 설정하는 공간인데 HEX값을 넣으셔도 됩니다! (#7239DA) "RED" 말고 다른것들도 있어요! 맨 밑에다가 적어놓을테니 확인해주세요!
            .setFooter("이런 것도 있누") // 여기는 임베드의 밑부분에서 말머리로 사용됩니다!
            .setThumbnail("https://cdn.discordapp.com/attachments/743278181112610828/812323526287556658/20210212_141937.jpg") // 여기는 임베드에서 썸네일로 불려옵니다! (URL를 넣어가 경로를 기입하면 그 경로에 있는 이미지를 불러와 썸네일로 이용되요!)
            .setImage("https://cdn.discordapp.com/attachments/743278181112610828/812323525863669800/7e41d26.jpg") // 여기는 임베드에서 이미지로 사용되는 곳입니다. // 위에 설명이랑 같아요

            .setTimestamp() // 여기는 타임스탬프를 설정하는 공간인데 비워두면 현재시각, 여기에 타임스탬프를 넣으시면 그 값에 맞는 시간으로 변환됩니다!
            .addField("오 예", "미터법이 최고지") // 첫번째 칸은 임베드의 소제목, 두번째 칸은 임베드의 소제목의 설명하는 공간입니다! 세번째 칸은 INLINE으로 사용되는데 TRUE 하면 라인에 들어가는거고 FALSE 하면 밑라인으로 내려가게 됩니다.
        msg.reply(embed) // EMBED를 REPLY로 답변합시다!
    }
    if (command === "help") {
        msg.reply("```\n안녕하세요, 봇 안티매터입니다.\n제 접두사는 >이에요.\n----------------------------------\n   가능한 명령어 목록\n> 와샌즈\n> 변\n> 멍청이\n> 안티매터\n> ?\n> dixdick\n> 변봇아도배해줘\n> 갸변저항\n> 오\n> 아\n> A```");
    }

    if (command === "멍청이") {
        msg.reply("그것은 바로 영빈이었네요!");
    }
    
    if (command === "안티매터") {
        msg.reply("https://ivark.github.io/");
    }
    
    if (command === "dixdick") {
        msg.reply("선사딕시대는 인류의 출현과 기원전 3000년경의 딕어의 문자인 원시 훈딕정음 등장 사이의 기간이다. 이때 현 신차난디아의 수도 워싱찬 딕.시. 부근에서는 딕클로투스족이 번성하여, 청동기 도구의 사용을 시작하였다. 당시에 열매 갸봉을 주식으로 하며 생활을 하던 딕클로투스족은 점차 지능이 떡상하게 되었고 그들만의 나라를 세우기 시작했다. 처음에는 딕클로투스들이 집단생활과 정착생활을 하기 시작했다.  그러자 자연스럽게 여러 다른 환경에서 적은한 딕클로투스 족들은 약 30여개의 다른 종으로 변했다.  그중 중요한 갸룬 민족, 영굴루레스족 , 딕킨족 등을 기억해두 면 좋겠다. 이들은 세력이 가장 센 세 종족이였다. 그리고 각 종족마다 족장이 생겨나기 시작했다. 그리고 나머지 단디룬족, 변바르족, 찌리리족 등 약 20여개의  세력이 약했던 종족들이 합쳐져 브레이누스 족이 탄생했다. 딕클로투스족의 신찬신 영접은 약 기원전 27년경에 일어났다. 이는 워싱찬 근처 산인 남산 디키즈 동굴의 Dix Dick 벽화에서 볼 수 있는데, 해당 벽화에는 신찬신이 약 30명의 인간 앞에서 하늘에서 내려오는 것을 볼 수 있다. 이들 중에는 갸룬 민족의 족장으로 보이는 인물과 브레이누스 족의 사람들, 그리고 벽화를 그린 종족으로 추정되는 영굴루레스족의 족장이 있다. 특이점으로는 이 그림의 배경에 매우 작은 비행하는 곤충이 그려져 있다는 것인데, 역사학자들의 연구에 따르면 이 벌레의 밑에 벌레가 소변을 누고 있는 그림을 지운 흔적이 있다고 한다. 신찬신의 영접 후에 언제 떠났는지 혹은 돌아왔는지에 대한 자료는 아직 없으나, 현재의 정설은 신찬신 영접 후 매우 짧은 시간 내에 신찬신이 없어졌다는 것이다. 이 사건 이후 각각의 종족에게는 종교까지 생겼는데 실질적으로는 이름만 다를뿐이지 같은 신찬신을 숭배하고 있는 것과 다름이 없었다. 현 신찬딕 역사학개론의 전문가들이 이 선사 딕 시대의 종교에 대하여 조사를 진행하고 있는중이다. 각 종족의 족장들은 글이 없었던 시대임에도 불구하고 자신들만의 규칙을 만들기 시작했다. 이것을 통하여 전 딕클로투스족 보다 훨씬 뛰어난 지능을 가진 것을 추측해볼 수 있다.");
    }
    if (command === "아") {
        msg.reply("그렇네!");
    }
    if (command === "오") {
        msg.reply("예!");
    }
    if (command === "갸변저항") {
        msg.reply("sd-ByunByunByun https://cdn.discordapp.com/attachments/805963165229776951/810504184163205180/SPOILER_bbbyyyuuunnn_-_Patricia_Taxxon_X_GyaByun_Resistor.mp3\n\n Aleph-Byun https://cdn.discordapp.com/attachments/805963165229776951/810504173858324480/SPOILER_Byun_-_LeaF__Optie__GyaByun_Resistor.mp3\n\n R https://cdn.discordapp.com/attachments/805963165229776951/810504149509996575/SPOILER_R_-_Plum_X_GyaByun_Resistor.mp3\n\n Byuntapper https://cdn.discordapp.com/attachments/805963165229776951/810504191591579658/SPOILER_byuntapper.mp3");
    }
    
    if (command === "A") {
        msg.reply("???: 아 얘들아 A형을 누가 90점을 못 맞니\n¿¿¿: 마음이 아프다");
    }
    
    if (command === "변목길이50킬로미터") {
        msg.reply("아아... 길이를 측정할 수 없을 만큼 깁니다... 뭐 대충 한 그 뭐냐 50km정도 되지 않을까요");
    }

    if (command === `청소`) { // 만약에 메세지 내용이 청소라면?
        if (!args[0]) return msg.reply("청소할 만큼의 값을 정수로 적어주세요!") // 만약에 argument가 비어있다면? 값을 적어달라고 메세지를 답변해줍시다.
        if (!Number(args[0])) return msg.reply("메세지를 지울 값이 숫자가 아니면 안되요!") // 만약에 argument가 숫자가 아니라면 숫자로 적어달라고 답변해줍시다.
        if (args[0] < 1) return msg.reply("메세지를 지울 값을 1보다 작게 하시면 안되요!") // 만약에 argument가 1보다 작으면 그렇게 못한다고 답변해줍시다.
        if (args[0] > 10) return msg.reply("메세지를 지울 값이 10보다 크면 메세지가 안지워져요!") // 만약에 argument가 100보다 크면 그렇게 못한다고 답변해줍시다 (최대 100개 삭제가능.)

        msg.channel.bulkDelete(args[0]).then(msg.reply(`성공적으로 ${args[0]}개 만큼 메세지를 삭제하였습니다!`)) // message.channel 에서 bulkDelete 라는 것을 사용하여 수 만큼 삭제한 후 then으로 "몇개를 삭제하였다"라고 답변해줍시다.
    }
    
});

client.login(process.env.BOT_TOKEN)

/**		
 * 영문판 (공식): https://discord.js.org/ 	
 * 한글판 (번역중, 비공식): https://discord-kr.js.org/	
 */	

/**	
 * Discord MessageEmbed Color List	
   * - `DEFAULT`	
   * - `WHITE`	
   * - `AQUA`	
   * - `GREEN`	
   * - `BLUE`	
   * - `YELLOW`	
   * - `PURPLE`	
   * - `LUMINOUS_VIVID_PINK`	
   * - `GOLD`	
   * - `ORANGE`	
   * - `RED`	
   * - `GREY`	
   * - `DARKER_GREY`	
   * - `NAVY`	
   * - `DARK_AQUA`	
   * - `DARK_GREEN`	
   * - `DARK_BLUE`	
   * - `DARK_PURPLE`	
   * - `DARK_VIVID_PINK`	
   * - `DARK_GOLD`	
   * - `DARK_ORANGE`	
   * - `DARK_RED`	
   * - `DARK_GREY`	
   * - `LIGHT_GREY`	
   * - `DARK_NAVY`	
   * - `RANDOM`	
 */
