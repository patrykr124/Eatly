import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { XCircleIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
const PreparingScreen = () => {
  const navigation = useNavigation();
  const [timer, setTimer] = useState(200);
  useEffect(() => {
   const interval =  setInterval(() => {
      setTimer((prev) => prev - 1);
      if(timer === 0){
        navigation.navigate("Home");
      }
    }, 1000);
    return () => clearInterval(interval);
  },[])

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <SafeAreaView className="bg-[#4fc8ff] flex-1 ">
      <TouchableOpacity
        className="rounded-full absolute top-20 z-50 right-7"
        onPress={navigation.goBack}
      >
        <XCircleIcon color={"#000000"} height={40} width={40} />
      </TouchableOpacity>
      <View className="flex justify-center items-center">
        <Image
          source={require("../assets/images/prepare.gif")}
          className="h-[450px] w-full"
          resizeMode="contain"
        />

        <Animatable.Text
          animation="bounceIn"
          iterationCount={1}
          className="text-2xl text-white font-bold  z-50"
        >
          Your order is being prepared
        </Animatable.Text>
        <Progress.CircleSnail
          className="mt-10"
          size={60}
          color={["green", "blue"]}
        />
        <Text className="text-2xl text-white font-bold mt-10">{`${minutes}min ${seconds}`}sec</Text>
      </View>
    </SafeAreaView>
  );
};
export default PreparingScreen;
