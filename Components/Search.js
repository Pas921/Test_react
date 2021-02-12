import React from 'react'
import { View, TextInput, Button } from 'react-native'

class  Search extends React.Component {

    render() {
        return (
            
            <View>
                <TextInput style={ styles.textinput } placeholder="Titre du film" />
                <Button title="Rechercher" on-press={() => {}} /> 
            </View>

        )
    }

}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search
