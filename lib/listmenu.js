const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
┏━━━━━━━━━━━━━━━┓
┃ ╭┈───────────╮
┃ │ ❍ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ❍ 
┃ ╰┈───────────╯
┗━━━━━━━━━━━━━━━┛
▰▱▰▱▰▱▰▱▰▱▰▱▰
𝘾𝙍𝙀𝘼𝙏𝙊𝙍 : AUDIKIRITO
𝙈𝙔 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 : AUDIKIRITO
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*

ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 

▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╭––『 タ 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐  』
┆❏.self 🅞
┆❏.public 🅞
┆❏.join 🅞
┆❏.bctext 🅞
┆❏.poll 🅞
┆❏.bcimage 🅞
┆❏.bcvideo 🅞
┆❏.creategc 🅞
┆❏.setexif 🅞
┆❏.userjid 🅞
┆❏.setbotname 🅞
┆❏.setbotbio 🅞
┆❏.delppbot 🅞
┆❏.shutdown 🅞
┆❏.setppbot 🅞
┆❏.addprem 🅞
┆❏.delprem 🅞
┆❏.addowner 🅞
┆❏.delowner 🅞
┆❏.addvn 🅞
┆❏.delvn 🅞
┆❏.addsticker 🅞
┆❏.delsticker 🅞
┆❏.addimage 🅞
┆❏.delimage 🅞
┆❏.addvideo 🅞
┆❏.delvideo 🅞
┆❏.block 🅞
┆❏.unblock del 🅞
┆❏.leavegc 🅞
┆❏.pushcontact 🅞
┆❏.pushcontactv2 🅞
╰–––––––––––––––༓

╭––『 タ 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 』
┆❏.antilink 🅖
┆❏.antiwame 🅖
┆❏.grouplink 🅖
┆❏.invite 🅖
┆❏.ephemeral 🅖
┆❏.delete 🅖
┆❏.setppgroup 🅖
┆❏.delppgroup 🅖
┆❏.setname 🅖
┆❏.setdesc 🅖
┆❏.add 🅖
┆❏.kick 🅖
┆❏.promote 🅖
┆❏.demote 🅖
┆❏.hidetag 🅖
┆❏.totag 🅖
┆❏.tagall 🅖
┆❏.editinfo 🅖
┆❏.opentime 🅖
┆❏.closetime 🅖
┆❏.resetlink 🅖
┆❏.getbio 🅖
┆❏.vote 🅖
┆❏.upvote 🅖
┆❏.downvote 🅖
┆❏.checkvote 🅖
┆❏.delvote 🅖
┆❏.autostickergc 🅖
┆❏.antilinkgc 🅖
┆❏.antiwame 🅖
┆❏.antilinkall 🅖
┆❏.antilinktiktok 🅖
┆❏.antilinkfb 🅖
┆❏.antilinktwitter 🅖
┆❏.antilinkig 🅖
┆❏.antlinktg 🅖
┆❏.antilinkytvid 🅖
┆❏.antilinkytch 🅖
┆❏.antivirus 🅖
┆❏.antitoxic 🅖
┆❏.nsfw 🅖
┆❏.react 🅖
╰–––––––––––––––༓

╭––『 タ 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐 』
┆❏.ytsearch 🅕
┆❏.play 🅕
┆❏.ytmp3 🅕
┆❏.ytmp4 🅕
┆❏.google 🅕
┆❏.imdb 🅕
┆❏.weather 🅕
┆❏.wanumber 🅕
┆❏.instaimg 🅕
┆❏.instavid 🅕
┆❏.fbvid 🅕
┆❏.twittervid 🅕
┆❏.telestick 🅟
┆❏.spotify 🅟
┆❏.gitclone 🅕
┆❏.happymod 🅕
┆❏.gdrive 🅕
┆❏.pinterest 🅕
┆❏.ringtone 🅕
╰–––––––––––––––༓

╭––『 タ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙑𝙄𝘿𝙀𝙊 』
┆❏.tiktokgirl 🅕
┆❏.tiktoknukthy 🅕
┆❏.tiktokkayes 🅕
┆❏.tiktokpanrika 🅕
┆❏.tiktoknotnot 🅕
┆❏.tiktokghea 🅕
┆❏.tiktoksantuy 🅕
┆❏.tiktokbocil 🅕
╰–––––––––––––––༓

╭––『 タ 𝙎𝙏𝘼𝙇𝙆𝙀𝙍 』
┆❏.igstalk 🅕
┆❏.ffstalk 🅕
┆❏.mlstalk 🅕
┆❏.npmstalk 🅕
┆❏.ghstalk 🅕
╰–––––––––––––––༓

–『 タ 𝙊𝙋𝙀𝙉𝘼𝙄 』
┆❏.openai 🅕
┆❏.ai 🅕
┆❏.aimage 🅕
┆❏.remini 🅕
╰–––––––––––––––༓

╭––『 タ 𝙁𝙐𝙉 𝙈𝙀𝙉𝙐 』
┆❏.define 🅕
┆❏.qc 🅕
┆❏.lyrics 🅕
┆❏.suit 🅕
┆❏.math 🅕
┆❏.tictactoe 🅕
┆❏.fact 🅕
┆❏.truth 🅕
┆❏.dare 🅕
┆❏.couple 🅕
┆❏.soulmate 🅕
┆❏.stupidcheck 🅕
┆❏.handsomecheck 🅕
┆❏.uncleancheck 🅕
┆❏.hotcheck 🅕
┆❏.smartcheck 🅕
┆❏.greatcheck 🅕
┆❏.evilcheck 🅕
┆❏.dogcheck 🅕
┆❏.coolcheck 🅕
┆❏.waifucheck 🅕
┆❏.awesomecheck 🅕
┆❏.gaycheck 🅕
┆❏.cutecheck 🅕
┆❏.lesbiancheck 🅕
┆❏.hornycheck 🅕
┆❏.prettycheck 🅕
┆❏.lovelycheck 🅕
┆❏.uglycheck 🅕
┆❏.pick 🅕
┆❏.quotes 🅕
┆❏.can 🅕
┆❏.is 🅕
┆❏.when 🅕
┆❏.where 🅕
┆❏.what 🅕
┆❏.how 🅕
┆❏.rate 🅕
┆❏.cry 🅕
┆❏.kill 🅕
┆❏.hug 🅕
┆❏.pat 🅕
┆❏.lick 🅕 
┆❏.kiss 🅕
┆❏.bite 🅕
┆❏.yeet 🅕
┆❏.bully 🅕
┆❏.bonk 🅕
┆❏.wink 🅕
┆❏.poke 🅕
┆❏.nom 🅕
┆❏.slap 🅕
┆❏.smile 🅕 
┆❏.wave 🅕
┆❏.awoo 🅕
┆❏.blush 🅕
┆❏.smug 🅕
┆❏.glomp 🅕 
┆❏.happy 🅕
┆❏.dance 🅕
┆❏.cringe 🅕
┆❏.cuddle 🅕
┆❏.highfive 🅕 
┆❏.shinobu 🅕
┆❏.handhold 🅕
┆❏.spank 🅕
┆❏.tickle 🅕
┆❏.avatar 🅕
┆❏.feed 🅕
┆❏.foxgirl 🅕
┆❏.gecg 🅕
┆❏.checkme 🅕
┆❏.sound1 - sound161 🅕
╰–––––––––––––––༓

