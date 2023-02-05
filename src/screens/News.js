import { ScrollView, StyleSheet, Text, View, Pressable, Image } from 'react-native'
import colors from '../constants/colors'
import React from 'react'

const Favorites = () => {

    return (
        <ScrollView>
            <View style={styles.container} >
                <View style={styles.particularNew}>
                    <Text style={styles.movieTitle}>'Black Panther: Wakanda Forever' contecto con 'Ant-Man 3' y nadie se dio cuenta</Text>
                    <Image style={styles.image} source={{ uri: 'https://www.elespectador.com/resizer/b6b6f1fknd6QFsHPZkCwt9871iQ=/920x613/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/5I5MPNX7AVH6BL7P63J462S5GY.jpg' }} />
                    <Text style={{ color: 'white', paddingVertical: 20 }}>Si fuiste una de esas personas que se dio cuenta en algunos de los easter-eggs más evidentes de la cinta a otros títulos de Marvel, puede que este guiño a la próxima cinta del UCM que está por llegar a las salas de cine te haya pillado desprevenido</Text>
                    <Pressable>
                        <Text style={{ color: colors.buttonColor }}>Leer más</Text>
                    </Pressable>
                </View>
                <View style={styles.particularNew}>
                    <Text style={styles.movieTitle}>'Llaman a la puerta' es un M. Night Shyamalan un poco diferente: Puro suspenso sin pretensiones</Text>
                    <Image style={styles.image} source={{ uri: 'https://i.ytimg.com/vi/PQNcqi3U5ok/maxresdefault.jpg' }} />
                    <Text style={{ color: 'white', paddingVertical: 20 }}>'Llaman a la puerta' es una historia que sigue a una pareja que se traslada a una cabaña aislada en medio del bosque para pasar unas vacaciones junto a su hija. De repente, un grupo de extraños aparecen en la puerta y les obligan a tomar una decisión con el objetivo de evitar el apocalipsis: tienen que decir a quién van a sacrificar.
                    </Text>
                    <Pressable>
                        <Text style={{ color: colors.buttonColor }}>Leer más</Text>
                    </Pressable>
                </View>
                <View style={{...styles.particularNew, borderBottomColor: 'black'}}>
                    <Text style={styles.movieTitle}>La saga 'Avatar' aún tiene que resolver un gran misterio</Text>
                    <Image style={styles.image} source={{ uri: 'https://nosomosnonos.com/wp-content/uploads/2020/09/maxresdefault-6.jpg' }} />
                    <Text style={{ color: 'white', paddingVertical: 20 }}>Se han dejado en el aire muchos detalles de la trama y despiertan muchas dudas. Empezando por el origen de Kiri, la hija biológica de la Dra. Grace Augustine que fue gestada mientras su madre está en coma y no tiene padre conocido por el momento ¿Quién es el padre de Kiri? ¿Cómo ha podido nacer de una madre sin vida? Dado que Kiri tiene una fuerte conexión con Pandora y resulta difícil imaginar que exista un padre físico, la respuesta más probable es que...
                    </Text>
                    <Pressable>
                        <Text style={{ color: colors.buttonColor }}>Leer más</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default Favorites

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingTop: 30
    },
    particularNew: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        paddingBottom: 35,
        borderBottomColor: 'grey',
        borderBottomWidth: 2
    },
    movieTitle: {
        fontSize: 18,
        paddingBottom: 10,
        color: 'white',
        textDecorationLine: 'underline',
    },
    image: {
        width: 330,
        height: 250,
        resizeMode: 'contain'
    },
})