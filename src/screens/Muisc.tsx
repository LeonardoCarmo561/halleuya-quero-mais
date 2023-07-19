import { View, Image, Pressable, Text } from "react-native";


interface MusicsProps {
  sounds: any[];
  handlePlaySound(path: any): Promise<void>;
}

export default function Musics({
  handlePlaySound,
  sounds
}: MusicsProps) {

  const eisMeAqui = require("../../assets/images/eis_me_aqui.jpg")
  const fogoAbrasador = require("../../assets/images/fogo_abrasador.jpg")
  const tuaTernura = require("../../assets/images/tua_ternura.jpg")
  const oferta = require("../../assets/images/oferta.jpg")
  const quemEsperaEmTi = require("../../assets/images/quem_espera_em_ti.jpg")
  const tuEsOCentro = require("../../assets/images/tu_es_o_centro.jpg")

  return (
    <View className="space-y-2 px-4 flex absolute bottom-24 w-full h-[465px]">
      <View className="flex flex-1 flex-row space-x-2">
        <Pressable
          onPress={() => handlePlaySound(sounds[0])}
          className="flex flex-1 justify-center items-center"
        >
          <Image source={eisMeAqui} className="w-[85%] h-[85%] rounded-[20px]"/>
          <Text className="font-[FivoSans-Heavy-Oblique] text-[15px]">Eis-me Aqui!</Text>
        </Pressable>
        <Pressable
          onPress={() => handlePlaySound(sounds[1])}
          className="flex flex-1 justify-center items-center"
        >
          <Image source={fogoAbrasador} className="w-[85%] h-[85%] rounded-[20px]"/>
          <Text className="font-[FivoSans-Heavy-Oblique] text-[15px]">Fogo Abrasador</Text>
        </Pressable>
      </View>
      <View className="flex flex-1 flex-row space-x-2">
        <Pressable
          onPress={() => handlePlaySound(sounds[5])}
          className="flex flex-1 justify-center items-center"
        >
          <Image source={tuaTernura} className="w-[85%] h-[85%] rounded-[20px]"/>
          <Text className="font-[FivoSans-Heavy-Oblique] text-[15px]">Tua Ternura</Text>
        </Pressable>
        <Pressable
          onPress={() => handlePlaySound(sounds[2])}
          className="flex flex-1 justify-center items-center"
        >
          <Image source={oferta} className="w-[85%] h-[85%] rounded-[20px]"/>
          <Text className="font-[FivoSans-Heavy-Oblique] text-[15px]">Oferta</Text>
        </Pressable>
      </View>
      <View className="flex flex-1 flex-row space-x-2">
        <Pressable
          onPress={() => handlePlaySound(sounds[3])}
          className="flex flex-1 justify-center items-center"
        >
          <Image source={quemEsperaEmTi} className="w-[85%] h-[85%] rounded-[20px]"/>
          <Text className="font-[FivoSans-Heavy-Oblique] text-[15px]">Quem Espera Em Ti</Text>
        </Pressable>
        <Pressable
          onPress={() => handlePlaySound(sounds[4])}
          className="flex flex-1 justify-center items-center"
        >
          <Image source={tuEsOCentro} className="w-[85%] h-[85%] rounded-[20px]"/>
          <Text className="font-[FivoSans-Heavy-Oblique] text-[15px]">Tu És o Centro</Text>
        </Pressable>
      </View>
    </View>
  )
}
