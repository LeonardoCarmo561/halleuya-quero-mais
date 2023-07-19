import { useCallback, useState } from "react";
import { ImageBackground, Text, View, Pressable } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Audio } from "expo-av";
import { useFonts } from "expo-font";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Testimonials from "./Testimoniasl";
import Musics from "./Muisc";

function Home() {
  const bgImg = require("../../assets/images/halleluya-background.jpeg");

  const t1 = require("../../assets/audios/testimonials/t1.mp3");
  const t2 = require("../../assets/audios/testimonials/t2.mp3");
  const t3 = require("../../assets/audios/testimonials/t3.mp3");
  const t4 = require("../../assets/audios/testimonials/t4.mp3");
  const t5 = require("../../assets/audios/testimonials/t5.mp3");
  const t6 = require("../../assets/audios/testimonials/t6.mp3");
  const t7 = require("../../assets/audios/testimonials/t7.mp3");
  const testimonials = [t1, t2, t3, t4, t5, t6, t7];

  const m1 = require("../../assets/audios/musics/eis_me_aqui.mp3");
  const m2 = require("../../assets/audios/musics/fogo_abrasador.mp3");
  const m3 = require("../../assets/audios/musics/oferta.mp3");
  const m4 = require("../../assets/audios/musics/quem_espera_em_ti.mp3");
  const m5 = require("../../assets/audios/musics/tu_es_o_centro.mp3");
  const m6 = require("../../assets/audios/musics/tua_ternura.mp3");
  const musics = [m1, m2, m3, m4, m5, m6];

  const [audio, setAudio] = useState<Audio.Sound | null>(null);
  const [audioType, setAudioType] = useState(0);
  const [fontsLoaded] = useFonts({
    "FivoSans-Heavy-Oblique": require("../../assets/fonts/FivoSans/FivoSans-Heavy-Oblique.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  async function handlePlaySound(path: any) {
    if (audio) {
      try {
        await audio.stopAsync();
      } catch (error) {
        console.error("Audio can't be stopped");
      }
    }
    const { sound } = await Audio.Sound.createAsync(path);

    setAudio(sound);
    await sound.setPositionAsync(0);
    await sound.playAsync();
  }

  return (
    <View className="flex flex-1">
      <ImageBackground
        source={bgImg}
        resizeMode="cover"
        className="flex justify-center items-center w-screen h-screen"
      >
        <Pressable
          onPress={() => (audioType === 0 ? setAudioType(1) : setAudioType(0))}
          className="
            flex
            items-center
            justify-center
            bg-white
            absolute
            top-[135px]
            left-4
            rounded-full
            h-[40px]
            w-[40px]
          "
        >
          <FontAwesome
            size={31}
            name={audioType === 0 ? "music" : "microphone"}
            color="black"
          />
        </Pressable>
        {audioType === 0 ? (
          <Testimonials
            handlePlaySound={handlePlaySound}
            sounds={testimonials}
          />
        ) : (
          <Musics handlePlaySound={handlePlaySound} sounds={musics} />
        )}
        <Pressable
          onPress={() => {
            setAudioType(1);
            let position = Math.floor(Math.random() * musics.length);
            handlePlaySound(musics[position]);
          }}
          className="
            absolute bottom-6
            rounded-[20px]
            bg-black
            p-2
            border-2
            border-orange-500
            flex
            flex-row
            items-center
            space-x-2
          "
        >
          <MaterialIcons name="music-note" color="white" />
          <Text className="text-white font-[FivoSans-Heavy-Oblique] text-center text-[15px]">
            providência divina
          </Text>
          <MaterialIcons name="music-note" color="white" />
        </Pressable>
      </ImageBackground>
    </View>
  );
}

export default Home;
