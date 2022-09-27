# LeftSwiperAnimationRCC


https://user-images.githubusercontent.com/103095958/192455663-0e839c6d-b59e-436e-aaf6-ead06f8d06cb.mov

Installation: 
1.ADD 
    npm: install --save react-native-gesture-handler
    yarn: yarn add react-native-gesture-handler/Swipeable

Linking: 
    For newer React native versions ( >= 0.60 ) 
    you need to install pods 
    for iOS: cd ios && pod install && cd .. 
    for android:Wrap Swipeable in GestureHandlerRootView
 
 
 Properties:
/**
 * we have to install (yarn add react-native-gesture-handler)
 * GestureHandleRootView for in android swipeable
 * @props (renderCard) is used for UI design
 * @props (handleRight) is used for doing crude operation in right
 * @props (leftimage) is used for to change left icon
 * @props (rightimg) is used for to change right icon
 * @props (left) is used for handle left swipe
 * @props (right) is used for handle right swipe
 * @props (rightSwipestyle) is override styling in right side
 * @props (leftSwipestyle) is override styling in left swipe
 * @props (friction) it is used for delayed compared to the gesture distance
 * @props (leftThresold) it is used for left edge at which released panel will animate to the open state by default it's a half of the panel width
 * @props (rightThresold) it is used for right edge at which released panel will animate to the open state by default it's a half of the panel width
 * @props (overshootright) it is  boolean value  if the swipeable panel can be pulled further than the right actions panel's width. It is set to true by      default as long as the right panel.
 * @props (onSwipeableOpen) Called when action panel is closed
 * @props  (onSwipeableWillOpen)  Called when action panel starts animating on close.
 * @props  (openRight) method that opens component on right side. it takes references
 */
