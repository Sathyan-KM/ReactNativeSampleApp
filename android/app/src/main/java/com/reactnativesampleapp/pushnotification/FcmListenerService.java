package com.reactnativesampleapp.pushnotification;



import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import android.util.Log;
import io.kommunicate.Kommunicate;

public class FcmListenerService extends FirebaseMessagingService {

    private static final String TAG = "KmSampleFCMService";

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        Log.i(TAG, "FCM notification processing...");

        if (Kommunicate.isKmNotification(this, remoteMessage.getData())) {
            return;
        }
        super.onMessageReceived(remoteMessage);
    }

    @Override
    public void onNewToken(String registrationId) {
        super.onNewToken(registrationId);

        Log.i(TAG, "Found Registration Id:" + registrationId);

        Kommunicate.updateDeviceToken(this, registrationId);
    }
}