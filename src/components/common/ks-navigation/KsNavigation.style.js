import { StyleSheet } from 'react-native';
import { getRealSize } from '../../../utils/utility';

/**
 * 导航头部的样式
 */

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    paddingHorizontal: getRealSize(24),
    height: getRealSize(88),
  },
  leftNavigationSection: {
    flex: 3
  },
  leftNavigationBar: {
    height: getRealSize(88),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  navigationTitle: {
    flex: 6,
    alignItems: 'center'
  },
  rightNavigationSection: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  navigationText: {
    fontSize: getRealSize(36),
    fontWeight: '600',
    fontFamily: 'System',
    color: '#222',
  },
  backIcon: {
    width: getRealSize(38),
    height: getRealSize(38)
  }
});