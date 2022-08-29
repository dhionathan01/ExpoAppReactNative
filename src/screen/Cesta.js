import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// Importacao das imagens que serão utilizadas;
import topo from "../../assets/topo.png";

import logo from "../../assets/logo.png";

export default function Cesta() {
    return (
        <>
            <Image source={topo}></Image>
            <Text>Detalhes da Cesta</Text>
            
            <View>
                <Text>Cesta de Verduras</Text>
                <View>
                    <Image source={logo}></Image>
                    <Text>Fazenda do Alemao</Text>
                </View>
            </View>
        </>
    )
}
