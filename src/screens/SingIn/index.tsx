import React from "react";
import {  
  View,
  Text,
  Image
} from "react-native";

import { styles } from './styles';
import IlustrationImg from '../../assets/illustration.png'
import { ButtomIcon } from "../../components/ButtomIcon";

export function SingIn(){

  return(
    <View style={styles.container}>

      <Image source={IlustrationImg} style={styles.image} resizeMode='stretch' />

      <View style={styles.content}>

        <Text style={styles.title}>
          Conecte-se {`\n`}
          e organize suas {`\n`}
          jogatinas {`\n`}
        </Text>
        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com amigos
        </Text>

        <ButtomIcon 
          title={'Entar com Discord'} 
          activeOpacity={0.7}
        />

      </View>
    </View>
  )
}