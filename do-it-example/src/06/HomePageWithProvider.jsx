import React, { PureComponent } from 'react';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';
import LoadingProvider from './LoadingProvider';
import Button from '../04/Button';

function RowBComponent() {
  return <Button>버튼</Button>;
}

function RowCComponent() {
  return <ButtonWithLoadingContext>버튼</ButtonWithLoadingContext>;
}

function TableComponent() {
  return (
    <table>
      <RowBComponent />
      <RowCComponent />
    </table>
  );
}

class HomePageWithProvider extends PureComponent {
  render() {
    return (
      <LoadingProvider>
        <TableComponent />
        <Button onPress={this.toggleLoading}>상태 변경</Button>
      </LoadingProvider>
    );
  }
}

export default HomePageWithProvider;
