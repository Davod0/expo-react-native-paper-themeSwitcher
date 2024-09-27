import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Surface } from 'react-native-paper';
import { pokemons } from '../data';
import { RootStackParamList } from '../navigators/RootStackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation, route}: Props) {

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Details Screen</Text>
        {pokemons.map((pokemon) => (
            <Pressable key={pokemon.name}
                onPress={() => navigation.navigate("Details", {name: pokemon.name})}
                style={{padding:10}}>
               <Surface>
                  <Text style={styles.text}>{pokemon.name}</Text>
                </Surface>     
            </Pressable>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
  headerText:{
    fontSize: 35,
    paddingBottom: 25,
  },
   text:{
    fontSize: 25,
  }
});
