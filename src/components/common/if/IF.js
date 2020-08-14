import { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import logger from '../../../utils/Console';

const propTypes = {
  condition: PropTypes.any.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]) // 子元素的内容
};

const defaultProps = {
  condition: false,
  children: null
};

class IF extends PureComponent {
  // 处理传入的条件只能为boolean和function类型的
  handleCondition() {
    const { condition } = this.props;
    if (typeof condition === 'function') {
      return condition();
    }
    return Boolean(condition);
  }

  render() {
    const { children } = this.props;
    if (this.handleCondition()) {
      if (typeof children === 'function') {
        return children();
      }
      //logger.warn('Deprecated: <IF><Component/></IF> 写法已废弃，请使用 <IF>{()=><Component/>}</IF>');
      return children;
    }
    return null;
  }
}

IF.defaultProps = defaultProps;
IF.propTypes = propTypes;

export default IF;