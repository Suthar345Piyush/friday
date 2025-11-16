import { ElevenLabsProvider } from "@elevenlabs/react-native";
import {Slot, Tabs} from "expo-router";


export default function RootLayout (){
   return (
     <ElevenLabsProvider>
        <Tabs>
           <Tabs.Screen name = 'index' options={{title : "Agent"}}/>
           <Tabs.Screen name = 'settings' options={{title : "Settings"}}/>
        </Tabs>
     </ElevenLabsProvider>
   )
};

