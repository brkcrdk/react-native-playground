import React from 'react';
import {ScrollView} from 'react-native';
import {Container, CustomSlider, Text} from '../../components';

const Shadow = () => {
  return (
    <Container>
      <Text marginBottom={50} fontSize={25}>
        Shadow is here
      </Text>
      <CustomSlider />

      <Text marginTop={20}>
        TODO: Text componentinin adını güncelle çünkü native text componenti ile
        karışıyor.TODO: header türleri ekleyip
      </Text>
      <Text>
        TODO: temaya göre yazı boyutu ve kalınlıklarını güncelleyerek bir
        typography oluşturabilirsin
      </Text>
      <Text>
        TODO: Webde kullandığın gibi bir typography klasörü iyi olur ve richtext
        gibi bir komponent olur mu test et
      </Text>
      <Text>
        TODO: temaya göre yazı boyutu ve kalınlıklarını güncelleyerek bir
        typography oluşturabilirsin
      </Text>
      <Text>
        TODO: Webde kullandığın gibi bir typography klasörü iyi olur ve richtext
        gibi bir komponent olur mu test et
      </Text>
    </Container>
  );
};

export default Shadow;
