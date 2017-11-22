import React, { Component } from 'react';

import { Button } from 'antd-mobile';

export default class BasicLayout extends Component {
  render() {
    return (
      <div>
        <h1>BasicLayout</h1>
        <Button type='primary'>确认</Button>
      </div>
    );
  }
}