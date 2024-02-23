import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const [name,setName] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
            <View>
                <Image
                    style={{ width: 250, height: 250, marginTop: 10 }}
                    source={{
                        uri: "https://avatars.githubusercontent.com/u/144059935?v=4",
                    }}
                />
            </View>


            <KeyboardAvoidingView>

                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 5, color: "black" }} >Register your Assam Cart account</Text>
                </View>

                <View style={{ marginTop: 80 }}>

                <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            backgroundColor: "#D0D0D0",
                            paddingVertical: 5,
                            borderRadius: 5,
                            marginTop: 10
                        }}>
                        <AntDesign style={{ marginLeft: 10 }} name="user" size={24} color="black" />
                        <TextInput
                            value={name}
                            onChangeText={(text) => setName(text)}
                            style={{ color: "gray", marginVertical: 10, width: 300, marginLeft: 10, fontSize: name ? 16 : 16 }}
                            placeholder='Enter your Name' />
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            backgroundColor: "#D0D0D0",
                            paddingVertical: 5,
                            borderRadius: 5,
                            marginTop: 30
                        }}>
                        <Entypo style={{ marginLeft: 10 }} name="email" size={24} color="black" />
                        <TextInput
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={{ color: "gray", marginVertical: 10, width: 300, marginLeft: 10, fontSize: email ? 18 : 18 }}
                            placeholder='Enter your Email' />
                    </View>

                </View>

                <View >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            backgroundColor: "#D0D0D0",
                            paddingVertical: 5,
                            borderRadius: 5,
                            marginTop: 20
                        }}>
                        <MaterialIcons style={{ marginLeft: 10 }} name="password" size={24} color="black" />
                        <TextInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            style={{ color: "gray", marginVertical: 10, width: 300, marginLeft: 10, fontSize: password ? 16 : 16 }}
                            placeholder='Enter your Password' />
                    </View>

                    <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text>Stay logged in</Text>
                        <Text style={{ color: "#007FFF", fontWeight: "500" }}>Forgot Password ?</Text>
                    </View>

                </View>

                <View style={{ marginTop: 20 }} />

                <Pressable style={{ width: 200, backgroundColor: "#4BA456", borderRadius: 6, marginLeft: "auto", marginRight: "auto",padding:15 }}>
                    <Text style={{ color: "white" , textAlign:"center", fontSize:16, fontweight:"bold"}}>
                        Login
                    </Text>
                </Pressable>

                <Pressable onPress={()=>navigation.goBack()} style={{marginTop:5}}>
                    <Text style={{textAlign:"center", color:"gray", fontSize:16}}>
                        Already have an account? LogIn
                    </Text>
                </Pressable>

            </KeyboardAvoidingView>
        </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})