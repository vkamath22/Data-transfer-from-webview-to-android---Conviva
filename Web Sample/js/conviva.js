var TEST_CUSTOMER_KEY = "28bbf0a3decf6d1165032bfd835d6e1844c5d44d",
    TOUCHSTONE_SERVICE_URL = "https://cws.conviva.com",
    applicationName = "",
    resource = "AKAMAI",
    adPlaying = !1,
    playbackEnded = !1;

function ConvivaAnalytic() {
    var convivaContentMetadata, client, clientSettings, playerStateManager, systemFactory, systemInterface, systemSettings, contentSessionKey, adSessionKey, adPlayerStateManager, Client, adsMetadata, requiredData, monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        dayOfWeekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function formatDate(date, patternStr) {
        patternStr || (patternStr = "M/d/yyyy");
        var day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear(),
            hour = date.getHours(),
            minute = date.getMinutes(),
            second = date.getSeconds(),
            miliseconds = date.getMilliseconds(),
            h = hour % 12,
            hh = twoDigitPad(h),
            HH = twoDigitPad(hour),
            mm = twoDigitPad(minute),
            ss = twoDigitPad(second),
            aaa = hour < 12 ? "AM" : "PM",
            EEEE = dayOfWeekNames[date.getDay()],
            EEE = EEEE.substr(0, 3),
            dd = twoDigitPad(day),
            M = month + 1,
            MM = twoDigitPad(M),
            MMMM = monthNames[month],
            MMM = MMMM.substr(0, 3),
            yyyy = year + "",
            yy = yyyy.substr(2, 2);
        return patternStr = (patternStr = patternStr.replace("hh", hh).replace("h", h).replace("HH", HH).replace("H", hour).replace("mm", mm).replace("m", minute).replace("ss", ss).replace("s", second).replace("S", miliseconds).replace("dd", dd).replace("d", day).replace("EEEE", EEEE).replace("EEE", EEE).replace("yyyy", yyyy).replace("yy", yy).replace("aaa", aaa)).indexOf("MMM") > -1 ? patternStr.replace("MMMM", MMMM).replace("MMM", MMM) : patternStr.replace("MM", MM).replace("M", M)
    }

    function twoDigitPad(num) {
        return num < 10 ? "0" + num : num
    }
    this.initialize = function(analyticConfig) {
        "production" == analyticConfig.convivaEnvironment && (TOUCHSTONE_SERVICE_URL = TOUCHSTONE_SERVICE_URL), applicationName = analyticConfig.convivaPlayerName, convApplicationVersion = analyticConfig.convivaPlayerVersion, this.systemSettings = new Conviva.SystemSettings, this.systemInterface = new Conviva.SystemInterface(new Html5Time, new Html5Timer, new Html5Http, new Html5Storage, new Html5Metadata, new Html5Logging), this.systemFactory = new Conviva.SystemFactory(this.systemInterface, this.systemSettings), this.clientSettings = new Conviva.ClientSettings(TEST_CUSTOMER_KEY), this.clientSettings.gatewayUrl = TOUCHSTONE_SERVICE_URL, this.client = new Conviva.Client(this.clientSettings, this.systemFactory)
    }, this.SetConvivaMetaData = function(contentMetadata) {
        convivaContentMetadata = contentMetadata
    }, this.SetConvivaJson = function(jsonContent) {}, this.getConvivaSessionKey = function() {
        return this.contentSessionKey
    }, this.StartSession = function() {
        if (convivaContentMetadata) {
            var contentMetadata = new Conviva.ContentMetadata;
            contentMetadata.assetName = "[" + convivaContentMetadata.contentID + "] " + convivaContentMetadata.assetName, 
            contentMetadata.streamUrl = convivaContentMetadata.streamUrl,
            contentMetadata.streamType = videoPlayback.isContentLiveTv() ? Conviva.ContentMetadata.StreamType.LIVE : Conviva.ContentMetadata.StreamType.VOD,
            contentMetadata.applicationName = ztvlib.getPlayerConfig().analytics.conviva.playername, 
            contentMetadata.viewerId = ztvlib.getUserId(), 
            contentMetadata.duration = convivaContentMetadata.duration, 
            contentMetadata.encodedFrameRate = convivaContentMetadata.encodedFrameRate;
            var pubDate = new Date(Date.parse(convivaContentMetadata.pubDate)).toString(),
                viewingMode;
            if ("Invalid Date" !== pubDate) var publisher_date = formatDate(new Date(pubDate), "MMMM d, yyyy");
            viewingMode = kalturaPlayer.isFullscreen() ? "Fullscreen" : "Normal", contentMetadata.custom = {
                contentID: convivaContentMetadata.contentID,
                isan: "NA",
                rootID: convivaContentMetadata.contentID,
                playerVersion: convivaContentMetadata.playerVersion,
                accessType: ztvlib.getConvivaUserType(),
                viewerAge: convivaContentMetadata.viewerAge,
                viewerGender: convivaContentMetadata.viewerGender,
                videoStartPoint: "NA",
                videoEndPoint: "NA",
                viewingMode: viewingMode,
                playbackQuality: "Auto",
                autoPlay: "true",
                episodeName: convivaContentMetadata.episodeName,
                category: convivaContentMetadata.category,
                ContentType: convivaContentMetadata.ContentType,
                pubDate: publisher_date,
                duration: convivaContentMetadata.duration,
                show: convivaContentMetadata.show,
                originalLanguage: convivaContentMetadata.originalLanguage,
                season: convivaContentMetadata.season,
                audioLanguage: convivaContentMetadata.audioLanguage,
                channel: convivaContentMetadata.channel,
                genre: convivaContentMetadata.gener,
                Subtitle: convivaContentMetadata.subtitle,
                connectionType: "NA",
                streamingProtocol: convivaContentMetadata.streamingProtocol,
                affiliate: convivaContentMetadata.affiliate,
                site: convivaContentMetadata.site,
                appVersion: ztvlib.getPlayerConfig().analytics.conviva.playerVersion
            }, this.contentSessionKey = this.client.createSession(contentMetadata), this.playerStateManager = this.client.getPlayerStateManager(), this.playerStateManager.setPlayerType("Kaltura Player"), this.playerStateManager.setPlayerVersion(ztvlib.getPlayerConfig().analytics.conviva.playerVersion)
        }
    }, this.EndSession = function() {
        this.client.cleanupSession(this.contentSessionKey)
    }, this.ReleseResource = function() {}, this.ReportEvent = function(eventName, eventPlayload, timeStamp) {
        switch (eventName) {
            case "adstarted":
                adPlaying = !0, "preroll" == kalturaPlayer.ads._adBreak._type ? (this.client.adStart(this.contentSessionKey, Conviva.Client.AdStream.SEPARATE, Conviva.Client.AdPlayer.SEPARATE, Conviva.Client.AdPosition.PREROLL), this.client.detachPlayer(this.contentSessionKey)) : "midroll" == kalturaPlayer.ads._adBreak._type ? (this.client.adStart(this.contentSessionKey, Conviva.Client.AdStream.SEPARATE, Conviva.Client.AdPlayer.SEPARATE, Conviva.Client.AdPosition.MIDROLL), 
                    this.client.detachPlayer(this.contentSessionKey)) : "postroll" == kalturaPlayer.ads._adBreak._type && (this.client.adStart(this.contentSessionKey, Conviva.Client.AdStream.SEPARATE, Conviva.Client.AdPlayer.SEPARATE, Conviva.Client.AdPosition.POSTROLL), this.client.detachPlayer(this.contentSessionKey)), this.adPlayerStateManager.setPlayerState(Conviva.PlayerStateManager.PlayerState.PLAYING);
                break;
            case "adloaded":
            case "playerReloaded":
                break;
            case "adpaused":
                this.adPlayerStateManager.setPlayerState(Conviva.PlayerStateManager.PlayerState.PAUSED);
                break;
            case "adprogress":
                this.adPlayerStateManager.setPlayerState(Conviva.PlayerStateManager.PlayerState.PLAYING);
                break;
            case "adskipped":
            case "adcompleted":
                adPlaying = !1, this.adPlayerStateManager.setPlayerState(Conviva.PlayerStateManager.PlayerState.STOPPED), this.client.detachPlayer(this.contentSessionKey), this.client.adEnd(this.contentSessionKey);
                break;
            case "aderror":
                adPlaying = !1, this.adPlayerStateManager = this.client.getPlayerStateManager(), this.adPlayerStateManager.sendError("Ad Error :" + event.data, Conviva.Client.ErrorSeverity.FATAL);
                break;
            case "playerReset":
                this.playerStateManager.setPlayerState(Conviva.PlayerStateManager.PlayerState.STOPPED), this.client.cleanupSession(this.contentSessionKey), adPlaying && this.AdsEndSession();
                break;
            case "play":
                this.client.attachPlayer(this.contentSessionKey, this.playerStateManager), this.playerStateManager.setPlayerState(Conviva.PlayerStateManager.PlayerState.PLAYING);
                break;
            case "onReplay":
                this.StartSession(), playbackEnded = !1;
                break;
            case "playbackstart":
                this.playerStateManager.setPlayerState(Conviva.PlayerStateManager.PlayerState.PLAYING);
                var metatadata = new Conviva.ContentMetadata;
                metatadata.streamUrl = ztvlib.getCurrentVideoURL(), this.updateMetadata(), this.client.updateContentMetadata(this.contentSessionKey, metatadata), playbackEnded = !1;
                break;
            case "mutechange":
                this.playerStateManager.setPlayerState(Conviva.PlayerStateManager.PlayerState.NOT_MONITORED);
                break;
            case "playing":
                this.playerStateManager.setPlayerState(Conviva.PlayerStateManager.PlayerState.PLAYING), playbackEnded = !1;
                break;
            case "progress":
                this.calculateFramerate(), this.updateEndTime();
                break;
            case "timeupdate":
                break;
            case "audiotrackchanged":
            case "enterfullscreen":
            case "texttrackchanged":
                this.updateMetadata();
                break;
            case "ratechange":
                break;
            case "pause":
                this.playerStateManager.setPlayerState(Conviva.PlayerStateManager.PlayerState.PAUSED);
                break;
            case "videotrackchanged":
                this.updateMetadata();
                break;
            case "playbackended":
            case "ended":
                0 == playbackEnded && (this.playerStateManager.setPlayerState(Conviva.PlayerStateManager.PlayerState.STOPPED), this.client.cleanupSession(this.contentSessionKey), adPlaying && this.AdsEndSession(), playbackEnded = !0);
                break;
            case "stop":
                console.log("Event Occurerd: " + eventName), this.playerStateManager.setPlayerState(Conviva.PlayerStateManager.PlayerState.STOPPED), this.client.cleanupSession(this.contentSessionKey), adPlaying && this.AdsEndSession();
                break;
            case "seeking":
                this.playerStateManager.setPlayerSeekStart(Math.round(kalturaPlayer.currentTime));
                break;
            case "waiting":
                this.playerStateManager.setPlayerState(Conviva.PlayerStateManager.PlayerState.BUFFERING);
                break;
            case "seeked":
                this.playerStateManager.setPlayerSeekEnd();
                break;
            case "browserError":
            case "redirectionError":
            case "playbackFailure":
            case "error":
                if (eventPlayload)
                    if ("playbackFailure" == eventPlayload.type || "redirectionError" == eventPlayload.type || "browserError" == eventPlayload.type) {
                        if ("string" == typeof eventPlayload) var message = eventPlayload;
                        else var message = eventPlayload.payload;
                        this.client.reportError(this.contentSessionKey, JSON.stringify(message), Conviva.Client.ErrorSeverity.FATAL), this.client.cleanupSession(this.contentSessionKey)
                    } else {
                        if ("string" == typeof eventPlayload) var message = eventPlayload;
                        else var message = eventPlayload.payload.data[0];
                        2 == eventPlayload.payload.severity ? (this.client.reportError(this.contentSessionKey, JSON.stringify(message), Conviva.Client.ErrorSeverity.FATAL), this.client.cleanupSession(this.contentSessionKey)) : this.client.reportError(this.contentSessionKey, JSON.stringify(message), Conviva.Client.ErrorSeverity.WARNING)
                    }
        }
    }, this.calculateFramerate = function() {
        var mClientMeasureInterface;
        clientInterfaceObject = new function() {
            this.getPHT = function() {
                return Math.round(kalturaPlayer.currentTime)
            }, this.getBufferLength = function() {
                return kalturaPlayer.buffered
            }, this.getSignalStrength = function() {
                return 1e3
            }, this.getRenderedFrameRate = function() {
                return -1
            }
        }, this.playerStateManager.setClientMeasureInterface(clientInterfaceObject)
    }, this.updateMetadata = function() {
        var metaData = new Conviva.ContentMetadata;
        if (metaData.streamUrl = kalturaPlayer.src, metaData.streamType = kalturaPlayer.streamType, null != kalturaPlayer.getActiveTracks().audio && (metaData.audioLanguage = kalturaPlayer.getActiveTracks().audio._language), kalturaPlayer.getActiveTracks().video && (metaData.playbackQuality = kalturaPlayer.getActiveTracks().video._label), kalturaPlayer.isFullscreen()) metaData.viewingMode = "Fullscreen";
        else {
            metaData.viewingMode = "Normal";
            var tags = {
                streamingProtocol: kalturaPlayer.streamType,
                videoStartPoint: videoPlayback.getVodCurrentTime().toString()
            };
            null != kalturaPlayer.getActiveTracks().video && (tags.playbackQuality = kalturaPlayer.getActiveTracks().video.height.toString(), metaData.custom = tags)
        }
        this.client.updateContentMetadata(this.contentSessionKey, metaData)
    }, this.updateEndTime = function() {
        var metaData = new Conviva.ContentMetadata,
            tags = {
                videoEndPoint: Math.round(kalturaPlayer.currentTime).toString()
            };
        metaData.custom = tags, this.client.updateContentMetadata(this.contentSessionKey, metaData)
    }, this.setBitrateQuality = function(bitrateData) {
        this.playerStateManager.setBitrateKbps(bitrateData)
    }, this.setPlayerHeightWidth = function(height, width) {
        this.playerStateManager.setVideoResolutionWidth(width), this.playerStateManager.setVideoResolutionHeight(height)
    }, this.InitializeAdsSession = function(adsMetadata) {
        var adMetadata = new Conviva.ContentMetadata;
        adMetadata.assetName = adsMetadata.title, adMetadata.streamUrl = adsMetadata.url, adMetadata.duration = adsMetadata.duration, adMetadata.encodedFrameRate = 60, adMetadata.streamType = videoPlayback.isContentLiveTv() ? Conviva.ContentMetadata.StreamType.LIVE : Conviva.ContentMetadata.StreamType.VOD, adMetadata.applicationName = ztvlib.getPlayerConfig().analytics.conviva.playername, adMetadata.viewerId = ztvlib.getUserId(), adMetadata.custom = {
            "c3.ad.technology": adsMetadata.technology,
            "c3.ad.id": adsMetadata.id,
            "c3.ad.system": adsMetadata.system,
            "c3.ad.position": adsMetadata.type,
            "c3.ad.isSlate": adsMetadata.isSlate,
            "c3.ad.mediaFileApiFramework": adsMetadata.mediaFileApiFramework,
            "c3.ad.adStitcher": adsMetadata.adStitcher,
            "c3.ad.unitName": adsMetadata.unitName,
            "c3.ad.sequence": adsMetadata.sequence,
            "c3.ad.creativeId": adsMetadata.creativeId,
            "c3.ad.creativeName": adsMetadata.creativeName,
            "c3.ad.breakId": adsMetadata.breakId,
            "c3.ad.category": adsMetadata.category,
            "c3.ad.classification": adsMetadata.classification,
            "c3.ad.advertiser": adsMetadata.advertiser,
            "c3.ad.advertiserCategory": adsMetadata.advertiserCategory,
            "c3.ad.advertiserId": adsMetadata.advertiserId,
            "c3.ad.campaignName": adsMetadata.campaignName,
            "c3.ad.dayPart": adsMetadata.dayPart,
            "c3.ad.adManagerName": adsMetadata.managerName,
            "c3.ad.adManagerVersion": adsMetadata.managerVersion,
            "c3.ad.sessionStartEvent": adsMetadata.sessionStartEvent,
            "c3.indiaexindia": adsMetadata.indiaexindia,
            "c3.ad.firstAdId": adsMetadata.id,
            "c3.ad.firstAdSystem": "NA",
            "c3.ad.firstAdCreativeId": adsMetadata.creativeId
        }, this.adSessionKey = this.client.createAdSession(this.contentSessionKey, adMetadata), this.adPlayerStateManager = this.client.getPlayerStateManager(), this.client.attachPlayer(this.adSessionKey, this.adPlayerStateManager)
    }, this.AdsEndSession = function() {
        this.client.releasePlayerStateManager(this.adPlayerStateManager), this.client.cleanupSession(this.adSessionKey)
    }
}