╭––『 タ Random Photo 』
┆❏.aesthetic 🅕
┆❏.coffee 🅕
┆❏.wikimedia 🅕
┆❏.wallpaper 🅕
┆❏.art 🅕
┆❏.bts 🅕
┆❏.dogwoof 🅕
┆❏.catmeow 🅕
┆❏.lizardpic 🅕
┆❏.goosebird 🅕
┆❏.8ballpool 🅕
┆❏.cosplay 🅕
┆❏.hacker 🅕
┆❏.cyber 🅕
┆❏.gamewallpaper 🅕
┆❏.islamic 🅕
┆❏.jennie 🅕
┆❏.jiso 🅕
┆❏.satanic 🅕
┆❏.justina 🅕
┆❏.cartoon 🅕
┆❏.pentol 🅕
┆❏.cat 🅕
┆❏.kpop 🅕
┆❏.exo 🅕
┆❏.lisa 🅕
┆❏.space 🅕
┆❏.car 🅕
┆❏.technology 🅕
┆❏.bike 🅕
┆❏.shortquote 🅕
┆❏.antiwork 🅕
┆❏.hacking 🅕
┆❏.boneka 🅕
┆❏.rose 🅕
┆❏.ryujin 🅕
┆❏.ulzzangboy 🅕
┆❏.ulzzanggirl 🅕
┆❏.wallml 🅕
┆❏.wallphone 🅕
┆❏.mountain 🅕
┆❏.goose 🅕
┆❏.profilepic 🅕
┆❏.couplepic 🅕
┆❏.programming 🅕
┆❏.pubg 🅕
┆❏.blackpink 🅕
┆❏.randomboy 🅕  
┆❏.randomgirl 🅕
┆❏.hijab 🅕  
┆❏.chinese 🅕
┆❏.indo 🅕
┆❏.japanese 🅕
┆❏.korean 🅕
┆❏.malay 🅕
┆❏.thai 🅕
┆❏.vietnamese 🅕
╰–––––––––––––––༓

╭––『 タ Sticker 』
┆❏.goose 🅕
┆❏.woof 🅕
┆❏.8ball 🅕
┆❏.lizard 🅕
┆❏.meow 🅕
┆❏.gura 🅕
┆❏.doge 🅕
┆❏.patrick 🅕
┆❏.lovestick 🅕
╰–––––––––––––––༓

╭––『 タ Anime 』
┆❏.akira 🅕
┆❏.akiyama 🅕
┆❏.ana 🅕
┆❏.asuna 🅕
┆❏.ayuzawa 🅕
┆❏.boruto 🅕
┆❏.chiho 🅕
┆❏.chitoge 🅕
┆❏.cosplayloli 🅕
┆❏.cosplaysagiri 🅕
┆❏.deidara 🅕
┆❏.doraemon 🅕
┆❏.elaina 🅕
┆❏.emilia 🅕
┆❏.erza 🅕
┆❏.gremory 🅕
┆❏.hestia 🅕
┆❏.hinata 🅕
┆❏.husbu 🅕
┆❏.inori 🅕
┆❏.isuzu 🅕
┆❏.itachi 🅕
┆❏.itori 🅕
┆❏.kaga 🅕
┆❏.kagura 🅕
┆❏.kakasih 🅕
┆❏.kaori 🅕
┆❏.keneki 🅕
┆❏.kotori 🅕
┆❏.kurumi 🅕
┆❏.loli 🅕
┆❏.madara 🅕
┆❏.megumin 🅕
┆❏.mikasa 🅕
┆❏.mikey 🅕
┆❏.miku 🅕
┆❏.minato 🅕
┆❏.naruto 🅕
┆❏.neko 🅕
┆❏.neko2 🅕
┆❏.nekonime 🅕
┆❏.nezuko 🅕
┆❏.onepiece 🅕
┆❏.pokemon 🅕
┆❏.randomnime 🅕
┆❏.randomnime2 🅕
┆❏.rize 🅕
┆❏.sagiri 🅕
┆❏.sakura 🅕
┆❏.sasuke 🅕
┆❏.shina 🅕
┆❏.shinka 🅕
┆❏.shinomiya 🅕
┆❏.shizuka 🅕
┆❏.shota 🅕
┆❏.tejina 🅕
┆❏.toukachan 🅕
┆❏.tsunade 🅕
┆❏.waifu 🅕
┆❏.animewall 🅕
┆❏.yotsuba 🅕
┆❏.yuki 🅕
┆❏.yulibocil 🅕
┆❏.yumeko 🅕
┆❏.8ball 🅕
┆❏.tickle 🅕
┆❏.gecg 🅕
┆❏.feed 🅕
┆❏.animeawoo 🅕
┆❏.animemegumin 🅕
┆❏.animeshinobu 🅕
┆❏.animehandhold 🅕
┆❏.animehighfive 🅕
┆❏.animecringe 🅕
┆❏.animedance 🅕
┆❏.animehappy 🅕
┆❏.animeglomp 🅕
┆❏.animeblush 🅕
┆❏.animesmug 🅕
┆❏.animewave 🅕
┆❏.animesmille 🅕
┆❏.animepoke 🅕
┆❏.animewink 🅕
┆❏.animebonk 🅕
┆❏.animebully 🅕
┆❏.animeyeet 🅕
┆❏.animebite 🅕
┆❏.animelick 🅕
┆❏.animekill 🅕
┆❏.animecry 🅕
┆❏.animewlp 🅕
┆❏.animekiss 🅕
┆❏.animehug 🅕
┆❏.animeneko 🅕
┆❏.animepat 🅕
┆❏.animeslap 🅕
┆❏.animecuddle 🅕
┆❏.animewaifu 🅕
┆❏.animenom 🅕
┆❏.animefoxgirl 🅕
┆❏.animegecg 🅕
┆❏.animetickle 🅕
┆❏.animefeed 🅕
┆❏.animeavatar 🅕
┆❏.genshin 🅕
┆❏.anime 🅕
╰–––––––––––––––༓

