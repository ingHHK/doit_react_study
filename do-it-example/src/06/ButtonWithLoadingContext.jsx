import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import withLoadingContext from './withLoadingContext';

function ButtonWithLoadingContext({ label, loading, setLoading }) {
  return <Button onPress={() => setLoading(!loading)}>{loading ? '로딩 중' : label}</Button>;
}

ButtonWithLoadingContext.PropTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default withLoadingContext(ButtonWithLoadingContext);
