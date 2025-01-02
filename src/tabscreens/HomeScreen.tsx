import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <BackArrow />
        </TouchableOpacity> */}
        <Text style={styles.text}>Good Morning,</Text>
      </View>
      <View style={styles.ronaktext}>
        <Text style={styles.text2}>Ronak!</Text>
      </View>

      {/* Card Section */}
      <ImageBackground
        source={require('../assets/visacard.png')}
        style={styles.card}
      >
        <Text style={styles.cardName}>Gega Smith</Text>
        <Text style={styles.cardTitle}>OverBridge Expert</Text>
        <Text style={styles.cardNumber}>4756  ****  ****  9018</Text>
        <Text style={styles.cardBalance}>$3,469.52</Text>
      </ImageBackground>

      <View style={styles.grid}>
        {[
          { label: 'Account and card', image: require('../assets/wallet.png'), screen: 'Account' },
          { label: 'Transfer Money', image: require('../assets/transfer.png'),screen: 'Transfer'  },
          { label: 'Withdraw ', image: require('../assets/withdraw.png') ,screen: 'Withdraw' },
          { label: 'Mobile recharge', image: require('../assets/mobilereacharge.png'),screen: 'MobileRecharge'  },
          { label: 'Pay the         bill', image: require('../assets/paythebill.png') ,screen: 'PayBill' },
          { label: 'Credit          card', image: require('../assets/creditcard.png') ,screen: 'CreditCard' },
          { label: 'Transaction report', image: require('../assets/report.png'),screen: 'Transaction'  },
        ].map((item, index) => (
          <TouchableOpacity key={index} 
          style={styles.gridItem} 
          onPress={() => navigation.navigate(item.screen)}>
            <Image source={item.image} style={styles.gridIcon} />
            <Text style={styles.gridLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: "#000000",
    marginLeft: 14,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 50,
  },
  ronaktext: {
    flexDirection: 'row',
    marginTop:-7,
    paddingHorizontal: 65,
    paddingVertical: -15,
  },
  text2: {
    fontSize: 32,
    color: "#000000",
    fontWeight:"bold",
  },
  card: {
    marginHorizontal: "auto",
    marginVertical: 10,
    height: 225,
    borderRadius: 15,
    padding: 45,
    width: 383,
    justifyContent: 'space-between',
    position: 'relative',
  },
  cardName: {
    fontSize: 24,
    fontWeight: 'regular',
    color: '#FFFfff',
    position: 'absolute',
    top: 28,
    left: 52,
  },
  cardTitle: {
    fontSize: 14,
    color: '#FFFFFF',
    top: 41,
    left: 8,
  },
  cardNumber: {
    fontSize: 16,
    color: '#FFfffF',
    top: 20,
    left: 8.5,
  },
  cardBalance: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFfffF',
    left: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    marginRight: 28,
    marginLeft: 28,
  },
  gridItem: {
    backgroundColor: '#E9EEFF',
    flexBasis: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  gridIcon: {
    width: 30,
    height: 30,
    marginBottom: 7,
  },
  gridLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: '#979797',
  },
});

export default HomeScreen;
