import { View, Pressable, Text } from "react-native";

interface TestimonialsProps {
  sounds: any[];
  handlePlaySound(path: any): Promise<void>;
}

export default function Testimonials({ handlePlaySound, sounds }: TestimonialsProps) {
  return (
    <View className="space-y-2 px-4 flex absolute bottom-20 h-[60%] w-full">
      <View
        id="first-grid"
        className="flex space-x-2 flex-row flex-1"
      >
        <View className="flex flex-[1.3] space-y-2">
          <Pressable
            onPress={() => handlePlaySound(sounds[0])}
            className="flex flex-1 bg-black justify-center items-center px-4">
            <Text className="text-white font-[FivoSans-Heavy-Oblique] text-center text-[15px]">
              Em Deus, encontrei a verdadeira essência de quem eu sou
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handlePlaySound(sounds[1])}
            className="flex flex-[2] bg-black justify-center items-center px-5">
            <Text className="text-white font-[FivoSans-Heavy-Oblique] text-center text-[15px]">
              Tinha tudo neste mundo, mas minha experiência com Deus me lançou a uma vida sobrenatural
            </Text>
          </Pressable>
        </View>
        <View className="flex flex-1 space-y-2">
          <Pressable
            onPress={() => handlePlaySound(sounds[2])}
            className="flex flex-1 bg-black justify-center items-center px-7">
            <Text className="text-white font-[FivoSans-Heavy-Oblique] text-center text-[15px]">
              De uma vida normal de estudos a uma vida do outro mundo em Cristo
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handlePlaySound(sounds[3])}
            className="flex flex-1 bg-black justify-center items-center px-4">
            <Text className="text-white font-[FivoSans-Heavy-Oblique] text-center text-[15px]">
              Obrigado por minha mãe a participar da Crisma, começou uma vida nova
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        id="first-grid"
        className="flex flex-1 flex-row space-x-2"
      >
        <View className="flex flex-1 space-y-2">
          <Pressable
            onPress={() => handlePlaySound(sounds[4])}
            className="flex flex-[2] bg-black justify-center items-center px-5">
            <Text className="text-white font-[FivoSans-Heavy-Oblique] text-center text-[15px]">
              Sou um jovem apaixonado por Deus. Encontrar a Deus é encontrar a Verdade
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handlePlaySound(sounds[5])}
            className="flex flex-1 bg-black justify-center items-center px-2">
            <Text className="text-white font-[FivoSans-Heavy-Oblique] text-center text-[15px]">Uma alegria transbordante para o mundo</Text>
          </Pressable>
        </View>
        <Pressable
          onPress={() => handlePlaySound(sounds[6])}
          className="
                flex flex-[1.3]
                bg-black
                justify-center
                items-center
              "
        >
          <Text className="text-white font-[FivoSans-Heavy-Oblique] text-center text-[15px] p-6">
            Numa busca da felicidade nas festas, drogas e no estilo de vida mundano,
            tudo mudou quando experimentei o verdadeiro Amor de Deus
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
