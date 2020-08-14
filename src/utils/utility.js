import React from 'react';
import { PixelRatio, Dimensions, SafeAreaView } from 'react-native';

// 全局适配IPhoneX全面屏组件
// eslint-disable-next-line
export const SafeAreaContainer = ({ style = {}, ...props }) => (
  <SafeAreaView
    {...props}
    style={[{ flex: 1, backgroundColor: '#fff' }, style]}
  />
);

/**
 * 按比例将设计的px转换成适应不同屏幕的dp
 * @param designPx 设计稿标注的px值
 * @returns {number}
 */
const DEVICE_WIDTH = Dimensions.get('window').width;
export function getRealDP(designPx) {
  return PixelRatio.roundToNearestPixel((designPx / 1080) * DEVICE_WIDTH);
}

/**
 * 美术图设计基准像素改为750 * 1334
 * 按比例将设计的px转换成适应不同屏幕的dp
 * @param {number} designPx 设计稿标注的px值
 * @returns {number}
 */
export function getRealSize(designPx) {
    return PixelRatio.roundToNearestPixel((designPx / 750) * DEVICE_WIDTH);
}