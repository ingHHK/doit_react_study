import React from 'react';
import { DEFAULT_KEY, contextPropTypes } from './LoadingProviderWithKey'; //1

export const loadingPropTypes = contextPropTypes; //2

export default (contextKey = DEFAULT_KEY) =>
  (WrappedComponent) => {
    //3
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function WithLoadingContext(props, context) {
      const { loading, setLoading } = context[contextKey]; //4
      return <WrappedComponent {...props} loading={loading} setLoading={setLoading} />;
    }

    WithLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`;
    WithLoadingContext.contextTypes = {
      [contextKey]: contextPropTypes, //5
    };
    return WithLoadingContext;
  };
