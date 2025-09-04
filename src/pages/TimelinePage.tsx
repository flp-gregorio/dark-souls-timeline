import React, { useState, useEffect } from "react";

type TimelinePoint = {
    label: string;
    time: number;
    description: string;
    keywords: string[]; // Japanese-only
    image?: string; // Optional image URL
};

const points: TimelinePoint[] = [
    {
        label: "The Age of Ancients",
        time: 0,
        description: "The world existed in an undistinguished monotony—shrouded in fog, dominated by grey crags, archtrees, and the everlasting dragons before Fire ever appeared.",
        keywords: ["霧", "灰色の岩", "大樹", "古竜", "分かたれず"],
        image: "/src/assets/age_of_ancients.png"
    },
    {
        label: "The Everlasting Dragons",
        time: 1,
        description: "The original dragons (古竜) are effectively non-decaying (朽ちぬ); their stone scales and bodies embody an eternity that predates the Flame.",
        keywords: ["古竜", "朽ちぬ", "ウロコ", "古木", "永遠"]
    }, {
        label: "The First Flame",
        time: 2,
        description: "At some point the First Flame appears and brings Disparity—heat and cold, life and death, light and dark—ending the world’s prior monotony and creating distinct states of being.",
        keywords: ["最初の火", "差異", "熱", "冷たさ", "生", "死", "光", "闇"]
    },
    {
        label: "They Find the Lord Souls",
        time: 3,
        description: "Beings born of the Dark are drawn to the Flame and discover the powerful Lord Souls—seeds of power that will shape the future order of the world.",
        keywords: ["闇より生まれた", "火に惹かれ", "王のソウル", "王の力"]
    },
    {
        label: "The Four Lords",
        time: 4,
        description: "The principal Lords arise from those souls: Nito (the first of the dead), the Witch of Izalith and her Daughters of Chaos, Gwyn the Lord of Sunlight with his knights, and the furtive pygmy.",
        keywords: ["ニト", "イザリスの魔女", "混沌の娘たち", "太陽の光の王グウィン", "騎士たち", "小人"]
    },
    {
        label: "Seath the Scaleless",
        time: 5,
        description: "Seath the Scaleless betrays the archdragons, becomes allied with Gwyn, and pursues forbidden research into immortality—his experiments drive him mad and his Archives become a forbidden place.",
        keywords: ["白竜シース", "裏切り者", "公爵", "書庫", "不死のウロコ", "狂気"]
    },
    {
        label: "War Against the Dragons",
        time: 6,
        description: "The Lords challenge the archdragons: Gwyn’s lightning shatters scales, Izalith’s firestorms rage, and Nito unleashes death-miasma. Seath’s treachery seals the dragons’ fate.",
        keywords: ["グウィンの雷", "魔女の炎", "死の瘴気", "ウロコのない白竜シース", "古竜の敗北"]
    },
    {
        label: "Betrayal & Dragon Hunts",
        time: 7,
        description: "Though mighty, the archdragons are driven to near-extinction: Seath’s betrayal undermines them, and Gwyn’s knights (and specialized gear/rings) are instrumental in felling dragons.",
        keywords: ["裏切り", "鷹の指輪", "獅子の指輪", "ゴー", "オーンスタイン", "竜狩り"]
    },
    {
        label: "Dragon Scales & Worship",
        time: 8,
        description: "Dragon scales are inseparable from archdragons and symbolize immortality; apostles and transcenders search the world for scales and relics to attain that permanence.",
        keywords: ["竜のウロコ", "超越者", "古竜の永遠", "探し求める"]
    },
    {
        label: "Dragon Remains as Weapons",
        time: 9,
        description: "Teeth and bones of archdragons (e.g., Havel’s Dragon Tooth) are used to craft legendary weapons; dragon remains are a source of unbreakable materials and power.",
        keywords: ["古竜の牙", "古竜の大骨", "岩より硬い", "アイアンゴーレム"]
    },
    {
        label: "Dragon Worship & Rites",
        time: 10,
        description: "Some humans worship dragons in pursuit of transcending life; secret rites can transform worshippers—granting dragon heads and breath—but such metamorphoses are irreversible until death.",
        keywords: ["秘儀", "古竜への道", "竜のブレス", "人頭を竜のそれとする", "生命の超越"]
    },
    {
        label: "Archdragon Descendants",
        time: 11,
        description: "Not all dragon-kin are equal: Stone Archdragon, Gaping Dragon, Kalameet, drakes/wyverns and serpents represent descendants or degenerate branches of the original archdragons.",
        keywords: ["石の古竜", "灰の湖", "貪食ドラゴン", "黒竜カラミット", "飛竜ヘルカイト", "竜のできそこない"]
    },
    {
        label: "The Beginning of the Age of Fire",
        time: 12,
        description: "With the dragons broken, the Age of Fire begins: the world is transformed under the dominion of Lords and the Flame’s order.",
        keywords: ["火の時代", "王たち", "支配"]
    },
    {
        label: "The Lords and Their Powers",
        time: 13,
        description: "Each Lord embodies a piece of power—Gwyn with lightning and sunlight, Nito with death, the Witch of Izalith with fire, Seath with crystal sorcery—shaping the cosmology and later conflicts.",
        keywords: ["グウィン", "太陽の光", "ニト", "死", "混沌の火", "魔術", "結晶"]
    },
    {
        label: "The Fading of Fire",
        time: 14,
        description: "Inevitably the Flame wanes; embers remain while human society slides toward endless nights as the Age of Dark encroaches.",
        keywords: ["火は消えかけ", "残り火", "夜ばかりが続く"]
    },
    {
        label: "The Darksign Appears",
        time: 15,
        description: "A cursed mark begins to manifest—variously called 闇の印 or ダークリング—branding the Undead and tying mortals to the new, cursed condition.",
        keywords: ["闇の印", "ダークリング", "呪われた不死"]
    },
    {
        label: "The Undead Curse",
        time: 16,
        description: "The Darksign and the Undead condition create cycles of death and hollowing; humanity and the Dark Soul complicate the fate of mortals.",
        keywords: ["不死", "空洞化", "呪い", "人間性", "闇のソウル"]
    },
    {
        label: "Undead Are Corralled North",
        time: 17,
        description: "In this land, Undead branded by the mark are captured and sent north to be imprisoned until the world's end—establishing places like the Northern Undead Asylum.",
        keywords: ["不死は捕らえられ", "北に送られ", "世界の終わりまで", "不死院"]
    },
    {
        label: "Key to the Northern Undead Asylum",
        time: 18,
        description: "A mysterious knight drops a corpse with a key into the player’s cell—an uncanny catalyst that enables escape and sets the player on a pilgrimage.",
        keywords: ["北の不死院の地下牢の鍵", "死体", "騎士", "鍵"]
    },
    {
        label: "Asylum: Iron Bar Keys (east)",
        time: 19,
        description: "Keys referencing iron bars on the asylum’s east side emphasize the prison’s segmented, iron-barred architecture—designed to contain Undead thoroughly.",
        keywords: ["二階東側の鉄格子の鍵", "鉄格子", "牢獄", "二階"]
    },
    {
        label: "Large Key of the Chosen",
        time: 20,
        description: "A Large Key for the Asylum’s main-hall inner door belongs to a 'chosen' Undead pilgrim—hinting at prophecy, selection, and the larger pilgrimage to come.",
        keywords: ["本堂の奥扉を開く大鍵", "選ばれた不死", "巡礼"]
    },
    {
        label: "Asylum: Iron Bar Keys (west)",
        time: 21,
        description: "The west-side iron-bar key suggests ways to return or interact with the Asylum from Lordran, but also underscores that escape may lead to a world that cannot be re-entered easily.",
        keywords: ["二階西側の鉄格子の鍵", "西側", "戻る手段"]
    },
    {
        label: "Legend: Pilgrimage to Lordran",
        time: 22,
        description: "An old legend states that a very rare chosen Undead will leave the Asylum on a pilgrimage to Lordran, the land of ancient Lords—this prophecy frames the player's destiny.",
        keywords: ["古い伝承", "巡礼", "ロードラン", "古い王たちの地"]
    }
];



