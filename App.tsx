/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';

import styles from './App.style';
import KsNavigation from './src/components/common/ks-navigation/KsNavigation';
import { CommonImage } from './src/assets/images';

const goBack = () => {

};

const goService = () => {

};

const renderTitle = () => {
  return (
    <View style={styles.navTitleView}>
      <Text style={styles.navTitleText}>标签详情</Text>
      <Text style={styles.navSubTitleText}>872414449 fwr2242fsfsf</Text>
    </View>
  );
};

const renderLeftNavigationSection = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={goBack}>
      <View style={styles.leftNavBarBtn}>
        <Image
          source={CommonImage.toolBarBack}
          style={styles.backIcon}
          resizeMode="contain"
        />
        <Text style={styles.backText}>返回首页</Text>
      </View>
    </TouchableOpacity>
  );
}

const renderRightNavigationSection = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={goService}>
      <View style={styles.rightNavBarBtn}>
        <Image
          style={styles.btnImage}
          source={CommonImage.customerService}
        />
        <Text style={styles.rightText}>开思客服</Text>
      </View>
    </TouchableOpacity>
  );
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '商家信息一',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    title: '商家信息二',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    title: '商家信息三',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bd',
    title: '商家信息四',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
    title: '商家信息五',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
    title: '商家信息六',
  },
];

const renderItem = ({item}: any) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={goService}>
      <View style={styles.storeInfoView}>
  <Text style={styles.storeInfoText}>{item.title}</Text>
      </View>
      <View style={styles.storeCardView}>
        <View style={styles.storeCardTopView}>
          <Image
            style={styles.storeCardTopIcon}
            source={CommonImage.storeLogo}
          />
          <View style={styles.storeCompanyView}>
            <Text 
              style={styles.storeCompanyText}
              numberOfLines={1}
            >广州姿千汽配广州姿千汽配广州姿千汽配广州姿千汽配广州姿千汽配</Text>
            <Image
              style={styles.storeCardTopBottmIcon}
              source={CommonImage.boschLogo}
            />
          </View>
          <View style={styles.restView}>
            <Text style={styles.restOneText}>休息中</Text>
            <Text style={styles.restTwoText}>4月25号 9:35 营业</Text>
          </View>
        </View>
        <View style={styles.storeCardMidView}>
          <Text style={styles.storeCardMidText}>地址:广东省广州市越秀区</Text>
          <Text style={styles.storeCardMidText}>截单:上午 11:30 下午 16:30</Text>
          <Text style={styles.storeCardMidText}>商家休息中, 4月25号 9:30 恢复营业</Text>
          <View style={styles.storeCardMidLine}></View>
        </View>
        <View style={styles.storeCardButtomView}>
          <TouchableOpacity activeOpacity={0.8} onPress={goService}>
            <View style={styles.storeBtnView}>
              <Image style={styles.btnImage} source={CommonImage.storePhone} />
              <Text style={styles.storeBtnText}>商家电话</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={goService}>
            <View style={styles.storeBtnView}>
              <Image
                style={styles.btnImage}
                source={CommonImage.storePhone}
              />
              <Text style={styles.storeBtnText}>商家客服</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <KsNavigation
          navigationTitle={renderTitle()}
          leftNavigationSection={renderLeftNavigationSection()}
          rightNavigationSection={renderRightNavigationSection()}
        />
        <View style={styles.containerView}>
          <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
      />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
