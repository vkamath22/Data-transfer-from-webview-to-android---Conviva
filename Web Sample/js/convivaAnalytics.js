
function ConvivaAnalytic() {
var TEST_CUSTOMER_KEY = //insert your customerkey here,
TOUCHSTONE_SERVICE_URL = //Insert your servive URL here,
convivaConfigs = {},
systemUtilityCallbackFunctions = {},
convivaVideoAnalytics,
convivaAdAnalytics,
ads;



function init(contentInfo,playerInfo,ads){
  var settings = {};
  var ads = true;
  settings[Conviva.Constants.GATEWAY_URL] = TOUCHSTONE_SERVICE_URL;
//  settings[Conviva.Constants.LOG_LEVEL] = Conviva.Constants.LogLevel.DEBUG;
  Conviva.Analytics.init(TEST_CUSTOMER_KEY, null, settings);
  
  convivaVideoAnalytics = Conviva.Analytics.buildVideoAnalytics();
  convivaVideoAnalytics.setContentInfo(contentInfo)
  convivaVideoAnalytics.setPlayerInfo(playerInfo);
  if(ads){
      convivaAdAnalytics = Conviva.Analytics.buildAdAnalytics(convivaVideoAnalytics);
    }
  convivaVideoAnalytics.reportPlaybackRequested(contentInfo); //SESSION START
}
    this.initialize = function(contentInfo,playerInfo,ads) {
    
        init(contentInfo,playerInfo,ads); 
    }, 
    this.ReleseResource = function() {
          Conviva.Analytics.release();
    }, 
    this.ReportEvent = function(eventName, eventPlayload, timeStamp, contentInfo) {
        switch (eventName) {
            case "onContentPauseRequested":

                break;
            case "onContentResumeRequested":
                
            break;
            case "adstarted":
                convivaAdAnalytics.reportAdStarted(eventPlayload);
                convivaAdAnalytics.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE,Conviva.Constants.PlayerState.PLAYING);
                break;
            case "adloaded":
                convivaAdAnalytics.reportAdLoaded();
            break;
            case "playerReloaded":
                break;
            case "adbuffering":
                convivaAdAnalytics.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE,Conviva.Constants.PlayerState.BUFFERING);
                break
            case "adpaused":
                convivaAdAnalytics.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE,Conviva.Constants.PlayerState.PAUSED);
                break;
            case "adprogress":
                
                break;
            case "adskipped":
                convivaAdAnalytics.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE,Conviva.Constants.PlayerState.STOPPED);
                convivaAdAnalytics.reportAdSkipped();
                break;
            case "adcompleted":
                convivaAdAnalytics.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE,Conviva.Constants.PlayerState.STOPPED);
                convivaAdAnalytics.reportAdEnded();
                break;
            case "aderror":
                convivaAdAnalytics.reportAdFailed(contentInfo, eventPlayload);
                break;
            case "playerReset":
                convivaVideoAnalytics.reportPlaybackEnded();
                break;
            case "play":
                  convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.PLAYING);
                break;
            case "onReplay":
                 convivaVideoAnalytics.reportPlaybackRequested(contentInfo);
                 playbackEnded = !1;
                break;
            case "playbackstart":
                this.playerStateManager.setPlayerState(Conviva.PlayerStateManager.PlayerState.PLAYING);
                var metatadata = new Conviva.ContentMetadata;
                metatadata.streamUrl = ztvlib.getCurrentVideoURL();
                this.updateMetadata();
                this.client.updateContentMetadata(this.contentSessionKey, metatadata);
                playbackEnded = !1;
                break;
            case "mutechange":
                convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.UNKNOWN);
                break;
            case "playing":
                convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.PLAYING);
                playbackEnded = !1;
                break;
            case "progress":
                this.calculateFramerate();
                this.updateEndTime();
                break;
            case "timeupdate":
                  convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAY_HEAD_TIME, timeStamp);
                break;
            case "audiotrackchanged":
            case "enterfullscreen":
            case "texttrackchanged":
                break;
            case "ratechange":
                break;
            case "pause":
                convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.PAUSED);
                break;
            case "videotrackchanged":
                break;
            case "playbackended":
            case "ended":
                convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE,Conviva.Constants.PlayerState.STOPPED);
                convivaVideoAnalytics.reportPlaybackEnded();
                break;
            case "stop":
                console.log("Event Occurerd: " + eventName);
                convivaVideoAnalytics.reportPlaybackMetric (Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.STOPPED);
                convivaVideoAnalytics.reportPlaybackEnded();
                adPlaying && this.AdsEndSession();
                break;
            case "seeking":
                convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.SEEK_STARTED, timeStamp);
                break;
            case "waiting":
                convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.BUFFERING);
                break;
            case "seeked":
                convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.SEEK_ENDED, timeStamp);
                break;
            case "browserError":
            case "redirectionError":
            case "playbackFailure":
            case "error":
                if (eventPlayload)
                    convivaVideoAnalytics.reportPlaybackFailed(eventPlayload, contentInfo);
        }
    }, 

    this.playbackChanged = function() {
        convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE,Conviva.Constants.PlayerState.STOPPED);
        convivaVideoAnalytics.reportPlaybackEnded();
    },
    this.calculateFramerate = function() {
        var mClientMeasureInterface;
        clientInterfaceObject = new function() {
            this.getPHT = function() {
                return Math.round(player.currentTime)
            }, this.getBufferLength = function() {
                return player.buffered
            }, this.getSignalStrength = function() {
                return 0
            }, this.getRenderedFrameRate = function() {
                return -1
            }
        }, this.playerStateManager.setClientMeasureInterface(clientInterfaceObject)
    }, this.updateAnalytics = function(bufferLength,playheadTimeMs,renderedFramerate,bitrate) {
        convivaVideoAnalytics.setCallback(function() {
          convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.BUFFER_LENGTH, bufferLength);
          convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAY_HEAD_TIME, playheadTimeMs);
          convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.RENDERED_FRAMERATE, renderedFramerate);
        });
        convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.BITRATE, bitrate);
    }
}