const TimelinePage: React.FC = () => {
    document.title = "Dark Souls Timeline";
    const [activeImage, setActiveImage] = useState<string | null>(null);
    const [visibleImage, setVisibleImage] = useState<string | null>(null);

    useEffect(() => {
        if (activeImage) {
            setVisibleImage(activeImage);
        } else {
            const timer = setTimeout(() => setVisibleImage(null), 3000); // 3s matches your CSS transition
            return () => clearTimeout(timer);
        }
    }, [activeImage]);

    return (
        <div className="bg-neutral-950 min-h-full p-10">
            <h1 className="text-white font-semibold uppercase tracking-wide font-garamond text-right md:text-center z-10 sticky text-4xl md:text-7xl">
                Dark Souls
            </h1>
            <h2 className="text-white font-semibold uppercase tracking-wide font-garamond text-right md:text-center z-10 sticky text-4xl md:text-7xl">
                Timeline
            </h2>
            <small className="block text-amber-700 font-bold uppercase tracking-widest font-garamond text-right md:text-center z-10 sticky cursor-pointer"
                onClick={() => window.location.href = '/'}>
                Return
            </small>
            {/* Image Background  */}
            <div className="fixed inset-0 z-0">
                <div
                    className={`w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none
          transition-all duration-3000 ease-in-out left-0 top-0 z-0`}
                    style={{
                        backgroundImage: visibleImage ? `url(${visibleImage})` : "none",
                        filter: activeImage ? "blur(0px)" : "blur(100px)",
                        opacity: activeImage ? 0.75 : 0,
                        transition: "all 3s ease-in-out",
                        boxShadow: activeImage
                            ? "inset 150px 100px 40px 40px rgba(10, 10, 10, 1), inset -150px -100px 40px 40px rgba(10, 10, 10, 1)"
                            : "none",
                    }}
                />
            </div>

            {/* Timeline */}
            <div className="relative w-full my-10 mx-auto after:content-[''] after:absolute after:top-0 after:md:left-1/2 after:md:left-0  after:w-1.5 after:h-full after:bg-white">
                {points.map((point) => (
                    <div key={point.time}
                    >
                        {/* Container */}
                        <div className={`${point.time % 2 === 0 ? "left-0" : "md:left-1/2"} 
                            relative py-2.5 left-5 md:left-0 md:px-12 md:max-w-[50%] w-full z-10 group transition-all transition-duration-500 `}>
                            {/* Text-Box */}
                            <div className="bg-white relative text-lg py-2.5 px-6 border-amber-700 border-6 "

                                onMouseEnter={() => point.image && setActiveImage(point.image)}
                                onMouseLeave={() => setActiveImage(null)}>
                                <h3 className="font-garamond text-2xl font-bold uppercase tracking-widest text-amber-700 drop-shadow-glow-dark mb-2">
                                    {point.label}
                                </h3>
                                <hr className="text-amber-700"></hr>
                                <p className="font-serif text-neutral-800 text-base leading-relaxed tracking-wide italic drop-shadow-glow-dark">
                                    {point.description}
                                </p>
                                <h4 className="inline-block text-amber-800 text-xs uppercase font-bold mr-2 px-1.5 py-0.5 tracking-wide mt-2">Keywords:</h4>
                                {point.keywords.map((keyword, index) => (
                                    <span key={index} className="inline-block bg-amber-200 text-amber-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded mt-2">
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimelinePage;