╭––『 タ Anime NSFW 』
┆❏.hentai 🅕
┆❏.gifhentai 🅕
┆❏.gifblowjob 🅕
┆❏.hentaivid 🅕
┆❏.hneko 🅕
┆❏.nwaifu 🅕
┆❏.animespank 🅕
┆❏.trap 🅕
┆❏.gasm 🅕
┆❏.ahegao 🅕
┆❏.ass 🅕
┆❏.bdsm 🅕
┆❏.blowjob 🅕
┆❏.cuckold 🅕
┆❏.cum 🅕
┆❏.milf 🅕
┆❏.eba 🅕
┆❏.ero 🅕
┆❏.femdom 🅕
┆❏.foot 🅕
┆❏.gangbang 🅕
┆❏.glasses 🅕
┆❏.jahy 🅕
┆❏.masturbation 🅕
┆❏.manga 🅕
┆❏.neko-hentai 🅕
┆❏.neko-hentai2 🅕
┆❏.nsfwloli 🅕
┆❏.orgy 🅕
┆❏.panties 🅕 
┆❏.pussy 🅕
┆❏.tentacles 🅕
┆❏.thighs 🅕
┆❏.yuri 🅕
┆❏.zettai 🅕
┆❏.xnxxsearch 🅟
┆❏.xnxxdl 🅟
╰–––––––––––––––༓

╭––『 タ Textpro Maker 』
┆❏.candy 🅕 
┆❏.christmas 🅕 
┆❏.3dchristmas 🅕 
┆❏.sparklechristmas 🅕
┆❏.deepsea 🅕 
┆❏.scifi 🅕 
┆❏.rainbow 🅕 
┆❏.waterpipe 🅕 
┆❏.spooky 🅕 
┆❏.pencil 🅕 
┆❏.circuit 🅕 
┆❏.discovery 🅕 
┆❏.metalic 🅕 
┆❏.fiction 🅕 
┆❏.demon 🅕 
┆❏.transformer 🅕 
┆❏.berry 🅕 
┆❏.thunder 🅕 
┆❏.magma 🅕 
┆❏.3dstone 🅕 
┆❏.neonlight 🅕 
┆❏.glitch 🅕 
┆❏.harrypotter 🅕 
┆❏.brokenglass 🅕 
┆❏.papercut 🅕 
┆❏.watercolor 🅕 
┆❏.multicolor 🅕 
┆❏.neondevil 🅕 
┆❏.underwater 🅕 
┆❏.graffitibike 🅕
┆❏.snow 🅕 
┆❏.cloud 🅕 
┆❏.honey 🅕 
┆❏.ice 🅕 
┆❏.fruitjuice 🅕 
┆❏.biscuit 🅕 
┆❏.wood 🅕 
┆❏.chocolate 🅕 
┆❏.strawberry 🅕 
┆❏.matrix 🅕 
┆❏.blood 🅕 
┆❏.dropwater 🅕 
┆❏.toxic 🅕 
┆❏.lava 🅕 
┆❏.rock 🅕 
┆❏.bloodglas 🅕 
┆❏.hallowen 🅕 
┆❏.darkgold 🅕 
┆❏.joker 🅕 
┆❏.wicker 🅕
┆❏.firework 🅕 
┆❏.skeleton 🅕 
┆❏.blackpink 🅕 
┆❏.sand 🅕 
┆❏.glue 🅕 
┆❏.1917 🅕 
┆❏.leaves 🅕
┆❏.retro 🅕
┆❏.pornhub 🅕
┆❏.8bit 🅕
┆❏.batman 🅕
┆❏.3dbox 🅕
┆❏.lion 🅕
┆❏.3davengers 🅕
┆❏.window 🅕
┆❏.3dspace 🅕
┆❏.bokeh 🅕
┆❏.holographic 🅕
┆❏.thewall 🅕
┆❏.carbon 🅕
┆❏.whitebear 🅕
┆❏.metallic 🅕
┆❏.steel 🅕
┆❏.fabric 🅕
┆❏.ancient 🅕
┆❏.marvel 🅕
╰–––––––––––––––༓

╭––『 タ PhotoOxy Maker 』
┆❏.shadow 🅕 
┆❏.write 🅕 
┆❏.romantic 🅕 
┆❏.burnpaper 🅕
┆❏.smoke 🅕 
┆❏.narutobanner 🅕 
┆❏.love 🅕 
┆❏.undergrass 🅕
┆❏.doublelove 🅕 
┆❏.coffecup 🅕
┆❏.underwaterocean 🅕
┆❏.smokyneon 🅕
┆❏.starstext 🅕
┆❏.rainboweffect 🅕
┆❏.balloontext 🅕
┆❏.metalliceffect 🅕
┆❏.embroiderytext 🅕
┆❏.flamingtext 🅕
┆❏.stonetext 🅕
┆❏.writeart 🅕
┆❏.summertext 🅕
┆❏.wolfmetaltext 🅕
┆❏.nature3dtext 🅕
┆❏.rosestext 🅕
┆❏.naturetypography 🅕
┆❏.quotesunder 🅕
┆❏.shinetext 🅕
╰–––––––––––––––༓

╭––『 タ Ephoto360 Maker 』
┆❏.glitchtext 🅕
┆❏.writetext 🅕
┆❏.advancedglow 🅕
┆❏.typographytext 🅕
┆❏.pixelglitch 🅕
┆❏.neonglitch 🅕
┆❏.flagtext 🅕
┆❏.flag3dtext 🅕
┆❏.deletingtext 🅕
┆❏.blackpinkstyle 🅕
┆❏.glowingtext 🅕
┆❏.underwatertext 🅕
┆❏.logomaker 🅕
┆❏.cartoonstyle 🅕
┆❏.papercutstyle 🅕
┆❏.watercolortext 🅕
┆❏.effectclouds 🅕
┆❏.blackpinklogo 🅕
┆❏.gradienttext 🅕
┆❏.summerbeach 🅕
┆❏.luxurygold 🅕
┆❏.multicoloredneon 🅕
┆❏.sandsummer 🅕
┆❏.galaxywallpaper 🅕
┆❏.1917style 🅕
┆❏.makingneon 🅕
┆❏.royaltext 🅕
┆❏.freecreate 🅕
┆❏.galaxystyle 🅕
┆❏.lighteffects 🅕
╰–––––––––––––––༓

