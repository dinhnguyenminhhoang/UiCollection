import React from "react";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderCs from "../components/Header";
import styles from "./HomeScreenStyles";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { SIZES } from "../constants/theme";
import ResuableTile from "../components/Resuable/ResuableTile";
import HeightSpace from "../components/Resuable/HeightSpace";
import InformationBox from "../components/InformationBox";
const HomeScreens = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require("../../assets/imgs/bgr.jpg")}
                resizeMode="cover"
                style={styles.image}
            >
                <HeaderCs
                    ListItemLeft={[
                        {
                            icon: (
                                <MaterialCommunityIcons
                                    name="menu"
                                    size={SIZES.xLarge}
                                    color="white"
                                />
                            ),
                            title: "Menu",
                        },
                    ]}
                    ListItemRight={[
                        {
                            icon: (
                                <Entypo
                                    name="bell"
                                    size={SIZES.xLarge}
                                    color="white"
                                />
                            ),
                            title: "chuông",
                        },
                        {
                            icon: (
                                <AntDesign
                                    name="pluscircleo"
                                    size={SIZES.xLarge}
                                    color="white"
                                />
                            ),
                            title: "thêm",
                        },
                    ]}
                />
                <HeightSpace height={20} />
                <ResuableTile
                    ListItems={[
                        {
                            title: "Lining room",
                        },
                        {
                            title: "Kitchen",
                        },
                        {
                            title: "Bed room",
                        },
                        {
                            title: "Lining room",
                        },
                        {
                            title: "Kitchen",
                        },
                        {
                            title: "Bed room",
                        },
                    ]}
                />
                <HeightSpace height={100} />

                <ResuableTile
                    type={2}
                    ListItems={[
                        {
                            title: "Lining room",
                            src: require("../../assets/imgs/cafe.jpg"),
                        },
                        {
                            title: "Kitchen",
                            src: require("../../assets/imgs/coc.jpg"),
                        },
                        {
                            title: "Bed room",
                            src: require("../../assets/imgs/dieuhoa.jpg"),
                        },
                        {
                            title: "Lining room",
                            src: require("../../assets/imgs/locnuoc.jpg"),
                        },
                        {
                            title: "Kitchen",
                            src: require("../../assets/imgs/tra.jpg"),
                        },
                        {
                            title: "Bed room",
                            src: require("../../assets/imgs/cafe.jpg"),
                        },
                    ]}
                />
                <InformationBox />
            </ImageBackground>
        </SafeAreaView>
    );
};

export default HomeScreens;
