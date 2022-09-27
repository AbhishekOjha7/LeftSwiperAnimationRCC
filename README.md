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
 *
 */
