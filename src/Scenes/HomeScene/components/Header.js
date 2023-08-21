import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function Header() {

  // To be fetched from API/User Context
  const user = {
    displayName: 'Akash',
    avatar: 'https://firebasestorage.googleapis.com/v0/b/altholdweb.appspot.com/o/insta.jpeg?alt=media&token=dba1af14-44f8-4da2-9237-34613b879407'
  }

  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <View style={styles.row}>
          <Text style={[styles.primary, { fontWeight: 'bold' }]}>Hello </Text>
          <Text style={styles.primary}>{user?.displayName}!</Text>
        </View>
        <Text style={styles.tagline}>Your Favorite Movie DB</Text>
      </View>
      <View>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: { padding: 48, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 36 },
  row: { flexDirection: 'row' },
  primary: { color: '#fff', fontSize: 24, fontFamily: 'Poppins' },
  tagline: { color: '#A0A0A0', fontSize: 14, fontFamily: 'Poppins' },
  avatar: { width: 50, aspectRatio: 1, resizeMode: 'contain', borderRadius: 20 }
})