/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import LoginScreen from './screens/LoginScreen';
// import MainScreen from './screens/MainScreen';
// import SplashScreen from './screens/SplashScreen';

// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   var isAuthenticated = false
//   console.log("My stack is getting called")    
//   return(
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Login'>
//       <Stack.Screen
//         name="Splash"
//         component={SplashScreen}
//         />
//         <Stack.Screen
//         name="Login"
//         component={LoginScreen}
//         />
//         <Stack.Screen
//         name="Main"
//         component={MainScreen}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

 import type {PropsWithChildren} from 'react';
import React  = require('react');
 
 import {
   NativeModules,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   Button,
   View,
   Alert,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 // import RNKommunicateChat from 'react-native-kommunicate-chat';
 
 // import RNKommunicateChat from 'react-native-kommunicate-chat';
 var RNKommunicateChat = NativeModules.RNKommunicateChat;
 
 
 type SectionProps = PropsWithChildren<{
   title: string;
 }>;
 
 
 function App(): JSX.Element {
   const isDarkMode = useColorScheme() === 'dark';
    const appid = '18ae6ce9d4f469f95c9c095fb5b0bda44'
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
   // RNKommunicateChat.isLoggedIn(())
     RNKommunicateChat.isLoggedIn((response: string) => {
       if(response == "True") {
         console.log("Logged In")
         //the user is logged in
       } else {
         //user is not logged in
         console.log("Loggedout Out")
 
       }
     });
   
     
 
      function loginAsVisitor() {
       Alert.alert('Login As Visitor Function called');
 
       var kmUser = {
         'userId' : '06dec23eve',
         'applicationId' : appid,  //replace this with your APP_ID from Kommunicate Dashboard
         };
         RNKommunicateChat.loginUser(kmUser, (response: string, message: any) => {
           if(response == 'Success') {
               console.log(message);
           } else if (response == 'Error') {
               console.log(message);
           }
       });
      } 
 
      function loginUser() {
       Alert.alert('Login Function called');
      } 
 
      function logoutUser() {
       // Alert.alert('Login Function called');
       RNKommunicateChat.logout((response: string) => {
         if(response == "Success") {
             //logout successful
             console.log("Logout Successs",response)
         } else {
             //error logging out
             console.log("Logout Failure",response)
 
         }
     });
      } 
 
      function buildConversation() {
       // Alert.alert('BuildConversation Function called');
       let conversationObject = {
         'appId' : '18ae6ce9d4f469f95c9c095fb5b0bda44',
         'createOnly' : true
       }
       RNKommunicateChat.buildConversation(conversationObject, (response: string, responseMessage: string) => {
         if(response == "Success") {
             console.log("Conversation Successfully with id:" + responseMessage);
            //  RNKommunicateChat.openParticularConversation(responseMessage, true, (response: string, responseMessage: any) => {
            //    if(response == 'Error') {
            //      console.log("Failed open the conversation screen")
 
            //    } else {
            //      //conversation launched successfully
            //      console.log("Conversation Screen opened successfully");
            //    }
            //  });
         }
       }); 
     }
 
     function openConversationList() {
       RNKommunicateChat.openConversation((response: string, message: any) => {
         if(response == 'Error') {
           console.log(message);
         } else {
           //chat screen launched successfully
           console.log("chat screen launched successfully");
         }
       });
     }
    
     function unreadCount() {
       RNKommunicateChat.fetchUnreadCount((response: string, responseMessage: String) => {
         console.log("pakkka101 unread count response",responseMessage);
       });
     }
     
     function getChannelInfo() {
      //akmelango2@gmail.com_112233  96522518
        let conversationObject = {
          'conversationID' : '86379714'
        }
        RNKommunicateChat.fetchConversationInformation(conversationObject, (response: string, responseMessage: string) => {
          if(response == "Success") {
              console.log("Fetched conversation info Successfully!. Details: " + responseMessage);
          } else {
            console.log(response,responseMessage);
          }
        }); 
    }

    function getAssigneeInfo() {
      //akmelango2@gmail.com_112233
        let conversationObject = {
          'conversationID' : '86379714 or 06dec23eve(client conversationid)'
        }
        RNKommunicateChat.fetchConversationAssigneeInfo(conversationObject, (response: string, responseMessage: string) => {
          if(response == "Success") {
              console.log("Fetched Assignee info Successfully!. Details: " + responseMessage);
            
          }
        }); 
    }

    function updateConversationInfo() {
        let conversationObject = {
          'clientConversationId' : '06dec23eve(client conversation id)',
          'conversationInfo': {
            "test1": "value1",
            "test2": "value2"
          }
        }

        RNKommunicateChat.updateConversationInfo(conversationObject, (response: string, responseMessage: string) => {
          
            console.log(response + responseMessage);
            
          
        }); 
    }
 
 
 // UI View
   return (
     <SafeAreaView style={backgroundStyle}>
       
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <Header />
         <View>
           <View style={styles.buttonContainer} >
           <Button onPress={loginAsVisitor} title="Login As Visitor" color="#000000" accessibilityLabel="Tap on Me"/>
           </View>
           
           <View style={styles.buttonContainer} >
           <Button onPress={logoutUser} title="Logut" color="#000000" accessibilityLabel="Tap on Me"/>
           </View>
 
           <View style={styles.buttonContainer} >
           <Button onPress={buildConversation} title="Build Conversation" color="#000000" accessibilityLabel="Tap on Me"/>
           </View>
 
           <View style={styles.buttonContainer} >
           <Button onPress={openConversationList} title="Conversation List" color="#000000" accessibilityLabel="Tap on Me"/>
           </View>
 
           <View style={styles.buttonContainer} >
           <Button onPress={unreadCount} title="Fetch Unread Count" color="#000000" accessibilityLabel="Tap on Me"/>
           </View>


           <View style={styles.buttonContainer} >
           <Button onPress={getChannelInfo} title="Get Channel Info" color="#000000" accessibilityLabel="Tap on Me"/>
           </View>

           <View style={styles.buttonContainer} >
           <Button onPress={getAssigneeInfo} title="Get Assignee Info" color="#000000" accessibilityLabel="Tap on Me"/>
           </View>

           <View style={styles.buttonContainer} >
           <Button onPress={updateConversationInfo} title="Update Conversation Info" color="#000000" accessibilityLabel="Tap on Me"/>
           </View>
 
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 }
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   buttonContainer: {
     backgroundColor: '#2E9298',
     borderRadius: 10,
     padding: 10,
     shadowColor: '#000000',
     shadowOffset: {
       width: 0,
       height: 3
     },
     shadowRadius: 10,
     shadowOpacity: 0.25,
     marginVertical:5,
     marginHorizontal:5
   }
 });
 
 export default App;
 
 
 
 
 
 
 