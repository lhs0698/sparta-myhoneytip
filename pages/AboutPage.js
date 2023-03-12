import { View, StyleSheet, Text, Image, TouchableOpacity, Linking } from "react-native";
import React, { useEffect } from "react";
import * as Laction from 'expo-location';


export default function Aboutpage ({navigation, route}) {
    const aboutImage = 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4'
    
    const Link = () => {
        Linking.openURL('https://www.instagram.com/_hyn_su_/')
    }
    return (
        <View style={styles.fullBack}>
            <Text style={styles.mainText}>HI! 스파르타코딩 앱개발 반에 오신것을 환영합니다</Text>
            <View style={styles.mainContainer}>
                <Image  style={styles.mainImg} source={{uri:aboutImage}} resizeMode={"cover"}></Image>
                <Text style={styles.text1}>많은 내용을 간결하게 담으려고 노력했습니다!</Text>
                <Text style={styles.text2}>꼭 완주하셔서 꼭 여러분의것으로 만들어 가시길 바랍니다</Text>
                <TouchableOpacity style={styles.myBtn}><Text style={styles.BtnText} onPress={Link} >여러분의 인스타계정</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fullBack: {
        flex: 1,
        backgroundColor: 'navy',
        alignItems: 'center'
    },
    mainText: {
        fontSize: 33,
        fontWeight: '700',
        marginTop: 80,
        color: "white",
        paddingTop: 50,
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: "center"   
    },
    mainContainer:{
        width:330,
        height:500,
        backgroundColor:"#fff",
        marginTop:30,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    mainImg: {
        width: 230,
        height:150,
        borderRadius:30
    },
    text1: {
        fontSize: 25,
        textAlign: "center",
        padding: 15,
        fontWeight: '700'
    },
    text2: {
        textAlign: "center",
        fontSize: 17,
        fontWeight: '500',
        padding: 10,
    },
    myBtn: {
        width: 150,
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 20,
    },
    BtnText: {
        textAlign: "center",
        marginTop: 10,
        fontWeight: '700',
        fontSize: 15,
        padding: 5,
        color: "white"
    }
})