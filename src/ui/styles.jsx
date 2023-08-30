import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // geral
    container:{
      flex: 1,
      alignItems: 'center',
    },
    content:{
      width: '100%',
      alignItems: 'center', 
      justifyContent: 'center',
      display: 'flex',
    },
    contentbtn:{
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      padding: 10,
    },
    title:{
      fontSize: 20,
      fontWeight: 'bold',
      borderBottomColor: 'rgba(0, 0, 0, .4)',
      borderBottomWidth: 1,
      paddingBottom: 8,
    },
    cardItem:{
      alignContent: 'center',
      justifyContent: 'center',
      width: '40%',
      paddingTop: 25,
    },

    //ImageUpload
    button:{
      width: '70%',
    },

    // msg
    not:{
      paddingTop: 25,
      color: 'red',
    },

    // loading
    loading:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    //header
    header:{
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, .4)',
      padding: 40,
    },
    headerTextStyle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 35,
      textAlign: 'center',
  },

});

export default styles;
