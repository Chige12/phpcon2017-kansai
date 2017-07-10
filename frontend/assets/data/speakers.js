var data = [
    {
        track:"C01+C02",
        room:"yellow",
        time: "10:40-11:20",
        name:"新原 雅司（@shin1x1）",
        title: "PHPの現場から",
        summary01: "PHP は、多くの特徴を持つ言語です。例えば、ステートレスでリクエスト毎に独立して動作するランタイム。万能コレクションの array。<br>HTML を動的に記述するただけに利用する人から、フレームワークや OOP を駆使したシステムを開発する人まで幅広いユーザがいるのも PHP の大きな特徴です。",
        summary02: "2000 年から Web システム開発に携わってきた経験から、現場から見た PHP ついて、2017 年の今、あらためて見つめ直してみましょう",
        profile: "１×１株式会社 代表取締役。PHP システムの技術サポートや開発を行っている。「PHP の現場」という Podcast で現場の話をするのが楽しい。",
        facebook: "",
        twitter: "",
        github: "",
        other: "",
        img: "speaker_shimbara.png",
    },
    {
        track:"C01+C02",
        room:"yellow",
        time: "11:40-12:10",
        name:"後藤 知宏",
        title: "総集編 - 最近のPHPがわからない人のための基本文法おさらい講座",
        summary01: "PHP5.3 以降PHPはめまぐるしい変化を遂げ様々な新機能が追加されてきました。新しく追加された機能の一つ一つは、便利で有用なものの、まだ使った事がない、よくわからないという人も多いのでは無いでしょうか？",
        summary02: "Composer ってなんだろう、というところから、PHP7.1最新の新機能まで、今現場で使えるPHPの新機能をおさらいしていきましょう。",
        profile: "がんばります！",
        facebook: "",
        twitter: "",
        github: "",
        other: "",
        img: "speaker_goto.jpeg",
    },
    {
        track:"C05",
        room:"red",
        time: "11:40-12:10",
        name:"たきぐち(@atakig)",
        title: "PHPerのためのgolang講座",
        summary01: "golangが実業務で使われている話を耳にするのは、もう珍しくなくなってきています。<br>数年に渡り、PHPで開発を続けてきた私が、業務でgolangを使うようになって得た知見をPHPとの比較を交えながら説明します",
        summary02: "",
        profile: "Webアプリケーションエンジニア。cloudpack大阪所属。以前のメイン業務はECサイトの保守。この数ヶ月はserverless lambdaと、golangによるWebアプリの開発を担当。",
        facebook: "",
        twitter: "https://twitter.com/atakig",
        github: "",
        other: "",
        img: "speaker_takiguchi.jpg",
    },
    {
        track: "C07",
        room: "blue",
        time: "11:40-12:10",
        name: "松藤 秀治",
        title: "PHPにおけるDSL",
        summary01: "ドメイン特化言語(DSL: Domain Specific Language)とは特定のドメインをうまく処理するために用意された言語のことを言います。身近な例ではSQLや正規表現がDSLにあたります。",
        summary02: "このような一般的によく使われるDSLとは別にアプリケーション固有のDSLを作ることもできます。そこで自分たちがPHPで作るアプリケーションにどのようにDSLを使用していくのかを一般的なオブジェクト指向による開発と比較しながら紹介します。",
        profile: "大阪在住のエンジニア。PHPでは主にSymfonyを使ってます。ECサイトを構築するためのフレームワークをどう作るかを模索中。",
        facebook: "",
        twitter: "https://twitter.com/matsu_hide",
        github: "",
        other: "",
        img: "speaker_matsufuji.png"
    },
    {
        track:"C01+C02",
        room:"yellow",
        time: "13:10-13:40",
        name:"PHP Users",
        title: "パネルディスカッション 〜PSRとDIとフレームワーク〜",
        summary01: "すでに17番まで提案が進んでいるPSR、果たして各フレームワークプロジェクトは相互運用へ向かっているのか。レビューフェーズ中のPSR-11 Container Interfaceを通して見えるPHPのDI(Dependency Injection)とは。そもそもフレームワークという概念とは。",
        summary02: "...とかそんなのはとうてい30分では語りつくせないので、まあ基本こうですよね、んで、実際どうですか、どう思いますか、でパネラーの皆さんに自由に喋ってもらいます。さあ何が起こるか。バトルは懇親会までもつれ込むのか... 乞うご期待。",
        profile: "パネラー:原田 康生・竹澤有貴・山岡広幸・奥清隆<br>進行:田中ひさてる",
        facebook: "",
        twitter: "",
        github: "",
        other: "",
        img: "speaker_default.png",
    },
    {
        track:"C05",
        room:"red",
        time: "13:10-13:40",
        name:"長谷川 智希",
        title: "ハッシュと暗号は違うぞ！",
        summary01: "Webエンジニアであれば一度は使ったことがあるであろうハッシュですが、ハッシュは時として暗号やその他の概念と混同されます。本セッションではハッシュと暗号の違いを入り口に、ハッシュへの理解を深め、正しくハッシュを使うための基礎知識を解説します。",
        summary02: "含まれるテーマ<br>・ハッシュとは何か<br>・ハッシュの脆弱性とは何か<br>・Googleが発見したSHA-1脆弱性<br>・ハッシュへの攻撃<br>・ハッシュに似た概念との違い - 暗号, エンコード, 難読化<br>・PHPでのハッシュの使い方<br>・言語へのDoS攻撃 hashdos",
        profile: "デジタルサーカス株式会社 副団長CTO。趣味はCakePHP、カンファレンス運営、カートレース、電子工作。好きな飲み物はビール。",
        facebook: "",
        twitter: "https://twitter.com/tomzoh",
        github: "",
        other: "http://www.hasegawa-tomoki.com/",
        img: "speaker_hasegawa.jpg",
    },
    {
        track:"C07",
        room:"blue",
        time: "13:10-13:40",
        name:"岸田 健一郎",
        title: "Robo を使ったモダンなタスク管理",
        summary01: "最近ではGradleやGulpなどタスクランナーは、よりコードに近い形で定義できるツールが使われてきています。<br>PHPではJenkinsなどとの連携の容易さから、Phingが使われることが多かったと思いますが、XMLでの定義は容易ではありませんでした。",
        summary02: "RoboはPHPのコードでタスクを定義できるモダンなタスクランナーで、私たちPHPerにも読みやすく理解しやすい構造をしています。<br><br>このセッションではRoboを使ったタスクの定義を、動作デモを交えて紹介したいと思います。<br><a class='textLink' href='http://robo.li/' target=_blank>http://robo.li/</a>",
        profile: "株式会社永和システムマネジメント所属。",
        facebook: "",
        twitter: "https://twitter.com/sizuhiko",
        github: "",
        other: "",
        img: "speaker_kishida.jpg",
    },
    {
        track:"C01+C02",
        room:"yellow",
        time: "14:00-14:30",
        name:"奥 清隆",
        title: "PHP[TEK] 2017 参加レポート",
        summary01: "5月末にアトランタで開催された「PHP[TEK] 2017」(<a class='textLink' href='http://robo.li/' target=_blank>https://tek.phparch.com/</a>)に参加してきました。<br>5日間に渡って行われたカンファレンスの内容を30分に凝縮して、最新のPHP情報をレポートします。",
        summary02: "",
        profile: "株式会社ロックオン EC-CUBEの中の人。好きな言語はJava。",
        facebook: "",
        twitter: "",
        github: "https://git.io/K",
        other: "",
        img: "speaker_oku.png",
    },
    {
        track:"C05",
        room:"red",
        time: "14:00-14:30",
        name:"竹澤 有貴",
        title: "PHPで支える大規模ラムダアーキテクチャ",
        summary01: "最近ではビックデータに欠かせないHadoop、Cassandra、kafkaなどを使うケースが増えており、PHPアプリケーションからもこうしたミドルウェアと連携することが増えてきています。",
        summary02: "本講演では、ビッグデータを支えるラムダアーキテクチャそのものに触れながら、Cassandraやkafkaを組み合わせたアプリケーションの実例や、こうしたスケーラブルなミドルウェアとRDBMSとの接点を探っていきます",
        profile: "株式会社アイスタイル所属。主にPHPやGo、Javaを使って開発しています。好きな財団はApacheソフトウェア財団。",
        facebook: "https://www.facebook.com/yuuki.takezawa",
        twitter: "https://twitter.com/ex_takezawa",
        github: "https://github.com/ytake",
        other: "",
        img: "speaker_takezawa.jpeg",
    },
    {
        track:"C07",
        room:"blue",
        time: "14:00-14:30",
        name:"山岡 広幸",
        title: "Slim Frameworkで始めるPHPのmiddleware",
        summary01: "Slim Frameworkを例に、PHPのフレームワーク（Laravel、Zend Expressiveなども）で最近使われるようになってきたmiddlewareの仕組みや考え方についてお話しします。",
        summary02: "あわせて、組み合わせて使うことになるDIコンテナについても何が便利になるのかを解説します。",
        profile: "合同会社テンマドの代表社員・エンジニア。自社プロダクトを開発しつつ、複数の会社で社外CTOやアドバイザーを務めています",
        facebook: "https://www.facebook.com/hiroy",
        twitter: "https://twitter.com/hiro_y",
        qiita: "",
        github: "",
        other: "https://10mado.jp",
        img: "speaker_yamaoka.png",
    },
    {
        track:"C01+C02",
        room:"yellow",
        time: "14:45-15:15",
        name:"花谷 拓磨(Potato4d)",
        title: "現代におけるプロダクト開発とPHPを選定するワケ",
        summary01: "いわゆるメジャーなLAMPスタックがかえって珍しい存在になってきている今のWebサイト/Webアプリケーション開発において、サーバーサイドを担う技術として、なぜ私たちはPHPを使うのでしょうか。",
        summary02: "他のサーバーサイドの技術も多く存在する中、現代の開発においてなぜ私達がPHPを利用するのか。改めて見つめ直してみましょう。",
        profile: "ピクシブ株式会社のエンジニア。普段はJavaScriptがメイン。FRONTEND CONFERENCE 2017実行委員長",
        facebook: "https://www.facebook.com/potato4d",
        twitter: "https://twitter.com/potato4d",
        github: "",
        other: "https://potato4d.me",
        img: "speaker_hanatani.jpg",
    },
    {
        track:"C05",
        room:"red",
        time: "14:45-15:15",
        name:"高橋 慎一",
        title: "明日から使える！「関心事」と「責務」のお話",
        summary01: "今までなんとなくで行ってきた設計に困らされたことはありませんか？<br>全体のアーキテクチャの例とPHPのコードの例をもとにマイクロサービスから私が学んだ「関心事」にフォーカスしたお話をします。",
        summary02: "",
        profile: "現職：cloudpack（アイレット株式会社）R&Dセクション/セクションリーダー<br>前職：EC-CUBE3開発リーダー<br> カノジョができた。",
        facebook: "https://www.facebook.com/tkpyyy",
        twitter: "https://twitter.com/takapyyy",
        github: "",
        other: "",
        img: "speaker_takahashi.png",
    },
    {
        track:"C07",
        room:"blue",
        time: "14:45-15:15",
        name:"坂本 剛彦",
        title: "今すぐできるLaravelフレームワーク！～業務アプリ開発～",
        summary01: "高機能で利便性が高く、今世界で最も人気のあるPHPフレームワークLaravel。<br>Laravelの利用視点を大規模Webアプリ開発ではなく小規模業務向けアプリ開発に絞って、フレームワークの利用メリットを解説。",
        summary02: "本セッションでは、Laravelのバリデーション（Validation）の基礎から応用までを説明し、Laravelの良さを掴んでもらいます。<br>聴講者には明日からLaravelを使いたくなって頂きます。",
        profile: "2006年未踏ユース開発者経験を経て、株式会社ソディック入社。<br>森、山、海や工作機械、3Dプリンタに囲まれ、PHPを業務で日々書く。",
        facebook: "",
        twitter: "https://twitter.com/sakamoto03",
        github: "",
        other: "",
        img: "speaker_sakamoto.jpg",
    },
    {
        track:"C01+C02",
        room:"yellow",
        time: "15:30-16:00",
        name:"遠藤 良",
        title: "ぼくの辿りついた最強のPHP開発環境、あえてのWindows。",
        summary01: "PHP開発の現場で１年半。<br>様々なストレスに立ち向かい辿りついたWindowsでの開発環境をXAMMP,Vagrant,Dockerなどのツールを比較してご紹介したいと思います。",
        summary02: "ローカル環境でのページ遷移に10秒とか待っている方、その環境どうにかなりますよ！",
        profile: "株式会社ロックオン EC-CUBEの中の人。チームの大半がMacに乗り換えるなか、愛を持ってWindowsを使っています。",
        facebook: "https://www.facebook.com/endo.ryo.1984",
        twitter: "",
        github: "https://github.com/ryo-endo",
        other: "",
        img: "speaker_endo.jpg",
    },
    {
        track:"C05",
        room:"red",
        time: "15:30-16:00",
        name:"新倉 涼太",
        title: "ひたすら楽してPHPアプリをコンテナ運用",
        summary01: "サービスの信頼性を決定づける運用は、単純作業となりがちなので、なるべく自動化したいもの。<br>今回、PHPアプリをコンテナで開発したので、本番環境のコンテナ運用をフルマネージドで管理してくれる、<br>AWS ECSというサービスを使った結果、",
        summary02: "どのような運用になったのかを実際のサービスを事例として紹介する。",
        profile: "半年だけ工事屋やってたPHPer６年生。最近はコンテナでの開発・運用に傾倒してる。",
        facebook: "",
        twitter: "",
        github: "https://github.com/niisan-tokyo",
        other: "http://qiita.com/niisan-tokyo",
        img: "speaker_niikura.png",
    },
    {
        track:"C07",
        room:"blue",
        time: "15:30-16:00",
        name:"下地 功一",
        title: "PHPでWebSocketを実装してみてわかったこと",
        summary01: "Webでリアルタイム通信を実現するWebSocket。<br>WebSocketと言えば、Socket.IO(node)やActionCable(Rails5)なんかはメジャーですが、<br>さて、PHPではどうしましょうか。まだデファクトが無いですよね。",
        summary02: "いろいろ調べて試してわかったことを、お伝えしたいと思います。",
        profile: "組込系、エンプラ系、Web系となんでもやってきたエンジニア。現在、株式会社鈴木商店で「標準化」を担当。",
        facebook: "",
        twitter: "",
        github: "",
        other: "",
        img: "speaker_simojichi.png",
    },
    {
        track:"C01+C02",
        room:"yellow",
        time: "16:15-16:45",
        name:"角田 一平",
        title: "テストと仲良くするためのCodeceptionのはじめかた",
        summary01: "テスティングフレームワーク『Codeception』を使って、テストと仲良くなってみませんか？<br>Codeceptionでの主にブラウザテストのはじめかたやTipsについてご紹介いたします。",
        summary02: "",
        profile: "Web制作会社を経て、現在はフリーランスエンジニアとして2016年7月から活動中。CoderDojo枚方代表。",
        facebook: "https://www.facebook.com/ippeisumida",
        twitter: "https://twitter.com/ippey_s",
        github: "",
        other: "",
        img: "speaker_sumida.png",
    },
    {
        track:"C05",
        room:"red",
        time: "16:15-16:45",
        name:"渡辺 一宏",
        title: "PHPでもサーバーレスしたい",
        summary01: "昨年辺りから高い注目を集めているサーバーレスアーキテクチャ。しかし、サーバーレスの代表格、AWS Lambdaではnodejs/Python/JavaのみでPHPを公式にはサポートしていません...。",
        summary02: "本セッションでは、PHPでAzure Functionsを利用する方法を中心に、Azure Functionsの概要、実際の開発、単体テスト、デプロイの方法など様々なTipsをご紹介します。",
        profile: "合同会社decr代表社員。インフラ構築・運用、Webシステムの開発、iOSアプリ開発などいろいろやってます。",
        facebook: "https://www.facebook.com/kaz29",
        twitter: "https://twitter.com/kaz_29",
        github: "",
        other: "http://decr.jp/",
        img: "speaker_watanabe.jpg",
    },
    {
        track:"C07",
        room:"blue",
        time: "16:15-16:45",
        name:"二神 暢彦",
        title: "PHPerさんに伝えたい最近のフロント事情と開発フロー",
        summary01: "バックエンドエンジニアとフロントエンドエンジニアは共にプロジェクトに携わることも多く、コミュニケーションを円滑にすることは大事だと思います。",
        summary02: "「フロントの実装はES6で書いて、babelでトランスパイルして、他のライブラリと一緒にwebpackでコンパイルするんですよ」と言われても何語？という方のために登場ツールの説明と役割について話したいと思います。後半ではAPIでつながることでスピードを保ちながら開発をすすめる方法について、普段行っている開発話を交えながらお話する予定です。",
        profile: "昨年大阪から東京勤務になりました。<br>昨年Vue.jsを使いだし、すっかり虜なフロントエンドエンジニア。<br>現上司はPHPer。",
        facebook: "https://www.facebook.com/nobuhiko.futagami",
        twitter: "https://twitter.com/bobu_web",
        github: "",
        other: "http://qiita.com/bobu_web",
        img: "speaker_futagami.jpeg",
    },
]


class Sessions{

    constructor(data){
        this.data = data
    }

    findByRoom(room){
        let rtn = [];
        for(var session of this.data) {
            if (session.track === room) {
                rtn.push(session)
            }
        }
        return rtn;
    }

    findByTime(room){
        let rtn = [];
        for(var session of this.data) {
            if (session.time === room) {
                rtn.push(session)
            }
        }
        return rtn;
    }
}

module.exports = new Sessions(data)
