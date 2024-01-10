//#import "AppDelegate.h"
//#import <ReactNativeNavigation/ReactNativeNavigation.h>
//
//#import <React/RCTBundleURLProvider.h>
//
//@implementation AppDelegate
//
//- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
//{
//  
//  return [super application:application didFinishLaunchingWithOptions:launchOptions];
//}
//
//- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
//{
//#if DEBUG
//  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
//#else
//  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
//#endif
//}
//
//@end


#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"ReactNativeSampleApp";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
//    Kommunicate.defaultConfiguration.chatBar.optionsToShow = .none
//    Kommunicate.defaultConfiguration.hideFaqButtonInConversationView = true
//    Kommunicate.defaultConfiguration.hideAudioOptionInChatBar = true
//    Kommunicate.defaultConfiguration.hideLineImageFromChatBar = true
//    Kommunicate.defaultConfiguration.hideRestartConversationButton = true
//    Kommunicate.defaultConfiguration.hideRightNavBarButtonForConversationView = true
//    Kommunicate.defaultConfiguration.hideEmptyStateStartNewButtonInConversationList = true
//      
//    Kommunicate.defaultConfiguration.backgroundColor = UIColor.white
//    Kommunicate.defaultConfiguration.chatBarAttachmentViewBackgroundColor = UIColor.white
//      
//    KMMessageStyle.receivedBubble.color = StyleSheet.gray10Color()
//    KMMessageStyle.receivedBubble.style = .round
//    KMMessageStyle.receivedBubble.cornerRadius = 16.0
//    KMMessageStyle.sentBubble.color = StyleSheet.blue100Color()
//    KMMessageStyle.sentBubble.style = .round
//    KMMessageStyle.sentBubble.cornerRadius = 16.0
//      
//    let kmNavigationBarProxy = UINavigationBar.appearance(whenContainedInInstancesOf: [KMBaseNavigationViewController.self])
//    kmNavigationBarProxy.isTranslucent = false
//    kmNavigationBarProxy.barTintColor = StyleSheet.blue100Color()
//    kmNavigationBarProxy.tintColor = UIColor.white
//    kmNavigationBarProxy.titleTextAttributes = [NSAttributedString.Key.foregroundColor: UIColor.white]

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
