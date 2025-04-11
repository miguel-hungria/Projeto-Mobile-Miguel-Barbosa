import { Image, StyleSheet, Platform, Pressable } from 'react-native';
import { Alert, Button, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
   <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/Nubank-Logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Nubank!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Saldo:R$ 11.400</ThemedText>
        
        <Pressable
  style={{
    backgroundColor: '#8d00d8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 65,
  }}
  onPress={() => {
    console.log('You tapped the button!');
  }}
>
  <ThemedText style={{ color: 'white', fontSize: 16 }}>PIX</ThemedText>
</Pressable>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: ""
            })}
          </ThemedText>{' '}

        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Usar Pix!</ThemedText>
        <ThemedText>
          XXXXXXX@gmail.com
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Benefícios da sua conta parceiro!</ThemedText>
        <Button color="#8d00d8"
          onPress={() => {
            console.log('You tapped the button!');
          }}
          title="Benefícios"
        />

        <ThemedText>

          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
