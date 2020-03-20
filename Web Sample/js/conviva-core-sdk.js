/*! (C) 2020 Conviva, Inc. All rights reserved. Confidential and proprietary. */
!function(a,b){if("function"==typeof define&&define.amd?define(b):"object"==typeof exports&&(module.exports=b()),void 0!==a){if(void 0!==a.Conviva)return;if(a.ConvivaLoading)return
;a.ConvivaLoading=!0,a.Conviva=b(),delete a.ConvivaLoading}}(this,function(){var a={};return function(){"use strict";var b={};!function(){var c=a.Constants={};c.version="4.0.2",
c.CUSTOMER_KEY="customerKey",c.GATEWAY_URL="gatewayUrl",c.LOG_LEVEL="logLevel",c.ASSET_NAME="assetName",c.PLAYER_NAME="applicationName",c.IS_LIVE="streamType",c.ENCODED_FRAMERATE="encodedFrameRate",
c.DEFAULT_RESOURCE="defaultResource",c.STREAM_URL="streamUrl",c.VIEWER_ID="viewerId",c.DURATION="duration",c.POD_INDEX="podIndex",c.POD_POSITION="podPosition",c.POD_DURATION="podDuration",
c.MODULE_NAME="moduleName",c.MODULE_VERSION="moduleVersion",c.FRAMEWORK_NAME="frameworkName",c.FRAMEWORK_VERSION="frameworkVersion",c.CLIENT_CONFIGURATION_FAILED="Constants not yet configured",
c.INVALID_PLAYER_MONITOR="Invalid : Did you report playback ended?",c.INVALID_AD_PLAYER_MONITOR="Invalid : Did you report ad playback ended?",c.PLAYER_UNAVAILABLE_ERROR="Player cannot be null",
c.PLAYBACK_ANALYTICS_AVAILABLE="PlaybackAnlytics already built",c.PLAYBACK_ANALYTICS_NOT_AVAILABLE="PlaybackAnlytics not yet built",c.Playback={BITRATE:"BITRATE",PLAY_HEAD_TIME:"PLAY_HEAD_TIME",
RESOLUTION:"RESOLUTION",BUFFER_LENGTH:"BUFFER_LENGTH",PLAYER_STATE:"PLAYER_STATE",RENDERED_FRAMERATE:"RENDERED_FRAMERATE",SEEK_STARTED:"SEEK_STARTED",SEEK_ENDED:"SEEK_ENDED",CDN_IP:"CDN_IP"},
c.Network={SIGNAL_STRENGTH:"SIGNAL_STRENGTH",LINK_ENCRYPTION:"LINK_ENCRYPTION",CONNECTION_TYPE:"CONNECTION_TYPE"},c.ErrorSeverity={FATAL:1,WARNING:0},c.NO_SESSION_KEY=-2,c.AdPosition={
PREROLL:"Pre-roll",MIDROLL:"Mid-roll",POSTROLL:"Post-roll"},c.AdPlayer={CONTENT:"CONTENT",SEPARATE:"SEPARATE"},c.DeviceType={DESKTOP:"DESKTOP",CONSOLE:"Console",SETTOP:"Settop",MOBILE:"Mobile",
TABLET:"Tablet",SMARTTV:"SmartTV"},c.AdType={CLIENT_SIDE:"Client Side",SERVER_SIDE:"Server Side"},c.AdSlates={BLACKOUT_SLATE:"Blackout slate",
TECHNICAL_DIFFICULTIES_SLATE:"Technical Difficulties slate",COMMERCIAL_SLATE:"Commercial Break slate",OTHER_SLATE:"Other slate",VPAID:"VPAID",REGULAR:"Regular Ad"},c.AdServingType={INLINE:"Inline",
WRAPPER:"Wrapper"},c.DeviceCategory={ANDROID_DEVICE:"AND",APPLE_DEVICE:"APL",CHROMECAST:"CHR",DESKTOP_APP:"DSKAPP",DEVICE_SIMULATOR:"SIMULATOR",LG_TV:"LGTV",NINTENDO:"NINTENDO",PLAYSTATION:"PS",
ROKU:"RK",SAMSUNG_TV:"SAMSUNGTV",SMART_TV:"TV",SET_TOP_BOX:"STB",TIVO:"TIVO",WEB:"WEB",WINDOWS_DEVICE:"WIN",XBOX:"XB",KAIOS_DEVICE:"KAIOS"},c.LogLevel={DEBUG:0,INFO:1,WARNING:2,ERROR:3,NONE:4},
c.PlayerState={STOPPED:"STOPPED",PLAYING:"PLAYING",BUFFERING:"BUFFERING",PAUSED:"PAUSED",UNKNOWN:"UNKNOWN",NOT_MONITORED:"NOT_MONITORED"},c.Events={USER_WAIT_STARTED:"Conviva.UserWaitStarted",
USER_WAIT_ENDED:"Conviva.UserWaitEnded",BUMPER_VIDEO_STARTED:"Conviva.BumperVideoStarted",BUMPER_VIDEO_ENDED:"Conviva.BumperVideoEnded",AD_REQUESTED:"Conviva.AdRequested",
AD_RESPONSE:"Conviva.AdResponse",AD_SLOT_STARTED:"Conviva.SlotStarted",AD_ATTEMPTED:"Conviva.AdAttempted",AD_SLOT_ENDED:"Conviva.SlotEnded",AD_IMPRESSION_START:"Conviva.AdImpression",
AD_START:"Conviva.AdStart",AD_FIRST_QUARTILE:"Conviva.AdFirstQuartile",AD_MID_QUARTILE:"Conviva.AdMidQuartile",AD_THIRD_QUARTILE:"Conviva.AdThirdQuartile",AD_COMPLETE:"Conviva.AdComplete",
AD_END:"Conviva.AdEnd",AD_IMPRESSION_END:"Conviva.AdImpressionEnd",AD_SKIPPED:"Conviva.AdSkipped",AD_ERROR:"Conviva.AdError",AD_PROGRESS:"Conviva.AdProgress",AD_CLOSE:"Conviva.AdClose",
CONTENT_PAUSED:"Conviva.PauseContent",CONTENT_RESUMED:"Conviva.ResumeContent",POD_START:"Conviva.PodStart",POD_END:"Conviva.PodEnd"},c.ErrorType={ERROR_UNKNOWN:"ERROR_UNKNOWN",ERROR_IO:"ERROR_IO",
ERROR_TIMEOUT:"ERROR_TIMEOUT",ERROR_NULL_ASSET:"ERROR_NULL_ASSET",ERROR_MISSING_PARAMETER:"ERROR_MISSING_PARAMETER",ERROR_NO_AD_AVAILABLE:"ERROR_NO_AD_AVAILABLE",ERROR_PARSE:"ERROR_PARSE",
ERROR_INVALID_VALUE:"ERROR_INVALID_VALUE",ERROR_INVALID_SLOT:"ERROR_INVALID_SLOT",ERROR_3P_COMPONENT:"ERROR_3P_COMPONENT",ERROR_UNSUPPORTED_3P_FEATURE:"ERROR_UNSUPPORTED_3P_FEATURE",
ERROR_DEVICE_LIMIT:"ERROR_DEVICE_LIMIT",ERROR_UNMATCHED_SLOT_SIZE:"ERROR_UNMATCHED_SLOT_SIZE"},c.StreamType={UNKNOWN:"UNKNOWN",LIVE:"LIVE",VOD:"VOD"},c.CallbackFunctions={CONSOLE_LOG:"consoleLog",
MAKE_REQUEST:"makeRequest",SAVE_DATA:"saveData",LOAD_DATA:"loadData",GET_EPOCH_TIME_IN_MS:"getEpochTimeInMs",CREATE_TIMER:"createTimer"},c.DeviceMetadata={BRAND:"DeviceBrand",
MANUFACTURER:"DeviceManufacturer",MODEL:"DeviceModel",TYPE:"DeviceType",VERSION:"DeviceVersion",OS_NAME:"OperatingSystemName",OS_VERSION:"OperatingSystemVersion",CATEGORY:"DeviceCategory"}
;var d=a.Client=function(b,c){function h(a,b){if(!(a instanceof e))throw new Error("clientSettings parameter should be an instance of ClientSettings.")
;if(!(b instanceof g))throw new Error("systemFactory parameter should be an instance of SystemFactory.")
;a.gatewayUrl!=e._httpsProtocol+e.defaultProductionGatewayDNS&&a.gatewayUrl!=e._httpProtocol+e.defaultProductionGatewayDNS||(this.defaultGatewayURLError=!0),this._settings=a.clone(),
this._systemFactory=b,this._systemFactory.configure("SDK",this._settings),this._exceptionCatcher=this._systemFactory.buildExceptionCatcher(),
this._exceptionCatcher.runProtected("Client.init",function(){j._id=M.uinteger32(),j._logger=j._systemFactory.buildLogger(),j._logger.setModuleName("Client"),
j.defaultGatewayURLError&&j._logger.info("Gateway URL should not be set to https://cws.conviva.com or http://cws.conviva.com, therefore this call is ignored"),
j._logger.info("init(): url="+j._settings.gatewayUrl+" customerKey="+j._settings.customerKey),j._config=j._systemFactory.buildConfig(),j._config.load(),
j._sessionFactory=j._systemFactory.buildSessionFactory(j,j._settings,j._config),j._logger.info("init(): done.")},function(a){throw new Error("Client constructor failed: "+a.message)})}var j=this
;this.defaultGatewayURLError=!1,this._logger=null,this._sessionFactory=null,this._systemFactory=null,this._globalSessionKey=-1,this._settings=null,this._systemSettings=null,
this._exceptionCatcher=null,this._config=null,this._id=-1,this._released=!1,h.apply(this,arguments),this.release=function(){
this._released||this._exceptionCatcher.runProtected("Client.release",function(){j._logger.info("release()"),j._sessionFactory.cleanup(),j._sessionFactory=null,j._globalSessionKey=-1,j._logger=null,
j._id=-1,j._exceptionCatcher=null,j._settings=null,j._systemSettings=null,j._systemFactory=null,j._released=!0})},this.createSession=function(a,b){var c=d.NO_SESSION_KEY
;return this._released?c:null==a||a instanceof f?(this._exceptionCatcher.runProtected("Client.createSession",function(){c=j._sessionFactory.makeVideoSession(a,B.SESSION_TYPE.VIDEO,b)}),
c):(j._logger.error("createSession(): expecting an instance of ContentMetadata for contentMetadata parameter"),c)},this.createAdSession=function(a,b,c){var e=d.NO_SESSION_KEY
;return this._released?e:null==b||b instanceof f?(this._exceptionCatcher.runProtected("Client.createAdSession",function(){if(null==b&&(b=new f),J.isInteger(a)&&a!=d.NO_SESSION_KEY){
var g=j._sessionFactory.getVideoSession(a)
;null!=b.applicationName&&null!=b.viewerId||null!=g&&null!=g._cwsSession&&null!=g._cwsSession._contentMetadata&&(null==b.viewerId&&null!=g._cwsSession._contentMetadata.viewerId&&(b.viewerId=g._cwsSession._contentMetadata.viewerId),
null==b.applicationName&&null!=g._cwsSession._contentMetadata.applicationName&&(b.applicationName=g._cwsSession._contentMetadata.applicationName)),b.custom["c3.csid"]=J.ToString(g._id)}
e=j._sessionFactory.makeVideoSession(b,B.SESSION_TYPE.AD,c)}),e):(j._logger.error("createAdSession(): expecting an instance of ContentMetadata for adMetadata parameter"),e)},
this.reportError=function(b,c,d){
if(!this._released)return J.isValidString(c)?d!==a.Client.ErrorSeverity.FATAL&&d!==a.Client.ErrorSeverity.WARNING?void this._logger.error("reportError(): invalid error severity: "+d):void this._exceptionCatcher.runProtected("Client.reportError",function(){
var a=j._sessionFactory.getVideoSession(b);null!=a&&a.reportError(c,d)}):void this._logger.error("reportError(): invalid error message string: "+c)},this.updateContentMetadata=function(a,b){
if(!this._released)return b instanceof f?void this._exceptionCatcher.runProtected("Client.updateContentMetadata",function(){var c=j._sessionFactory.getVideoSession(a);if(null!=c){var d=b.clone()
;c.updateContentMetadata(d)}}):void j._logger.error("updateContentMetadata(): expecting an instance of ContentMetadata for contentMetadata parameter")},this.detachPlayer=function(a){
this._released||this._exceptionCatcher.runProtected("Client.detachPlayer",function(){var b=j._sessionFactory.getVideoSession(a);null!=b&&b.detachPlayer()})},this.offFocus=function(a){
this._released||this._exceptionCatcher.runProtected("Client.offFocus",function(){var b=j._sessionFactory.getVideoSession(a);null!=b&&b.offFocus()})},this.attachPlayer=function(a,b){
if(!this._released)return b instanceof i?void this._exceptionCatcher.runProtected("Client.attachPlayer",function(){var c=j._sessionFactory.getVideoSession(a);null!=c&&c.attachPlayer(b)
}):void j._logger.error("attachPlayer(): expecting an instance of PlayerStateManager for playerStateManager parameter")},this.onFocus=function(a){
this._released||this._exceptionCatcher.runProtected("Client.onFocus",function(){var b=j._sessionFactory.getVideoSession(a);null!=b&&b.onFocus()})},this.contentPreload=function(a){
this._released||this._exceptionCatcher.runProtected("Client.contentPreload",function(){var b=j._sessionFactory.getVideoSession(a);null!=b&&b.contentPreload()})},this.contentStart=function(a){
this._released||this._exceptionCatcher.runProtected("Client.contentStart",function(){var b=j._sessionFactory.getVideoSession(a);null!=b&&b.contentStart()})},this.sendCustomEvent=function(a,b,c){
if(!this._released){if(!J.isValidString(b))return void j._logger.error("sendCustomEvent(): eventName parameter must be a valid string.")
;J.dictCount(c)<=0&&j._logger.warning("eventAttributes(): should have proper data."),this._exceptionCatcher.runProtected("Client.sendCustomEvent",function(){if(a==d.NO_SESSION_KEY){
if(j._globalSessionKey<0){var e=new f;j._globalSessionKey=j._sessionFactory.makeGlobalSession(e,null)}a=j._globalSessionKey}var g=J.sanitizeStringToStringObject(c),h=j._sessionFactory.getSession(a)
;null!=h&&h.sendCustomEvent(b,g)})}},this.adStart=function(a,b,c,e){if(!this._released){
if(b!==d.AdStream.CONTENT&&b!==d.AdStream.SEPARATE)return void this._logger.error("adStart(): ignored, invalid value for adStream parameter: "+b)
;if(c!==d.AdPlayer.CONTENT&&c!==d.AdPlayer.SEPARATE)return void this._logger.error("adStart(): ignored, invalid value for adPlayer parameter: "+c)
;e!==d.AdPosition.PREROLL&&e!==d.AdPosition.MIDROLL&&e!==d.AdPosition.POSTROLL&&this._logger.info("adStart(): ignored, invalid value for adPosition parameter: "+e),
this._exceptionCatcher.runProtected("Client.adStart",function(){var d=j._sessionFactory.getVideoSession(a);null!=d&&d.adStart(b,c,e)})}},this.adEnd=function(a){
this._released||this._exceptionCatcher.runProtected("Client.adEnd",function(){var b=j._sessionFactory.getVideoSession(a);null!=b&&b.adEnd()})},this.cleanupSession=function(a){
if(!this._released)return a===d.NO_SESSION_KEY?void this._logger.warning("cleanupSession(): ignored, can't cleanup Client.NO_SESSION_KEY"):void this._exceptionCatcher.runProtected("Client.cleanupSession",function(){
null!=j._sessionFactory.getVideoSession(a)&&j._sessionFactory.cleanupSession(a)})},this.getAttachedPlayer=function(a){var b=null
;return this._released?b:a===d.NO_SESSION_KEY?(this._logger.warning("getAttachedPlayer(): ignored for Client.NO_SESSION_KEY"),
b):(this._exceptionCatcher.runProtected("Client.getAttachedPlayer",function(){var c=j._sessionFactory.getVideoSession(a);null!=c&&(b=c.getPlayerStateManager())}),b)},this.isPlayerAttached=function(a){
return!this._released&&null!==this.getAttachedPlayer(a)},this.getPlayerStateManager=function(){if(this._released)throw new Error("This instance of Conviva.Client has been released.")
;return new i(this._systemFactory)},this.releasePlayerStateManager=function(a){if(this._released)throw new Error("This instance of Conviva.Client has been released.")
;this._exceptionCatcher.runProtected("Client.releasePlayerStateManager",function(){a instanceof i&&a.release()})},this.getSettings=function(){return this._settings},this.getId=function(){
return this._id},this.getSessionId=function(a){if(!this._released){var b=null;return this._exceptionCatcher.runProtected("Client.getSessionId",function(){var c=j._sessionFactory.getVideoSession(a)
;b=c.getSessionId()}),b}},this.getClientId=function(a){if(!this._released){var b=null;return this._exceptionCatcher.runProtected("Client.getClientId",function(){
var c=j._sessionFactory.getVideoSession(a);b=c.getClientId()}),b}},this.updateCustomMetric=function(a,b,c){this._released||this._exceptionCatcher.runProtected("Client.updateCustomMetric",function(){
j._sessionFactory.getVideoSession(a).updateCustomMetric(b,c)})}};d.version="4.0.2",d.NO_SESSION_KEY=c.NO_SESSION_KEY,d.AdPosition={PREROLL:c.AdPosition.PREROLL,MIDROLL:c.AdPosition.MIDROLL,
POSTROLL:c.AdPosition.POSTROLL},d.AdStream={CONTENT:"CONTENT",SEPARATE:"SEPARATE"},d.AdPlayer={CONTENT:c.AdPlayer.CONTENT,SEPARATE:c.AdPlayer.SEPARATE},d.ErrorSeverity={FATAL:c.ErrorSeverity.FATAL,
WARNING:c.ErrorSeverity.WARNING},d.DeviceType={DESKTOP:c.DeviceType.DESKTOP,CONSOLE:c.DeviceType.CONSOLE,SETTOP:c.DeviceType.SETTOP,MOBILE:c.DeviceType.MOBILE,TABLET:c.DeviceType.TABLET,
SMARTTV:c.DeviceType.SMARTTV},d.AdTechnology={CLIENT_SIDE:"Client Side",SERVER_SIDE:"Server Side"},d.AdType={BLACKOUT_SLATE:"Blackout slate",
TECHNICAL_DIFFICULTIES_SLATE:"Technical Difficulties slate",COMMERCIAL_SLATE:"Commercial Break slate",OTHER_SLATE:"Other slate",VPAID:"VPAID",REGULAR:"Regular Ad"},d.AdServingType={INLINE:"Inline",
WRAPPER:"Wrapper"},d.DeviceCategory={ANDROID_DEVICE:c.DeviceCategory.ANDROID_DEVICE,APPLE_DEVICE:c.DeviceCategory.APPLE_DEVICE,CHROMECAST:c.DeviceCategory.CHROMECAST,
DESKTOP_APP:c.DeviceCategory.DESKTOP_APP,DEVICE_SIMULATOR:c.DeviceCategory.DEVICE_SIMULATOR,LG_TV:c.DeviceCategory.LG_TV,NINTENDO:c.DeviceCategory.NINTENDO,PLAYSTATION:c.DeviceCategory.PLAYSTATION,
ROKU:c.DeviceCategory.ROKU,SAMSUNG_TV:c.DeviceCategory.SAMSUNG_TV,SMART_TV:c.DeviceCategory.SMART_TV,SET_TOP_BOX:c.DeviceCategory.SET_TOP_BOX,TIVO:c.DeviceCategory.TIVO,WEB:c.DeviceCategory.WEB,
WINDOWS_DEVICE:c.DeviceCategory.WINDOWS_DEVICE,XBOX:c.DeviceCategory.XBOX,KAIOS_DEVICE:c.DeviceCategory.KAIOS_DEVICE};var e=a.ClientSettings=function(a){function b(a){
if(!J.isValidString(a))throw new Error("customerKey must be valid");this.customerKey=a}function c(a){if(J.isValidString(a)){var b=a.split("://")
;if("cws.conviva.com"!=b[1]&&("https"==b[0]||"http"==b[0]))return a}return"https://"+d.customerKey+"."+e.defaultProductionGatewayDNS}var d=this;this._customerKey=null,
J.defGet(this,"customerKey",function(){return this._customerKey}),J.defSet(this,"customerKey",function(a){J.isValidString(a)&&(this._customerKey=a)}),
this._heartbeatInterval=e.defaultProductionHeartbeatInterval,J.defGet(this,"heartbeatInterval",function(){return this._heartbeatInterval}),J.defSet(this,"heartbeatInterval",function(a){
if("number"==typeof a){var b=J.NumberToUnsignedInt(a);b===a&&(this._heartbeatInterval=b)}}),this._gatewayUrl=null,J.defGet(this,"gatewayUrl",function(){return this._gatewayUrl}),
J.defSet(this,"gatewayUrl",function(a){if(J.isValidString(a)){var b=a.split("://");if("https"==b[0]||"http"==b[0]){var c=".com";-1!==a.indexOf(c,a.length-c.length)&&(this._gatewayUrl=a)}}}),
b.apply(this,arguments),this.equals=function(a){return this.customerKey===a.customerKey&&this.gatewayUrl===a.gatewayUrl&&this.heartbeatInterval===a.heartbeatInterval},this.clone=function(){
var a=new e(this.customerKey);return a.gatewayUrl=c(this.gatewayUrl),a.heartbeatInterval=this.heartbeatInterval,a}};e.defaultDevelopmentGatewayUrl="https://conviva.testonly.conviva.com",
e.defaultProductionGatewayUrl="https://cws.conviva.com",e.defaultProductionGatewayDNS="cws.conviva.com",e.defaultDevelopmentGatewayDNS="conviva.testonly.conviva.com",e._httpsProtocol="https://",
e._httpProtocol="http://",e.defaultDevelopmentHeartbeatInterval=5,e.defaultProductionHeartbeatInterval=20;var f=a.ContentMetadata=function(){function a(){return this._assetName}function b(a){
"string"==typeof a&&(this._assetName=a)}function c(){return this._custom}function d(a){"object"==typeof a&&(this._custom=J.sanitizeStringToStringObject(a))}function e(){return this._defaultResource}
function g(a){"string"==typeof a&&(this._defaultResource=a)}function h(){return this._viewerId}function i(a){"string"==typeof a&&(this._viewerId=a)}function j(){return this._applicationName}
function k(a){"string"==typeof a&&(this._applicationName=a)}function l(){return this._streamUrl}function m(a){"string"==typeof a&&(this._streamUrl=a)}function n(){return this._streamType}
function o(a){a!==f.StreamType.UNKNOWN&&a!==f.StreamType.VOD&&a!==f.StreamType.LIVE||(this._streamType=a)}function p(){return this._duration}function q(a){
this._duration=N.sanitizeSpecialIntegerValue(a)}function r(){return this._encodedFrameRate}function s(a){this._encodedFrameRate=N.sanitizeSpecialIntegerValue(a)}function t(){}this._assetName=null,
J.defGet(this,"assetName",a),J.defSet(this,"assetName",b),this._custom={},J.defGet(this,"custom",c),J.defSet(this,"custom",d),this._defaultResource=null,J.defGet(this,"defaultResource",e),
J.defSet(this,"defaultResource",g),this._viewerId=null,J.defGet(this,"viewerId",h),J.defSet(this,"viewerId",i),this._applicationName=null,J.defGet(this,"applicationName",j),
J.defSet(this,"applicationName",k),this._streamUrl=null,J.defGet(this,"streamUrl",l),J.defSet(this,"streamUrl",m),this._streamType=f.StreamType.UNKNOWN,J.defGet(this,"streamType",n),
J.defSet(this,"streamType",o),this._duration=-1,J.defGet(this,"duration",p),J.defSet(this,"duration",q),this._encodedFrameRate=-1,J.defGet(this,"encodedFrameRate",r),
J.defSet(this,"encodedFrameRate",s),t.apply(this,arguments),this.clone=function(){var a=new f;a.assetName=this.assetName,a.applicationName=this.applicationName,a.streamUrl=this.streamUrl,
a.viewerId=this.viewerId,a.defaultResource=this.defaultResource,a.streamType=this.streamType,a.duration=this.duration,a.encodedFrameRate=this.encodedFrameRate
;for(var b in this.custom)a.custom[b]=this.custom[b];return a}};f.StreamType={UNKNOWN:c.StreamType.UNKNOWN,LIVE:c.StreamType.LIVE,VOD:c.StreamType.VOD};var g=(a.ErrorType={
ERROR_UNKNOWN:c.ErrorType.ERROR_UNKNOWN,ERROR_IO:c.ErrorType.ERROR_IO,ERROR_TIMEOUT:c.ErrorType.ERROR_TIMEOUT,ERROR_NULL_ASSET:c.ErrorType.ERROR_NULL_ASSET,
ERROR_MISSING_PARAMETER:c.ErrorType.ERROR_MISSING_PARAMETER,ERROR_NO_AD_AVAILABLE:c.ErrorType.ERROR_NO_AD_AVAILABLE,ERROR_PARSE:c.ErrorType.ERROR_PARSE,
ERROR_INVALID_VALUE:c.ErrorType.ERROR_INVALID_VALUE,ERROR_INVALID_SLOT:c.ErrorType.ERROR_INVALID_SLOT,ERROR_3P_COMPONENT:c.ErrorType.ERROR_3P_COMPONENT,
ERROR_UNSUPPORTED_3P_FEATURE:c.ErrorType.ERROR_UNSUPPORTED_3P_FEATURE,ERROR_DEVICE_LIMIT:c.ErrorType.ERROR_DEVICE_LIMIT,ERROR_UNMATCHED_SLOT_SIZE:c.ErrorType.ERROR_UNMATCHED_SLOT_SIZE},a.Events={
AD_REQUESTED:c.Events.AD_REQUESTED,AD_RESPONSE:c.Events.AD_RESPONSE,AD_SLOT_STARTED:c.Events.AD_SLOT_STARTED,AD_ATTEMPTED:c.Events.AD_ATTEMPTED,AD_SLOT_ENDED:c.Events.AD_SLOT_ENDED,
AD_IMPRESSION_START:c.Events.AD_IMPRESSION_START,AD_START:c.Events.AD_START,AD_FIRST_QUARTILE:c.Events.AD_FIRST_QUARTILE,AD_MID_QUARTILE:c.Events.AD_MID_QUARTILE,
AD_THIRD_QUARTILE:c.Events.AD_THIRD_QUARTILE,AD_COMPLETE:c.Events.AD_COMPLETE,AD_END:c.Events.AD_END,AD_IMPRESSION_END:c.Events.AD_IMPRESSION_END,AD_SKIPPED:c.Events.AD_SKIPPED,
AD_ERROR:c.Events.AD_ERROR,AD_PROGRESS:c.Events.AD_PROGRESS,AD_CLOSE:c.Events.AD_CLOSE,CONTENT_PAUSED:c.Events.CONTENT_PAUSED,CONTENT_RESUMED:c.Events.CONTENT_RESUMED,POD_START:c.Events.POD_START,
POD_END:c.Events.POD_END},a.SystemFactory=function(a,b){function c(a,b){if(!(a instanceof n))throw new Error("systemInterface parameter should be an instance of SystemInterface.")
;this._systemInterface=a,this._timeInterface=this._systemInterface._timeInterface,this._timerInterface=this._systemInterface._timerInterface,this._httpInterface=this._systemInterface._httpInterface,
this._storageInterface=this._systemInterface._storageInterface,this._metadataInterface=this._systemInterface._metadataInterface,this._loggingInterface=this._systemInterface._loggingInterface,
this._settings=b instanceof h?b.clone():new h}var d=this;c.apply(this,arguments),this.configure=function(a,b){this._packageName=a,this._clientSettings=b},this.release=function(){
this._systemInterface.release(),this._systemInterface=null,this._packageName=null,this._settings=null,this._logBuffer=null};var e={build:function(){
return new Q(d._loggingInterface,d._timeInterface,d.getSettings(),d._logBuffer,d._packageName)}};this.buildLogger=function(){return e.build()},this.buildSessionFactory=function(a,b,c){
return new D(a,b,c,this)},this.buildPing=function(){return new L(this.buildLogger(),this.buildHttpClient(),this._clientSettings)},this.buildCallbackWithTimeout=function(){
return new E(this.buildTimer())},this.buildCallbackWithTimeoutNoPing=function(){var a=null,b=new H(this.buildLogger(),a,this.getSettings()),c=new U(this.buildLogger(),this._timerInterface,b)
;return new E(c)},this.buildHttpClient=function(){return new P(this.buildLogger(),this._httpInterface,this.buildCallbackWithTimeoutNoPing(),this.getSettings())},this.buildExceptionCatcher=function(){
return new H(this.buildLogger(),this.buildPing(),this.getSettings())},this.buildTime=function(){return new T(this._timeInterface,this.buildLogger())},this.buildTimer=function(){
return new U(this.buildLogger(),this._timerInterface,this.buildExceptionCatcher())},this.buildStorage=function(){
return new R(this.buildLogger(),this._storageInterface,this.buildCallbackWithTimeout(),this.getSettings())},this.buildConfig=function(){
return new F(this.buildLogger(),this.buildStorage(),this.buildJsonInterface())},this.buildSystemMetadata=function(){
return new S(this.buildLogger(),this._metadataInterface,this.buildExceptionCatcher())},this.buildCwsProtocol=function(){return new y},this.buildGatewayControl=function(a){
return new I(a,this.buildLogger(),this.buildHttpClient(),this.buildJsonInterface())},this.buildCwsSession=function(a,b,c,d){var e=this.buildGatewayControl(b)
;return new B(this.buildEventQueue(),a,b,this.buildLogger(),this.buildExceptionCatcher(),this.buildTimer(),e,this.buildCwsProtocol(),this.buildTime(),this.getLogBuffer(),c,d)},
this.buildSession=function(a,b,c,d,e,f){var g=this.buildExceptionCatcher(),h=this.buildLogger(),i=b.clone(),j=this.buildCwsSession(a,i,c,f);return new C(d,e,c,this.buildSystemMetadata(),j,g,h)},
this.buildEventQueue=function(){return new G},this.buildJsonInterface=function(){return new z},this.getLogBuffer=function(){return this._logBuffer},this.getSettings=function(){return this._settings},
this._logBuffer=new K}),h=a.SystemSettings=function(){function a(){}this._logLevel=h.defaultProductionLogLevel,J.defGet(this,"logLevel",function(){return this._logLevel}),
J.defSet(this,"logLevel",function(a){if("number"==typeof a){var b=J.NumberToUnsignedInt(a);b===a&&b>=h.LogLevel.DEBUG&&b<=h.LogLevel.ERROR&&(this._logLevel=b)}}),
this._allowUncaughtExceptions=h.defaultProductionAllowUncaughtExceptions,J.defGet(this,"allowUncaughtExceptions",function(){return this._allowUncaughtExceptions}),
J.defSet(this,"allowUncaughtExceptions",function(a){J.isBoolean(a)&&(this._allowUncaughtExceptions=a)}),this._storageTimeout=h.defaultStorageTimeout,J.defGet(this,"storageTimeout",function(){
return this._storageTimeout}),J.defSet(this,"storageTimeout",function(a){if("number"==typeof a){var b=J.NumberToUnsignedInt(a);b===a&&(this._storageTimeout=b)}}),
this._httpTimeout=h.defaultHttpTimeout,J.defGet(this,"httpTimeout",function(){return this._httpTimeout}),J.defSet(this,"httpTimeout",function(a){if("number"==typeof a){var b=J.NumberToUnsignedInt(a)
;b===a&&(this._httpTimeout=b)}}),a.apply(this,arguments),this.equals=function(a){
return this.logLevel===a.logLevel&&this.allowUncaughtExceptions===a.allowUncaughtExceptions&&this.storageTimeout===a.storageTimeout&&this.httpTimeout===a.httpTimeout},this.clone=function(){var a=new h
;return a.logLevel=this.logLevel,a.allowUncaughtExceptions=this.allowUncaughtExceptions,a.storageTimeout=this.storageTimeout,a.httpTimeout=this.httpTimeout,a}};h.LogLevel={DEBUG:c.LogLevel.DEBUG,
INFO:c.LogLevel.INFO,WARNING:c.LogLevel.WARNING,ERROR:c.LogLevel.ERROR,NONE:c.LogLevel.NONE},h.defaultDevelopmentLogLevel=h.LogLevel.DEBUG,h.defaultProductionLogLevel=h.LogLevel.NONE,
h.defaultDevelopmentAllowUncaughtExceptions=!0,h.defaultProductionAllowUncaughtExceptions=!1,h.defaultStorageTimeout=10,h.defaultHttpTimeout=10;var i=a.PlayerStateManager=function(c){function d(a){
e._systemFactory=a,e._logger=e._systemFactory.buildLogger(),e._logger.setModuleName("PlayerStateManager"),e._exceptionCatcher=e._systemFactory.buildExceptionCatcher()}var e=this
;e._monitorNotifier=null,e._bitrateKbps=-2,e._playerState=i.PlayerState.UNKNOWN,e._currentMetadata={},e._renderedFrameRate=-2,e._encodedFrameRate=-2,e._duration=-2,e._playerVersion=null,
e._playerType=null,e._streamUrl=null,e._moduleName=null,e._moduleVersion=null,e._width=-1,e._height=-1,e._connectionType=null,e._linkEncryption=null,e._lastError=null,e._pendingErrors=[],
e._released=!1,this.release=function(){e._released||e._exceptionCatcher.runProtected("PlayerStateManager.release",function(){null!=e._monitorNotifier&&e._monitorNotifier.onRelease(),
e.removeMonitoringNotifier(),e._systemFactory=null,e._logger=null,e._exceptionCatcher=null,e._released=!0})},this.setPlayheadTime=function(a){},this.setBufferLength=function(a){},
this.setRenderedFrameRate=function(a){},this.getEncodedFrameRate=function(){return e._encodedFrameRate},this.setEncodedFrameRate=function(a){
e._released||e._exceptionCatcher.runProtected("PlayerStateManager.setEncodedFrameRate",function(){var b=N.sanitizeSpecialIntegerValue(a);b>=-1&&(e._encodedFrameRate=b,
null!=e._monitorNotifier&&e._monitorNotifier.onEncodedFrameRateChange(e._encodedFrameRate))})},this.getDuration=function(){return e._duration},this.setClientMeasureInterface=function(b){
J.validateInterface(b,new a.ClientMeasureInterface,"ClientMeasureInterface"),this._playerInterface=b},this.getPHT=function(){
return this._playerInterface&&"function"==typeof this._playerInterface.getPHT?this._playerInterface.getPHT():i.DEFAULT_PHT},this.getBufferLength=function(){
return this._playerInterface&&"function"==typeof this._playerInterface.getBufferLength?this._playerInterface.getBufferLength():i.DEFAULT_BUFFER_LENGTH},this.getSignalStrength=function(){
return this._playerInterface&&"function"==typeof this._playerInterface.getSignalStrength?this._playerInterface.getSignalStrength():i.DEFAULT_SIGNAL_STRENGTH},this.getRenderedFrameRate=function(){
return this._playerInterface&&"function"==typeof this._playerInterface.getRenderedFrameRate?this._playerInterface.getRenderedFrameRate():i.DEFAULT_RENDERED_FRAME_RATE},this.setDuration=function(a){
e._released||e._exceptionCatcher.runProtected("PlayerStateManager.setDuration",function(){var b=N.sanitizeSpecialIntegerValue(a);b>=-1&&(e._duration=b,
null!=e._monitorNotifier&&e._monitorNotifier.onContentLengthChange(e._duration))})},this.getStreamUrl=function(){return e._streamUrl},this.setStreamUrl=function(a){
e._released||e._exceptionCatcher.runProtected("PlayerStateManager.setStreamUrl",function(){null!=a&&(e._streamUrl=a,null!=e._monitorNotifier&&e._monitorNotifier.onStreamUrlChange(e._streamUrl))})},
this.getModuleName=function(){return e._moduleName},this.getModuleVersion=function(){return e._moduleVersion},this.setModuleNameAndVersion=function(a,b){e._moduleName=a,e._moduleVersion=b},
this.getPlayerType=function(){return e._playerType},this.setPlayerType=function(a){e._released||e._exceptionCatcher.runProtected("PlayerStateManager.setPlayerType",function(){e._playerType=a,
null!=e._monitorNotifier&&e._monitorNotifier.onPlayerTypeChange(e._playerType)})},this.getPlayerVersion=function(){return e._playerVersion},this.setPlayerVersion=function(a){
e._released||e._exceptionCatcher.runProtected("PlayerStateManager.setPlayerVersion",function(){e._playerVersion=a,null!=e._monitorNotifier&&e._monitorNotifier.onPlayerVersionChange(e._playerVersion)})
},this.setMonitoringNotifier=function(a,b){if(!e._released)return null==e._monitorNotifier&&(e._monitorNotifier=a,e._logger.setSessionId(b),!0)},this.removeMonitoringNotifier=function(){
e._released||(e._monitorNotifier=null,e._logger.setSessionId(null))},this.pushCurrentState=function(){e.setPlayerState(e.getPlayerState()),e.setBitrateKbps(e.getBitrateKbps()),
e.setDuration(e.getDuration()),e.setEncodedFrameRate(e.getEncodedFrameRate()),e.setStreamUrl(e.getStreamUrl()),e.setPlayerType(e.getPlayerType()),e.setPlayerVersion(e.getPlayerVersion())
;for(var a=0;a<e._pendingErrors.length;a++){var b=e._pendingErrors[a];e.setError(b)}e._pendingErrors=[]},this.getPlayerState=function(){return e._playerState},this.setPlayerState=function(a){
e._released||e._exceptionCatcher.runProtected("PlayerStateManager.setPlayerState",function(){i.isValidPlayerState(a)?(e._playerState=a,
null!=e._monitorNotifier&&e._monitorNotifier.onPlayerStateChange(e._playerState)):e._logger.error("PlayerStateManager.SetPlayerState(): invalid state: "+a)})},this.getBitrateKbps=function(){
return e._bitrateKbps},this.setBitrateKbps=function(a){e._released||e._exceptionCatcher.runProtected("PlayerStateManager.setBitrateKbps",function(){var b=N.sanitizeSpecialIntegerValue(a)
;b>=-1&&(e._bitrateKbps=b,null!=e._monitorNotifier&&e._monitorNotifier.onBitrateChange(e._bitrateKbps))})},this.setPlayerSeekStart=function(a){
e._released||e._exceptionCatcher.runProtected("PlayerStateManager.setPlayerSeekStart()",function(){null!=e._monitorNotifier&&e._monitorNotifier.onSeekEvent(i.SEEK_ACTIONS_TYPE.SEEK_START,a)})},
this.setPlayerSeekEnd=function(){e._released||e._exceptionCatcher.runProtected("PlayerStateManager.setPlayerSeekEnd()",function(){
null!=e._monitorNotifier&&e._monitorNotifier.onSeekEvent(i.SEEK_ACTIONS_TYPE.SEEK_END,-1)})},this.setUserSeekButtonUp=function(){
e._released||e._exceptionCatcher.runProtected("PlayerStateManager.setUserSeekButtonUp()",function(){null!=e._monitorNotifier&&e._monitorNotifier.onSeekEvent(i.SEEK_ACTIONS_TYPE.BUTTON_UP,-1)})},
this.setUserSeekButtonDown=function(){e._released||e._exceptionCatcher.runProtected("PlayerStateManager.setUserSeekButtonDown()",function(){
null!=e._monitorNotifier&&e._monitorNotifier.onSeekEvent(i.SEEK_ACTIONS_TYPE.BUTTON_DOWN,-1)})},this.setVideoResolutionWidth=function(a){
e._released||e._exceptionCatcher.runProtected("PlayerStateManager.setVideoResolutionWidth()",function(){var b=N.sanitizeSpecialIntegerValue(a);b>0&&(e._width=b),
null!=e._monitorNotifier&&e._monitorNotifier.onStreamResolutionWidthChange(e._width)})},this.setVideoResolutionHeight=function(a){
e._released||e._exceptionCatcher.runProtected("PlayerStateManager.setVideoResolutionHeight()",function(){var b=N.sanitizeSpecialIntegerValue(a);b>0&&(e._height=b),
null!=e._monitorNotifier&&e._monitorNotifier.onStreamResolutionHeightChange(e._height)})},this.setConnectionType=function(a){
e._released||e._exceptionCatcher.runProtected("PlayerStateManager.setConnectionType()",function(){e._connectionType=a,
null!=e._monitorNotifier&&e._monitorNotifier.onConnectionTypeChange(e._connectionType)})},this.setLinkEncryption=function(a){
e._released||e._exceptionCatcher.runProtected("PlayerStateManager.setLinkEncryption()",function(){e._linkEncryption=a,
null!=e._monitorNotifier&&e._monitorNotifier.onLinkEncryptionChange(e._linkEncryption)})},this.setSignalStrength=function(a){},this.setError=function(a){if(e._lastError=a,null!=e._monitorNotifier){
var b=a.errorCode,c=a.severity;e._monitorNotifier.onError(b,c)}else e._pendingErrors.push(a)},this.sendError=function(a,c){
e._released||e._exceptionCatcher.runProtected("PlayerStateManager.sendError",function(){var d=new b.StreamerError(a,c);e.setError(d)})},this.reset=function(){
e._released||e._exceptionCatcher.runProtected("PlayerStateManager.reset",function(){e._bitrateKbps=-2,e._playerState=i.PlayerState.UNKNOWN,e._currentMetadata={},e._renderedFrameRate=-1,
e._encodedFrameRate=-1,e._duration=-1,e._playerVersion=null,e._playerType=null,e._streamUrl=null,e._lastError=null,e._pendingErrors=[]})},this.setCDNServerIP=function(a){
e._released||e._exceptionCatcher.runProtected("PlayerStateManager.setCDNServerIP",function(){null!=e._monitorNotifier&&e._monitorNotifier.onCDNServerIPChange(a)})},this.getError=function(){
return e._lastError},d.apply(e,arguments)};i.PlayerState={STOPPED:c.PlayerState.STOPPED,PLAYING:c.PlayerState.PLAYING,BUFFERING:c.PlayerState.BUFFERING,PAUSED:c.PlayerState.PAUSED,
UNKNOWN:c.PlayerState.UNKNOWN,NOT_MONITORED:c.PlayerState.NOT_MONITORED},i.isValidPlayerState=function(a){
return a===i.PlayerState.STOPPED||a===i.PlayerState.PLAYING||a===i.PlayerState.BUFFERING||a===i.PlayerState.PAUSED||a===i.PlayerState.UNKNOWN||a===i.PlayerState.NOT_MONITORED},i.SEEK_ACTIONS_TYPE={
SEEK_START:"pss",SEEK_END:"pse",BUTTON_UP:"bu",BUTTON_DOWN:"bd"},i.DEFAULT_SIGNAL_STRENGTH=1e3,i.DEFAULT_RENDERED_FRAME_RATE=-1,i.DEFAULT_BUFFER_LENGTH=-1,i.DEFAULT_PHT=-1
;var j=(a.ClientMeasureInterface=function(){this.getPHT=function(){},this.getBufferLength=function(){},this.getSignalStrength=function(){},this.getRenderedFrameRate=function(){}},
a.HttpInterface=function(){this.makeRequest=function(a,b,c,d,e,f){},this.release=function(){}}),k=a.LoggingInterface=function(){this.consoleLog=function(a,b){},this.release=function(){}
},l=a.MetadataInterface=function(){this.getBrowserName=function(){},this.getBrowserVersion=function(){},this.getDeviceBrand=function(){},this.getDeviceManufacturer=function(){},
this.getDeviceModel=function(){},this.getDeviceType=function(){},this.getDeviceVersion=function(){},this.getFrameworkName=function(){},this.getFrameworkVersion=function(){},
this.getOperatingSystemName=function(){},this.getOperatingSystemVersion=function(){},this.getDeviceCategory=function(){},this.release=function(){}},m=a.StorageInterface=function(){
this.saveData=function(a,b,c,d){},this.loadData=function(a,b,c){},this.release=function(){}},n=a.SystemInterface=function(a,b,c,d,e,f){function g(a,b,c,d,e,f){
J.validateInterface(a,new o,"TimeInterface"),J.validateInterface(b,new p,"TimerInterface"),J.validateInterface(c,new j,"HttpInterface"),J.validateInterface(d,new m,"StorageInterface"),
J.validateInterface(e,new l,"MetadataInterface"),J.validateInterface(f,new k,"LoggingInterface"),this._timeInterface=a,this._timerInterface=b,this._httpInterface=c,this._storageInterface=d,
this._metadataInterface=e,this._loggingInterface=f}g.apply(this,arguments),this.release=function(){null!=this._timeInterface&&(this._timeInterface.release(),this._timeInterface=null),
null!=this._timerInterface&&(this._timerInterface.release(),this._timerInterface=null),null!=this._httpInterface&&(this._httpInterface.release(),this._httpInterface=null),
null!=this._storageInterface&&(this._storageInterface.release(),this._storageInterface=null),null!=this._metadataInterface&&(this._metadataInterface.release(),this._metadataInterface=null),
null!=this._loggingInterface&&(this._loggingInterface.release(),this._loggingInterface=null)}},o=a.TimeInterface=function(){this.getEpochTimeMs=function(){},this.release=function(){}
},p=a.TimerInterface=function(){this.createTimer=function(a,b,c){},this.release=function(){}},q=b.AdAnalytics=function(){function a(a,b,c){f._client=a,f._systemFactory=b,f._playerMonitor=c,
f._timer=b.buildTimer(),f._logger=b.buildLogger(),f._logger.setModuleName("AdAnalytics"),f._adPlayerMonitor=new r(f._client,f._timer),s.call(this)}function b(a){e(a)}function e(a){
if(null==f._adPlayerMonitor)return void(null!=f._logger&&f._logger.error("onAdInitiated() : contentPlayer - "+c.INVALID_PLAYER_MONITOR));J.dictCount(a)>0&&f.setAdInfo(a),
f._adPlayerMonitor.getIsAffectingUser()||(f._adPlayerMonitor.setContentPlayerMonitor(f._playerMonitor),f._adPlayerMonitor.setAffectingUser(!0))}var f=this;f._client=null,f._logger=null,
f._systemFactory=null,f._timer=null,f._playerMonitor=null,f._adPlayerMonitor=null,a.apply(this,arguments),this.setAdInfo=function(a){
if(J.dictCount(a)<=0)return void(null!=f._logger&&f._logger.error("setAdInfo() : AD Info is not set"));null!=f._adPlayerMonitor&&f._adPlayerMonitor.setOrUpdateMetadataInfo(a)},
this.setAdPlayerInfo=function(a){if(J.dictCount(a)<=0)return void(null!=f._logger&&f._logger.error("setAdPlayerInfo() : Ad Player Info is not set"))
;null!=f._adPlayerMonitor&&f._adPlayerMonitor.setOrUpdateMetadataInfo(a)},this.reportAdMetric=function(){
if(0==arguments.length)return void(null!=f._logger&&f._logger.error("reportAdMetric() : Need to report metric mandatory"))
;1==arguments.length?f.reportMetric(arguments[0]):2==arguments.length?f.reportMetric(arguments[0],arguments[1]):3==arguments.length?f.reportMetric(arguments[0],arguments[1],arguments[2]):4==arguments.length&&f.reportMetric(arguments[0],arguments[1],arguments[2],arguments[3])
},this.setCallback=function(a){null!=f._adPlayerMonitor&&f._adPlayerMonitor.setCallback(a)},this.reportAdFailed=function(a,b){
if(null==f._adPlayerMonitor)return void(null!=f._logger&&f._logger.error("reportAdPlaybackEndWithError() : "+c.INVALID_PLAYER_MONITOR));J.dictCount(b)>0&&f.setAdInfo(b),
f._adPlayerMonitor.getIsAffectingUser()||(f._adPlayerMonitor.setContentPlayerMonitor(f._playerMonitor),f._adPlayerMonitor.setAffectingUser(!0)),f.reportAdError(a,d.ErrorSeverity.FATAL),
f.reportAdEnded()},this.reportAdLoaded=function(a){b(a)},this.reportAdStarted=function(a){b(a)},this.reportAdEnded=function(){
if(null==f._adPlayerMonitor)return void(null!=f._logger&&f._logger.error("reportAdEnded() : "+c.INVALID_AD_PLAYER_MONITOR))
;f._adPlayerMonitor.getIsAffectingUser()&&(f._adPlayerMonitor.setContentPlayerMonitor(null),f._adPlayerMonitor.setAffectingUser(!1))},this.reportAdError=function(a,b){
if(null==f._adPlayerMonitor)return void(null!=f._logger&&f._logger.error("reportAdError() : "+c.INVALID_PLAYER_MONITOR));var d=new O(a,b);f._adPlayerMonitor.setError(d)},
this.reportAdPlayerEvent=function(a,b){
return J.isValidString(a)?null==f._adPlayerMonitor?void(null!=f._logger&&f._logger.error("reportAdPlayerEvent() : "+c.INVALID_PLAYER_MONITOR)):void f._adPlayerMonitor.setEvent(a,b):void(null!=f._logger&&f._logger.error("reportAdPlayerEvent(): eventType parameter must be a valid string."))
},this.reportAdSkipped=function(){if(null==f._adPlayerMonitor)return void(null!=f._logger&&f._logger.error("reportAdSkipped() : "+c.INVALID_PLAYER_MONITOR));f.reportAdPlayerEvent(c.Events.AD_SKIPPED),
f.reportAdEnded()},this.release=function(){f._logger.info("release()"),null!=f._adPlayerMonitor&&(f._adPlayerMonitor.getIsAffectingUser()&&(f._adPlayerMonitor.setContentPlayerMonitor(null),
f._adPlayerMonitor.setAffectingUser(!1)),f._adPlayerMonitor.setCallback(null),f._adPlayerMonitor.release(),f._adPlayerMonitor=null)},this.getAdType=function(){
return null!=f._playerMonitor?f._playerMonitor._adType:null},this.getAdPlayer=function(){return null!=f._playerMonitor?f._playerMonitor._adPlayer:null},q.prototype=Object.create(s.prototype),
q.prototype.constructor=q},r=b.AdPlayerMonitorImpl=function(){function a(a,b){u.call(this,a,b)}var b=this;b._convivaClient=null,b._contentPlayerMonitor=null,a.apply(this,arguments),
this.setContentPlayerMonitor=function(a){this.getContentPlayerMonitor()!=a&&(this.update(),b._contentPlayerMonitor=null==a?null:a)},this.getContentPlayerMonitor=function(){
return b._contentPlayerMonitor},this.createSession=function(){var a=this.getContentPlayerMonitor();if(null!=b._convivaClient){b._playerStateManager=b._convivaClient.getPlayerStateManager(),
b.onPlayerInfoChanged(),b._playerStateManager.setClientMeasureInterface(this);var c=null;null!=a&&(c=a.getSessionKey()),
b._contentSessionKey=b._convivaClient.createAdSession(c,b._contentMetadata,b._playerStateManager)}},r.prototype=Object.create(u.prototype),r.prototype.constructor=r},s=(a.Analytics={
init:function(b,f,i){if(null!=this._client&&void 0!=this._client)return void this._logger.error("Client is already configured");if(arguments.length<=0)throw new Error("customerKey must be valid")
;var j=null,k=null,l=null;if("string"==typeof arguments[0]&&(j=arguments[0],!J.isValidString(j)))throw new Error("customerKey must be valid")
;arguments.length>=2&&"object"==typeof arguments[1]&&(k=arguments[1]),arguments.length>=3&&"object"==typeof arguments[2]&&(l=arguments[2]);var m=new e(j),n=new h
;J.dictCount(l)>0&&(null!=l[c.GATEWAY_URL]&&(m.gatewayUrl=l[c.GATEWAY_URL]),null!=l[c.LOG_LEVEL]&&(n.logLevel=l[c.LOG_LEVEL]))
;var o=new a.Impl.Html5Logging,p=new a.Impl.Html5Storage,q=new a.Impl.Html5Http,r=new a.Impl.Html5Timer,s=new a.Impl.Html5Time
;void 0!=this._metadataInterface&&null!=this._metadataInterface||(this._metadataInterface=new a.Impl.Html5Metadata),
null!=k&&void 0!=k&&(null!=k[a.Constants.CallbackFunctions.CONSOLE_LOG]&&(o.consoleLog=k[a.Constants.CallbackFunctions.CONSOLE_LOG]),
null!=k[a.Constants.CallbackFunctions.MAKE_REQUEST]&&(q.makeRequest=k[a.Constants.CallbackFunctions.MAKE_REQUEST]),
null!=k[a.Constants.CallbackFunctions.SAVE_DATA]&&(o.saveData=k[a.Constants.CallbackFunctions.SAVE_DATA]),
null!=k[a.Constants.CallbackFunctions.LOAD_DATA]&&(o.loadData=k[a.Constants.CallbackFunctions.LOAD_DATA]),
null!=k[a.Constants.CallbackFunctions.GET_EPOCH_TIME_IN_MS]&&(s.getEpochTimeMs=k[a.Constants.CallbackFunctions.GET_EPOCH_TIME_IN_MS]),
null!=k[a.Constants.CallbackFunctions.CREATE_TIMER]&&(r.createTimer=k[a.Constants.CallbackFunctions.CREATE_TIMER])),this._systemInterface=new a.SystemInterface(s,r,q,p,this._metadataInterface,o),
this._systemFactory=new g(this._systemInterface,n),this._systemFactory.configure("Analytics",m),this._client=new d(m,this._systemFactory),this._logger=this._systemFactory.buildLogger(),
this._logger.setModuleName("Analytics")},release:function(){var a=0;if(null!=this._adAnalyticsArray&&void 0!=this._adAnalyticsArray){for(a=0;a<this._adAnalyticsArray.length;a++){
var b=this._adAnalyticsArray[a];null!=b&&(b.release(),b._logger=null,b._timer=null,this._adAnalyticsArray.splice(a,1),a--)}this._adAnalyticsArray=null}
if(null!=this._videoAnalyticsArray&&void 0!=this._videoAnalyticsArray){for(a=0;a<this._videoAnalyticsArray.length;a++){var c=this._videoAnalyticsArray[a];null!=c&&(c.release(),c._logger=null,
c._timer=null,this._videoAnalyticsArray.splice(a,1),a--)}this._videoAnalyticsArray=null}null!=this._systemFactory&&void 0!=this._systemFactory&&(this._systemFactory.release(),
this._systemFactory=null),null!=this._client&&void 0!=this._client&&(this._client.release(),this._client=null),this._client=null,this._logger=null,this._systemInterface=null,
this._metadataInterface=null},reportAppEvent:function(a,b){if(null==this._client||void 0==this._client)throw new Error(c.CLIENT_CONFIGURATION_FAILED);this._client.sendCustomEvent(d.NO_SESSION_KEY,a,b)
},reportAppBackgrounded:function(){if(null==this._client||void 0==this._client)throw new Error(c.CLIENT_CONFIGURATION_FAILED);this._client.sendCustomEvent(d.NO_SESSION_KEY,"App.Backgrounded",null)},
reportAppForegrounded:function(){if(null==this._client||void 0==this._client)throw new Error(c.CLIENT_CONFIGURATION_FAILED);this._client.sendCustomEvent(d.NO_SESSION_KEY,"App.Foregrounded",null)},
configureExistingClient:function(a){if(!(a instanceof d))throw new Error(c.CLIENT_CONFIGURATION_FAILED);this._client=a,this._systemFactory=this._client._systemFactory,
this._logger=this._systemFactory.buildLogger(),this._logger.setModuleName("Analytics")},buildVideoAnalytics:function(){
if(null==this._client||void 0==this._client)throw new Error(c.CLIENT_CONFIGURATION_FAILED);var a=new v(this._client,this._systemFactory)
;return null!=this._videoAnalyticsArray&&void 0!=this._videoAnalyticsArray||(this._videoAnalyticsArray=[]),this._videoAnalyticsArray.push(a),a},buildAdAnalytics:function(a){
if(null==this._client||void 0==this._client)throw new Error(c.CLIENT_CONFIGURATION_FAILED);var b=new q(this._client,this._systemFactory,null!=a&&void 0!=a?a.getPlayerMonitor():null)
;return null!=this._adAnalyticsArray&&void 0!=this._adAnalyticsArray||(this._adAnalyticsArray=[]),this._adAnalyticsArray.push(b),b},setDeviceMetadata:function(b){
if(arguments.length<=0||0==J.dictCount(b))return void this._logger.error("Device Metadata must be valid")
;void 0!=this._metadataInterface&&null!=this._metadataInterface||(this._metadataInterface=new a.Impl.Html5Metadata),
null!=b[a.Constants.DeviceMetadata.BRAND]&&(this._metadataInterface.getDeviceBrand=function(){return b[a.Constants.DeviceMetadata.BRAND]}),
null!=b[a.Constants.DeviceMetadata.MANUFACTURER]&&(this._metadataInterface.getDeviceManufacturer=function(){return b[a.Constants.DeviceMetadata.MANUFACTURER]}),
null!=b[a.Constants.DeviceMetadata.MODEL]&&(this._metadataInterface.getDeviceModel=function(){return b[a.Constants.DeviceMetadata.MODEL]}),
null!=b[a.Constants.DeviceMetadata.TYPE]&&(this._metadataInterface.getDeviceType=function(){return b[a.Constants.DeviceMetadata.TYPE]}),
null!=b[a.Constants.DeviceMetadata.VERSION]&&(this._metadataInterface.getDeviceVersion=function(){return b[a.Constants.DeviceMetadata.VERSION]}),
null!=b[a.Constants.DeviceMetadata.OS_NAME]&&(this._metadataInterface.getOperatingSystemName=function(){return b[a.Constants.DeviceMetadata.OS_NAME]}),
null!=b[a.Constants.DeviceMetadata.OS_VERSION]&&(this._metadataInterface.getOperatingSystemVersion=function(){return b[a.Constants.DeviceMetadata.OS_VERSION]}),
null!=b[a.Constants.DeviceMetadata.CATEGORY]&&(this._metadataInterface.getDeviceCategory=function(){return b[a.Constants.DeviceMetadata.CATEGORY]})},reportDeviceMetric:function(a,b){var d=0
;if(null!=this._adAnalyticsArray&&void 0!=this._adAnalyticsArray)for(d=0;d<this._adAnalyticsArray.length;d++){var e=this._adAnalyticsArray[d];if(null!=e)switch(a){case c.Network.SIGNAL_STRENGTH:
case c.Network.LINK_ENCRYPTION:case c.Network.CONNECTION_TYPE:e.reportAdMetric(a,b,s.ReportMetric.AD_ONLY)}}
if(null!=this._videoAnalyticsArray&&void 0!=this._videoAnalyticsArray)for(d=0;d<this._videoAnalyticsArray.length;d++){var f=this._videoAnalyticsArray[d];if(null!=f)switch(a){
case c.Network.SIGNAL_STRENGTH:case c.Network.LINK_ENCRYPTION:case c.Network.CONNECTION_TYPE:f.reportPlaybackMetric(a,b)}}}},b.AnalyticsImpl=function(){function a(){}function b(){
var a=null!=r._adPlayerMonitor,b=r.getAdType(),d=r.getAdPlayer()
;return b==c.AdType.SERVER_SIDE&&d==c.AdPlayer.CONTENT?s.ReportMetric.AD_CONTENT:b!=c.AdType.SERVER_SIDE||d!=c.AdPlayer.SEPARATE?b==c.AdType.CLIENT_SIDE&&d==c.AdPlayer.CONTENT?s.ReportMetric.AD_ONLY:b==c.AdType.CLIENT_SIDE&&d==c.AdPlayer.SEPARATE?null!=a&&a?s.ReportMetric.AD_ONLY:s.ReportMetric.CONTENT_ONLY:a?s.ReportMetric.AD_ONLY:s.ReportMetric.CONTENT_ONLY:void 0
}function d(a,b,c){var d=parseInt(a,10),e=parseInt(b,10);if(isNaN(d)&&isNaN(e))return void r._logger.error("reportPlaybackResolution() : width and height are not numbers")
;isNaN(d)&&r._logger.warning("reportPlaybackResolution() : width is not a number"),isNaN(e)&&r._logger.warning("reportPlaybackResolution() : height is not a number"),
null==r._adPlayerMonitor||c!=s.ReportMetric.AD_ONLY&&c!=s.ReportMetric.AD_CONTENT||r._adPlayerMonitor.updateVideoSize(d,e),
null==r._playerMonitor||c!=s.ReportMetric.CONTENT_ONLY&&c!=s.ReportMetric.AD_CONTENT||r._playerMonitor.updateVideoSize(d,e)}function e(a,b){
if(!i.isValidPlayerState(a))return void r._logger.error("reportPlayerState() : Player State is not valid")
;null==r._adPlayerMonitor||b!=s.ReportMetric.AD_ONLY&&b!=s.ReportMetric.AD_CONTENT||r._adPlayerMonitor.setPlayerState(a),
(null!=r._playerMonitor&&b==s.ReportMetric.CONTENT_ONLY||b==s.ReportMetric.AD_CONTENT)&&r._playerMonitor.setPlayerState(a)}function f(a,b){var c=parseInt(a,10)
;if(isNaN(c))return void r._logger.error("reportPlayerPlayHeadTime() : playheadtime is not a number")
;null==r._adPlayerMonitor||b!=s.ReportMetric.AD_ONLY&&b!=s.ReportMetric.AD_CONTENT||r._adPlayerMonitor.updatePlayheadTime(c),
null==r._playerMonitor||b!=s.ReportMetric.CONTENT_ONLY&&b!=s.ReportMetric.AD_CONTENT||r._playerMonitor.updatePlayheadTime(c)}function g(a,b){var c=parseInt(a,10)
;if(isNaN(c))return void r._logger.error("reportPlayerBufferLength() : buffer length is not a number")
;null==r._adPlayerMonitor||b!=s.ReportMetric.AD_ONLY&&b!=s.ReportMetric.AD_CONTENT||r._adPlayerMonitor.updateBufferLength(c),
null==r._playerMonitor||b!=s.ReportMetric.CONTENT_ONLY&&b!=s.ReportMetric.AD_CONTENT||r._playerMonitor.updateBufferLength(c)}function h(a,b){var c=parseInt(a,10)
;null==r._adPlayerMonitor||b!=s.ReportMetric.AD_ONLY&&b!=s.ReportMetric.AD_CONTENT||r._adPlayerMonitor.setSeeking(!0,c),
null==r._playerMonitor||b!=s.ReportMetric.CONTENT_ONLY&&b!=s.ReportMetric.AD_CONTENT||r._playerMonitor.setSeeking(!0,c)}function j(a){
null==r._adPlayerMonitor||a!=s.ReportMetric.AD_ONLY&&a!=s.ReportMetric.AD_CONTENT||r._adPlayerMonitor.setSeeking(!1,-1),
null==r._playerMonitor||a!=s.ReportMetric.CONTENT_ONLY&&a!=s.ReportMetric.AD_CONTENT||r._playerMonitor.setSeeking(!1,-1)}function k(a,b){var c=parseInt(a,10)
;if(isNaN(c))return void r._logger.error("reportPlayerBitrate() : bitrate is not a number")
;null==r._adPlayerMonitor||b!=s.ReportMetric.AD_ONLY&&b!=s.ReportMetric.AD_CONTENT||r._adPlayerMonitor.updateBitrate(c),
null==r._playerMonitor||b!=s.ReportMetric.CONTENT_ONLY&&b!=s.ReportMetric.AD_CONTENT||r._playerMonitor.updateBitrate(c)}function l(a,b){var c=parseInt(a,10)
;if(isNaN(c))return void r._logger.error("reportPlayerRenderedFrameRate() : rendered framerate is not a number")
;null==r._adPlayerMonitor||b!=s.ReportMetric.AD_ONLY&&b!=s.ReportMetric.AD_CONTENT||r._adPlayerMonitor.updateVideoRenderedFrameRate(c),
null==r._playerMonitor||b!=s.ReportMetric.CONTENT_ONLY&&b!=s.ReportMetric.AD_CONTENT||r._playerMonitor.updateVideoRenderedFrameRate(c)}function m(a,b){
if(!J.isValidString(a))return void r._logger.error("reportCDNServerIp() : CDNServerIP is not a valid string")
;null==r._adPlayerMonitor||b!=s.ReportMetric.AD_ONLY&&b!=s.ReportMetric.AD_CONTENT||r._adPlayerMonitor.updateCDNServerIp(a),
null==r._playerMonitor||b!=s.ReportMetric.CONTENT_ONLY&&b!=s.ReportMetric.AD_CONTENT||r._playerMonitor.updateCDNServerIp(a)}function n(a){var b=parseInt(a,10)
;return isNaN(b)?void r._logger.error("reportSignalStrength() : Signal Strength is not a number"):null!=r._adPlayerMonitor?void r._adPlayerMonitor.updateCurrentSignalStrength(b):void(null!=r._playerMonitor&&r._playerMonitor.updateCurrentSignalStrength(b))
}function o(a){
return J.isValidString(a)?null!=r._adPlayerMonitor?void r._adPlayerMonitor.updateLinkEncryption(a):void(null!=r._playerMonitor&&r._playerMonitor.updateLinkEncryption(a)):void r._logger.error("reportLinkEncryption() : Link Encryption is not a valid string")
}function p(a){
return J.isValidString(a)?null!=r._adPlayerMonitor?void r._adPlayerMonitor.updateConnectionType(a):void(null!=r._playerMonitor&&r._playerMonitor.updateConnectionType(a)):void r._logger.error("reportConnectionType() : Connection Type is not a valid string")
}function q(a,b,c){if(!J.isValidString(a)||null==b||void 0==b)return void r._logger.error("reportMetric() : Metric key/value should be a proper value")
;null==r._adPlayerMonitor||c!=s.ReportMetric.AD_ONLY&&c!=s.ReportMetric.AD_CONTENT||r._adPlayerMonitor.updateCustomMetric(a,b),
null==r._playerMonitor||c!=s.ReportMetric.CONTENT_ONLY&&c!=s.ReportMetric.AD_CONTENT||r._playerMonitor.updateCustomMetric(a,b)}var r=this;a.apply(this,arguments),this.reportMetric=function(a,i,t,u){
switch(a){case c.Playback.BITRATE:"CONVIVA"===t?r._logger.info("Bitrate change requested from the Conviva Library"):r._logger.info("Bitrate change requested from the application"),k(i,b());break
;case c.Playback.PLAY_HEAD_TIME:f(i,b());break;case c.Playback.RESOLUTION:d(i,t,b());break;case c.Playback.BUFFER_LENGTH:g(i,b());break;case c.Playback.PLAYER_STATE:
t==s.ReportMetric.AD_ONLY?e(i,s.ReportMetric.AD_ONLY):e(i,b());break;case c.Playback.RENDERED_FRAMERATE:l(i,b());break;case c.Playback.SEEK_STARTED:arguments.length>=2&&"CONVIVA"!=i?h(i,b()):h(-1,b())
;break;case c.Playback.SEEK_ENDED:j(b());break;case c.Playback.CDN_IP:
"CONVIVA"==t?r._logger.info("CDN Server IP change requested from the Conviva Library"):r._logger.info("CDN Server IP change requested from the application"),m(i,b());break
;case c.Network.SIGNAL_STRENGTH:t==s.ReportMetric.AD_ONLY?n(i,s.ReportMetric.AD_ONLY):n(i,b());break;case c.Network.LINK_ENCRYPTION:t==s.ReportMetric.AD_ONLY?o(i,s.ReportMetric.AD_ONLY):o(i,b());break
;case c.Network.CONNECTION_TYPE:t==s.ReportMetric.AD_ONLY?p(i,s.ReportMetric.AD_ONLY):p(i,b());break;default:q(a,i,b())}}});s.ReportMetric={AD_ONLY:1,CONTENT_ONLY:2,AD_CONTENT:3}
;var t=b.PlayerMonitor=function(){function b(a){d._timer=a}var d=this;this._affectingUser=null,this._metadata=null,this._contentMetadata=null,this._contentTags=null,
this._playerState=a.PlayerStateManager.PlayerState.UNKNOWN,this._playHeadTime=-1,this._bufferHeadTime=-1,this._lastError=null,this._lastEventType=null,this._lastEventDetail=null,this._bitrate=-2,
this._renderedFrameRate=-1,this._signalStrength=a.PlayerStateManager.DEFAULT_SIGNAL_STRENGTH,this._cdnServerIP=null,this._linkEncryption=null,this._connectionType=null,this._timer=null,
this._cancelTimer=null,this._playerTags=null,this._callback=null,this._adBreakInfo=null,this._adType=null,this._adPlayer=null,b.apply(this,arguments),this.getConvivaPlayerState=function(){
return d._playerState},this.setPlayerState=function(a){d._playerState!=a&&(d.update(),d._playerState=a,d.updatePlayerStateManagerState())},this.isSeeking=function(){return d._seeking},
this.getSeekToPos=function(){return d._seekToPos},this.setSeeking=function(a,b){d.update(),d._seeking=a,d._seekToPos=b,d.onSeekingChanged()},this.getPlayHeadTime=function(){return d._playHeadTime},
this.updatePlayheadTime=function(a){d._playHeadTime=a},this.getBufferHeadTime=function(){return d._bufferHeadTime},this.updateBufferLength=function(a){d._bufferHeadTime=a},this.getBitrate=function(){
return d._bitrate},this.updateBitrate=function(a){d._bitrate!=a&&(d._bitrate=a,d.updatePlayerStateManagerState())},this.getVideoRenderedFrameRate=function(){return d._renderedFrameRate},
this.updateVideoRenderedFrameRate=function(a){d._renderedFrameRate=a},this.getCDNServerIp=function(){return d._cdnServerIP},this.updateCDNServerIp=function(a){d._cdnServerIP=a,
d.updatePlayerStateManagerState()},this.getCurrentSignalStrength=function(){return d._signalStrength},this.updateCurrentSignalStrength=function(a){d._signalStrength=a,d.updatePlayerStateManagerState()
},this.getLinkEncryption=function(){return d._linkEncryption},this.updateLinkEncryption=function(a){d._linkEncryption=a,d.updatePlayerStateManagerState()},this.getConnectionType=function(){
return d._connectionType},this.updateConnectionType=function(a){d._connectionType=a,d.updatePlayerStateManagerState()},this.getVideoWidth=function(){return d._videoWidth},
this.getVideoHeight=function(){return d._videoHeight},this.updateVideoSize=function(a,b){a<0&&(a=0),b<0&&(b=0),d._videoWidth==a&&d._videoHeight==b||(d._videoWidth=a,d._videoHeight=b,
d.updatePlayerStateManagerState())},this.getMetadataInfo=function(){return d._metadata},this.onMetadataInfoSet=function(){null!=d.getMetadataInfo()&&(d._contentMetadata=new a.ContentMetadata,
d._contentTags={},d._playerTags={},d.onMetadataInfoChanged())},this.setMetadataInfo=function(a){null==d._metadata&&null==a||(this.update(),null!=d._metadata&&(d._metadata=null,d.onMetadataInfoSet()),
null!=a&&(d._metadata=J.mergeObjects(d._metadata,a),d.onMetadataInfoSet()))},this.setOrUpdateMetadataInfo=function(a){if(null!=a){if(null==d._contentMetadata)return void d.setMetadataInfo(a);var b=!1
;for(var c in a)if(d._contentMetadata[c]!=a[c]){b=!0;break}b&&(d.update(),d._metadata=J.mergeObjects(a),d.onMetadataInfoChanged())}},this.setCallback=function(a){null==a?(d._callback=null,
d.cleanUpTimer()):d._callback!=a&&(d._callback=a,d.startTimer())},this.update=function(){d._updating||null!=d._callback&&(d._updating=!0,d._callback(),d._updating=!1)},
this.getIsAffectingUser=function(){return d._affectingUser},this.setAffectingUser=function(a){d._affectingUser!=a&&(d.update(),d._affectingUser&&(d.endSession(),d.cleanUpTimer(),d.release()),
d._affectingUser=a,d._affectingUser&&d.createSession())},this.getLastEventType=function(){return d._lastEventType},this.getLastEventDetail=function(){
return null!=d._lastEventDetail?d._lastEventDetail:null},this.getLastError=function(){return d._lastError},this.setError=function(a){this.update(),d._lastError=a,d.onError()},
this.setEvent=function(a,b){d.update(),d._lastEventType=a,d._lastEventDetail=b,d.onEvent()},this.pollStreamerTask=function(){d.update()},this.startTimer=function(){d.cleanUpTimer(),
d._cancelTimer=d._timer.create(d.pollStreamerTask,1e3,"PlayerMonitor.update")},this.cleanUpTimer=function(){null!=d._cancelTimer&&(d._cancelTimer(),d._cancelTimer=null)},
this.setAdBreakStartInfo=function(a,b,e){d._adBreakInfo=e,d.onAdBreakStartInfoSet(),d._adType=a,d._adPlayer=b,
null!=d._adType&&void 0!=d._adType&&c.AdType.CLIENT_SIDE===d._adType&&(d._playerState=c.PlayerState.UNKNOWN,d.detach(d._adType,b,null==e||void 0==e?null:e[c.POD_POSITION]))},
this.setAdBreakEndInfo=function(){null!=d._adType&&c.AdType.CLIENT_SIDE===d._adType&&(d.attach(),d._playerState=c.PlayerState.UNKNOWN),d.onAdBreakEndInfoSet(),d._adType=null,d._adPlayer=null},
this.getAdBreakInfo=function(){return d._adBreakInfo},this.release=function(){this._affectingUser=null,this._metadata=null,this._contentMetadata=null,this._contentTags=null,
this._playerState=a.PlayerStateManager.PlayerState.UNKNOWN,this._playHeadTime=-1,this._bufferHeadTime=-1,this._lastError=null,this._lastEventType=null,this._lastEventDetail=null,this._bitrate=-2,
this._renderedFrameRate=-1,this._signalStrength=a.PlayerStateManager.DEFAULT_SIGNAL_STRENGTH,this._cdnServerIP=null,this._linkEncryption=null,this._connectionType=null,this._timer=null,
this._cancelTimer=null,this._playerTags=null,this._callback=null,this._adBreakInfo=null,this._adType=null,this._adPlayer=null,d._playerStateManager=null,d._contentSessionKey=a.Client.NO_SESSION_KEY}
},u=b.PlayerMonitorImpl=function(){function b(a,b){t.call(this,b),e._convivaClient=a}var e=this;e._convivaClient=null,e._playerStateManager=null,e._contentSessionKey=a.Client.NO_SESSION_KEY,
b.apply(this,arguments),this.getPHT=function(){return e.getPlayHeadTime()},this.getBufferLength=function(){return e.getBufferHeadTime()},this.getRenderedFrameRate=function(){
return e.getVideoRenderedFrameRate()},this.getSignalStrength=function(){return e.getCurrentSignalStrength()},this.onSeekingChanged=function(){
null!=e._playerStateManager&&e._ContentSessionKey!=d.NO_SESSION_KEY&&(e.isSeeking()?e._playerStateManager.setPlayerSeekStart(e.getSeekToPos()):e._playerStateManager.setPlayerSeekEnd())},
this.updatePlayerStateManagerState=function(){null!=e._playerStateManager&&(e._playerStateManager.setPlayerState(e.getConvivaPlayerState()),
e.getBitrate()>0&&e._playerStateManager.setBitrateKbps(e.getBitrate()),e.getVideoWidth()>0&&e._playerStateManager.setVideoResolutionWidth(e.getVideoWidth()),
e.getVideoHeight()>0&&e._playerStateManager.setVideoResolutionHeight(e.getVideoHeight()),null!=e.getCDNServerIp()&&e._playerStateManager.setCDNServerIP(e.getCDNServerIp()),
null!=e.getLinkEncryption()&&e._playerStateManager.setLinkEncryption(e.getLinkEncryption()),null!=e.getConnectionType()&&e._playerStateManager.setConnectionType(e.getConnectionType()))},
this.updateContentMetadata=function(){e._contentSessionKey!=d.NO_SESSION_KEY&&null!=e._convivaClient&&e._convivaClient.updateContentMetadata(e._contentSessionKey,e._contentMetadata)},
this.onPlayerInfoChanged=function(){if(null!=e._playerStateManager&&null!=e._playerTags&&0!=J.dictCount(e._playerTags)){if(null!=e._playerTags[c.MODULE_NAME]&&null!=e._playerTags[c.MODULE_VERSION]){
var a=e._playerTags[c.MODULE_NAME],b=e._playerTags[c.MODULE_VERSION];J.isValidString(a)&&J.isValidString(b)&&e._playerStateManager.setModuleNameAndVersion(a,b)}
if(null!=e._playerTags[c.FRAMEWORK_NAME]){var d=e._playerTags[c.FRAMEWORK_NAME];J.isValidString(d)&&e._playerStateManager.setPlayerType(d)}if(null!=e._playerTags[c.FRAMEWORK_VERSION]){
var f=e._playerTags[c.FRAMEWORK_VERSION];J.isValidString(f)&&e._playerStateManager.setPlayerVersion(f)}}},this.attach=function(){
null!=e._playerStateManager&&e._contentSessionKey!=d.NO_SESSION_KEY&&(e.updatePlayerStateManagerState(),this.contentAdEnd())},this.attachPlayer=function(){
null!=e._playerStateManager&&e._contentSessionKey!=d.NO_SESSION_KEY&&(e.updatePlayerStateManagerState(),e._convivaClient.onFocus(e._contentSessionKey))},this.contentAdEnd=function(){
null!=e._convivaClient&&e._contentSessionKey!=c.NO_SESSION_KEY&&e._convivaClient.adEnd(e._contentSessionKey)},this.detach=function(a,b,f){
if(null!=e._playerStateManager&&e._contentSessionKey!=c.NO_SESSION_KEY){var g=null;c.AdType.CLIENT_SIDE===a?g=d.AdStream.SEPARATE:c.AdType.SERVER_SIDE===a&&(g=d.AdStream.CONTENT),
e.contentAdStart(g,b,f)}},this.detachPlayer=function(){null!=e._playerStateManager&&e._contentSessionKey!=c.NO_SESSION_KEY&&e._convivaClient.offFocus(e._contentSessionKey)},
this.contentAdStart=function(a,b,d){null!=e._convivaClient&&e._contentSessionKey!=c.NO_SESSION_KEY&&e._convivaClient.adStart(e._contentSessionKey,a,b,d)},this.createSession=function(){
null!=e._convivaClient&&(e._playerStateManager=e._convivaClient.getPlayerStateManager(),e.onPlayerInfoChanged(),e._playerStateManager.setClientMeasureInterface(this),
e._contentSessionKey=e._convivaClient.createSession(e._contentMetadata,e._playerStateManager))},this.endSession=function(){
null!=e._convivaClient&&(null!=e._playerStateManager&&(e._playerStateManager.setPlayerState(c.PlayerState.STOPPED),e._playerStateManager=null),
e._contentSessionKey!=c.NO_SESSION_KEY&&(e._convivaClient.cleanupSession(e._contentSessionKey),e._contentSessionKey=c.NO_SESSION_KEY))},this.onError=function(){
if(null!=e._convivaClient&&e._contentSessionKey!=d.NO_SESSION_KEY){var a=e.getLastError();e._convivaClient.reportError(e._contentSessionKey,a.getErrorCode(),a.getErrorSeverity())}},
this.onEvent=function(){e._contentSessionKey!=d.NO_SESSION_KEY&&null!=e._convivaClient&&e._convivaClient.sendCustomEvent(e._contentSessionKey,e.getLastEventType(),e.getLastEventDetail())},
this.onMetadataInfoChanged=function(){var a=e.getMetadataInfo(),b=!1,d=!1;for(var f in a){var g=a[f];if(J.isValidString(f)&&null!=g)switch(f){case c.STREAM_URL:case c.ASSET_NAME:
case c.DEFAULT_RESOURCE:case c.VIEWER_ID:case c.PLAYER_NAME:case c.DURATION:case c.IS_LIVE:case c.ENCODED_FRAMERATE:d=!0,e._contentMetadata[f]=g;break;case c.MODULE_NAME:case c.MODULE_VERSION:
case c.FRAMEWORK_NAME:case c.FRAMEWORK_VERSION:b=!0,e._playerTags[f]=g;break;default:d=!0,e._contentMetadata.custom[f]=g}}b&&this.onPlayerInfoChanged(),d&&this.updateContentMetadata()},
this.onAdBreakStartInfoSet=function(){this.contentAdBreak(c.Events.POD_START)},this.onAdBreakEndInfoSet=function(){this.contentAdBreak(c.Events.POD_END)},this.contentAdBreak=function(a){
if(null!=e._convivaClient&&e._contentSessionKey!=c.NO_SESSION_KEY){var b=this.getAdBreakInfo(),d=null;if(null!=b){d={};var f=b[c.POD_POSITION];null!=f&&(d[c.POD_POSITION]=f);var g=b[c.POD_INDEX]
;if(null!=g&&(d[c.POD_INDEX]=g+""),a===c.Events.POD_START){var h=b[c.POD_DURATION];null!=h&&(d[c.POD_DURATION]=h+"")}}e._convivaClient.sendCustomEvent(e._contentSessionKey,a,d)}},
this.setSessionKey=function(a){this._contentSessionKey==c.NO_SESSION_KEY&&a!=c.NO_SESSION_KEY&&(this._contentSessionKey=a)},this.getSessionKey=function(){return this._contentSessionKey},
this.getSessionId=function(){return e._convivaClient.getSessionId(this._contentSessionKey)},this.getClientId=function(a){return e._convivaClient.getClientId(this._contentSessionKey)},
this.updateCustomMetric=function(a,b){e._convivaClient.updateCustomMetric(this._contentSessionKey,a,b)},u.prototype=Object.create(t.prototype),u.prototype.constructor=u},v=b.VideoAnalytics=function(){
function b(a,b){e._client=a,e._systemFactory=b,e._timer=b.buildTimer(),e._logger=b.buildLogger(),e._logger.setModuleName("VideoAnalytics"),e._playerMonitor=new u(e._client,e._timer),s.call(this)}
var e=this;e._client=null,e._logger=null,e._systemFactory=null,e._timer=null,e._playerMonitor=null,e._dropInModule=null,e._adType=null,e._adPlayer=null,this.release=function(){
null!=e._logger&&e._logger.info("release()"),null!=e._playerMonitor&&e._playerMonitor.getIsAffectingUser()&&(e._playerMonitor.setAffectingUser(!1),
void 0!==a.ProxyMonitor&&null!=e._dropInModule&&(ProxyMonitor.release(e._dropInModule),e._dropInModule=null)),null!=e._playerMonitor&&(e._playerMonitor.setCallback(null),e._playerMonitor.release(),
e._playerMonitor=null),e._timer=null,e._adType=null,e._adPlayer=null},b.apply(this,arguments),this.reportPlaybackRequested=function(a){if(e._logger.info("reportPlaybackRequested()"),
null==e._playerMonitor)return void e._logger.error("reportPlaybackRequested() : "+c.PLAYBACK_ANALYTICS_NOT_AVAILABLE);J.dictCount(a)>0&&e.setContentInfo(a),e._playerMonitor.setAffectingUser(!0)},
this.reportPlaybackEnded=function(){if(e._logger.info("reportPlaybackEnded()"),null==e._playerMonitor)return void e._logger.error("reportPlaybackEnded() : "+c.PLAYBACK_ANALYTICS_NOT_AVAILABLE)
;e._playerMonitor.getIsAffectingUser()&&(e._playerMonitor.setAffectingUser(!1),void 0!==a.ProxyMonitor&&null!=e._dropInModule&&(ProxyMonitor.release(e._dropInModule),e._dropInModule=null),
e._playerMonitor.setCallback(null))},this.reportPlaybackFailed=function(a,b){if(null==e._playerMonitor)return void e._logger.error("reportPlaybackFailed() : "+c.INVALID_PLAYER_MONITOR)
;J.dictCount(b)>0&&e.setContentInfo(b),e._playerMonitor.getIsAffectingUser()||e._playerMonitor.setAffectingUser(!0),e.reportPlaybackError(a,d.ErrorSeverity.FATAL),e.reportPlaybackEnded()},
this.setContentInfo=function(a){
return J.dictCount(a)<=0?void e._logger.error("setContentInfo() : Content Info is not set"):null==e._playerMonitor?void e._logger.error("setContentInfo() : "+c.INVALID_PLAYER_MONITOR):void e._playerMonitor.setOrUpdateMetadataInfo(a)
},this.setPlayerInfo=function(a){
return J.dictCount(a)<=0?void e._logger.error("setPlayerInfo() : Player Info is not set"):null==e._playerMonitor?void e._logger.error("setPlayerInfo() : "+c.INVALID_PLAYER_MONITOR):void e._playerMonitor.setOrUpdateMetadataInfo(a)
},this.reportPlaybackMetric=function(){if(0==arguments.length)return void e._logger.error("reportPlaybackMetric() : Need to report metric mandatory")
;1==arguments.length?e.reportMetric(arguments[0]):2==arguments.length?e.reportMetric(arguments[0],arguments[1]):3==arguments.length?e.reportMetric(arguments[0],arguments[1],arguments[2]):4==arguments.length&&e.reportMetric(arguments[0],arguments[1],arguments[2],arguments[3])
},this.reportPlaybackError=function(a,b){if(null==e._playerMonitor)return void e._logger.error("reportPlaybackError() : "+c.INVALID_PLAYER_MONITOR)
;if(!J.isValidString(a))return void e._logger.error("reportPlaybackError() : errorMessage need to be valid string");var d=new O(a,b);e._playerMonitor.setError(d)},
this.reportPlaybackEvent=function(b,d){if(!J.isValidString(b))return void e._logger.error("reportPlaybackEvent(): eventType parameter must be a valid string.")
;if(null==e._playerMonitor)return void e._logger.error("reportPlaybackEvent() : "+c.INVALID_PLAYER_MONITOR);if(null!=e._playerMonitor)switch(b){case a.Constants.Events.USER_WAIT_STARTED:
case a.Constants.Events.BUMPER_VIDEO_STARTED:e._playerMonitor.detachPlayer();break;case a.Constants.Events.USER_WAIT_ENDED:case a.Constants.Events.BUMPER_VIDEO_ENDED:e._playerMonitor.attachPlayer()
;break;default:e._playerMonitor.setEvent(b,d)}},this.setCallback=function(a){null!=e._playerMonitor&&e._playerMonitor.setCallback(a)},this.reportAdBreakStarted=function(a,b,d){
if(null==e._playerMonitor)return void e._logger.error("reportAdBreakStarted() : "+c.INVALID_PLAYER_MONITOR);e._adType=a,e._adPlayer=b,e._playerMonitor.setAdBreakStartInfo(a,b,d)},
this.reportAdBreakEnded=function(){if(null==e._playerMonitor)return void e._logger.error("reportAdBreakEnded() : "+c.INVALID_PLAYER_MONITOR);e._adType=null,e._adPlayer=null,
e._playerMonitor.setAdBreakEndInfo()},this.setPlayer=function(b){
return void 0==b?void e._logger.error("setPlayer() : Need to configure the Player"):void 0===a.ProxyMonitor?void e._logger.error("setPlayer() : Include the missing Player Module"):void(null==b&&null!=e._dropInModule?(ProxyMonitor.release(e._dropInModule),
e._dropInModule=null):null!=b&&null!=e._dropInModule?(ProxyMonitor.release(e._dropInModule),
e._dropInModule=ProxyMonitor.initConvivaDropIn(b,e._systemFactory,this)):null!=b&&null==e._dropInModule&&(e._dropInModule=ProxyMonitor.initConvivaDropIn(b,e._systemFactory,this)))},
this.configureExistingSession=function(a){
return a==c.NO_SESSION_KEY?void e._logger.error("configureExistingSession() : Invalid Session Key"):null==e._playerMonitor?void e._logger.error("configureExistingSession() : "+c.INVALID_PLAYER_MONITOR):void e._playerMonitor.setSessionKey(a)
},this.getSessionId=function(){return null==e._playerMonitor?void e._logger.error("getSessionId() : "+c.INVALID_PLAYER_MONITOR):e._playerMonitor.getSessionId()},this.getClientId=function(){
return null==e._playerMonitor?void e._logger.error("getClientId() : "+c.INVALID_PLAYER_MONITOR):e._playerMonitor.getClientId()},this.getPlayerMonitor=function(){return this._playerMonitor},
this.getAdType=function(){return null!=e._playerMonitor?e._playerMonitor._adType:null},this.getAdPlayer=function(){return null!=e._playerMonitor?e._playerMonitor._adPlayer:null},
v.prototype=Object.create(s.prototype),v.prototype.constructor=v};a.Impl=a.Impl||{},a.Impl.Html5Http=function(){function a(){}a.apply(this,arguments),this.makeRequest=function(a,b,c,d,e,f){
return this.makeRequestStandard.apply(this,arguments)},this.makeRequestStandard=function(a,b,c,d,e,f){var g=new XMLHttpRequest;return g.open(a,b,!0),d&&g.overrideMimeType&&(g.overrideMimeType=d),
d&&g.setRequestHeader&&g.setRequestHeader("Content-Type",d),e>0&&(g.timeout=e,g.ontimeout=function(){g.ontimeout=g.onreadystatechange=null,f&&f(!1,"timeout after "+e+" ms")}),
g.onreadystatechange=function(){4===g.readyState&&(g.ontimeout=g.onreadystatechange=null,200==g.status?f&&f(!0,g.responseText):f&&f(!1,"http status "+g.status))},g.send(c),null},
this.release=function(){}},a.Impl=a.Impl||{},a.Impl.Html5Logging=function(){function b(){}b.apply(this,arguments),this.consoleLog=function(b,c){
"undefined"!=typeof console&&(console.log&&c===a.SystemSettings.LogLevel.DEBUG||c===a.SystemSettings.LogLevel.INFO?console.log(b):console.warn&&c===a.SystemSettings.LogLevel.WARNING?console.warn(b):console.error&&c===a.SystemSettings.LogLevel.ERROR&&console.error(b))
},this.release=function(){}},a.Impl=a.Impl||{},a.Impl.Html5Metadata=function(){function a(){}a.apply(this,arguments),this.getBrowserName=function(){return null},this.getBrowserVersion=function(){
return null},this.getDeviceBrand=function(){return null},this.getDeviceManufacturer=function(){return null},this.getDeviceModel=function(){return null},this.getDeviceType=function(){return null},
this.getDeviceVersion=function(){return null},this.getFrameworkName=function(){return null},this.getFrameworkVersion=function(){return null},this.getOperatingSystemName=function(){return null},
this.getOperatingSystemVersion=function(){return null},this.getDeviceCategory=function(){return null},this.release=function(){}},a.Impl=a.Impl||{},a.Impl.Html5Storage=function(){function a(){}
a.apply(this,arguments),this.saveData=function(a,b,c,d){var e=a+"."+b;try{localStorage.setItem(e,c),d(!0,null)}catch(f){d(!1,f.toString())}},this.loadData=function(a,b,c){var d=a+"."+b;try{
var e=localStorage.getItem(d);c(!0,e)}catch(f){c(!1,f.toString())}},this.release=function(){}},a.Impl=a.Impl||{},a.Impl.Html5Time=function(){function a(){}a.apply(this,arguments),
this.getEpochTimeMs=function(){return(new Date).getTime()},this.release=function(){}},a.Impl=a.Impl||{},a.Impl.Html5Timer=function(){function a(){}a.apply(this,arguments),
this.createTimer=function(a,b,c){var d=setInterval(a,b);return function(){-1!==d&&(clearInterval(d),d=-1)}},this.release=function(){}};var w=b.JSON2={};!function(){function a(a){return a<10?"0"+a:a}
function b(a){return d.lastIndex=0,d.test(a)?'"'+a.replace(d,function(a){var b=g[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function c(a,d){
var g,i,j,k,l,m=e,n=d[a];switch(n&&"object"==typeof n&&"function"==typeof n.toJSON&&(n=n.toJSON(a)),"function"==typeof h&&(n=h.call(d,a,n)),typeof n){case"string":return b(n);case"number":
return isFinite(n)?String(n):"null";case"boolean":case"null":return String(n);case"object":if(!n)return"null";if(e+=f,l=[],Object.prototype.toString.apply(n)===Object.prototype.toString.apply([])){
for(k=n.length,g=0;g<k;g+=1)l[g]=c(g,n)||"null";return j=0===l.length?"[]":e?"[\n"+e+l.join(",\n"+e)+"\n"+m+"]":"["+l.join(",")+"]",e=m,j}if(h&&"object"==typeof h)for(k=h.length,
g=0;g<k;g+=1)"string"==typeof h[g]&&(i=h[g],(j=c(i,n))&&l.push(b(i)+(e?": ":":")+j));else for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(j=c(i,n))&&l.push(b(i)+(e?": ":":")+j)
;return j=0===l.length?"{}":e?"{\n"+e+l.join(",\n"+e)+"\n"+m+"}":"{"+l.join(",")+"}",e=m,j}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){
return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null},
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var d,e,f,g,h
;"function"!=typeof w.stringify&&(d=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,g={"\b":"\\b","\t":"\\t","\n":"\\n",
"\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},w.stringify=function(a,b,d){var g;if(e="",f="","number"==typeof d)for(g=0;g<d;g+=1)f+=" ";else"string"==typeof d&&(f=d);if(h=b,
b&&"function"!=typeof b&&("object"!=typeof b||"number"!=typeof b.length))throw new Error("JSON2.stringify");return c("",{"":a})})}();var x=b.JsonParse=function(){var a,b,c,d,e={'"':'"',"\\":"\\",
"/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},f=function(b){throw{name:"SyntaxError",message:b,at:a,text:c}},g=function(d){return d&&d!==b&&f("Expected '"+d+"' instead of '"+b+"'"),b=c.charAt(a),a+=1,b
},h=function(){var a,c="";for("-"===b&&(c="-",g("-"));b>="0"&&b<="9";)c+=b,g();if("."===b)for(c+=".";g()&&b>="0"&&b<="9";)c+=b;if("e"===b||"E"===b)for(c+=b,g(),"-"!==b&&"+"!==b||(c+=b,
g());b>="0"&&b<="9";)c+=b,g();if(a=+c,!isNaN(a))return a;f("Bad number")},i=function(){var a,c,d,h="";if('"'===b)for(;g();){if('"'===b)return g(),h;if("\\"===b)if(g(),"u"===b){for(d=0,
c=0;c<4&&(a=parseInt(g(),16),isFinite(a));c+=1)d=16*d+a;h+=String.fromCharCode(d)}else{if("string"!=typeof e[b])break;h+=e[b]}else h+=b}f("Bad string")},j=function(){for(;b&&b<=" ";)g()},k=function(){
switch(b){case"t":return g("t"),g("r"),g("u"),g("e"),!0;case"f":return g("f"),g("a"),g("l"),g("s"),g("e"),!1;case"n":return g("n"),g("u"),g("l"),g("l"),null}f("Unexpected '"+b+"'")},l=function(){
var a=[];if("["===b){if(g("["),j(),"]"===b)return g("]"),a;for(;b;){if(a.push(d()),j(),"]"===b)return g("]"),a;g(","),j()}}f("Bad array")},m=function(){var a,c={};if("{"===b){if(g("{"),j(),
"}"===b)return g("}"),c;for(;b;){if(a=i(),j(),g(":"),Object.hasOwnProperty.call(c,a)&&f('Duplicate key "'+a+'"'),c[a]=d(),j(),"}"===b)return g("}"),c;g(","),j()}}f("Bad object")};return d=function(){
switch(j(),b){case"{":return m();case"[":return l();case'"':return i();case"-":return h();default:return b>="0"&&b<="9"?h():k()}},function(e,g){var h;return c=e,a=0,b=" ",h=d(),j(),
b&&f("Syntax error"),"function"==typeof g?function a(b,c){var d,e,f=b[c];if(f&&"object"==typeof f)for(d in f)Object.hasOwnProperty.call(f,d)&&(e=a(f,d),void 0!==e?f[d]=e:delete f[d])
;return g.call(b,c,f)}({"":h},""):h}}(),y=b.CwsProtocol=function(){this.generateEvent=function(a,b,c,d){return d.seq=a,d.st=b,d.t=c,d},this.generateSessionEndEvent=function(a,b){
var c=y.EVENT_TYPE_SESSION_END,d={};return this.generateEvent(a,b,c,d)}};y.version="2.5",y.gatewayPath="/0/wsg",y.DEFAULT_CLIENT_ID="0",y.DEFAULT_MAX_HEARTBEAT_INFOS=2,y.DEFAULT_PLAYHEAD_TIME=-1,
y.DEFAULT_BUFFER_LENGTH=-1,y.DEFAULT_SIGNAL_STRENGTH=1e3,y.SDK_METADATA_SCHEMA="sdk.js.1",y.EVENT_TYPE_STATE_CHANGE="CwsStateChangeEvent",y.EVENT_TYPE_ERROR="CwsErrorEvent",
y.EVENT_TYPE_SESSION_END="CwsSessionEndEvent",y.EVENT_TYPE_CUSTOM="CwsCustomEvent",y.EVENT_TYPE_SEEK="CwsSeekEvent",y.EVENT_TYPE_DATA_SAMPLE="CwsDataSamplesEvent",y.RESPONSE_STATUS_NO_ERRORS="ok",
y.RESPONSE_KEY_STATUS="err",y.RESPONSE_KEY_CLIENT_ID="clid",y.RESPONSE_KEY_CONFIG="cfg",y.RESPONSE_KEY_EVENTS="evs",y.RESPONSE_CONFIG_KEY_MAX_HEARTBEAT_INFOS="maxhbinfos",
y.RESPONSE_CONFIG_KEY_SEND_LOGS="slg",y.RESPONSE_CONFIG_KEY_HEARTBEAT_INTERVAL="hbi",y.RESPONSE_CONFIG_KEY_GATEWAY_URL="gw",y.MESSAGE_TYPE_SESSION_HEARTBEAT="CwsSessionHb",
y.REQUEST_KEY_MESSAGE_TYPE="t",y.REQUEST_KEY_SESSION_TIME="st",y.REQUEST_KEY_SESSION_START_TIME="sst",y.REQUEST_KEY_IS_LIVE="lv",y.REQUEST_KEY_SEQUENCE_NUMBER="seq",y.REQUEST_KEY_CUSTOMER_KEY="cid",
y.REQUEST_KEY_CLIENT_ID="clid",y.REQUEST_KEY_CLIENT_VERSION="clv",y.REQUEST_KEY_PROTOCOL_VERSION="pver",y.REQUEST_KEY_INSTANCE_ID="iid",y.REQUEST_KEY_SESSION_ID="sid",y.REQUEST_KEY_VIEWER_ID="vid",
y.REQUEST_KEY_ASSET_NAME="an",y.REQUEST_KEY_PLAYER_NAME="pn",y.REQUEST_KEY_TAGS="tags",y.REQUEST_KEY_SESSION_FLAGS="sf",y.REQUEST_KEY_EVENTS="evs",y.REQUEST_KEY_LOGS="lg",
y.REQUEST_KEY_HEARTBEAT_INFOS="hbinfos",y.REQUEST_KEY_IS_SDK_CLIENT="sdk",y.REQUEST_KEY_PAUSE_JOIN="pj",y.REQUEST_KEY_PLAYER_STATE="ps",y.REQUEST_KEY_BITRATE="br",y.REQUEST_KEY_CONTENT_LENGTH="cl",
y.REQUEST_KEY_ENCODED_FRAME_RATE="efps",y.REQUEST_KEY_AVERAGE_FRAME_RATE="afps",y.REQUEST_KEY_RFPS_TOTAL="rfpstot",y.REQUEST_KEY_RFPS_COUNT="rfpscnt",y.REQUEST_KEY_RESOURCE="rs",
y.REQUEST_KEY_PLAYHEAD_TIME="pht",y.REQUEST_KEY_BUFFER_LENGTH="bl",y.REQUEST_KEY_STREAM_URL="url",y.REQUEST_KEY_CAPABILITIES="caps",y.REQUEST_KEY_PLATFORM_METADATA="pm",y.REQUEST_KEY_VIDEO_WIDTH="w",
y.REQUEST_KEY_VIDEO_HEIGHT="h",y.REQUEST_KEY_CONNECTION_TYPE="ct",y.REQUEST_KEY_LINK_ENCRYPTION="le",y.REQUEST_KEY_SIGNAL_STRENGTH="ss",y.REQUEST_KEY_STREAM_METADATA_CHANGE="strmetadata",
y.REQUEST_PLATFORM_METADATA_KEY_SCHEMA="sch",y.REQUEST_PLATFORM_METADATA_KEY_BROWSER_NAME="br",y.REQUEST_PLATFORM_METADATA_KEY_BROWSER_VERSION="brv",y.REQUEST_PLATFORM_METADATA_KEY_DEVICE_BRAND="dvb",
y.REQUEST_PLATFORM_METADATA_KEY_DEVICE_MANUFACTURER="dvma",y.REQUEST_PLATFORM_METADATA_KEY_DEVICE_MODEL="dvm",y.REQUEST_PLATFORM_METADATA_KEY_DEVICE_TYPE="dvt",
y.REQUEST_PLATFORM_METADATA_KEY_DEVICE_VERSION="dvv",y.REQUEST_PLATFORM_METADATA_KEY_FRAMEWORK_NAME="fw",y.REQUEST_PLATFORM_METADATA_KEY_FRAMEWORK_VERSION="fwv",
y.REQUEST_PLATFORM_METADATA_KEY_CLIENT_CONFIGURATION="cc",y.REQUEST_PLATFORM_METADATA_KEY_MODULE_NAME="mn",y.REQUEST_PLATFORM_METADATA_KEY_MODULE_VERSION="mv",
y.REQUEST_PLATFORM_METADATA_KEY_OPERATING_SYSTEM_NAME="os",y.REQUEST_PLATFORM_METADATA_KEY_OPERATING_SYSTEM_VERSION="osv",y.REQUEST_PLATFORM_METADATA_KEY_DEVICE_CATEGORY="cat",
y.REQUEST_KEY_PROTOCOL_CAPP="caps",y.REQUEST_EVENT_KEY_TYPE="t",y.REQUEST_EVENT_KEY_SEQUENCE_NUMBER="seq",y.REQUEST_EVENT_KEY_SESSION_TIME="st",y.REQUEST_EVENT_KEY_SEEK_ACT_TYPE="act",
y.REQUEST_EVENT_KEY_SEEK_TO_POS="skto",y.REQUEST_ERROR_EVENT_KEY_MESSAGE="err",y.REQUEST_ERROR_EVENT_KEY_FATAL="ft",y.REQUEST_STATE_CHANGE_EVENT_KEY_NEW="new",
y.REQUEST_STATE_CHANGE_EVENT_KEY_OLD="old",y.REQUEST_CUSTOM_EVENT_KEY_NAME="name",y.REQUEST_CUSTOM_EVENT_KEY_ATTRIBUTES="attr",y.REQUEST_HEARTBEAT_INFO_KEY_SEQUENCE_NUMBER="seq",
y.REQUEST_HEARTBEAT_INFO_KEY_STATUS="err",y.REQUEST_HEARTBEAT_INFO_KEY_ROUNDTRIP_TIME="rtt",y.REQUEST_KEY_IS_AD_SESSION="ad",y.REQUEST_CDN_SERVER_IP="csi",y.convertPlayerState=function(a){switch(a){
case i.PlayerState.STOPPED:return y.eStopped;case i.PlayerState.PLAYING:return y.ePlaying;case i.PlayerState.BUFFERING:return y.eBuffering;case i.PlayerState.PAUSED:return y.ePaused
;case i.PlayerState.NOT_MONITORED:return y.eNotMonitored;default:return y.eUnknown}},y.eStopped=1,y.ePlaying=3,y.eBuffering=6,y.ePaused=12,y.eNotMonitored=98,y.eUnknown=100,y.SessionFlags={GLOBAL:0,
VIDEO:1,QUALITY_METRICS:2,BITRATE_METRICS:4},y.Capabilities={INSIGHTS:0};var z=(b.JSONInterface=function(){this.encode=function(a){},this.decode=function(a){}},b.LibJSONInterface=function(){
this.encode=function(a){var b=null;try{b=w.stringify(a)}catch(c){}return b},this.decode=function(a){var b=null;try{b=x(a)}catch(c){}return J.isObject(b)||(b=null),b}}),A=b.CwsHeartbeat=function(){
function a(){}this._data={},a.apply(this,arguments),this.get=function(){return this._data},this.setField=function(a,b){this._data[a]=b},this.setInnerField=function(a,b,c){
this._data[a]||(this._data[a]={}),this._data[a][b]=c},this.setMessageType=function(a){this.setField(y.REQUEST_KEY_MESSAGE_TYPE,a)},this.setSessionTime=function(a){
this.setField(y.REQUEST_KEY_SESSION_TIME,a)},this.setSessionStartTime=function(a){this.setField(y.REQUEST_KEY_SESSION_START_TIME,a)},this.setIsLive=function(a){this.setField(y.REQUEST_KEY_IS_LIVE,a)},
this.setSequenceNumber=function(a){this.setField(y.REQUEST_KEY_SEQUENCE_NUMBER,a)},this.setCustomerKey=function(a){this.setField(y.REQUEST_KEY_CUSTOMER_KEY,a)},this.setClientId=function(a){
this.setField(y.REQUEST_KEY_CLIENT_ID,a)},this.setClientVersion=function(a){this.setField(y.REQUEST_KEY_CLIENT_VERSION,a)},this.setProtocolVersion=function(a){
this.setField(y.REQUEST_KEY_PROTOCOL_VERSION,a)},this.setCapfield=function(a){this.setField(y.REQUEST_KEY_PROTOCOL_CAPP,a)},this.setSessionId=function(a){this.setField(y.REQUEST_KEY_SESSION_ID,a)},
this.setInstanceId=function(a){this.setField(y.REQUEST_KEY_INSTANCE_ID,a)},this.setViewerId=function(a){this.setField(y.REQUEST_KEY_VIEWER_ID,a)},this.setAssetName=function(a){
this.setField(y.REQUEST_KEY_ASSET_NAME,a)},this.setPlayerName=function(a){this.setField(y.REQUEST_KEY_PLAYER_NAME,a)},this.setTags=function(a){this.setField(y.REQUEST_KEY_TAGS,a)},
this.setSessionFlags=function(a){this.setField(y.REQUEST_KEY_SESSION_FLAGS,a)},this.setCapabilities=function(a){this.setField(y.REQUEST_KEY_CAPABILITIES,a)},this.setEvents=function(a){
this.setField(y.REQUEST_KEY_EVENTS,a)},this.setIsSdkClient=function(a){this.setField(y.REQUEST_KEY_IS_SDK_CLIENT,a)},this.setLogs=function(a){this.setField(y.REQUEST_KEY_LOGS,a)},
this.setHeartbeatInfos=function(a){this.setField(y.REQUEST_KEY_HEARTBEAT_INFOS,a)},this.setPlayerState=function(a){this.setField(y.REQUEST_KEY_PLAYER_STATE,a)},this.setPauseJoin=function(a){
this.setField(y.REQUEST_KEY_PAUSE_JOIN,a)},this.setContentLength=function(a){this.setField(y.REQUEST_KEY_CONTENT_LENGTH,a)},this.setBitrate=function(a){this.setField(y.REQUEST_KEY_BITRATE,a)},
this.setResource=function(a){this.setField(y.REQUEST_KEY_RESOURCE,a)},this.setEncodedFrameRate=function(a){this.setField(y.REQUEST_KEY_ENCODED_FRAME_RATE,a)},this.setAverageFrameRate=function(a){
this.setField(y.REQUEST_KEY_AVERAGE_FRAME_RATE,a)},this.setRfpsObservationCount=function(a){this.setField(y.REQUEST_KEY_RFPS_COUNT,a)},this.setRfpsTotal=function(a){
this.setField(y.REQUEST_KEY_RFPS_TOTAL,a)},this.setPlatformMetadataSchema=function(a){this.setInnerField(y.REQUEST_KEY_PLATFORM_METADATA,y.REQUEST_PLATFORM_METADATA_KEY_SCHEMA,a)},
this.setBrowserName=function(a){this.setInnerField(y.REQUEST_KEY_PLATFORM_METADATA,y.REQUEST_PLATFORM_METADATA_KEY_BROWSER_NAME,a)},this.setBrowserVersion=function(a){
this.setInnerField(y.REQUEST_KEY_PLATFORM_METADATA,y.REQUEST_PLATFORM_METADATA_KEY_BROWSER_VERSION,a)},this.setDeviceBrand=function(a){
this.setInnerField(y.REQUEST_KEY_PLATFORM_METADATA,y.REQUEST_PLATFORM_METADATA_KEY_DEVICE_BRAND,a)},this.setDeviceManufacturer=function(a){
this.setInnerField(y.REQUEST_KEY_PLATFORM_METADATA,y.REQUEST_PLATFORM_METADATA_KEY_DEVICE_MANUFACTURER,a)},this.setDeviceModel=function(a){
this.setInnerField(y.REQUEST_KEY_PLATFORM_METADATA,y.REQUEST_PLATFORM_METADATA_KEY_DEVICE_MODEL,a)},this.setDeviceType=function(a){
this.setInnerField(y.REQUEST_KEY_PLATFORM_METADATA,y.REQUEST_PLATFORM_METADATA_KEY_DEVICE_TYPE,a)},this.setDeviceVersion=function(a){
this.setInnerField(y.REQUEST_KEY_PLATFORM_METADATA,y.REQUEST_PLATFORM_METADATA_KEY_DEVICE_VERSION,a)},this.setFrameworkName=function(a){
this.setInnerField(y.REQUEST_KEY_PLATFORM_METADATA,y.REQUEST_PLATFORM_METADATA_KEY_FRAMEWORK_NAME,a),this.setField(y.REQUEST_PLATFORM_METADATA_KEY_FRAMEWORK_NAME,a)},
this.setFrameworkVersion=function(a){this.setInnerField(y.REQUEST_KEY_PLATFORM_METADATA,y.REQUEST_PLATFORM_METADATA_KEY_FRAMEWORK_VERSION,a),
this.setField(y.REQUEST_PLATFORM_METADATA_KEY_FRAMEWORK_VERSION,a)},this.setOperatingSystemName=function(a){
this.setInnerField(y.REQUEST_KEY_PLATFORM_METADATA,y.REQUEST_PLATFORM_METADATA_KEY_OPERATING_SYSTEM_NAME,a.toUpperCase())},this.setOperatingSystemVersion=function(a){
this.setInnerField(y.REQUEST_KEY_PLATFORM_METADATA,y.REQUEST_PLATFORM_METADATA_KEY_OPERATING_SYSTEM_VERSION,a)},this.setDeviceCategory=function(a){
this.setInnerField(y.REQUEST_KEY_PLATFORM_METADATA,y.REQUEST_PLATFORM_METADATA_KEY_DEVICE_CATEGORY,a)},this.setPlayheadTime=function(a){this.setField(y.REQUEST_KEY_PLAYHEAD_TIME,a)},
this.setBufferLength=function(a){this.setField(y.REQUEST_KEY_BUFFER_LENGTH,a)},this.setStreamUrl=function(a){this.setField(y.REQUEST_KEY_STREAM_URL,a)},this.setStreamWidth=function(a){
this.setField(y.REQUEST_KEY_VIDEO_WIDTH,a)},this.setStreamHeight=function(a){this.setField(y.REQUEST_KEY_VIDEO_HEIGHT,a)},this.setConnectionType=function(a){
this.setField(y.REQUEST_KEY_CONNECTION_TYPE,a)},this.setLinkEncryption=function(a){this.setField(y.REQUEST_KEY_LINK_ENCRYPTION,a)},this.setIsAdSession=function(){
this.setField(y.REQUEST_KEY_IS_AD_SESSION,!0)},this.setSignalStrength=function(a){this.setField(y.REQUEST_KEY_SIGNAL_STRENGTH,a)},this.setModuleName=function(a){
this.setInnerField(y.REQUEST_PLATFORM_METADATA_KEY_CLIENT_CONFIGURATION,y.REQUEST_PLATFORM_METADATA_KEY_MODULE_NAME,a)},this.setModuleVersion=function(a){
this.setInnerField(y.REQUEST_PLATFORM_METADATA_KEY_CLIENT_CONFIGURATION,y.REQUEST_PLATFORM_METADATA_KEY_MODULE_VERSION,a)},this.setCDNServerIP=function(a){this.setField(y.REQUEST_CDN_SERVER_IP,a)}
},B=b.CwsSession=function(b,c,e,g,h,j,k,l,m,n,o,p){function q(a,b,c,d,e,f,g,h,i,j,k,l){this._eventQueue=a,this._client=b,this._clientSettings=c,this._logger=d,this._logger.setModuleName("CwsSession"),
this._exceptionCatcher=e,this._timer=f,this._gatewayControl=g,this._cwsProtocol=h,this._time=i,this._logBuffer=j,this._clientConfig=k,this._contentMetadata=l,
null!=this._contentMetadata&&(r._encodedFrameRate=this._contentMetadata.encodedFrameRate,r._streamUrl=this._contentMetadata.streamUrl,r._contentLengthSec=this._contentMetadata.duration)}var r=this
;r._heartbeatTimerCancel=null,r._contentMetadata=null,r._startTimeMs=0,r._heartbeatSequenceNumber=0,r._sessionFlags=y.SessionFlags.GLOBAL,r._capabilities=y.Capabilities.INSIGHTS,r._heartbeatInfos=[],
r._lastRequestSentMs=-1,r._bitrateKbps=-2,r._resource=null,r._playerState=i.PlayerState.UNKNOWN,r._encodedFrameRate=-1,r._contentLengthSec=-1,r._streamUrl=null,r._width=-1,r._height=-1,
r._playerStateManager=null,r._assetName=null,r._viewerId=null,r._playerName=null,r._isLive=null,r._tags={},r._browserName=null,r._browserVersion=null,r._deviceBrand=null,r._deviceManufacturer=null,
r._deviceModel=null,r._deviceType=null,r._deviceVersion=null,r._frameworkName=null,r._frameworkVersion=null,r._operatingSystemName=null,r._operatingSystemVersion=null,r._deviceCategory=null,
r._moduleName=null,r._moduleVersion=null,r._connectionType=null,r._linkEncryption=null,r._cdnServerIP=null,r._customMetric=null,r._pauseJoin=!1,r._hasJoined=!1,r._cleanedUp=!1,r._willEndSoon=!1,
r._rfpsTimerCancel=null,r._rfpsTimerInterval=1e3,r._playingFpsObservationCount=0,r._playingFpsTotal=0,q.apply(this,arguments),this.cleanup=function(){this._clientConfig=null,this._logBuffer=null,
this._systemSettings=null,this._time=null,this._cwsProtocol=null,this._gatewayControl=null,this._timer=null,this._exceptionCatcher=null,this._logger=null,this._clientSettings=null,this._client=null,
this._eventQueue.flush(),this._eventQueue=null,this._customMetric=null,this._cleanedUp=!0},this.start=function(a){this._session=a,this._global=this._session._global,
this._logger.setSessionId(this._session._id),this._startTimeMs=this._time.current(),this.isVideoSession()||this.isAdSession()?(this._sessionFlags+=B.DEFAULT_VIDEO_SESSION_FLAGS,
r._logger.info("start(): assetName="+r._contentMetadata.assetName)):r._logger.info("start()"+r.sessionTypeTag())},this.willEndSoon=function(){this._willEndSoon=!0},this.initialize=function(){
this._logger.debug("initialize()"),(this.isVideoSession()||this.isAdSession())&&(r.setStatesFromContentMetadata(),r.enqueueEventForContentMetadata(),r.validateContentMetadata())},this.end=function(){
(this.isVideoSession()||this.isAdSession())&&(this._logger.debug("end(): schedule the last hb before session cleanup"+r.sessionTypeTag()),this.enqueueSessionEndEvent()),this.cancelHeartbeatTimer(),
this.sendHeartbeat()},this.startSendingHeartbeats=function(){this._willEndSoon||(this.sendHeartbeat(),this.resetHeartbeatTimer())},this.setBrowserName=function(a){var b=r._browserName
;b!==a&&null!=a&&(r._logger.debug("Change browserName from "+b+" to "+a),r._browserName=a)},this.setBrowserVersion=function(a){var b=r._browserVersion
;b!==a&&null!=a&&(r._logger.debug("Change browserVersion from "+b+" to "+a),r._browserVersion=a)},this.setDeviceBrand=function(a){var b=r._deviceBrand
;b!==a&&null!=a&&(r._logger.debug("Change deviceBrand from "+b+" to "+a),r._deviceBrand=a)},this.setDeviceManufacturer=function(a){var b=r._deviceManufacturer
;b!==a&&null!=a&&(r._logger.debug("Change deviceManufacturer from "+b+" to "+a),r._deviceManufacturer=a)},this.setDeviceModel=function(a){var b=r._deviceModel
;b!==a&&null!=a&&(r._logger.debug("Change deviceModel from "+b+" to "+a),r._deviceModel=a)},this.setDeviceType=function(a){var b=r._deviceType
;b!==a&&null!=a&&(r._logger.debug("Change deviceType from "+b+" to "+a),r._deviceType=a)},this.setDeviceVersion=function(a){var b=r._deviceVersion
;b!==a&&null!=a&&(r._logger.debug("Change deviceVersion from "+b+" to "+a),r._deviceVersion=a)},this.setOperatingSystemName=function(a){var b=r._operatingSystemName
;b!==a&&null!=a&&(r._logger.debug("Change operatingSystemName from "+b+" to "+a),r._operatingSystemName=a)},this.setOperatingSystemVersion=function(a){var b=r._operatingSystemVersion
;b!==a&&null!=a&&(r._logger.debug("Change operatingSystemVersion from "+b+" to "+a),r._operatingSystemVersion=a)},this.setDeviceCategory=function(a){var b=r._deviceCategory
;b!==a&&null!=a&&(r._logger.debug("Change operatingSystemVersion from "+b+" to "+a),r._deviceCategory=a)},this.getFrameworkName=function(){return r._frameworkName},this.setFrameworkName=function(a){
var b=r._frameworkName;b!==a&&null!=a&&(r._logger.debug("Change frameworkName from "+b+" to "+a),r._frameworkName=a)},this.getFrameworkVersion=function(){return r._frameworkVersion},
this.setFrameworkVersion=function(a){var b=r._frameworkVersion;b!==a&&null!=a&&(r._logger.debug("Change frameworkVersion from "+b+" to "+a),r._frameworkVersion=a)},this.setStreamUrl=function(a){
if(null==r._contentMetadata.streamUrl){var b=r._streamUrl;b!==a&&null!=a&&(r._logger.debug("Change stream url from "+b+" to "+a),r._streamUrl=a)}},this.setBitrateKbps=function(a){var b=r._bitrateKbps
;b!==a&&a>0&&(r._logger.info("Change bitrate from "+b+" to "+a),r.enqueueBitrateChangeEvent(b,a),r._bitrateKbps=a)},this.setResource=function(a){var b=r._resource
;b!==a&&null!=a&&(r._logger.info("Change resource from "+b+" to "+a),r._resource=a)},this.setAssetName=function(a){
r._assetName!==a&&null!=a&&(r._logger.info("Change assetName from "+r._assetName+" to "+a),r._assetName=a)},this.setIsLive=function(a){var b=r._isLive
;b!==a&&null!=a&&(r._logger.info("Change isLive from "+b+" to "+a),r._isLive=a)},this.setViewerId=function(a){var b=r._viewerId;b!==a&&null!=a&&(r._logger.info("Change viewerId from "+b+" to "+a),
r._viewerId=a)},this.setPlayerName=function(a){var b=r._playerName;b!==a&&null!=a&&(r._logger.info("Change playerName from "+b+" to "+a),r._playerName=a)},this.setTags=function(a){var b=r._tags
;J.ObjectShallowEquals(b,a)||null==a||(r._logger.info("Change tags from "+J.ObjectToString(b)+" to "+J.ObjectToString(a)),r._tags=a)},this.setEncodedFrameRate=function(a){
r._contentMetadata.encodedFrameRate>0||(r._logger.debug("setEncodedFrameRate(): "+a),r._encodedFrameRate=a)},this.setContentLength=function(a){
r._contentMetadata.duration>0||(r._logger.debug("setContentLength(): "+a),r._contentLengthSec=a)},this.setPlayerState=function(a){if(r._hasJoined||a!=i.PlayerState.PLAYING||(r.togglePauseJoin(!1),
r._hasJoined=!0,J.isValidString(r._contentMetadata.viewerId)||r._logger.error("Missing viewerId. viewerId should be updated before first frame is rendered."),
J.isValidString(r._contentMetadata.streamType)&&f.StreamType.UNKNOWN!==r._contentMetadata.streamType||r._logger.error("Missing streamType - Live or VOD. streamType should be updated before first frame is rendered."),
J.isValidString(r._contentMetadata.applicationName)||r._logger.error("Missing applicationName. applicationName should be updated before first frame is rendered.")),r._playerState!==a){
var b=r._playerState;r._logger.info("setPlayerState(): changing player state from "+b+" to "+a),r.enqueuePlayerStateChangeEvent(b,a),r._playerState=a}},this.setStreamResolutionWidth=function(a){
var b=r._width;b!==a&&a>0&&(r._logger.debug("Change stream resolution width from "+b+" to "+a),r.enqueueResolutionWidthChangeEvent(b,a),r._width=a)},this.setStreamResolutionHeight=function(a){
var b=r._height;b!==a&&a>0&&(r._logger.debug("Change stream resolution height from "+b+" to "+a),r.enqueueResolutionHeightChangeEvent(b,a),r._height=a)},this.setConnectionType=function(a){
var b=r._connectionType;b!==a&&null!=a&&(r._logger.debug("Change network connection type from "+b+" to "+a),r.enqueueConnectionTypeChangeEvent(b,a),r._connectionType=a)},
this.setLinkEncryption=function(a){var b=r._linkEncryption;b!==a&&null!=a&&(r._logger.debug("Change network link encryption from "+b+" to "+a),r.enqueueLinkEncryptionChangeEvent(b,a),
r._linkEncryption=a)},this.setCDNServerIP=function(a){var b=r._cdnServerIP;b!==a&&J.isValidString(a)&&(r._logger.debug("Change CDN Server IP from "+b+" to "+a),r.enqueueCDNServerIPChangeEvent(b,a),
r._cdnServerIP=a)},this.togglePauseJoin=function(a){if(r._logger.debug("togglePauseJoin()"),r._pauseJoin===a)return void r._logger.debug("togglePauseJoin(): same value, ignoring")
;var b=r._pauseJoin,c=!r._pauseJoin;r.enqueuePauseJoinChangeEvent(b,c),r._pauseJoin=!r._pauseJoin},this.sendError=function(a,b){r.enqueueErrorEvent(a,b)},this.enqueueEvent=function(a,b){
if(b[y.REQUEST_EVENT_KEY_TYPE]=a,b[y.REQUEST_EVENT_KEY_SESSION_TIME]=this.getSessionTime(),b[y.REQUEST_EVENT_KEY_SEQUENCE_NUMBER]=this._eventQueue.getNumber(),this._playerStateManager){
var c=N.Integer(this._playerStateManager.getPHT(),0,null,-1),d=N.Integer(this._playerStateManager.getBufferLength(),0,null,-1);c>=0&&(b[y.REQUEST_KEY_PLAYHEAD_TIME]=c),
d>0&&(b[y.REQUEST_KEY_BUFFER_LENGTH]=d)}this._eventQueue.enqueue(b)},this.setPlayerStateManager=function(a){r._playerStateManager=a,null!=r._playerStateManager?r.startRfpsTimer():r.cancelRfpsTimer()},
this.enqueueSessionEndEvent=function(){var a=this.getSessionTime(),b=this.getNextEventNumber(),c=this._cwsProtocol.generateSessionEndEvent(b,a);this._eventQueue.enqueue(c)},
this.enqueueErrorEvent=function(a,b){var c={};c[y.REQUEST_ERROR_EVENT_KEY_MESSAGE]=a,c[y.REQUEST_ERROR_EVENT_KEY_FATAL]=b,this.enqueueEvent(y.EVENT_TYPE_ERROR,c)},
this.enqueueBitrateChangeEvent=function(a,b){var c={},d={};a>0&&(d[y.REQUEST_KEY_BITRATE]=a),c[y.REQUEST_KEY_BITRATE]=b,this.declareStateChange(c,d)},this.enqueueSeekEvent=function(a,b){var c={}
;c[y.REQUEST_EVENT_KEY_SEEK_ACT_TYPE]=a,b>=0&&(c[y.REQUEST_EVENT_KEY_SEEK_TO_POS]=b),this.enqueueEvent(y.EVENT_TYPE_SEEK,c)},this.enqueueResolutionWidthChangeEvent=function(a,b){var c={},d={}
;-1!==a&&(d[y.REQUEST_KEY_VIDEO_WIDTH]=a),c[y.REQUEST_KEY_VIDEO_WIDTH]=b,this.declareStateChange(c,d)},this.enqueueResolutionHeightChangeEvent=function(a,b){var c={},d={}
;-1!==a&&(d[y.REQUEST_KEY_VIDEO_HEIGHT]=a),c[y.REQUEST_KEY_VIDEO_HEIGHT]=b,this.declareStateChange(c,d)},this.enqueueConnectionTypeChangeEvent=function(a,b){var c={},d={}
;null!==a&&(d[y.REQUEST_KEY_CONNECTION_TYPE]=a),c[y.REQUEST_KEY_CONNECTION_TYPE]=b,this.declareStateChange(c,d)},this.enqueueLinkEncryptionChangeEvent=function(a,b){var c={},d={}
;null!==a&&(d[y.REQUEST_KEY_LINK_ENCRYPTION]=a),c[y.REQUEST_KEY_LINK_ENCRYPTION]=b,this.declareStateChange(c,d)},this.enqueueCDNServerIPChangeEvent=function(a,b){var c={},d={}
;J.isValidString(a)&&(d[y.REQUEST_CDN_SERVER_IP]=a),c[y.REQUEST_CDN_SERVER_IP]=b,this.declareStateChange(c,d)},this.enqueuePauseJoinChangeEvent=function(a,b){var c={},d={}
;d[y.REQUEST_KEY_PAUSE_JOIN]=a,c[y.REQUEST_KEY_PAUSE_JOIN]=b,this.declareStateChange(c,d)},this.enqueuePlayerStateChangeEvent=function(a,b){var c={},d={}
;c[y.REQUEST_KEY_PLAYER_STATE]=y.convertPlayerState(b),d[y.REQUEST_KEY_PLAYER_STATE]=y.convertPlayerState(a),this.declareStateChange(c,d)},this.declareStateChange=function(a,b){var c={}
;c[y.REQUEST_STATE_CHANGE_EVENT_KEY_NEW]=a,null!=b&&J.dictCount(b)>0&&(c[y.REQUEST_STATE_CHANGE_EVENT_KEY_OLD]=b),this.enqueueEvent(y.EVENT_TYPE_STATE_CHANGE,c)},this.enqueueCustomEvent=function(a,b){
var c={};c[y.REQUEST_CUSTOM_EVENT_KEY_NAME]=a,J.dictCount(b)>0&&(c[y.REQUEST_CUSTOM_EVENT_KEY_ATTRIBUTES]=b),this.enqueueEvent(y.EVENT_TYPE_CUSTOM,c)},this.cancelHeartbeatTimer=function(){
null!=r._heartbeatTimerCancel&&(r._heartbeatTimerCancel(),r._heartbeatTimerCancel=null)},this.resetHeartbeatTimer=function(){r.cancelHeartbeatTimer();var a=1e3*r._clientSettings.heartbeatInterval
;r._heartbeatTimerCancel=r._timer.create(r.sendHeartbeat,a,"Session.sendHeartbeat")},this.cancelRfpsTimer=function(){null!=r._rfpsTimerCancel&&(r._rfpsTimerCancel(),r._rfpsTimerCancel=null)},
this.startRfpsTimer=function(){r.cancelRfpsTimer(),r._rfpsTimerCancel=r._timer.create(r.countRfps,r._rfpsTimerInterval,"Session.startRfpsTimer")},this.createHeartbeatInfo=function(){var a={}
;a.err="pending",a.seq=r._heartbeatSequenceNumber-1,a.sentAt=r.getSessionTime(),a.rtt=-1,r._heartbeatInfos.push(a);for(var b=0;b<r._heartbeatInfos.length;b++)a=r._heartbeatInfos[b],
"ok"===a.err&&(r._heartbeatInfos.splice(b,1),b--)},this.updateHeartbeatInfoOnFailure=function(a,b){for(var c=0;c<r._heartbeatInfos.length;c++){var d=r._heartbeatInfos[c]
;d.seq===a&&(d.rtt=r.getSessionTime()-d.sentAt,d.err=b)}},this.updateHeartbeatInfoOnSuccess=function(a){for(var b=0;b<r._heartbeatInfos.length;b++){var c=r._heartbeatInfos[b]
;c.seq===a&&(c.rtt=r.getSessionTime()-c.sentAt,c.err="ok")}},this.removeOutdatedHeartbeatInfos=function(){
for(var a,b,c=r._clientConfig.get(F.CONFIG_KEY_MAX_HEARTBEAT_INFOS),d=[],e=-1,f=0;f<r._heartbeatInfos.length;f++)if(b=r._heartbeatInfos[f],"ok"==b.err){e=b.seq;break}
for(var g=0;g<r._heartbeatInfos.length;g++)b=r._heartbeatInfos[g],((a=b.seq)<r._heartbeatSequenceNumber-c||a<e)&&d.push(g);for(var h=[],i=0;i<r._heartbeatInfos.length;i++)b=r._heartbeatInfos[i],
a=b.seq,d.indexOf(i)<0&&h.push(r._heartbeatInfos[i]);r._heartbeatInfos=h},this.compileHeartbeatInfos=function(){r.removeOutdatedHeartbeatInfos();for(var a=[],b=0;b<r._heartbeatInfos.length;b++){
var c=r._heartbeatInfos[b],d={};d[y.REQUEST_HEARTBEAT_INFO_KEY_SEQUENCE_NUMBER]=c.seq,d[y.REQUEST_HEARTBEAT_INFO_KEY_ROUNDTRIP_TIME]=c.rtt,d[y.REQUEST_HEARTBEAT_INFO_KEY_STATUS]=c.err,a.push(d)}
return a},this.makeHeartbeat=function(){var a=r._eventQueue.flush();if(r.isGlobalSession()&&0===a.length)return null;var b=new A;if(b.setMessageType(y.MESSAGE_TYPE_SESSION_HEARTBEAT),
b.setCustomerKey(r._clientSettings.customerKey),b.setClientId(r._clientConfig.get(F.CONFIG_KEY_CLIENT_ID)),b.setSessionId(r._session._id),b.setSequenceNumber(r._heartbeatSequenceNumber),
b.setProtocolVersion(y.version),b.setClientVersion(d.version),b.setInstanceId(r._client.getId()),b.setCapfield(0),null!=r._connectionType&&b.setConnectionType(r._connectionType),
null!=r._linkEncryption&&b.setLinkEncryption(r._linkEncryption),J.isValidString(r._cdnServerIP)&&b.setCDNServerIP(r._cdnServerIP),b.setPlatformMetadataSchema(y.SDK_METADATA_SCHEMA),
null!=r._browserName&&b.setBrowserName(r._browserName),null!=r._browserVersion&&b.setBrowserVersion(r._browserVersion),null!=r._deviceBrand&&b.setDeviceBrand(r._deviceBrand),
null!=r._deviceManufacturer&&b.setDeviceManufacturer(r._deviceManufacturer),null!=r._deviceModel&&b.setDeviceModel(r._deviceModel),null!=r._deviceType&&b.setDeviceType(r._deviceType),
null!=r._deviceVersion&&b.setDeviceVersion(r._deviceVersion),null!=r._operatingSystemName&&b.setOperatingSystemName(r._operatingSystemName),
null!=r._operatingSystemVersion&&b.setOperatingSystemVersion(r._operatingSystemVersion),null!=r._deviceCategory&&b.setDeviceCategory(r._deviceCategory),
null!=r._frameworkName&&b.setFrameworkName(r._frameworkName),null!=r._frameworkVersion&&b.setFrameworkVersion(r._frameworkVersion),
null!=r._playerStateManager&&(r._moduleName=r._playerStateManager.getModuleName(),null!=r._moduleName&&b.setModuleName(r._moduleName),r._moduleVersion=r._playerStateManager.getModuleVersion(),
null!=r._moduleVersion&&b.setModuleVersion(r._moduleVersion),null!=r._playerStateManager.getPlayerType()&&(r._frameworkName=r._playerStateManager.getPlayerType(),b.setFrameworkName(r._frameworkName)),
null!=r._playerStateManager.getPlayerVersion()&&(r._frameworkVersion=r._playerStateManager.getPlayerVersion(),b.setFrameworkVersion(r._frameworkVersion))),
null!=r._viewerId&&b.setViewerId(r._viewerId),J.dictCount(r._tags)>0&&b.setTags(r._tags),r.isVideoSession()||r.isAdSession()){r.isAdSession()&&b.setIsAdSession(),
null!=r._assetName&&b.setAssetName(r._assetName),b.setSessionFlags(r._sessionFlags);var c=y.convertPlayerState(r._playerState);b.setPlayerState(c),b.setPauseJoin(r._pauseJoin),
null!=r._playerName&&b.setPlayerName(r._playerName),null!=r._isLive&&b.setIsLive(r._isLive),r._contentLengthSec>0&&b.setContentLength(r._contentLengthSec),
r._bitrateKbps>0&&b.setBitrate(r._bitrateKbps),null!==r._resource&&b.setResource(r._resource),r._encodedFrameRate>0&&b.setEncodedFrameRate(r._encodedFrameRate);var e,f=-1,g=-1
;null!=r._playerStateManager&&(f=N.Integer(r._playerStateManager.getPHT(),0,null,-1),g=N.Integer(r._playerStateManager.getBufferLength(),0,null,-1),e=r._playerStateManager.getSignalStrength()),
f>=0&&b.setPlayheadTime(f),g>0&&b.setBufferLength(g);var h=r.updateAverageFrameRate();if(h>0&&b.setAverageFrameRate(h),r._playingFpsTotal>0&&b.setRfpsTotal(N.Integer(r._playingFpsTotal,0,null,-1)),
r._playingFpsObservationCount>0&&b.setRfpsObservationCount(N.Integer(r._playingFpsObservationCount,0,null,-1)),e<=0&&b.setSignalStrength(e),null!=r._streamUrl&&b.setStreamUrl(r._streamUrl),
r._width>0&&b.setStreamWidth(r._width),r._height>0&&b.setStreamHeight(r._height),null!=r._customMetric)for(var i in r._customMetric)b.setField(i,r._customMetric[i])
}else b.setSessionFlags(y.SessionFlags.GLOBAL);if(a.length>0&&b.setEvents(a),b.setCapabilities(r._capabilities),b.setIsSdkClient(!0),
r._clientConfig.get(F.CONFIG_KEY_SEND_LOGS)&&b.setLogs(r._logBuffer.flush()),r._clientConfig.get(F.CONFIG_KEY_MAX_HEARTBEAT_INFOS)>0){var j=r.compileHeartbeatInfos();j.length>0&&b.setHeartbeatInfos(j)
}return 0==r._heartbeatSequenceNumber&&(b=r.cloneHearbeatWithBrowserTags(b)),b.setSessionStartTime(r._startTimeMs),b.setSessionTime(r.getSessionTime()),r._heartbeatSequenceNumber++,b.get()},
this.cloneHearbeatWithBrowserTags=function(a){var b=r.getBrowserMetadata();if("{}"!==JSON.stringify(b)){var c=J.ObjectShallowCopy(b);for(var d in a._data.tags)c[d]=a._data.tags[d];a._data.tags=c
;var e={};e[y.REQUEST_KEY_TAGS]=b;var f={};if(f[y.REQUEST_STATE_CHANGE_EVENT_KEY_NEW]=e,f[y.REQUEST_EVENT_KEY_TYPE]=y.EVENT_TYPE_STATE_CHANGE,f[y.REQUEST_EVENT_KEY_SESSION_TIME]=r.getSessionTime(),
f[y.REQUEST_EVENT_KEY_SEQUENCE_NUMBER]=r._eventQueue.getNumber(),r._playerStateManager){
var g=N.Integer(r._playerStateManager.getPHT(),0,null,-1),h=N.Integer(r._playerStateManager.getBufferLength(),0,null,-1);g>=0&&(f[y.REQUEST_KEY_PLAYHEAD_TIME]=g),
h>0&&(f[y.REQUEST_KEY_BUFFER_LENGTH]=h)}return void 0==a._data.evs&&(a._data.evs=[]),a._data.evs.push(f),a}return a},this.getBrowserMetadata=function(){var a={};if(null!=navigator){
if(a["fp.cookie"]=null!=navigator.cookieEnabled&&void 0!=navigator.cookieEnabled?""+navigator.cookieEnabled:"",
a["fp.memory"]=null!=navigator.deviceMemory&&void 0!=navigator.deviceMemory?""+navigator.deviceMemory:"",
a["fp.hwConc"]=null!=navigator.hardwareConcurrency&&void 0!=navigator.hardwareConcurrency?""+navigator.hardwareConcurrency:"",a["fp.java"]=""+navigator.javaEnabled(),
a["fp.lang"]=null!=navigator.language&&void 0!=navigator.language?""+navigator.language:"",
a["fp.langs"]=null!=navigator.languages&&void 0!=navigator.languages&&navigator.languages.length>0?""+navigator.languages.toString():"",
a["fp.maxTp"]=null!=navigator.maxTouchPoints&&void 0!=navigator.maxTouchPoints?""+navigator.maxTouchPoints:"",a["fp.plugins"]="",
null!=navigator.plugins&&navigator.plugins.length>0)for(var b=0;b<navigator.plugins.length;b++)a["fp.plugins"]+=navigator.plugins[b].name+",";if(a["fp.mime"]="",
null!=navigator.mimeTypes&&navigator.mimeTypes.length>0)for(var c=0;c<navigator.mimeTypes.length;c++)a["fp.mime"]+=navigator.mimeTypes[c].type+","
;a["fp.sysLang"]=null!=navigator.systemLanguage&&void 0!=navigator.systemLanguage?""+navigator.systemLanguage:"",
a["fp.platform"]=null!=navigator.platform&&void 0!=navigator.platform?""+navigator.platform:"",a["fp.product"]=null!=navigator.product&&void 0!=navigator.product?""+navigator.product:"",
a["fp.productSub"]=null!=navigator.productSub&&void 0!=navigator.productSub?""+navigator.productSub:"",a["fp.vendor"]=null!=navigator.vendor&&void 0!=navigator.vendor?""+navigator.vendor:"",
a["fp.vendorSub"]=null!=navigator.vendorSub&&void 0!=navigator.vendorSub?""+navigator.vendorSub:""}
return null!=window&&(null!=window.screen&&(a["fp.availHeight"]=null!=window.screen.availHeight&&void 0!=window.screen.availHeight?""+window.screen.availHeight:"",
a["fp.availWidth"]=null!=window.screen.availWidth&&void 0!=window.screen.availWidth?""+window.screen.availWidth:"",
a["fp.height"]=null!=window.screen.height&&void 0!=window.screen.height?""+window.screen.height:"",a["fp.width"]=null!=window.screen.width&&void 0!=window.screen.width?""+window.screen.width:"",
a["fp.colorDepth"]=null!=window.screen.colorDepth&&void 0!=window.screen.colorDepth?""+window.screen.colorDepth:"",
a["fp.deviceXDPI"]=null!=window.screen.deviceXDPI&&void 0!=window.screen.deviceXDPI?""+window.screen.deviceXDPI:"",
a["fp.deviceYDPI"]=null!=window.screen.deviceYDPI&&void 0!=window.screen.deviceYDPI?""+window.screen.deviceYDPI:""),
a["fp.dpi"]=null!=window.devicePixelRatio&&void 0!=window.devicePixelRatio?""+window.devicePixelRatio:"",
a["fp.secure"]=null!=window.isSecureContext&&void 0!=window.isSecureContext?""+window.isSecureContext:""),a},this.sendHeartbeat=function(){if(!r._cleanedUp){var a=r.makeHeartbeat()
;null!=a&&r.postHeartbeat(a)}},this.countRfps=function(){if(r._playerState===i.PlayerState.PLAYING&&null!=r._playerStateManager){var a=r._playerStateManager.getRenderedFrameRate()
;a>0&&(r._playingFpsTotal+=a,r._playingFpsObservationCount++)}},this.updateAverageFrameRate=function(){
return r._playingFpsTotal>0&&r._playingFpsObservationCount>0?J.Int32.Cast(1*r._playingFpsTotal/r._playingFpsObservationCount):(this.countRfps(),
r._playingFpsTotal>0&&r._playingFpsObservationCount>0?J.Int32.Cast(1*r._playingFpsTotal/r._playingFpsObservationCount):i.DEFAULT_RENDERED_FRAME_RATE)},this.postHeartbeat=function(a){
r.createHeartbeatInfo();var b=r._heartbeatSequenceNumber-1;r._logger.info("postHeartbeat(): Send HB["+b+"]"+r.sessionTypeTag());var c=function(a,c){r.onHeartbeatResponse(a,c,b)}
;r._gatewayControl.send(a,c)},this.onHeartbeatResponse=function(a,b,c){r._cleanedUp||r._exceptionCatcher.runProtected("onHeartbeatResponse",function(){if(a){var d=b;if(null!=d){
r._logger.debug("onHeartbeatResponse(): received valid response for HB["+c+"]"),r.updateHeartbeatInfoOnSuccess(c);var e=d[y.RESPONSE_KEY_CLIENT_ID]
;null!=e&&e!=r._clientConfig.get(F.CONFIG_KEY_CLIENT_ID)&&(r._logger.debug("onHeartbeatResponse(): setting the client id to "+e+" (from gateway)"),r._clientConfig.set(F.CONFIG_KEY_CLIENT_ID,e),
r._clientConfig.save());var f=d[y.RESPONSE_KEY_STATUS];null!=f&&f!=y.RESPONSE_STATUS_NO_ERRORS&&r._logger.error("onHeartbeatResponse(): error from gateway: "+f);var g=d[y.RESPONSE_KEY_CONFIG]
;if("object"==typeof g){var h=g[y.RESPONSE_CONFIG_KEY_MAX_HEARTBEAT_INFOS]
;null!=h&&r._clientConfig.get(F.CONFIG_KEY_MAX_HEARTBEAT_INFOS)!==h&&(r._logger.debug("onHeartbeatResponse(): setting Maximum Heartbeat Infos to "+h+" (from gateway)"),
r._clientConfig.set(F.CONFIG_KEY_MAX_HEARTBEAT_INFOS,h));var i=g[y.RESPONSE_CONFIG_KEY_SEND_LOGS],j=null!=i&&J.AsBoolean(i)
;j!==r._clientConfig.get(F.CONFIG_KEY_SEND_LOGS)&&(r._logger.debug("onHeartbeatResponse(): turning "+(j?"on":"off")+" sending of logs"),r._clientConfig.set(F.CONFIG_KEY_SEND_LOGS,j))
;var k=g[y.RESPONSE_CONFIG_KEY_HEARTBEAT_INTERVAL];if(null!=k){var l=J.Int32.Cast(k),m=l
;m!=r._clientSettings.heartbeatInterval&&(r._logger.debug("onHeartbeatResponse(): received hbIntervalMs from gateway: "+m),r._clientSettings.heartbeatInterval=m,
null!=r._heartbeatTimerCancel&&r.resetHeartbeatTimer())}var n=g[y.RESPONSE_CONFIG_KEY_GATEWAY_URL]
;null!=n&&n!=r._clientSettings.gatewayUrl&&(r._logger.debug("onHeartbeatResponse(): received gatewayUrl from gateway: "+n),r._clientSettings.gatewayUrl=n)}
}else r._logger.warning("onHeartbeatResponse(): decoded heartbeat response is null.")}else{var o=b
;J.isValidString(o)?J.stringStartsWith(o,"HTTP timeout")?r._logger.warning("onHeartbeatResponse(): "+o):r._logger.error("onHeartbeatResponse(): failed to send heartbeat: "+o):(o=C.DEFAULT_HEARTBEAT_ERROR_MESSAGE,
r._logger.error("onHeartbeatResponse(): "+o)),r.updateHeartbeatInfoOnFailure(c,o)}})},this.getSessionTime=function(){return J.Int32.Cast(r._time.current()-r._startTimeMs)},
this.getNextEventNumber=function(){return this._eventQueue.getNumber()},this.sessionTypeTag=function(){return this.isGlobalSession()?" (global session)":""},this.isGlobalSession=function(){
return this._global==B.SESSION_TYPE.GLOBAL},this.isVideoSession=function(){return this._global==B.SESSION_TYPE.VIDEO},this.isAdSession=function(){return this._global==B.SESSION_TYPE.AD},
this.updateContentMetadata=function(a){r.mergeContentMetadata(a),r.setStatesFromContentMetadata()},this.mergeContentMetadata=function(b){var c={},d={}
;if(J.isValidString(b.assetName)&&(r._contentMetadata.assetName!=b.assetName?(null!=r._contentMetadata.assetName&&(c[y.REQUEST_KEY_ASSET_NAME]=r._contentMetadata.assetName),
d[y.REQUEST_KEY_ASSET_NAME]=b.assetName,r._contentMetadata.assetName=b.assetName):r._logger.warning("mergeContentMetadata(): assetName was not changed.")),
J.isValidString(b.applicationName)&&(r._contentMetadata.applicationName!=b.applicationName?(null!=r._contentMetadata.applicationName&&(c[y.REQUEST_KEY_PLAYER_NAME]=r._contentMetadata.applicationName),
d[y.REQUEST_KEY_PLAYER_NAME]=b.applicationName,r._contentMetadata.applicationName=b.applicationName):r._logger.warning("mergeContentMetadata(): applicationName was not changed.")),
J.isValidString(b.streamUrl)&&(r._contentMetadata.streamUrl!=b.streamUrl?(null!=r._contentMetadata.streamUrl&&(c[y.REQUEST_KEY_STREAM_URL]=r._contentMetadata.streamUrl),
d[y.REQUEST_KEY_STREAM_URL]=b.streamUrl,r._contentMetadata.streamUrl=b.streamUrl,r._streamUrl=r._contentMetadata.streamUrl):r._logger.warning("mergeContentMetadata(): streamUrl was not changed.")),
J.isValidString(b.viewerId)&&(r._contentMetadata.viewerId!=b.viewerId?(null!=r._contentMetadata.viewerId&&(c[y.REQUEST_KEY_VIEWER_ID]=r._contentMetadata.viewerId),
d[y.REQUEST_KEY_VIEWER_ID]=b.viewerId,r._contentMetadata.viewerId=b.viewerId):r._logger.warning("mergeContentMetadata(): viewerId was not changed.")),
J.isValidString(b.defaultResource)&&(r._contentMetadata.defaultResource!=b.defaultResource?(null!=r._contentMetadata.defaultResource&&(c[y.REQUEST_KEY_RESOURCE]=r._contentMetadata.defaultResource),
d[y.REQUEST_KEY_RESOURCE]=b.defaultResource,r._contentMetadata.defaultResource=b.defaultResource):r._logger.warning("mergeContentMetadata(): defaultResource was not changed.")),
J.isInteger(b.duration)&&b.duration>0&&(r._contentMetadata.duration!=b.duration?(r._contentLengthSec>0&&(c[y.REQUEST_KEY_CONTENT_LENGTH]=r._contentLengthSec),
d[y.REQUEST_KEY_CONTENT_LENGTH]=b.duration,r._contentMetadata.duration=b.duration,
r._contentLengthSec=r._contentMetadata.duration):r._logger.warning("mergeContentMetadata(): duration was not changed.")),
J.isInteger(b.encodedFrameRate)&&b.encodedFrameRate>0&&(r._contentMetadata.encodedFrameRate!=b.encodedFrameRate?(r._contentMetadata.encodedFrameRate>-1&&(c[y.REQUEST_KEY_ENCODED_FRAME_RATE]=r._contentMetadata.encodedFrameRate),
d[y.REQUEST_KEY_ENCODED_FRAME_RATE]=b.encodedFrameRate,r._contentMetadata.encodedFrameRate=b.encodedFrameRate,
r._encodedFrameRate=r._contentMetadata.encodedFrameRate):r._logger.warning("mergeContentMetadata(): encodedFrameRate was not changed.")),
b.streamType!=f.StreamType.UNKNOWN&&(r._contentMetadata.streamType!=b.streamType?(r._contentMetadata.streamType!=f.StreamType.UNKNOWN&&(r._contentMetadata.streamType==a.ContentMetadata.StreamType.LIVE?c[y.REQUEST_KEY_IS_LIVE]=!0:c[y.REQUEST_KEY_IS_LIVE]=!1),
b.streamType==a.ContentMetadata.StreamType.LIVE?d[y.REQUEST_KEY_IS_LIVE]=!0:d[y.REQUEST_KEY_IS_LIVE]=!1,
r._contentMetadata.streamType=b.streamType):r._logger.warning("mergeContentMetadata(): streamType was not changed.")),J.dictCount(b.custom)>0){var e={},g={};for(var h in b.custom){
r._contentMetadata.custom[h]!=b.custom[h]?(e[h]=b.custom[h],r._contentMetadata.custom[h]&&(g[h]=r._contentMetadata.custom[h]),
r._contentMetadata.custom[h]=b.custom[h]):r._logger.info("mergeContentMetadata(): custom."+h+" was not changed.")}J.dictCount(e)>0?(J.dictCount(g)>0&&(c[y.REQUEST_KEY_TAGS]=g),
d[y.REQUEST_KEY_TAGS]=e):r._logger.warning("mergeContentMetadata(): custom was not changed.")}J.dictCount(d)>0&&this.declareStateChange(d,c)},this.setStatesFromContentMetadata=function(){
if(r._logger.debug("setStatesFromContentMetadata()"),null!=r._contentMetadata.defaultResource&&this.setResource(r._contentMetadata.defaultResource),
null!=r._contentMetadata.streamUrl&&this.setStreamUrl(r._contentMetadata.streamUrl),r._contentMetadata.duration>0&&this.setContentLength(r._contentMetadata.duration),
r._contentMetadata.encodedFrameRate>0&&this.setEncodedFrameRate(r._contentMetadata.encodedFrameRate),r._contentMetadata.streamType!==f.StreamType.UNKNOWN){
var a=r._contentMetadata.streamType===f.StreamType.LIVE;this.setIsLive(a)}null!=r._contentMetadata.assetName&&this.setAssetName(r._contentMetadata.assetName),
null!=r._contentMetadata.viewerId&&this.setViewerId(r._contentMetadata.viewerId),
null==r._contentMetadata.applicationName&&null==r._contentMetadata.playerName||this.setPlayerName(r._contentMetadata.applicationName||r._contentMetadata.playerName),
J.dictCount(r._contentMetadata.custom)>0&&this.setTags(r._contentMetadata.custom)},this.enqueueEventForContentMetadata=function(){var b={}
;if(null!=r._contentMetadata.assetName?b[y.REQUEST_KEY_ASSET_NAME]=r._contentMetadata.assetName:r._logger.warning("enqueueEventForContentMetadata(): assetName was not set."),
null!=r._contentMetadata.applicationName?b[y.REQUEST_KEY_PLAYER_NAME]=r._contentMetadata.applicationName:r._logger.warning("enqueueEventForContentMetadata(): applicationName was not set."),
null!=r._contentMetadata.streamUrl?b[y.REQUEST_KEY_STREAM_URL]=r._contentMetadata.streamUrl:r._logger.warning("enqueueEventForContentMetadata(): streamUrl was not set."),
null!=r._contentMetadata.viewerId?b[y.REQUEST_KEY_VIEWER_ID]=r._contentMetadata.viewerId:r._logger.warning("enqueueEventForContentMetadata(): viewerId was not set."),
null!=r._contentMetadata.defaultResource?b[y.REQUEST_KEY_RESOURCE]=r._contentMetadata.defaultResource:r._logger.warning("enqueueEventForContentMetadata(): defaultResource was not set."),
r._contentMetadata.duration>-1?b[y.REQUEST_KEY_CONTENT_LENGTH]=r._contentMetadata.duration:r._logger.warning("enqueueEventForContentMetadata(): duration was not set."),
r._contentMetadata.encodedFrameRate>-1?b[y.REQUEST_KEY_ENCODED_FRAME_RATE]=r._contentMetadata.encodedFrameRate:r._logger.warning("enqueueEventForContentMetadata(): encodedFrameRate was not set."),
r._contentMetadata.streamType!=f.StreamType.UNKNOWN?r._contentMetadata.streamType==a.ContentMetadata.StreamType.LIVE?b[y.REQUEST_KEY_IS_LIVE]=!0:b[y.REQUEST_KEY_IS_LIVE]=!1:r._logger.warning("enqueueEventForContentMetadata(): streamType was not set."),
J.dictCount(r._contentMetadata.custom)>0){b[y.REQUEST_KEY_TAGS]={};for(var c in r._contentMetadata.custom)b[y.REQUEST_KEY_TAGS][c]=r._contentMetadata.custom[c]
}else r._logger.warning("enqueueEventForContentMetadata(): custom tags were not set.");J.dictCount(b)>0&&this.declareStateChange(b,null)},this.validateContentMetadata=function(){
null!=r._contentMetadata&&J.isValidString(r._contentMetadata.assetName)||r._logger.warning("Missing assetName during session creation"),
null!=r._contentMetadata&&J.isValidString(r._contentMetadata.defaultResource)||r._logger.warning("Missing resource during session creation"),
null!=r._contentMetadata&&J.isValidString(r._contentMetadata.streamUrl)||r._logger.warning("Missing streamUrl during session creation"),
(null==r._contentMetadata||r._contentMetadata.encodedFrameRate<=0)&&r._logger.warning("Missing encodedFrameRate during session creation"),
null!=r._contentMetadata&&J.isValidString(r._contentMetadata.viewerId)||r._logger.warning("Missing viewerId during session creation"),
null!=r._contentMetadata&&null!=r._contentMetadata.streamType&&f.StreamType.UNKNOWN!==r._contentMetadata.streamType||r._logger.warning("Missing streamType during session creation"),
null!=r._contentMetadata&&J.isValidString(r._contentMetadata.applicationName)||r._logger.warning("Missing applicationName during session creation"),
(null==r._contentMetadata||r._contentMetadata.duration<=0)&&r._logger.warning("Missing duration during session creation")},this.updateCustomMetric=function(a,b){
null==r._customMetric&&(r._customMetric={}),r._customMetric[a]=b}};B.DEFAULT_VIDEO_SESSION_FLAGS=y.SessionFlags.VIDEO+y.SessionFlags.QUALITY_METRICS+y.SessionFlags.BITRATE_METRICS,B.SESSION_TYPE={
VIDEO:"Video",GLOBAL:"Global",AD:"Ad"};var C=(b.IMonitor=function(){this.onPlayerStateChange=function(a){},this.onBitrateChange=function(a){},this.onSeekEvent=function(a,b){},
this.onEncodedFrameRateChange=function(a){},this.onRenderedFrameRateChange=function(a){},this.onContentLengthChange=function(a){},this.onPlayheadTimeChange=function(a){},
this.onStreamUrlChange=function(a){},this.onBufferLengthChange=function(a){},this.onPlayerTypeChange=function(a){},this.onPlayerVersionChange=function(a){},
this.onStreamResolutionWidthChange=function(a){},this.onStreamResolutionHeightChange=function(a){},this.onConnectionTypeChange=function(a){},this.onLinkEncryptionChange=function(a){},
this.onSignalStrengthChange=function(a){},this.onError=function(a,b){},this.onRelease=function(){},this.onCDNServerIPChange=function(a){}},b.Session=function(){function b(a,b,c,d,e,f,g){this._id=a,
this._global=b,this._clientConfig=c,this._systemMetadata=d,this._cwsSession=e,this._exceptionCatcher=f,this._logger=g,this._logger.setModuleName("Session"),
this._logger.setSessionId(J.ToString(this._id))}var c=this;c._playerStateManager=null,c._id=0,c._global=B.SESSION_TYPE.VIDEO,c._cleaningUp=!1,c._cleanedUp=!1,c._adPlaying=!1,c._adStream=null,
c._adPlayer=null,c._adPosition=null,c._ignorePlayerState=!1,c._pooledPlayerState=i.PlayerState.NOT_MONITORED,c._ignoreBitrateAndResource=!1,c._ignorePlayheadTimeandBufferLength=!1,
c._ignoreEncodedFrameRateAndDuration=!1,c._ignoreError=!1,b.apply(c,arguments),this.start=function(a){if(c._cwsSession.start(this),null!=a&&void 0!=a&&c.attachPlayer(a),
c._clientConfig.isReady())c.initiateSession();else{var b=function(){c.initiateSession()};c._clientConfig.register(b)}},this.cleanup=function(){if(c._logger.info("cleanup()"+c.sessionTypeTag()),
c._cleaningUp=!0,c._cwsSession.willEndSoon(),c._clientConfig.isReady())c.endCwsSessionAndCleanupAll();else{var a=function(){c.endCwsSessionAndCleanupAll()};c._clientConfig.register(a)}},
this.cleanupAll=function(){c._logger.debug("cleanupAll()"+c.sessionTypeTag()),(c.isVideoSession()||c.isAdSession())&&null!=c._playerStateManager&&c.releasePlayerStateManager(),
c._logger.setSessionId(null),c._logger=null,c._exceptionCatcher=null,c._client=null,c._clientConfig=null,c._systemMetadata=null,c._cwsSession.cleanup(),c._cwsSession=null,c._cleanedUp=!0},
this.endCwsSessionAndCleanupAll=function(){c._cwsSession.end(),c.cleanupAll()},this.initiateSession=function(){c._cwsSession.initialize(),c.setStatesFromSystemMetadata(),
c._cwsSession.startSendingHeartbeats()},this.setStatesFromSystemMetadata=function(){c._logger.debug("setStatesFromSystemMetadata()");var a=c._systemMetadata.get(),b=a[S.BROWSER_NAME]
;null!=b&&c._cwsSession.setBrowserName(b);var d=a[S.BROWSER_VERSION];null!=d&&c._cwsSession.setBrowserVersion(d);var e=a[S.DEVICE_BRAND];null!=e&&c._cwsSession.setDeviceBrand(e)
;var f=a[S.DEVICE_MANUFACTURER];null!=f&&c._cwsSession.setDeviceManufacturer(f);var g=a[S.DEVICE_MODEL];null!=g&&c._cwsSession.setDeviceModel(g);var h=a[S.DEVICE_TYPE]
;null!=h&&c._cwsSession.setDeviceType(h);var i=a[S.DEVICE_VERSION];null!=i&&c._cwsSession.setDeviceVersion(i);var j=a[S.FRAMEWORK_NAME];null!=j&&c._cwsSession.setFrameworkName(j)
;var k=a[S.FRAMEWORK_VERSION];null!=k&&c._cwsSession.setFrameworkVersion(k);var l=a[S.OPERATING_SYSTEM_NAME];null!=l&&c._cwsSession.setOperatingSystemName(l);var m=a[S.OPERATING_SYSTEM_VERSION]
;null!=m&&c._cwsSession.setOperatingSystemVersion(m);var n=a[S.DEVICE_CATEGORY];null!=n&&c._cwsSession.setDeviceCategory(n)},this.onPlayerStateChange=function(a){
if(c._logger.debug("onPlayerStateChange(): "+a),c._cwsSession._playerState!=a){if(c._cwsSession._playerState==i.PlayerState.NOT_MONITORED&&a!=i.PlayerState.NOT_MONITORED&&(c._pooledPlayerState=a),
c._ignorePlayerState)return void c._logger.debug("onPlayerStateChange(): "+a+" (pooled, "+(c._adPlaying?"ad playing":"preloading")+")");c._cwsSession.setPlayerState(a)}},
this.onBitrateChange=function(a){if(c._logger.debug("onBitrateChange(): "+a),c._ignoreBitrateAndResource)return void c._logger.info("onBitrateChange(): ignored");c._cwsSession.setBitrateKbps(a)},
this.onSeekEvent=function(a,b){J.isInteger(b)||(c._logger.warning("onSeekEvent(): Ignored non-integer seekToPosition data: "+b),b=-1),c._cwsSession.enqueueSeekEvent(a,b)},
this.onEncodedFrameRateChange=function(a){c._logger.debug("onEncodedFrameRateChange(): "+a),
a>0?c._ignoreEncodedFrameRateAndDuration?c._logger.info("onEncodedFrameRateChange(): Ignored encoded frame rate data: "+a+" (ads)"):(c._cwsSession.setEncodedFrameRate(a),
c._logger.info("onEncodedFrameRateChange(): Received encoded frame rate data: "+a)):c._logger.warning("onEncodedFrameRateChange(): Ignored invalid encoded frame rate data: "+a)},
this.onContentLengthChange=function(a){c._logger.debug("onContentLengthChange(): "+a),
a>0?c._ignoreEncodedFrameRateAndDuration?c._logger.info("setContentLength(): Ignored content length data: "+a+" (ads)"):(c._cwsSession.setContentLength(a),
c._logger.info("setContentLength(): Received content length data: "+a)):c._logger.warning("setContentLength(): Ignored invalid content length data: "+a)},this.onStreamUrlChange=function(a){
c._logger.debug("onStreamUrlChange(): "+a),c._cwsSession.setStreamUrl(a)},this.onStreamResolutionWidthChange=function(a){c._logger.debug("onStreamResolutionWidthChange(): "+a),
c._cwsSession.setStreamResolutionWidth(a)},this.onStreamResolutionHeightChange=function(a){c._logger.debug("onStreamResolutionHeightChange(): "+a),c._cwsSession.setStreamResolutionHeight(a)},
this.onConnectionTypeChange=function(a){c._logger.debug("onConnectionTypeChange(): "+a),c._cwsSession.setConnectionType(a)},this.onLinkEncryptionChange=function(a){
c._logger.debug("onLinkEncryptionChange(): "+a),c._cwsSession.setLinkEncryption(a)},this.onPlayerTypeChange=function(a){c._logger.debug("onPlayerTypeChange(): "+a),
null==c._cwsSession.getFrameworkName()&&c._cwsSession.setFrameworkName(a)},this.onPlayerVersionChange=function(a){c._logger.debug("onPlayerVersionChange(): "+a),
null==c._cwsSession.getFrameworkVersion()&&c._cwsSession.setFrameworkVersion(a)},this.onCDNServerIPChange=function(a){c._logger.debug("onCDNServerIPChange(): "+a),c._cwsSession.setCDNServerIP(a)},
this.onError=function(a,b){c._logger.debug("onError(): "+a+" ("+b+")"),c.reportError(a,b)},this.onRelease=function(){c._logger.debug("onRelease()"),c.releasePlayerStateManager()},
this.adStart=function(b,d,e){if(c._logger.debug("adStart(): adStream="+b+" adPlayer="+d+" adPosition="+e),c._adPlaying)return void c._logger.warning("adStart(): multiple adStart calls, ignoring")
;c._adPlaying=!0,c._adStream=b,c._adPlayer=d,c._adPosition=e,c._cwsSession._hasJoined||c._cwsSession.togglePauseJoin(!0),
c._adStream==a.Client.AdStream.CONTENT||c._adPlayer==a.Client.AdPlayer.SEPARATE?(c._cwsSession._playerState!==i.PlayerState.NOT_MONITORED&&(c._pooledPlayerState=c._cwsSession._playerState),
c._cwsSession.setPlayerState(i.PlayerState.NOT_MONITORED),
c._ignorePlayerState=!0):c._adStream==a.Client.AdStream.SEPARATE&&c._adPlayer==a.Client.AdPlayer.CONTENT&&(c._cwsSession._playerState!==i.PlayerState.NOT_MONITORED&&(c._pooledPlayerState=c._cwsSession._playerState),
c._cwsSession.setPlayerState(i.PlayerState.NOT_MONITORED),c._ignorePlayerState=!0,c._ignoreBitrateAndResource=!0,c._ignoreEncodedFrameRateAndDuration=!0,c._ignorePlayheadTimeandBufferLength=!0,
c._ignoreError=!0)},this.adEnd=function(){if(c._logger.debug("adEnd()"),!c._adPlaying)return void c._logger.warning("adEnd(): called before adStart, ignoring")
;c._cwsSession._hasJoined||c._cwsSession.togglePauseJoin(!1),c._adStream==a.Client.AdStream.CONTENT||c._adPlayer==a.Client.AdPlayer.SEPARATE?c._preloading||(c._ignorePlayerState=!1,
c._cwsSession.setPlayerState(c._pooledPlayerState)):c._adStream==a.Client.AdStream.SEPARATE&&c._adPlayer==a.Client.AdPlayer.CONTENT&&(c._ignoreBitrateAndResource=!1,
c._ignoreEncodedFrameRateAndDuration=!1,c._ignorePlayheadTimeandBufferLength=!1,c._ignoreError=!1,c._preloading||(c._ignorePlayerState=!1,c._cwsSession.setPlayerState(c._pooledPlayerState))),
c._adPlaying=!1,c._adStream=c._adPlayer=c._adPosition=null},this.detachPlayer=function(){if(c._logger.debug("detachPlayer()"),
null==c._playerStateManager)return void c._logger.error("detachPlayer(): called before attachPlayer, ignoring")
;null!==c._playerStateManager&&(c._exceptionCatcher.runProtected("Session.detachPlayer",function(){c._playerStateManager.removeMonitoringNotifier()}),c._playerStateManager=null,
c._cwsSession.setPlayerStateManager(null),c._cwsSession.setPlayerState(i.PlayerState.NOT_MONITORED))},this.releasePlayerStateManager=function(){
null!==c._playerStateManager&&(c._exceptionCatcher.runProtected("Session.releasePlayerStateManager",function(){c._playerStateManager.removeMonitoringNotifier()}),c._playerStateManager=null,
c._cwsSession.setPlayerStateManager(null),c._cwsSession.setPlayerState(i.PlayerState.NOT_MONITORED))},this.offFocus=function(){c._logger.debug("offFocus()"),
c._cwsSession._hasJoined||c._cwsSession.togglePauseJoin(!0),c._cwsSession._playerState!==i.PlayerState.NOT_MONITORED&&(c._pooledPlayerState=c._cwsSession._playerState),
c._cwsSession.setPlayerState(i.PlayerState.NOT_MONITORED),c._ignorePlayerState=!0},this.attachPlayer=function(a){return c._logger.debug("attachPlayer()"),
null!=c._playerStateManager?void c._logger.error("attachPlayer(): detach current PlayerStateManager first"):a instanceof i?void c._exceptionCatcher.runProtected("Session.attachPlayer()",function(){
a.setMonitoringNotifier(c,c._id)?(a.pushCurrentState(),
c._playerStateManager=a,c._cwsSession.setPlayerStateManager(c._playerStateManager)):c._logger.error("attachPlayer(): instance of PlayerStateManager is already attached to a session")
}):void c._logger.error("attachPlayer(): Incorrect PlayerStateManager instance")},this.onFocus=function(){c._logger.debug("onFocus()"),c._cwsSession._hasJoined||c._cwsSession.togglePauseJoin(!1),
c._ignoreBitrateAndResource=!1,c._ignoreEncodedFrameRateAndDuration=!1,c._ignorePlayheadTimeandBufferLength=!1,c._ignoreError=!1,c._preloading||(c._ignorePlayerState=!1,
c._pooledPlayerState!==i.PlayerState.NOT_MONITORED&&c._cwsSession.setPlayerState(c._pooledPlayerState))},this.getPlayerStateManager=function(){return c._logger.debug("getPlayerStateManager()"),
c._playerStateManager},this.contentPreload=function(){if(c._logger.debug("contentPreload()"),c._preloading)return void c._logger.debug("contentPreload(): called twice, ignoring");c._preloading=!0,
c._ignorePlayerState=!0},this.contentStart=function(){if(c._logger.debug("contentStart()"),!c._preloading)return void c._logger.warning("contentStart(): called without contentPreload, ignoring")
;c._preloading=!1,c._adPlaying||(c._ignorePlayerState=!1,c._pooledPlayerState!==i.PlayerState.NOT_MONITORED&&c._cwsSession.setPlayerState(c._pooledPlayerState))},this.reportError=function(b,d){
if(c._logger.info("reportError(): "+b),!J.isValidString(b))return void c._logger.error("reportError(): invalid error message string: "+b)
;if(d!==a.Client.ErrorSeverity.FATAL&&d!==a.Client.ErrorSeverity.WARNING)return void c._logger.error("reportError(): invalid error severity: "+d)
;if(c._ignoreError)return void c._logger.debug("reportError(): ignored");var e=d===a.Client.ErrorSeverity.FATAL;c._cwsSession.sendError(b,e)},this.updateContentMetadata=function(a){
c._exceptionCatcher.runProtected("Session.updateContentMetadata",function(){c._cwsSession.updateContentMetadata(a)})},this.sendCustomEvent=function(a,b){
c._logger.info("sendEvent(): eventName="+a+c.sessionTypeTag()),c._cwsSession.enqueueCustomEvent(a,b)},this.isGlobalSession=function(){return c._global==B.SESSION_TYPE.GLOBAL},
this.isVideoSession=function(){return c._global==B.SESSION_TYPE.VIDEO},this.isAdSession=function(){return c._global==B.SESSION_TYPE.AD},this.sessionTypeTag=function(){
return c.isGlobalSession()?" (global session)":""},this.getSessionId=function(){return this._id},this.getClientId=function(){var a=null
;return c._clientConfig.isReady()&&(a=c._clientConfig.get(F.CONFIG_KEY_CLIENT_ID)),a},this.updateCustomMetric=function(a,b){c._cwsSession.updateCustomMetric(a,b)}})
;C.DEFAULT_HEARTBEAT_ERROR_MESSAGE="received no response (or a bad response) to heartbeat POST request";var D=b.SessionFactory=function(){function a(a,c,d,e){b._client=a,b._clientSettings=c,
b._clientConfig=d,b._systemFactory=e,b._logger=b._systemFactory.buildLogger(),b._logger.setModuleName("SessionFactory"),b._nextSessionKey=0,b._sessionsByKey={}}var b=this;b._logger=null,
b._logBuffer=null,b._nextSessionKey=0,b._sessionsByKey=null,a.apply(b,arguments),this.cleanup=function(){b._logger=null,b._logBuffer=null;for(var a in b._sessionsByKey){b._sessionsByKey[a].cleanup()}
b._sessionsByKey=null,b._nextSessionKey=0},this.newSessionKey=function(){var a=b._nextSessionKey;return b._nextSessionKey++,a},this.makeVideoSession=function(a,c,d){return null==a&&(a=new f),
b.makeSession(a,c,d)},this.makeGlobalSession=function(a){return b.makeSession(a,B.SESSION_TYPE.GLOBAL)},this.generateSessionId=function(){return M.integer32()},this.makeSession=function(a,c,d){
var e=a.clone(),f=b.generateSessionId(),g=b._systemFactory.buildSession(b._client,b._clientSettings,b._clientConfig,f,c,e),h=b.newSessionKey();return b.addSession(h,g),g.start(d),h},
this.getSession=function(a){var c=b._sessionsByKey[a];return null==c&&b._logger.error("Client: invalid sessionKey. Did you cleanup that session previously?"),c},this.getVideoSession=function(a){
var c=this.getSession(a);return null!=c&&(c.isVideoSession()||c.isAdSession()||(b._logger.error("Client: invalid sessionKey. Did you cleanup that session previously?"),c=null)),c},
this.addSession=function(a,c){b._sessionsByKey[a]=c},this.removeSession=function(a){delete b._sessionsByKey[a]},this.cleanupSession=function(a){var c=b.getSession(a);b.removeSession(a),c.cleanup()}
},E=b.CallbackWithTimeout=function(a){this._timer=a,this.getWrapperCallback=function(a,b,c){var d=!1,e=function(){d||(d=!0,a(!1,c+" ("+b+" ms)"))}
;return this._timer.createOnce(e,b,"CallbackWithTimeout.wrap"),function(b,c){d||(d=!0,a(b,c))}}},F=b.Config=function(a,b,c){var d=this;this._logger=a,this._logger.setModuleName("Config"),
this._storage=b,this._jsonInterface=c,this._defaultConfig={clientId:y.DEFAULT_CLIENT_ID,sendLogs:!1,maxHbInfos:y.DEFAULT_MAX_HEARTBEAT_INFOS},this._config=J.ObjectShallowCopy(this._defaultConfig),
this._loaded=!1,this._loadedEmpty=!1,this._waitingConsumers=[],this.isReady=function(){return this._loaded},this.load=function(){var a=function(a,b){a?(d._parse(b),
d._logger.debug("load(): configuration successfully loaded from local storage"+(d._loadedEmpty?" (was empty)":"")+".")):d._logger.error("load(): error loading configuration from local storage: "+b),
d._loaded=!0,d._notify()};this._storage.load(F.STORAGE_KEY,a)},this._parse=function(a){var b=this._jsonInterface.decode(a);if(null==b)return void(this._loadedEmpty=!0)
;var c=b[F.CONFIG_STORAGE_KEY_CLIENT_ID];null!=c&&c!=y.DEFAULT_CLIENT_ID&&""!=c&&"null"!=c&&(this._config[F.CONFIG_KEY_CLIENT_ID]=c,
this._logger.debug("parse(): loaded clientId="+c+" (from local storage)"))},this._marshall=function(){var a={};return a[F.CONFIG_STORAGE_KEY_CLIENT_ID]=this._config.clientId,
this._logger.debug("_marshall(): saving clientId="+this._config.clientId+" (to local storage)"),this._jsonInterface.encode(a)},this.save=function(){var a=function(a,b){
a?d._logger.debug("save(): configuration successfully saved to local storage."):d._logger.error("save(): error saving configuration to local storage: "+b)}
;this._storage.save(F.STORAGE_KEY,this._marshall(),a)},this.register=function(a){if(this.isReady())return void a();this._waitingConsumers.push(a)},this.get=function(a){
return this._loaded?this._config[a]:null},this.set=function(a,b){this._loaded&&(this._config[a]=b)},this._notify=function(){for(var a;null!=(a=this._waitingConsumers.shift());)a()}}
;F.STORAGE_KEY="sdkConfig",F.CONFIG_STORAGE_KEY_CLIENT_ID="clId",F.CONFIG_KEY_CLIENT_ID="clientId",F.CONFIG_KEY_SEND_LOGS="sendLogs",F.CONFIG_KEY_MAX_HEARTBEAT_INFOS="maxHbInfos"
;var G=b.EventQueue=function(){this._events=[],this._nextEventNumber=0,this.enqueue=function(a){this._events.push(a)},this.getNumber=function(){var a=this._nextEventNumber
;return this._nextEventNumber++,a},this.flush=function(){var a=this._events;return this._events=[],a}},H=b.ExceptionCatcher=function(a,b,c){this._logger=a,
this._logger.setModuleName("ExceptionCatcher"),this._ping=b,this._systemSettings=c,this.runProtected=function(a,b,c){try{b()}catch(d){if(null!=c)c(d);else{
if(this._systemSettings.allowUncaughtExceptions)throw d;this.onUncaughtException(a,d)}}},this.onUncaughtException=function(a,b){var c="Uncaught exception: "+a+": "+b.toString()
;if(null!=this._ping)try{this._ping.send(c)}catch(d){this._logger.error("Caught exception while sending ping: "+d.toString())}this._logger.error(c)}},I=b.GatewayControl=function(a,b,c,d){var e=this
;this._clientSettings=a,this._logger=b,this._logger.setModuleName("GatewayControl"),this._httpClient=c,this._jsonInterface=d,this.send=function(a,b){
var c=this._jsonInterface.encode(a),d=this._clientSettings.gatewayUrl+y.gatewayPath,f=function(a,c){if(a){var d=e._jsonInterface.decode(c);b(a,d)}else{b(a,c)}}
;this._httpClient.request("POST",d,c,"application/json",f)}},J=b.Lang={};J.isMeaningfulString=function(a){return J.isValidString(a)&&null!=a&&"undefined"!=a&&"null"!=a},
J.sanitizeStringToStringObject=function(a){var b={};for(var c in a)if(J.isMeaningfulString(c)){var d=a[c];J.isMeaningfulString(d)&&(b[c]=d)}return b},J.validateInterface=function(a,b,c){
if(null==a)throw new Error("Expected "+c+" implementation is null.");for(var d in b)if("function"!=typeof a[d])throw new Error("Expected method "+d+" in "+c+" implementation.")},
J.dictCount=function(a){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c},J.ToString=function(a){return""+a},J.NumberToInt=function(a){return Math.floor(a)},J.NumberToUnsignedInt=function(a){
return Math.abs(J.NumberToInt(a))},J.AsBoolean=function(a){return Boolean(a)},J.isValidString=function(a){return"string"==typeof a&&""!==a},J.stringStartsWith=function(a,b){
return"string"==typeof a&&"string"==typeof b&&("function"==typeof a.indexOf&&0===a.indexOf(b))},J.isBoolean=function(a){return"boolean"==typeof a},J.UrlEncodeString=function(a){return escape(a)},
J.isObject=function(a){return"object"==typeof a},J.ObjectToString=function(a){var b="";for(var c in a){b+=c+"="+a[c]}return"Object{"+b+"}"},J.ObjectShallowCopyOmitNull=function(a){
var b=J.ObjectShallowCopy(a);for(var c in b)null==b[c]&&delete b[c];return b},J.ObjectShallowCopy=function(a){var b={};for(var c in a)b[c]=a[c];return b},J.ObjectShallowEquals=function(a,b){
if(typeof a!=typeof b)return!1;if(a instanceof Object&&b instanceof Object){if(J.dictCount(a)!==J.dictCount(b))return!1;for(var c in a)if(!(a[c]===b[c]))return!1;return!0}return a===b},
J.mergeObjects=function(){for(var a={},b=0;b<arguments.length;b++)for(var c in arguments[b])void 0!=arguments[b][c]&&null!=arguments[b][c]&&(a[c]=arguments[b][c]);return a},J.isInteger=function(a){
return"number"==typeof a&&Math.round(a)===a},J.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)},J.ArrayEquals=function(a,b){if(a===b)return!0
;if(null==a||null==b)return!1;if(a.length!=b.length)return!1;for(var c=0;c<a.length;++c)if(J.isArray(a[c])&&J.isArray(b[c])){if(!J.ArrayEquals(a[c],b[c]))return!1}else if(a[c]!==b[c])return!1;return!0
},J.isObjectDefinePropertyPresent=function(){return void 0!==Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(a){return!1}}()},J.defGet=function(a,b,c){
if(J.isObjectDefinePropertyPresent())Object.defineProperty(a,b,{configurable:!0,enumerable:!0,get:c});else{
if(void 0===a.__defineGetter__)throw new Error("JavaScript runtime must support either Object.defineProperty or __defineGetter__");a.__defineGetter__(b,c)}},J.defSet=function(a,b,c){
if(J.isObjectDefinePropertyPresent())Object.defineProperty(a,b,{configurable:!0,set:c});else{
if(void 0===a.__defineSetter__)throw new Error("JavaScript runtime must support either Object.defineProperty or __defineSetter__");a.__defineSetter__(b,c)}},function(){var a={};a.two32=4294967296,
a.MaxValue=a.two32-1,a.MinValue=0,J.UInt32=a,J.UInt32.Cast=function(b){var c=parseInt(b,10);return c>a.MaxValue?c%=a.two32:c<a.MinValue&&(c=-c%a.two32,c=a.two32-c),c},J.UInt32.InRange=function(b){
var c=parseInt(b,10);return c<=a.MaxValue&&c>=a.MinValue};var b={};b.MaxValue=2147483647,b.MinValue=-2147483648,J.Int32=b,J.Int32.Cast=function(a){var c=parseInt(a,10)
;return c>b.MaxValue?c%=b.MaxValue:c<b.MinValue&&(c=-c%b.MaxValue,c=b.MaxValue-c),c},J.Int32.InRange=function(a){var c=parseInt(a,10);return c<=b.MaxValue&&c>=b.MinValue}}()
;var K=b.LogBuffer=function(){this._buffer=[],this.add=function(a){this._buffer.length>=32&&this._buffer.shift(),this._buffer.push(a)},this.flush=function(){var a=this._buffer;return this._buffer=[],a
}},L=b.Ping=function(a,b,c){this._isSendingPing=!1,this._cachedBasePingUrl=null,this._logger=a,this._logger.setModuleName("Ping"),this._httpClient=b,this._clientSettings=c,this.send=function(a){
if(!this._isSendingPing){this._isSendingPing=!0;var b=this.getBasePingUrl()+"&d="+J.UrlEncodeString(a.toString());this._logger.error("send(): "+b),this._httpClient.request("GET",b,null,null,null),
this._isSendingPing=!1}},this.getBasePingUrl=function(){if(!this._cachedBasePingUrl){var a=L.SERVICE_URL+"?comp="+L.COMPONENT_NAME+"&clv="+d.version
;if(this._clientSettings&&(a+="&cid="+this._clientSettings.customerKey),a+="&sch="+y.SDK_METADATA_SCHEMA,!this._clientSettings)return a;this._cachedBasePingUrl=a}return this._cachedBasePingUrl}}
;L.COMPONENT_NAME="sdkjs",L.SERVICE_URL="https://pings.conviva.com/ping.ping";var M=b.Random={};M.maxUInt32=4294967295,M.maxInt32=2147483647,M.minInt32=-2147483648,M.integer32=function(){
return Math.floor(Math.random()*M.maxUInt32)+M.minInt32},M.uinteger32=function(){return Math.floor(Math.random()*M.maxUInt32)};var N=b.Sanitize={};N.Integer=function(a,b,c,d){if(isNaN(a))return d
;if("number"!=typeof a)return d;if(a==d)return d;var e=J.NumberToInt(a);return N.EnforceBoundaries(e,b,c)},N.EnforceBoundaries=function(a,b,c){return null!=c&&a>c?a=c:null!=b&&a<b&&(a=b),a},
N.sanitizeSpecialIntegerValue=function(a){return-1==a||-2==a?a:a=N.Integer(a,0,null,-1)};var O=b.StreamerError=function(){function a(a,c){b.errorCode=a,b.severity=c}var b=this;b.errorCode=null,
b.severity=d.ErrorSeverity.FATAL,a.apply(b,arguments),this.getErrorCode=function(){return b.errorCode},this.getErrorSeverity=function(){return b.severity}},P=b.HttpClient=function(a,b,c,d){
this._logger=a,this._logger.setModuleName("HttpClient"),this._httpInterface=b,this._callbackWithTimeout=c,this._systemSettings=d,this.request=function(a,b,c,d,e){
var f=1e3*this._systemSettings.httpTimeout,g=null;null!=e&&(g=this._callbackWithTimeout.getWrapperCallback(e,f,"HTTP timeout")),this._logger.debug("request(): calling HttpInterface.makeRequest"),
this._httpInterface.makeRequest(a,b,c,d,f,g)}},Q=b.Logger=function(a,b,c,d,e){this._loggingInterface=a,this._timeInterface=b,this._settings=c,this._logBuffer=d,this._packageName=e,
this.debug=function(a){this.log(a,h.LogLevel.DEBUG)},this.info=function(a){this.log(a,h.LogLevel.INFO)},this.warning=function(a){this.log(a,h.LogLevel.WARNING)},this.error=function(a){
this.log(a,h.LogLevel.ERROR)},this.log=function(a,b){var c=this.formatMessage(a,b);this._logBuffer.add(c),this._settings.logLevel<=b&&this._loggingInterface.consoleLog(c,b)},
this.prependModuleName=function(a){var b=a;return b="["+this._moduleName+"] "+b},this.prependPackageName=function(a){var b=a;return b="["+this._packageName+"] "+b},
this.prependConvivaNamespace=function(a){var b=a;return b="[Conviva] "+b},this.prependTime=function(a){return"["+(this._timeInterface.getEpochTimeMs()/1e3).toFixed(3).toString()+"] "+a},
this.prependLogLevel=function(a,b){var c=Q.getLogLevelString(b),d=a;return d="["+c+"] "+d},this.prependSessionId=function(a){var b=a;return null!=this._sessionId&&(b="sid="+this._sessionId+" "+b),b},
this.setSessionId=function(a){this._sessionId=a},this.setModuleName=function(a){this._moduleName=a},this.formatMessage=function(a,b){
return this.prependConvivaNamespace(this.prependTime(this.prependLogLevel(this.prependPackageName(this.prependModuleName(this.prependSessionId(a))),b)))}};Q.getLogLevelString=function(a){var b
;switch(a){case h.LogLevel.ERROR:b="ERROR";break;case h.LogLevel.WARNING:b="WARNING";break;case h.LogLevel.INFO:b="INFO";break;case h.LogLevel.DEBUG:b="DEBUG"}return b}
;var R=b.Storage=function(a,b,c,d){this._logger=a,this._logger.setModuleName("Storage"),this._storageInterface=b,this._callbackWithTimeout=c,this._systemSettings=d,this.load=function(a,b){
var c=this._callbackWithTimeout.getWrapperCallback(b,1e3*this._systemSettings.storageTimeout,"storage load timeout");this._logger.debug("load(): calling StorageInterface.loadData"),
this._storageInterface.loadData(R.STORAGE_SPACE,a,c)},this.save=function(a,b,c){var d=this._callbackWithTimeout.getWrapperCallback(c,1e3*this._systemSettings.storageTimeout,"storage save timeout")
;this._logger.debug("save(): calling StorageInterface.saveData"),this._storageInterface.saveData(R.STORAGE_SPACE,a,b,d)}};R.STORAGE_SPACE="Conviva";var S=b.SystemMetadata=function(b,c,d){
this._logger=b,this._logger.setModuleName("SystemMetadata"),this._metadataInterface=c,this._exceptionCatcher=d,this._cachedMetadata=null,this.get=function(){
return this._cachedMetadata||this.retrieve(),this._cachedMetadata},this.retrieve=function(){function b(a,b){d._exceptionCatcher.runProtected("Session.getSystemMetadataSchema(): "+a,function(){
var c=b[a];b[a]=c.call(d._metadataInterface)})}var c={};c[S.BROWSER_NAME]=this._metadataInterface.getBrowserName,c[S.BROWSER_VERSION]=this._metadataInterface.getBrowserVersion,
c[S.DEVICE_BRAND]=this._metadataInterface.getDeviceBrand,c[S.DEVICE_MANUFACTURER]=this._metadataInterface.getDeviceManufacturer,c[S.DEVICE_MODEL]=this._metadataInterface.getDeviceModel,
c[S.DEVICE_TYPE]=this._metadataInterface.getDeviceType,c[S.DEVICE_VERSION]=this._metadataInterface.getDeviceVersion,c[S.FRAMEWORK_NAME]=this._metadataInterface.getFrameworkName,
c[S.FRAMEWORK_VERSION]=this._metadataInterface.getFrameworkVersion,c[S.OPERATING_SYSTEM_NAME]=this._metadataInterface.getOperatingSystemName,
c[S.OPERATING_SYSTEM_VERSION]=this._metadataInterface.getOperatingSystemVersion,c[S.DEVICE_CATEGORY]=this._metadataInterface.getDeviceCategory;var d=this
;this._logger.debug("retrieve(): calling MetadataInterface methods");for(var e in c)b(e,c),J.isValidString(c[e])||delete c[e];var f=!1;if(void 0!==c[S.DEVICE_TYPE]){
for(var g in a.Client.DeviceType)if(c[S.DEVICE_TYPE]===a.Client.DeviceType[g]){f=!0;break}f||delete c[S.DEVICE_TYPE]}if(f=!1,void 0!==c[S.DEVICE_CATEGORY]){
for(var h in a.Client.DeviceCategory)if(c[S.DEVICE_CATEGORY]===a.Client.DeviceCategory[h]){f=!0;break}f||delete c[S.DEVICE_CATEGORY]}this._cachedMetadata=J.ObjectShallowCopyOmitNull(c)}}
;S.BROWSER_NAME="browserName",S.BROWSER_VERSION="browserVersion",S.DEVICE_BRAND="deviceBrand",S.DEVICE_MANUFACTURER="deviceManufacturer",S.DEVICE_MODEL="deviceModel",S.DEVICE_TYPE="deviceType",
S.DEVICE_VERSION="deviceVersion",S.FRAMEWORK_NAME="frameworkName",S.FRAMEWORK_VERSION="frameworkVersion",S.OPERATING_SYSTEM_NAME="operatingSystemName",
S.OPERATING_SYSTEM_VERSION="operatingSystemVersion",S.DEVICE_CATEGORY="deviceCategory";var T=b.Time=function(a,b){this._timeInterface=a,this._logger=b,this._logger.setModuleName("Time"),
this.current=function(){var a=this._timeInterface.getEpochTimeMs();return J.isInteger(a)||this._logger.error("current(): TimeInterface.getEpochTimeMs() did not return an integer ("+a+")"),a}
},U=b.Timer=function(a,b,c){var d=this;this._logger=a,this._logger.setModuleName("Timer"),this._timerInterface=b,this._exceptionCatcher=c,this.create=function(a,b,c){var e=function(){
d._exceptionCatcher.runProtected(c,function(){a()})};return this.createTimer(e,b,c)},this.createOnce=function(a,b,c){var e={cancel:null},f=function(){d._exceptionCatcher.runProtected(c,function(){
e&&"function"==typeof e.cancel&&(e.cancel(),e.cancel=null,e=null),a()})},g=this.createTimer(f,b,c);return e.cancel=g,g},this.createTimer=function(a,b,c){
return this._logger.debug("createTimer(): calling TimerInterface.create"),this._timerInterface.createTimer(a,b,c)}}}()}(),a});