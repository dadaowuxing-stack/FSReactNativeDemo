import { PixelRatio, Dimensions } from 'react-native';


export default {
  // 设计稿的设备像素分辨率，我们的设计稿基于1920*1080
  DESIGN_WIDTH: 1080,
  DESIGN_HEIGHT: 1920,
  DESIGN_DPR: 3,
  // 设备的屏幕宽度和高度，单位dp
  DEVICE_WIDTH: Dimensions.get('window').width,
  DEVICE_HEIGHT: Dimensions.get('window').height,
  HAIR_WIDTH: PixelRatio.roundToNearestPixel(1 / PixelRatio.get()),
  // 弹窗最大高度
  DIALOG_MAX_HEIGHT: 1500,
  GIFT_MAX_WIDTH: 480
};