╭––『 タ Database 』
┆❏.setcmd 🅕
┆❏.delcmd 🅕
┆❏.listcmd 🅕
┆❏.lockcmd 🅕
┆❏.addmsg 🅕
┆❏.delmsg 🅕
┆❏.getmsg 🅕
┆❏.listmsg 🅕
╰–––––––––––––––༓

╭––『 タ Bug & War 』
┆❏.resetotp 🅞
┆❏.xbugp 🅞
┆❏.xbugr 🅞
╰–––––––––––––––༓

╭––『 タ Other Menu 』
┆❏.ping 🅕
┆❏.menu 🅕
┆❏.myip 🅕
┆❏.reportbug 🅕
┆❏.listpem 🅕
┆❏.liststicker 🅕
┆❏.listimage 🅕
┆❏.listvideo 🅕
┆❏.listvn 🅕
┆❏.listbadword 🅕
┆❏.listpc 🅕
┆❏.listgc 🅕
┆❏.owner 🅕
┆❏.rentbot 🅕
┆❏.listrentbot 🅕
┆❏.donate 🅕
┆❏.friend 🅕
┆❏.obfuscate 🅕
┆❏.styletext 🅕
┆❏.fliptext 🅕
┆❏.tts 🅕
┆❏.say 🅕
┆❏.togif 🅕
┆❏.toqr 🅕
┆❏.bass 🅕
┆❏.blown 🅕
┆❏.deep 🅕
┆❏.earrape 🅕
┆❏.fast 🅕
┆❏.fat 🅕
┆❏.nightcore 🅕
┆❏.reverse 🅕
┆❏.robot 🅕
┆❏.slow 🅕
┆❏.smooth 🅕
┆❏.squirrel 🅕
┆❏.tinyurl 🅕
┆❏.tinyurl 🅕
┆❏.tovn 🅕
┆❏.toaudio 🅕
┆❏.tomp3 🅕
┆❏.tomp4🅕
┆❏.toimg 🅕
┆❏.toonce 🅕
┆❏.sticker 🅕
┆❏.take 🅟
┆❏.emoji 🅕
┆❏.volume 🅕
┆❏.ebinary 🅕
┆❏.dbinary 🅕
┆❏.ssweb 🅕
┆❏.quoted 🅕
┆❏.runtime 🅕
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@audisw-mq5nm ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© AUDIKIRITO-MD⚡⚡* 』
`}

global.animemenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
┏━━━━━━━━━━━━━━━┓
┃ ╭┈───────────╮
┃ │ ❍ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ❍ 
┃ ╰┈───────────╯
┗━━━━━━━━━━━━━━━┛
▰▱▰▱▰▱▰▱▰▱▰▱▰
𝘾𝙍𝙀𝘼𝙏𝙊𝙍 : AUDIKIRITO
𝙈𝙔 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 : AUDIKIRITO
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*

ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 

▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╭––『 Anime 』
┆❏.akira 🅕
┆❏.akiyama 🅕
┆❏.ana ??
┆❏.asuna 🅕
┆❏.ayuzawa 🅕
┆❏.boruto 🅕
┆❏.chiho 🅕
┆❏.chitoge 🅕
┆❏.cosplayloli 🅕
┆❏.cosplaysagiri 🅕
┆❏.deidara 🅕
┆❏.doraemon 🅕
┆❏.elaina 🅕
┆❏.emilia 🅕
┆❏.erza 🅕
┆❏.gremory 🅕
┆❏.hestia 🅕
┆❏.hinata 🅕
┆❏.husbu 🅕
┆❏.inori 🅕
┆❏.isuzu 🅕
┆❏.itachi 🅕
┆❏.itori 🅕
┆❏.kaga 🅕
┆❏.kagura 🅕
┆❏.kakasih 🅕
┆❏.kaori 🅕
┆❏.keneki 🅕
┆❏.kotori 🅕
┆❏.kurumi 🅕
┆❏.loli 🅕
┆❏.madara 🅕
┆❏.megumin 🅕
┆❏.mikasa 🅕
┆❏.mikey 🅕
┆❏.miku 🅕
┆❏.minato 🅕
┆❏.naruto 🅕
┆❏.neko 🅕
┆❏.neko2 🅕
┆❏.nekonime 🅕
┆❏.nezuko 🅕
┆❏.onepiece 🅕
┆❏.pokemon 🅕
┆❏.randomnime 🅕
┆❏.randomnime2 🅕
┆❏.rize 🅕
┆❏.sagiri 🅕
┆❏.sakura 🅕
┆❏.sasuke 🅕
┆❏.shina 🅕
┆❏.shinka 🅕
┆❏.shinomiya 🅕
┆❏.shizuka 🅕
┆❏.shota 🅕
┆❏.tejina 🅕
┆❏.toukachan 🅕
┆❏.tsunade 🅕
┆❏.waifu 🅕
┆❏.animewall 🅕
┆❏.yotsuba 🅕
┆❏.yuki 🅕
┆❏.yulibocil 🅕
┆❏.yumeko 🅕
┆❏.8ball 🅕
┆❏.tickle 🅕
┆❏.gecg 🅕
┆❏.feed 🅕
┆❏.animeawoo 🅕
┆❏.animemegumin 🅕
┆❏.animeshinobu 🅕
┆❏.animehandhold 🅕
┆❏.animehighfive 🅕
┆❏.animecringe 🅕
┆❏.animedance 🅕
┆❏.animehappy 🅕
┆❏.animeglomp 🅕
┆❏.animeblush 🅕
┆❏.animesmug 🅕
┆❏.animewave 🅕
┆❏.animesmille 🅕
┆❏.animepoke 🅕
┆❏.animewink 🅕
┆❏.animebonk 🅕
┆❏.animebully 🅕
┆❏.animeyeet 🅕
┆❏.animebite 🅕
┆❏.animelick 🅕
┆❏.animekill 🅕
┆❏.animecry 🅕
┆❏.animewlp 🅕
┆❏.animekiss 🅕
┆❏.animehug 🅕
┆❏.animeneko 🅕
┆❏.animepat 🅕
┆❏.animeslap 🅕
┆❏.animecuddle 🅕
┆❏.animewaifu 🅕
┆❏.animenom 🅕
┆❏.animefoxgirl 🅕
┆❏.animegecg 🅕
┆❏.animetickle 🅕
┆❏.animefeed 🅕
┆❏.animeavatar 🅕
┆❏.genshin 🅕
┆❏.anime 🅕
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@audisw-mq5nm  ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© AUDIKIRITO-MD⚡⚡* 』
`}

