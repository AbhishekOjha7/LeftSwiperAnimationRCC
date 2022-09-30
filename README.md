# LeftSwiperAnimationRCC


https://user-images.githubusercontent.com/103095958/192455663-0e839c6d-b59e-436e-aaf6-ead06f8d06cb.mov

Installation: 
1.ADD    
npm: install --save react-native-gesture-handler  
yarn: yarn add react-native-gesture-handler/Swipeable

Linking:  
 For newer React native versions ( >= 0.60 )   
 you need to install pods for.  
  iOS: cd ios && pod install && cd ..   
  for android:Wrap Swipeable in GestureHandlerRootView
  


## SwipeableProps
| Props             | Type                         | Description                            |
| ----------------- | ---------------------------- | --------------------------- 
| leftimage|ImageSourcePropType|is used for to change left icon|
| rightimage|ImageSourcePropType|is used for to change right icon|
| handleRight|function|is used for to doing delete  operation in rightside you can do anything on yor own requrement|
| rightMove|boolean|is used for right Swipeable|
| leftMove|boolean|is used for left Swipeable|
| openLeft|function|is used for open animated view left side it takes references useref ref.current.openLeft()|
| openRight|function|is used for open animated view right side it takes references useref ref.current.openRight()|
| overshootRight|boolean|it is  boolean value  if the swipeable panel can be pulled further than the right actions panel's width. It is set to true by default as long as the right panel|
| overshootLeft|boolean|it is  boolean value  if the swipeable panel can be pulled further than the left actions panel's width. It is set to true by default as long as the left panel|
| indexCard|number|this is the item index|
| defaultIndex|number|this is the backendindex whose provided|
| friction|number|it is used for delayed compared to the gesture distance|
| leftThreshold|number|it is used for left edge at which released panel will animate to the open state by default it's a half of the panel width|
| rightThresold|number|it is used for left edge at which released panel will animate to the open state by default it's a half of the panel width|
| leftSwipeStyle|styleprop| is override styling in left swipeview|
| rightSwipeStyle|styleprop| is override styling in right swipeview|
| onSwipeableOpen|function|Called when action panel is closed|
| onSwipeableClose|function|Called when left action panel starts animating on open|
|onSwipeableWillOpen|function|Called when action panel starts animating on close|

