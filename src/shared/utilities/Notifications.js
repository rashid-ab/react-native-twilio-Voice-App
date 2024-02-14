import messaging from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavigationService from "../../navigators/NavigationService";
import notifee, {
  AndroidImportance,
  AndroidBadgeIconType,
  AndroidVisibility,
  AndroidCategory,
} from "@notifee/react-native";

export async function requestUserFCMPermission() {
  const authStatus = await messaging().requestPermission();
  console.log("Authorization status : \n", authStatus);
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Authorization status : \n", authStatus);
    getFcmToken();
  }
}

const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem("fcmToken");
  console.log("Available FCM Token : \n", fcmToken);
  if (!fcmToken) {
    try {
      const newFcmToken = await messaging().getToken();
      if (newFcmToken) {
        console.log("New Token Generated : \n", newFcmToken);
        await AsyncStorage.setItem("fcmToken", newFcmToken);
      }
    } catch (error) {
      console.log("Error Raised In Generating New FCM token : \n", error);
    }
  }
};

export const notificationsListener = async () => {
  await notifee.requestPermission();

  async function onDisplayNotification(remoteMessage) {
    const { messageId, notification } = remoteMessage;
    // await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: "tour27_1.0",
      name: "tour27_1.0",
      sound: "default",
      importance: AndroidImportance.HIGH,
    });

    // Display a notification
    await notifee.displayNotification({
      title: notification.title,
      body: notification.body,
      android: {
        channelId,
        category: AndroidCategory.CALL,
        visibility: AndroidVisibility.PUBLIC,
        importance: AndroidImportance.HIGH,
        // smallIcon: 'myapp_icon',
        timestamp: Date.now(),
        showTimestamp: true,
        pressAction: {
          id: 'default',
          mainComponent: 'custom-component',
        },
        actions: [{
            title: "Accept",
            pressAction: {
                id: "accept",
                launchActivity: 'default',
            }
        }, {
            title: 'Decline',
            pressAction: {
                id: "reject",
            }
        }],
        fullScreenAction: {
            id: 'Cancel',
            launchActivity: 'custom-component',
        },
    },
      asForegroundService: true,
      ios: {
        attachments: [
          {
            url: "https://picsum.photos/id/3/500/300",
          },
        ],
        foregroundPresentationOptions: {
          badge: true,
          sound: true,
          banner: true,
          list: true,
        },
      },
    });
  }

  // IN APP MODE
  messaging().onMessage((remoteMessage) => {
    // NavigationService.navigate(remoteMessage?.data?.navigation);
    console.log('etahy')
    onDisplayNotification(remoteMessage);
  });

  // IN BackGROUND MODE
  messaging().onNotificationOpenedApp((remoteMessage) => {
    console.log("App in Background", remoteMessage);
    console.log('etahy2')
    onDisplayNotification(remoteMessage);

    // if (!!remoteMessage?.data && remoteMessage?.data?.navigation) {
    setTimeout(() => {
      NavigationService.navigate(remoteMessage?.data?.navigation, {
        data: "DATA HERE",
      });
    }, 1200);
    // }
  });

  // IN KILLED APP MODE
  messaging()
    .getInitialNotification()
    .then((remoteMessage) => {
      console.log('etahy3')
      if (remoteMessage) {
        onDisplayNotification(remoteMessage);
        console.log("App in Quit ground", remoteMessage);
        // if (!!remoteMessage?.data && remoteMessage?.data?.navigation) {
        setTimeout(() => {
          NavigationService.navigate(remoteMessage?.data?.navigation, {
            data: "DATA HERE",
          });
        }, 5000);
        // }
      }
    });
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log("Message handled in the background!", remoteMessage);
    console.log('etahy4')
    onDisplayNotification(remoteMessage);
  });
};