global.ownermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Owner Menu 』
┆❏.self 🅞
┆❏.public 🅞
┆❏.join 🅞
┆❏.bctext 🅞
┆❏.poll 🅞
┆❏.bcimage 🅞
┆❏.bcvideo 🅞
┆❏.creategc 🅞
┆❏.userjid 🅞
┆❏.setexif 🅞
┆❏.setbotname 🅞
┆❏.setbotbio 🅞
┆❏.delppbot 🅞
┆❏.shutdown 🅞
┆❏.setppbot 🅞
┆❏.addprem 🅞
┆❏.delprem 🅞
┆❏.addowner 🅞
┆❏.delowner 🅞
┆❏.addvn 🅞
┆❏.delvn 🅞
┆❏.addsticker 🅞
┆❏.delsticker 🅞
┆❏.addimage 🅞
┆❏.delimage 🅞
┆❏.addvideo 🅞
┆❏.delvideo 🅞
┆❏.block 🅞
┆❏.unblock del 🅞
┆❏.leavegc 🅞
┆❏.pushcontact 🅞
┆❏.pushcontactv2 🅞
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@FallXD425 ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© AUDIKIRITO-MD⚡⚡* 』
`}

global.othermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
┏━━━━━━━━━━━━━━━┓
┃ ╭┈───────────╮
┃ │ ❍ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ❍ 
┃ ╰┈───────────╯
┗━━━━━━━━━━━━━━━┛
▰▱▰▱▰▱▰▱▰▱▰▱▰
𝘾𝙍𝙀𝘼𝙏𝙊𝙍 : AUDIKIRITO
𝙈𝙔 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 : AUDIKIRITO
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*

ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 

▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╭––『 Other Menu 』
┆❏.ping 🅕
┆❏.menu 🅕
┆❏.myip 🅕
┆❏.reportbug 🅕
┆❏.listpem 🅕
┆❏.liststicker 🅕
┆❏.listimage 🅕
┆❏.listvideo 🅕
┆❏.listvn 🅕
┆❏.listbadword 🅕
┆❏.listpc 🅕
┆❏.listgc 🅕
┆❏.owner 🅕
┆❏.rentbot 🅕
┆❏.listrentbot 🅕
┆❏.donate 🅕
┆❏.friend 🅕
┆❏.obfuscate 🅕
┆❏.styletext 🅕
┆❏.fliptext 🅕
┆❏.tts 🅕
┆❏.say 🅕
┆❏.togif 🅕
┆❏.toqr 🅕
┆❏.bass 🅕
┆❏.blown 🅕
┆❏.deep 🅕
┆❏.earrape 🅕
┆❏.fast 🅕
┆❏.fat 🅕
┆❏.nightcore 🅕
┆❏.reverse 🅕
┆❏.robot 🅕
┆❏.slow 🅕
┆❏.smooth 🅕
┆❏.squirrel 🅕
┆❏.tinyurl 🅕
┆❏.tinyurl 🅕
┆❏.tovn 🅕
┆❏.toaudio 🅕
┆❏.tomp3 🅕
┆❏.tomp4🅕
┆❏.toimg 🅕
┆❏.toonce 🅕
┆❏.sticker 🅕
┆❏.take 🅟
┆❏.emoji 🅕
┆❏.volume 🅕
┆❏.ebinary 🅕
┆❏.dbinary 🅕
┆❏.ssweb 🅕
┆❏.quoted 🅕
┆❏.runtime 🅕
┆❏.sound1 - sound161 🅕
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@FallXD425 ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© AUDIKIRITO-MD⚡⚡* 』
`}

global.downloadmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
┏━━━━━━━━━━━━━━━┓
┃ ╭┈───────────╮
┃ │ ❍ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ❍ 
┃ ╰┈───────────╯
┗━━━━━━━━━━━━━━━┛
▰▱▰▱▰▱▰▱▰▱▰▱▰
𝘾𝙍𝙀𝘼𝙏𝙊𝙍 : AUDIKIRITO
𝙈𝙔 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 : AUDIKIRITO
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*

ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 

▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╭––『 Download Menu 』
┆❏.ytsearch 🅕
┆❏.play 🅕
┆❏.ytmp3 🅕
┆❏.ytmp4 🅕
┆❏.google 🅕
┆❏.imdb 🅕
┆❏.weather 🅕
┆❏.wanumber 🅕
┆❏.instaimg 🅕
┆❏.instavid 🅕
┆❏.fbvid 🅕
┆❏.twittervid 🅕
┆❏.telestick 🅟
┆❏.spotify 🅟
┆❏.gitclone 🅕
┆❏.happymod 🅕
┆❏.gdrive 🅕
┆❏.pinterest 🅕
┆❏.ringtone 🅕
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@audisw-mq5nm ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© Audisw-MD⚡⚡* 』
`}

global.groupmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
┏━━━━━━━━━━━━━━━┓
┃ ╭┈───────────╮
┃ │ ❍ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ❍ 
┃ ╰┈───────────╯
┗━━━━━━━━━━━━━━━┛
▰▱▰▱▰▱▰▱▰▱▰▱▰
𝘾𝙍𝙀𝘼𝙏𝙊𝙍 : Audikirito
𝙈𝙔 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 : Audikirito
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*

ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 

▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╭––『 Group Menu 』
┆❏.antilink 🅖
┆❏.antiwame 🅖
┆❏.grouplink 🅖
┆❏.invite 🅖
┆❏.ephemeral 🅖
┆❏.delete 🅖
┆❏.setppgroup 🅖
┆❏.delppgroup 🅖
┆❏.setname 🅖
┆❏.setdesc 🅖
┆❏.add 🅖
┆❏.kick 🅖
┆❏.promote 🅖
┆❏.demote 🅖
┆❏.hidetag 🅖
┆❏.totag 🅖
┆❏.tagall 🅖
┆❏.editinfo 🅖
┆❏.opentime 🅖
┆❏.closetime 🅖
┆❏.resetlink 🅖
┆❏.getbio 🅖
┆❏.vote 🅖
┆❏.upvote 🅖
┆❏.downvote 🅖
┆❏.checkvote 🅖
┆❏.delvote 🅖
┆❏.autostickergc 🅖
┆❏.antilinkgc 🅖
┆❏.antiwame 🅖
┆❏.antilinkall 🅖
┆❏.antilinktiktok 🅖
┆❏.antilinkfb 🅖
┆❏.antilinktwitter 🅖
┆❏.antilinkig 🅖
┆❏.antlinktg 🅖
┆❏.antilinkytvid 🅖
┆❏.antilinkytch 🅖
┆❏.antivirus 🅖
┆❏.antitoxic 🅖
┆❏.nsfw 🅖
┆❏.react 🅖
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@audisw-mq5nm ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© AUDIKIRITO-MD⚡⚡* 』
`}

