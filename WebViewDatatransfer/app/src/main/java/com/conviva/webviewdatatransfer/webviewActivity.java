package com.conviva.webviewdatatransfer;

import android.content.Context;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;


import androidx.appcompat.app.AppCompatActivity;

public class webviewActivity extends AppCompatActivity{
    private static final String TAG = "webviewActivity";
    WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.webview_layout);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            WebView.setWebContentsDebuggingEnabled(true);
        }
        webView = (WebView)findViewById(R.id.help_webview);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.addJavascriptInterface(new JavascriptInterface(this), "AndroidFunction");
        webView.loadUrl("http://192.168.0.127:8888/bitmovin/videojs.html?type=hls");
    }

    public class JavascriptInterface{

        Context mContext;

        JavascriptInterface(Context c) {
            mContext = c;
        }

        @android.webkit.JavascriptInterface
        public void play(String action){
            Log.d(TAG,"Play CLicked");
            Toast.makeText(mContext, "Content Play", Toast.LENGTH_SHORT).show();
        }
        @android.webkit.JavascriptInterface
        public void pause(String action){
            Log.d(TAG,"Pause CLicked");
            Toast.makeText(mContext, "Content Pause", Toast.LENGTH_SHORT).show();
        }
        @android.webkit.JavascriptInterface
        public void seeking(String action){
            Log.d(TAG,"seeking");
            Toast.makeText(mContext, "Content seeking", Toast.LENGTH_SHORT).show();
        }
        @android.webkit.JavascriptInterface
        public void seeked(String action){
            Log.d(TAG,"Seeked");
            Toast.makeText(mContext, "Content Seeked", Toast.LENGTH_SHORT).show();
        }
        @android.webkit.JavascriptInterface
        public void ended(String action){
            Log.d(TAG,"Ended");
            Toast.makeText(mContext, "Content Ended", Toast.LENGTH_SHORT).show();
        }
        @android.webkit.JavascriptInterface
        public void waiting(String action){
            Log.d(TAG,"Buffering");
            Toast.makeText(mContext, "Content Buffering", Toast.LENGTH_SHORT).show();
        }
    }
}
