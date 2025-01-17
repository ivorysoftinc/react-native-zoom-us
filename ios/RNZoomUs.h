
#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

#import "RCTEventEmitter.h"
#import <MobileRTC/MobileRTC.h>

@interface RNZoomUs : RCTEventEmitter<RCTBridgeModule, MobileRTCAuthDelegate, MobileRTCMeetingServiceDelegate>

@property (nonatomic, strong) UINavigationController *zoomNavController;
@property (nonatomic, strong) UIView *zoomView;

@end

