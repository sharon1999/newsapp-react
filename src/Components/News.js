import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles = [
        {
         "source": {
         "id": null,
         "name": "heise online"
         },
         "author": "Frank Schräer",
         "title": "Mittwoch: Homeoffice bei Microsoft, Unesco fordert Internet für alle, Apple-Day",
         "description": "Studie: Homeoffice beeinträchtigt Innovation + Unesco: Deutschland hat Internet-Nachholbedarf + Apple mit iPhone 13, iOS 15, Watch Serie 7, iPad 9 & iPad mini 6",
         "url": "https://www.heise.de/news/Mittwoch-Homeoffice-bei-Microsoft-Unesco-fordert-Internet-fuer-alle-Apple-Day-6192243.html",
         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/1/6/8/7/9/0/mittwoch-12c8ef6f5db15252.jpeg",
         "publishedAt": "2021-09-15T04:30:00Z",
         "content": "Apple hat auf seinen jährlichen September-Event wie gewohnt zahlreiche Neuigkeiten präsentiert, die in den nächsten Wochen und Monaten auf den Markt kommen werden. heise online klärt, was wirklich ne… [+3359 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "heise online"
         },
         "author": "Frank Schräer",
         "title": "Microsoft-Studie: Homeoffice kann Produktivität und Innovation beeinträchtigen",
         "description": "Arbeit von Zuhause führt zu mehr Arbeitsstunden, erschwert aber die Kommunikation zwischen verschiedenen Abteilungen - mit möglicherweise langfristigen Folgen.",
         "url": "https://www.heise.de/news/Microsoft-Studie-Homeoffice-kann-Produktivitaet-und-Innovation-beeintraechtigen-6192236.html",
         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/1/6/8/7/8/6/shutterstock_699109540-7baa0849a5dae882.jpeg",
         "publishedAt": "2021-09-15T01:54:00Z",
         "content": "Eine im Auftrag von Microsoft durchgeführte Studie der Auswirkungen der Arbeit von Zuhause hat ergeben, dass im Homeoffice zwar länger gearbeitet, aber die Kommunikation und Zusammenarbeit zwischen v… [+3414 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "9to5Mac"
         },
         "author": "Filipe Espósito",
         "title": "Apple Watch Series 7 has the same processor as last year’s Apple Watch Series 6",
         "description": "Apple finally announced Apple Watch Series 7 on Tuesday after several rumors about the next generation of its smartwatch. However, unlike what the rumors suggested, Apple Watch Series 7 doesn’t exactly have a brand new design — and that’s not all. It seems th…",
         "url": "http://9to5mac.com/2021/09/14/apple-watch-series-7-has-the-same-processor-as-last-years-apple-watch-series-6/",
         "urlToImage": "https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/09/Screen-Shot-2021-09-14-at-1.28.09-PM.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
         "publishedAt": "2021-09-15T03:40:10Z",
         "content": "Apple finally announced Apple Watch Series 7 on Tuesday after several rumors about the next generation of its smartwatch. However, unlike what the rumors suggested, Apple Watch Series 7 doesn’t exact… [+2037 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "9to5Mac"
         },
         "author": "Chance Miller",
         "title": "Everything Apple announced at its event: iPhone 13, Apple Watch Series 7, new iPad mini, more",
         "description": "After months of rumors, Apple today held its highly-anticipated September event to announce the iPhone 13. In addition to the flagship iPhone announcements, today’s “California streaming” event also marked the introduction of the Apple Watch Series 7, an all-…",
         "url": "http://9to5mac.com/2021/09/14/apple-iphone-13-event-wrap-up/",
         "urlToImage": "https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/09/Screen-Shot-2021-09-14-at-1.58.33-PM.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
         "publishedAt": "2021-09-15T00:22:15Z",
         "content": "After months of rumors, Apple today held its highly-anticipated September event to announce the iPhone 13. In addition to the flagship iPhone announcements, todays California streaming event also mar… [+9051 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "9to5Mac"
         },
         "author": "Parker Ortolani",
         "title": "Comment: Does Apple even know when the Apple Watch Series 7 will actually ship?",
         "description": "Many of us have been left scratching our heads following the announcement of the Apple Watch Series 7, not just because rumors didn’t pan out but because Apple is being quite vague about when it’s going to ship. They’ve simply said that it will be available “…",
         "url": "http://9to5mac.com/2021/09/14/comment-does-apple-even-know-when-the-apple-watch-series-7-will-actually-ship/",
         "urlToImage": "https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/09/Cover-2.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
         "publishedAt": "2021-09-15T00:20:39Z",
         "content": "Many of us have been left scratching our heads following the announcement of the Apple Watch Series 7, not just because rumors didn’t pan out but because Apple is being quite vague about when it’s go… [+5337 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "9to5Mac"
         },
         "author": "Chance Miller",
         "title": "Apple begins offering iPhone Upgrade Program pre-approvals ahead of iPhone 13 release",
         "description": "Ahead of pre-orders officially beginning on Friday, Apple this evening has opened up iPhone Upgrade Program pre-approvals for the iPhone 13, iPhone 13 mini, iPhone 13 Pro, and iPhone 13 Pro Max. This allows iPhone Upgrade Program members to get a head start o…",
         "url": "http://9to5mac.com/2021/09/14/apple-begins-offering-iphone-upgrade-program-pre-approvals-ahead-of-iphone-13-release/",
         "urlToImage": "https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/09/screenshot-2021-09-14-at-19.02.09@2x.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
         "publishedAt": "2021-09-15T00:03:18Z",
         "content": "Ahead of pre-orders officially beginning on Friday, Apple this evening has opened up iPhone Upgrade Program pre-approvals for the iPhone 13, iPhone 13 mini, iPhone 13 Pro, and iPhone 13 Pro Max. This… [+1563 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "9to5Mac"
         },
         "author": "Chance Miller",
         "title": "9to5Mac Daily: September 14, 2021 – iPhone 13 event recap",
         "description": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apple’s Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overcast and other podcast players.\nSponsored by iMazing: iMazing…",
         "url": "http://9to5mac.com/2021/09/14/9to5mac-daily-september-14-2021/",
         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/04/9to5Mac-Daily-art-lead.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
         "publishedAt": "2021-09-15T00:51:54Z",
         "content": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apples Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overca… [+807 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "9to5Mac"
         },
         "author": "Stephen Hall",
         "title": "Here are all the best iPhone trade in values after iPhone 13 launch",
         "description": "In case you missed it, the iPhone 13 mini, iPhone 13, iPhone 13 Pro, and iPhone 13 Pro Max have arrived, and that means it’s time to trade in an older phone! We’re always trying to keep you updated on all the best iPhone, iPad, and MacBook trade in deals ever…",
         "url": "http://9to5mac.com/2021/09/14/all-the-best-iphone-trade-in-after-iphone-13/",
         "urlToImage": "https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2020/08/iPhone-11-Camera-vs-iPhone-XR-Camera.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
         "publishedAt": "2021-09-15T00:50:00Z",
         "content": "In case you missed it, the iPhone 13 mini, iPhone 13, iPhone 13 Pro, and iPhone 13 Pro Max have arrived, and that means it’s time to trade in an older phone! We’re always trying to keep you updated o… [+6344 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "9to5Mac"
         },
         "author": "Filipe Espósito",
         "title": "iPhone 13 Pro’s A15 Bionic chip has more powerful GPU than regular iPhone 13",
         "description": "Apple today introduced iPhone 13 and iPhone 13 Pro, and while the company markets the devices as having the same processor, they have some slight differences in terms of performance. In fact, the GPU of the A15 chip found in the iPhone 13 Pro models is more p…",
         "url": "http://9to5mac.com/2021/09/14/iphone-13-pros-a15-bionic-chip-has-more-powerful-gpu-than-regular-iphone-13/",
         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/09/Screen-Shot-2021-09-14-at-2.01.32-PM.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
         "publishedAt": "2021-09-15T00:33:48Z",
         "content": "Apple today introduced iPhone 13 and iPhone 13 Pro, and while the company markets the devices as having the same processor, they have some slight differences in terms of performance. In fact, the GPU… [+2592 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "9to5Mac"
         },
         "author": "José Adorno",
         "title": "Nintendo Switch updated with the ability to pair AirPods and other Bluetooth headphones",
         "description": "It’s been almost five years since Nintendo released the Nintendo Switch. As it readies the new model coming up next month, the company finally addressed a long wish from its users: the ability to connect AirPods and other Bluetooth headphones to the console.\n…",
         "url": "http://9to5mac.com/2021/09/14/nintendo-switch-airpods-support-bluetooth/",
         "urlToImage": "https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/09/nintendo-switch-airpods-3-9to5mac.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
         "publishedAt": "2021-09-15T00:32:24Z",
         "content": "It’s been almost five years since Nintendo released the Nintendo Switch. As it readies the new model coming up next month, the company finally addressed a long wish from its users: the ability to con… [+1738 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "MarketWatch"
         },
         "author": "Therese Poletti",
         "title": "MarketWatch First Take: Apple’s iPhone 13 upgrades are boring, but they will still sell",
         "description": "Subscription service, trade-ins and carrier promotions to support 5G transition matter more than the new camera specs or color options as Apple reverses slowdown in iPhone sales",
         "url": "https://www.marketwatch.com/story/apples-iphone-13-upgrades-are-boring-but-they-will-still-sell-11631664870",
         "urlToImage": "https://images.mktw.net/im-401168/social",
         "publishedAt": "2021-09-15T00:14:00Z",
         "content": "Apple Inc.s latest iPhone event was a snoozefest, but Apple will sell millions of the new smartphones anyway.Apple \r\n AAPL,\r\n -0.96%\r\nhosted its much anticipated iPhone 13 launch Tuesday, revealing f… [+4529 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "MarketWatch"
         },
         "author": "Emily Bary",
         "title": ": A free iPhone 13? Wireless carriers’ subsidies could make it happen, with some catches",
         "description": "The new iPhone 13 lineup doesn't offer too many new features, but wireless carriers will once again be offering hefty discounts --- all the way up to free --- to get you to buy service from them.",
         "url": "https://www.marketwatch.com/story/a-free-iphone-13-wireless-carriers-subsidies-could-make-it-happen-with-some-catches-11631668462",
         "urlToImage": "https://images.mktw.net/im-401206/social",
         "publishedAt": "2021-09-15T01:14:00Z",
         "content": "The new iPhone 13 lineup doesnt offer too many new features, but wireless carriers will once again be offering hefty discounts all the way up to free to get you to buy service from them. Apple is lik… [+3228 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "AppleInsider"
         },
         "author": "news@appleinsider.com (AppleInsider Staff)",
         "title": "Apple Watch Series 7 uses same processor as predecessor",
         "description": "The Apple Watch Series 7, announced on Tuesday, is thought to use the same S6 system-in-package processor first deployed in the Apple Watch Series 6 released last year.Apple failed to talk up the performance of Apple Watch Series 7's processor during Tuesday'…",
         "url": "https://appleinsider.com/articles/21/09/15/apple-watch-series-7-uses-same-processor-as-predecessor",
         "urlToImage": "https://photos5.appleinsider.com/gallery/44433-86259-210915-AppleWatchSeries7-xl.jpg",
         "publishedAt": "2021-09-15T04:35:22Z",
         "content": "The Apple Watch Series 7, announced on Tuesday, is thought to use the same S6 system-in-package processor first deployed in the Apple Watch Series 6 released last year.\r\nApple failed to talk up the p… [+2494 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "AppleInsider"
         },
         "author": "news@appleinsider.com (Mikey Campbell)",
         "title": "iPhone 13 mmWave 5G support limited to US models",
         "description": "Apple is once again limiting mmWave 5G connectivity to certain devices, with only iPhone 13 units sold in the U.S. capable of accessing the speedy network bands.When Apple introduced 5G capabilities with iPhone 12 last year, it limited access to ultra-fast mm…",
         "url": "https://appleinsider.com/articles/21/09/15/iphone-13-mmwave-5g-support-limited-to-us-models",
         "urlToImage": "https://photos5.appleinsider.com/gallery/44429-86252-210914-iPhone13Pro-xl.jpg",
         "publishedAt": "2021-09-15T01:35:19Z",
         "content": "Apple is once again limiting mmWave 5G connectivity to certain devices, with only iPhone 13 units sold in the U.S. capable of accessing the speedy network bands. \r\nWhen Apple introduced 5G capabiliti… [+1517 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "AppleInsider"
         },
         "author": "news@appleinsider.com (AppleInsider Staff)",
         "title": "Apple invites customers, iPhone Upgrade Program members to prepare for iPhone 13 preorders",
         "description": "Ahead of a start to iPhone 13 preorders on Friday, Apple is accepting iPhone Upgrade Program pre-approvals for iPhone 13 and allowing those not in the program to prepare for checkout.Typically, Apple activates the loan pre-approval process for new and existin…",
         "url": "https://appleinsider.com/articles/21/09/15/apple-invites-customers-iphone-upgrade-program-members-to-prepare-for-iphone-13-preorders",
         "urlToImage": "https://photos5.appleinsider.com/gallery/44430-86257-210914-iPHone13Preorder-xl.jpg",
         "publishedAt": "2021-09-15T02:24:50Z",
         "content": "Ahead of a start to iPhone 13 preorders on Friday, Apple is accepting iPhone Upgrade Program pre-approvals for iPhone 13 and allowing those not in the program to prepare for checkout. \r\nTypically, Ap… [+1902 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "AppleInsider"
         },
         "author": "news@appleinsider.com (AppleInsider Staff)",
         "title": "iPhone 13 models thicker and heavier, TrueDepth notch slightly taller than iPhone 12 lineup",
         "description": "Apple's latest iPhone 13 models eschew the company's long-held \"thinner is better\" mantra in favor of better camera systems and larger batteries.While Apple didn't focus on handset dimensions during Tuesday's hardware reveal, specifications published to the c…",
         "url": "https://appleinsider.com/articles/21/09/15/iphone-13-models-thicker-and-heavier-truedepth-notch-slightly-taller-than-iphone-12-lineup",
         "urlToImage": "https://photos5.appleinsider.com/gallery/44431-86258-210914-iPhone13ProDepth-xl.jpg",
         "publishedAt": "2021-09-15T03:00:02Z",
         "content": "Apple's latest iPhone 13 models eschew the company's long-held \"thinner is better\" mantra in favor of better camera systems and larger batteries. \r\nWhile Apple didn't focus on handset dimensions duri… [+1484 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "AppleInsider"
         },
         "author": "news@appleinsider.com (AppleInsider Staff)",
         "title": "ProRes in 4K limited to iPhone 13 models with 256GB of storage or more",
         "description": "Support for Apple's ProRes video compression format is a tentpole feature for iPhone 13 Pro, but the capability's upper echelons — 4K video recording at 30 frames per second — is limited to models with storage allotments of 256GB or more.Apple made a point of…",
         "url": "https://appleinsider.com/articles/21/09/15/prores-in-4k-limited-to-iphone-13-models-with-256gb-of-storage-or-more",
         "urlToImage": "https://photos5.appleinsider.com/gallery/44432-86256-210914-iPhone13ProCamera-xl.jpg",
         "publishedAt": "2021-09-15T03:06:05Z",
         "content": "Support for Apple's ProRes video compression format is a tentpole feature for iPhone 13 Pro, but the capability's upper echelons — 4K video recording at 30 frames per second — is limited to models wi… [+873 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "Gizmodo.jp"
         },
         "author": "嘉島唯",
         "title": "Sonos からDolby Atmos対応サウンドバーSonos Beam (G2)が5万9800円で登場！",
         "description": "Sonos（ソノス）から新世代のSonos Beamが発表されました。Dolby Atmosに対応して、よりリッチな音響体験が自宅で楽しめるようになります。",
         "url": "https://www.gizmodo.jp/2021/09/sonos-beam-g2.html",
         "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2021/09/12/beam-credenza-black-w960.jpg",
         "publishedAt": "2021-09-15T00:00:00Z",
         "content": "Sonos BeamAI32018SONOS\r\n3Sonos Beam (G2) 59800 \r\n49Beam65×100×69 mm2.8kg\r\nImage : Sonos\r\nSonos Beam (G2)Dolby AtmosCPU40SONOSDolby Atmos5.1ch35\r\n1Dolby AtmosSonos ArcSonos Arc10\r\n Sonos Wall Mount \r\n… [+236 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "Gizmodo.jp"
         },
         "author": "satomi",
         "title": "アップル製品にゼロデイ脆弱性。iPhone、iPad、Mac、Apple Watchは今すぐアプデを！",
         "description": "アップルがスパイウェアPegasusの脆弱性修正パッチを配布中。会話やSMSの内容が筒抜けになるほか、カメラの遠隔操作も可能になるなどかなり悪質なスパイウェア。",
         "url": "https://www.gizmodo.jp/2021/09/apple-distributes-vulnerability-fix-patch-for-pegasus-spyware.html",
         "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2021/09/15/20210914update_your_OS_NOW-w960.jpg",
         "publishedAt": "2021-09-15T01:00:00Z",
         "content": "iOS 15iPad OS 1520\r\nNSO GroupPegasusAppleiPhoneiPadMacApple Watch\r\niPhoneiPhone 6siPad5iPad ProiPad Air2iPad mini4iPod touch7OSOSiOS 14.8iPad OS 14.8watchOS 7.6.2macOS Big Sur 11.6OK\r\nCVE-2021-30860C… [+102 chars]"
         },
        {
         "source": {
         "id": null,
         "name": "Gizmodo.jp"
         },
         "author": "amito",
         "title": "iPhoneにくっつくレザーウォレットは、1分以上離れると通知が来る #AppleEvent",
         "description": "Image:Apple失くすのが難しい財布。iPhoneの後ろにピタッとくっつく財布「MagSafeレザーウォレット」ですが、Appleイベント内で「探す」アプリに対応したと発表されました。レザーウォレット部分を失くした場合に、「探す」アプリで位置を調べて見つけ出すことができるわけですね。これ、正確には「最後にiPhoneからレザーウォレットが離れた場所」を記録して表示するらしいです。MagSaf",
         "url": "https://www.gizmodo.jp/2021/09/iphone-leather-wallet-1min.html",
         "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2021/09/15/20210915_1775-01_h720-w960.jpeg",
         "publishedAt": "2021-09-15T01:30:00Z",
         "content": "Copyright © mediagene Inc. All Rights Reserved."
         }
         ]
        constructor(){
        super();
        this.state = {
            articles:this.articles,
            loading : false
        }
    }
    render() {
        return (
            <div className="container">
                <div className="container my-4 row">
                    <h2 style = {{textAlign : 'center',padding : '10px'}}>News Monkey Headlines</h2>
                    {this.state.articles.map((element)=>{
                    return<div className="col" key = {element.url}>
                        <NewsItem  title={element.title} description={element.description}
                        imageUrl={element.urlToImage}  newsUrl = {element.url}/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
