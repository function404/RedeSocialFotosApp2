import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // geral
    container:{
      flex: 1,
      justifyContent: 'center',
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
      backgroundColor: 'rgb(33, 150, 243)',
      padding: 40,
    },
    headerTextStyle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 35,
      textAlign: 'center',
  },

  // Picker
  pickerBtnStyle: {
      width: '100%',
      height: 40,
      backgroundColor: 'rgb(33, 150, 243)',
      borderRadius: 5,
      backgroundColor: 'rgba(0, 0, 0, .4)',
      padding: 40,
    },
    pickerBtnTxtStyle: {
      color: '#FFF',
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
    },
    pickerDropdownStyle: {
      backgroundColor: 'rgb(33, 150, 243)',
      borderRadius: 2,
    },
    pickerRowStyle: {
      backgroundColor: 'rgb(33, 150, 243)',
      borderBottomColor: '#C5C5C5',
      padding: 10,
    },
    pickerRowTxtStyle: {
      color: '#FFF',
      textAlign: 'left',
      fontWeight: 'bold',
    },
    pickerSelectedRowStyle: {
      backgroundColor: 'rgba(255,255,255,0.2)',
    },

    //form
    form:{
      width: '80%',
      padding: 10,
    },
    formContent:{
      margin: 5,
      fontSize: 35,
      textAlign: 'center',
    },
    formButton:{
      backgroundColor: '#1E90FF',
      borderRadius: 5,
    },
  },
);

export default styles;
