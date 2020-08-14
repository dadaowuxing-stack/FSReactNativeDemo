import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './KsNavigation.style';
import { styleConst } from '../../../constants';
import { CommonImage } from '../../../assets/images';
import IF from '../../../components/common/if/IF';

const defaultProps = {
  leftNavigationSection: null,
  rightNavigationSection: null,
  navigationGoBack: null,
  style: {},
  navigationTitleStyle: {},
  backIconStyle: {},
  isShowShadow: true
};

const propTypes = {
  navigation: PropTypes.object.isRequired,
  leftNavigationSection: PropTypes.element,     // 导航左边的部分
  rightNavigationSection: PropTypes.element,    // 导航右边的部分
  navigationTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,                                // 导航标题内容,支持传节点
  navigationGoBack: PropTypes.func,             // 导航返回函数
  style: PropTypes.oneOfType([                  // 导航容器样式
    PropTypes.object,
    PropTypes.number,
  ]),
  navigationTitleStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),       // 导航标题文本样式
  backIconStyle: PropTypes.object,              // 返回图标样式
  isShowShadow: PropTypes.bool, // 是否显示底部阴影
};

class KsNavigation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderRightNavigationSection() {
    const { rightNavigationSection } = this.props;
    if (rightNavigationSection) {
      return rightNavigationSection;
    }
    return null;
  }

  renderLeftNavigationSection() {
    const { leftNavigationSection, navigationGoBack, navigation, backIconStyle } = this.props;
    if (leftNavigationSection) {
      return leftNavigationSection;
    }
    let goBack = () => {
      //navigation.goBack();
    };
    if (navigationGoBack) {
      goBack = navigationGoBack;
    }
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={goBack} style={styles.leftNavigationBar}>
        <View>
          <Image
            source={CommonImage.toolBarBack}
            style={[styles.backIcon, backIconStyle]}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    );
  }

  renderTitle() {
    const { navigationTitle, navigationTitleStyle } = this.props;
    if (typeof navigationTitle !== 'string') {
      if (navigationTitle) {
        return navigationTitle;
      }
      return null;
    }
    return (
      <Text style={[styles.navigationText, navigationTitleStyle]} numberOfLines={1}>
        {navigationTitle}
      </Text>
    );
  }

  render() {
    const { style, isShowShadow } = this.props;
    return (
      <View style={{ width: styleConst.DEVICE_WIDTH }}>
        <View style={[styles.container, style]}>
          {/* 导航左边 */}
          <View style={styles.leftNavigationSection}>
            {this.renderLeftNavigationSection()}
          </View>
          {/* 中间标题 */}
          <View style={styles.navigationTitle}>
            {this.renderTitle()}
          </View>
          {/* 导航右边 */}
          <View style={styles.rightNavigationSection}>
            {this.renderRightNavigationSection()}
          </View>
        </View>
        <IF condition={isShowShadow}>
          {
            () => (
              <Image
                source={CommonImage.lineShadow}
                style={{ height: 1, width: styleConst.DEVICE_WIDTH }}
              />
            )
          }
        </IF>
      </View>
    );
  }
}

KsNavigation.defaultProps = defaultProps;
KsNavigation.propTypes = propTypes;
export default KsNavigation;