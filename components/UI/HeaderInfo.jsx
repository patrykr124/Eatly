import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { XCircleIcon } from "react-native-heroicons/solid";
const HeaderInfo = ({ text }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View className="border-b border-black/20 p-5">
        <View>
          <Text className="text-lg mt-3 font-bold text-center">{text}</Text>
        </View>
        <TouchableOpacity
          className="rounded-full absolute top-5 right-5"
          onPress={navigation.goBack}
        >
          <XCircleIcon color={"#000000"} height={40} width={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HeaderInfo;
