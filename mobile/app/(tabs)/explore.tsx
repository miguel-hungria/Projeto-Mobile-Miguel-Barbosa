import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/392446.webp')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">!Benefícios do Nubank!</ThemedText>
      </ThemedView>
      <ThemedText>Os Benefícios podem variar dependendo do tipo do cartão.</ThemedText>
      <Collapsible title="Cartão Viagem">
        <ThemedText>
          Tem duas vantagens principais:{' '}
          <ThemedText type="defaultSemiBold">Pode ser usado em qualquer lugar do mundo sem taxas extras, à exceção do IOF, imposto obrigatório do governo</ThemedText> e{' '}
          <ThemedText type="defaultSemiBold">O cartão Nubank Mastercard Platinum oferece consultoria de viagem para auxiliar em destinos, roteiros, seleção de hotéis e resort.</ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="cartão ultravioleta">
        <ThemedText>
        Seguro para imprevistos com o carro alugado{' '}
          <ThemedText type="defaultSemiBold">e</ThemedText> Atendimento personalizado e resolutivo 24 horas por dia, todos os dias da semana.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Cartão Roxinho">
        <ThemedText>
        Não tem anuidade ou tarifas escondidas<ThemedText type="defaultSemiBold"></ThemedText> e{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> Permite criar um cartão virtual para compras online.
        </ThemedText>
         /
        <ExternalLink href="https://reactnative.dev/docs/images">
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Cartão pj">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">Organize as suas finanças separando as despesas pessoais e profissionais</ThemedText>  e{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
          Acumule pontos no Mastercard Surpreenda Empresas e troque-os por ofertas especiais.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    height: "100%",
    width: "100%",
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