global.funmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
┏━━━━━━━━━━━━━━━┓
┃ ╭┈───────────╮
┃ │ ❍ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ❍ 
┃ ╰┈───────────╯
┗━━━━━━━━━━━━━━━┛
▰▱▰▱▰▱▰▱▰▱▰▱▰
𝘾𝙍𝙀𝘼𝙏𝙊𝙍 : AUDIKIRITO
𝙈𝙔 𝘾𝙃??𝙉𝙉𝙀𝙇 : AUDIKIRITO
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*

ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 

▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╭––『 Fun Menu 』
┆❏.define 🅕
┆❏.qc 🅕
┆❏.lyrics 🅕
┆❏.tictactoe 🅕
┆❏.suit 🅕
┆❏.math 🅕
┆❏.fact 🅕
┆❏.truth 🅕
┆❏.dare 🅕
┆❏.couple 🅕
┆❏.soulmate 🅕
┆❏.stupidcheck 🅕
┆❏.handsomecheck 🅕
┆❏.uncleancheck 🅕
┆❏.hotcheck 🅕
┆❏.smartcheck 🅕
┆❏.greatcheck 🅕
┆❏.evilcheck 🅕
┆❏.dogcheck 🅕
┆❏.coolcheck 🅕
┆❏.waifucheck 🅕
┆❏.awesomecheck 🅕
┆❏.gaycheck 🅕
┆❏.cutecheck 🅕
┆❏.lesbiancheck 🅕
┆❏.hornycheck 🅕
┆❏.prettycheck 🅕
┆❏.lovelycheck 🅕
┆❏.uglycheck 🅕
┆❏.pick 🅕
┆❏.quotes 🅕
┆❏.can 🅕
┆❏.is 🅕
┆❏.when 🅕
┆❏.where 🅕
┆❏.what 🅕
┆❏.how 🅕
┆❏.rate 🅕
┆❏.cry 🅕
┆❏.kill 🅕
┆❏.hug 🅕
┆❏.pat 🅕
┆❏.lick 🅕 
┆❏.kiss 🅕
┆❏.bite 🅕
┆❏.yeet 🅕
┆❏.bully 🅕
┆❏.bonk 🅕
┆❏.wink 🅕
┆❏.poke 🅕
┆❏.nom 🅕
┆❏.slap 🅕
┆❏.smile 🅕 
┆❏.wave 🅕
┆❏.awoo 🅕
┆❏.blush 🅕
┆❏.smug 🅕
┆❏.glomp 🅕 
┆❏.happy 🅕
┆❏.dance 🅕
┆❏.cringe 🅕
┆❏.cuddle 🅕
┆❏.highfive 🅕 
┆❏.shinobu 🅕
┆❏.handhold 🅕
┆❏.spank 🅕
┆❏.tickle 🅕
┆❏.avatar 🅕
┆❏.feed 🅕
┆❏.foxgirl 🅕
┆❏.gecg 🅕
┆❏.checkme 🅕
┆❏.sound1 - sound161 🅕
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@audisw-mq5nm ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© AUDIKIRITO-MD⚡⚡* 』
`}

global.stalkermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
┏━━━━━━━━━━━━━━━┓
┃ ╭┈───────────╮
┃ │ ❍ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ❍ 
┃ ╰┈───────────╯
┗━━━━━━━━━━━━━━━┛
▰▱▰▱▰▱▰▱▰▱▰▱▰
𝘾𝙍𝙀𝘼𝙏𝙊𝙍 : AUDIKIRITO
𝙈𝙔 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 : AUDIKIRITO
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*

ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 

▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╭––『 Stalker 』
┆❏.igstalk 🅕
┆❏.ffstalk 🅕
┆❏.mlstalk 🅕
┆❏.npmstalk 🅕
┆❏.ghstalk 🅕
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@audisw-mq5nm ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© AUDIKIRITO-MD⚡⚡* 』
`}

global.stickermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Sticker 』
┆❏.goose 🅕
┆❏.woof 🅕
┆❏.8ball 🅕
┆❏.lizard 🅕
┆❏.meow 🅕
┆❏.gura 🅕
┆❏.doge 🅕
┆❏.patrick 🅕
┆❏.lovestick 🅕
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@FallXD425 ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© AUDIKIRITO-MD⚡⚡* 』
`}

global.databasemenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
┏━━━━━━━━━━━━━━━┓
┃ ╭┈───────────╮
┃ │ ❍ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ❍ 
┃ ╰┈───────────╯
┗━━━━━━━━━━━━━━━┛
▰▱▰▱▰▱▰▱▰▱▰▱▰
𝘾𝙍𝙀𝘼𝙏𝙊𝙍 : AUDIKIRITO
𝙈𝙔 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 : AUDIKIRITO
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*

ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 

▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╭––『 Database 』
┆❏.setcmd 🅕
┆❏.delcmd 🅕
┆❏.listcmd 🅕
┆❏.lockcmd 🅕
┆❏.addmsg 🅕
┆❏.delmsg 🅕
┆❏.getmsg 🅕
┆❏.listmsg 🅕
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@FallXD425 ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© AUDIKIRITO-MD⚡⚡* 』
`}

