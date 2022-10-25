/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SubTitle, Title, FooterBar } from '../../components';
import { Monument, BandAid, Chat, Home, Schedule, Warning } from '../../assets';
import { getPosts, getPages } from '../../services/service';

const HomeScreen: React.FC = () => {
  const [dataPosts, setDataPosts] = useState<any>([]);

  useEffect(() => {
    const handlePosts = async () => {
      const data = await getPosts();
      if (data) {
        setDataPosts(data.content);
      }
    };
    handlePosts();
  }, []);

  return (
    <>
      <ScrollView style={styled.container}>

        {/*
        Aqui ficaria o consumo da API
        
        <View style={{height: 30}} />
        {dataPosts ? (
          dataPosts.map(row => (
            <>
              <Title text={row. Title} />
            </>
          ))
        ) : (
          <View />
        )} */}

        <Title text="Mensagens do Presidente" />
        <SubTitle text="O papel do novo centro da Juventude para Todos !" />
        <SubTitle text="Mensagem de Natal 2020" />

        <Title text="Notícias" />
        <SubTitle text="Obras na avenida 25 de Abril finalizadas antecipadamentes" />
        <SubTitle text="Piscinas municipais abrem portas para cidadãos carenciados" />

        <Title text="Horários e Serviços" />
        <SubTitle text="Horários dos serviços municipais" />
        <SubTitle text="Horários das intalações  desportivas" />
        <SubTitle text="Atendimento ao cliente no serviço de águas" />

        <Title text="Taxas e Tarifários" />
        <SubTitle text="Tarifas de licenciamento " hideIcon={true} />
        <SubTitle text="Tarifários de água do concelho" hideIcon={true} />
        <SubTitle text="Taxas de Saneamento" hideIcon={true} />

        <View style={styled.footer}>
          <FooterBar text="Inicio" icon={Home} />

          <FooterBar text="Camara" icon={Monument} />

          <FooterBar text="Comunicar" icon={Chat} />

          <FooterBar text="Proteção Civil" icon={Warning} />

          <FooterBar text="Covid" icon={BandAid} />

          <FooterBar text="Agenda" icon={Schedule} />
        </View>
      </ScrollView>
    </>
  );
};

const styled = StyleSheet.create({
  footer: {
    width: '100%',
    marginTop: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

// const styled = StyleSheet.create({
//   screen: {
//     flex: 2,
//     padding: 10,
//     alignItems: 'center',
//     backgroundColor: '#050A30',
//   },
// });

export default HomeScreen;