global.aimenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 OpenAI 』
┆❏.openai 🅕
┆❏.ai 🅕
┆❏.aimage 🅕
┆❏.remini 🅕
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@FallXD425 ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© AUDIKIRITO-MD⚡⚡* 』
`}

global.bugmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
┏━━━━━━━━━━━━━━━┓
┃ ╭┈───────────╮
┃ │ ❍ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ❍ 
┃ ╰┈───────────╯
┗━━━━━━━━━━━━━━━┛
▰▱▰▱▰▱▰▱▰▱▰▱▰
𝘾𝙍𝙀𝘼𝙏𝙊𝙍 : AUDIKIRITO
𝙈𝙔 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 : AUDIKIRITO
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*

ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 

▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╭––『 Bug & War 』
┆❏.resetotp 🅞
┆❏.xbugp 🅞
┆❏.xbugr 🅞
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@FallXD425 ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© AUDIKIRITO-MD⚡⚡* 』
`}

global.randphotomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
┏━━━━━━━━━━━━━━━┓
┃ ╭┈───────────╮
┃ │ ❍ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ❍ 
┃ ╰┈───────────╯
┗━━━━━━━━━━━━━━━┛
▰▱▰▱▰▱▰▱▰▱▰▱▰
𝘾𝙍𝙀𝘼𝙏𝙊𝙍 : AUDIKIRITO
𝙈𝙔 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 : AUDIKIRITO
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*

ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 

▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╭––『 Random Photo 』
┆❏.aesthetic 🅕
┆❏.coffee 🅕
┆❏.wikimedia 🅕
┆❏.wallpaper 🅕
┆❏.art 🅕
┆❏.bts 🅕
┆❏.dogwoof 🅕
┆❏.catmeow 🅕
┆❏.lizardpic 🅕
┆❏.goosebird 🅕
┆❏.8ballpool 🅕
┆❏.cosplay 🅕
┆❏.hacker 🅕
┆❏.cyber 🅕
┆❏.gamewallpaper 🅕
┆❏.islamic 🅕
┆❏.jennie 🅕
┆❏.jiso 🅕
┆❏.satanic 🅕
┆❏.justina 🅕
┆❏.cartoon 🅕
┆❏.pentol 🅕
┆❏.cat 🅕
┆❏.kpop 🅕
┆❏.exo 🅕
┆❏.lisa 🅕
┆❏.space 🅕
┆❏.car 🅕
┆❏.technology 🅕
┆❏.bike 🅕
┆❏.shortquote 🅕
┆❏.antiwork 🅕
┆❏.hacking 🅕
┆❏.boneka 🅕
┆❏.rose 🅕
┆❏.ryujin 🅕
┆❏.ulzzangboy 🅕
┆❏.ulzzanggirl 🅕
┆❏.wallml 🅕
┆❏.wallphone 🅕
┆❏.mountain 🅕
┆❏.goose 🅕
┆❏.profilepic 🅕
┆❏.couplepic 🅕
┆❏.programming 🅕
┆❏.pubg 🅕
┆❏.blackpink 🅕
┆❏.randomboy 🅕  
┆❏.randomgirl 🅕
┆❏.hijab 🅕  
┆❏.chinese 🅕
┆❏.indo 🅕
┆❏.japanese 🅕
┆❏.korean 🅕
┆❏.malay 🅕
┆❏.thai 🅕
┆❏.vietnamese 🅕
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@audisw-mq5nm ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© AUDIKIRITO-MD⚡⚡* 』
`}

global.randvideomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
┏━━━━━━━━━━━━━━━┓
┃ ╭┈───────────╮
┃ │ ❍ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ❍ 
┃ ╰┈───────────╯
┗━━━━━━━━━━━━━━━┛
▰▱▰▱▰▱▰▱▰▱▰▱▰
𝘾𝙍𝙀𝘼𝙏𝙊𝙍 : AUDIKIRITO
𝙈𝙔 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 : AUDIKIRITO
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*

ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 

▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╭––『 Random Video 』
┆❏.tiktokgirl 🅕
┆❏.tiktoknukthy 🅕
┆❏.tiktokkayes 🅕
┆❏.tiktokpanrika 🅕
┆❏.tiktoknotnot 🅕
┆❏.tiktokghea 🅕
┆❏.tiktoksantuy 🅕
┆❏.tiktokbocil 🅕
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@FallXD425 ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© AUDIKIRITO-MD⚡⚡* 』
`}

global.textpromenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
┏━━━━━━━━━━━━━━━┓
┃ ╭┈───────────╮
┃ │ ❍ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ❍ 
┃ ╰┈───────────╯
┗━━━━━━━━━━━━━━━┛
▰▱▰▱▰▱▰▱▰▱▰▱▰
𝘾𝙍𝙀𝘼𝙏𝙊𝙍 : AUDIKIRITO
𝙈𝙔 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 : AUDIKIRITO
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*

ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 

▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╭––『 Textpro Maker 』
┆❏.candy 🅕 
┆❏.christmas 🅕 
┆❏.3dchristmas 🅕 
┆❏.sparklechristmas 🅕
┆❏.deepsea 🅕 
┆❏.scifi 🅕 
┆❏.rainbow 🅕 
┆❏.waterpipe 🅕 
┆❏.spooky 🅕 
┆❏.pencil 🅕 
┆❏.circuit 🅕 
┆❏.discovery 🅕 
┆❏.metalic 🅕 
┆❏.fiction 🅕 
┆❏.demon 🅕 
┆❏.transformer 🅕 
┆❏.berry 🅕 
┆❏.thunder 🅕 
┆❏.magma 🅕 
┆❏.3dstone 🅕 
┆❏.neonlight 🅕 
┆❏.glitch 🅕 
┆❏.harrypotter 🅕 
┆❏.brokenglass 🅕 
┆❏.papercut 🅕 
┆❏.watercolor 🅕 
┆❏.multicolor 🅕 
┆❏.neondevil 🅕 
┆❏.underwater 🅕 
┆❏.graffitibike 🅕
┆❏.snow 🅕 
┆❏.cloud 🅕 
┆❏.honey 🅕 
┆❏.ice 🅕 
┆❏.fruitjuice 🅕 
┆❏.biscuit 🅕 
┆❏.wood 🅕 
┆❏.chocolate 🅕 
┆❏.strawberry 🅕 
┆❏.matrix 🅕 
┆❏.blood 🅕 
┆❏.dropwater 🅕 
┆❏.toxic 🅕 
┆❏.lava 🅕 
┆❏.rock 🅕 
┆❏.bloodglas 🅕 
┆❏.hallowen 🅕 
┆❏.darkgold 🅕 
┆❏.joker 🅕 
┆❏.wicker 🅕
┆❏.firework 🅕 
┆❏.skeleton 🅕 
┆❏.blackpink 🅕 
┆❏.sand 🅕 
┆❏.glue 🅕 
┆❏.1917 🅕 
┆❏.leaves 🅕
┆❏.retro 🅕
┆❏.pornhub 🅕
┆❏.8bit 🅕
┆❏.batman 🅕
┆❏.3dbox 🅕
┆❏.lion 🅕
┆❏.3davengers 🅕
┆❏.window 🅕
┆❏.3dspace 🅕
┆❏.bokeh 🅕
┆❏.holographic 🅕
┆❏.thewall 🅕
┆❏.carbon 🅕
┆❏.whitebear 🅕
┆❏.metallic 🅕
┆❏.steel 🅕
┆❏.fabric 🅕
┆❏.ancient 🅕
┆❏.marvel 🅕
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@audisw-mq5nm ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© AUDIKIRITO-MD⚡⚡* 』
`}

global.photooxymenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
┏━━━━━━━━━━━━━━━┓
┃ ╭┈───────────╮
┃ │ ❍ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ❍ 
┃ ╰┈───────────╯
┗━━━━━━━━━━━━━━━┛
▰▱▰▱▰▱▰▱▰▱▰▱▰
𝘾𝙍𝙀𝘼𝙏𝙊𝙍 : AUDIKIRITO
𝙈𝙔 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 : AUDIKIRITO
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*

ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 

▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╭––『 PhotoOxy Maker 』
┆❏.shadow 🅕 
┆❏.write 🅕 
┆❏.romantic 🅕 
┆❏.burnpaper 🅕
┆❏.smoke 🅕 
┆❏.narutobanner 🅕 
┆❏.love 🅕 
┆❏.undergrass 🅕
┆❏.doublelove 🅕 
┆❏.coffecup 🅕
┆❏.underwaterocean 🅕
┆❏.smokyneon 🅕
┆❏.starstext 🅕
┆❏.rainboweffect 🅕
┆❏.balloontext 🅕
┆❏.metalliceffect 🅕
┆❏.embroiderytext 🅕
┆❏.flamingtext 🅕
┆❏.stonetext 🅕
┆❏.writeart 🅕
┆❏.summertext ??
┆❏.wolfmetaltext 🅕
┆❏.nature3dtext 🅕
┆❏.rosestext 🅕
┆❏.naturetypography 🅕
┆❏.quotesunder 🅕
┆❏.shinetext 🅕
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@FallXD425 ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© AUDIKIRITO-MD⚡⚡* 』
`}

global.ephoto360menu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
┏━━━━━━━━━━━━━━━┓
┃ ╭┈───────────╮
┃ │ ❍ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ❍ 
┃ ╰┈───────────╯
┗━━━━━━━━━━━━━━━┛
▰▱▰▱▰▱▰▱▰▱▰▱▰
𝘾𝙍𝙀𝘼𝙏𝙊𝙍 : AUDIKIRITO
𝙈𝙔 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 : AUDIKIRITO
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*

ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 

▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╭––『 Ephoto360 Maker 』
┆❏.glitchtext 🅕
┆❏.writetext 🅕
┆❏.advancedglow 🅕
┆❏.typographytext 🅕
┆❏.pixelglitch 🅕
┆❏.neonglitch 🅕
┆❏.flagtext 🅕
┆❏.flag3dtext 🅕
┆❏.deletingtext 🅕
┆❏.blackpinkstyle 🅕
┆❏.glowingtext 🅕
┆❏.underwatertext 🅕
┆❏.logomaker 🅕
┆❏.cartoonstyle 🅕
┆❏.papercutstyle 🅕
┆❏.watercolortext 🅕
┆❏.effectclouds 🅕
┆❏.blackpinklogo 🅕
┆❏.gradienttext 🅕
┆❏.summerbeach 🅕
┆❏.luxurygold 🅕
┆❏.multicoloredneon 🅕
┆❏.sandsummer 🅕
┆❏.galaxywallpaper 🅕
┆❏.1917style 🅕
┆❏.makingneon 🅕
┆❏.royaltext 🅕
┆❏.freecreate 🅕
┆❏.galaxystyle 🅕
┆❏.lighteffects 🅕
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@audisw-mq5nm ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© AUDIKIRITO-MD⚡⚡* 』
`}

global.nsfwmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
┏━━━━━━━━━━━━━━━┓
┃ ╭┈───────────╮
┃ │ ❍ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ❍ 
┃ ╰┈───────────╯
┗━━━━━━━━━━━━━━━┛
▰▱▰▱▰▱▰▱▰▱▰▱▰
𝘾𝙍𝙀𝘼𝙏𝙊𝙍 : AUDIKIRITO
𝙈𝙔 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 : AUDIKIRITO
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*

ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ, ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ. 

▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╭––『 Anime NSFW 』
┆❏.hentai 🅕
┆❏.gifhentai 🅕
┆❏.gifblowjob 🅕
┆❏.hentaivid 🅕
┆❏.hneko 🅕
┆❏.nwaifu 🅕
┆❏.animespank 🅕
┆❏.trap 🅕
┆❏.gasm 🅕
┆❏.ahegao 🅕
┆❏.ass 🅕
┆❏.bdsm 🅕
┆❏.blowjob 🅕
┆❏.cuckold 🅕
┆❏.cum 🅕
┆❏.milf 🅕
┆❏.eba 🅕
┆❏.ero 🅕
┆❏.femdom 🅕
┆❏.foot 🅕
┆❏.gangbang 🅕
┆❏.glasses 🅕
┆❏.jahy 🅕
┆❏.masturbation 🅕
┆❏.manga 🅕
┆❏.neko-hentai 🅕
┆❏.neko-hentai2 🅕
┆❏.nsfwloli 🅕
┆❏.orgy 🅕
┆❏.panties 🅕 
┆❏.pussy 🅕
┆❏.tentacles 🅕
┆❏.thighs 🅕
┆❏.yuri 🅕
┆❏.zettai 🅕
┆❏.xnxxsearch 🅟
┆❏.xnxxdl 🅟
╰–––––––––––––––༓
- 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
youtube.com/@audisw-mq5nm ⚡⚡

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
          『 *© Audikirito-MD⚡⚡* 』
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
