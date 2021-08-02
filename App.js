/**
 * 主界面
 */
'use strict';
import React, {Component} from 'react';
import {
  Alert,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import ReactNativeCustomizedUpdate from 'react-native-customized-update'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      version:"",
      cacheSize:""
    }
  }

  componentDidMount() {
    let that = this;

    ReactNativeCustomizedUpdate.shouldApkUpdate({})

    ReactNativeCustomizedUpdate.getAppVersion(function (value) {
      console.log(value)
      that.setState({version:value});
    })

    ReactNativeCustomizedUpdate.getAppCacheSize(function (value, unit) {
      console.log(value)
      console.log(unit)

      that.setState({cacheSize:value+unit});
    })
  }


  _cleanCache(){
    //清除缓存
    ReactNativeCustomizedUpdate.clearAppCache(function () {

      //that.setState({cacheSize:''});
    })
  }



  render() {
    return (
        <View style={{marginTop:50,alignItems:'center'}}>
          <Text>================main page================</Text>
          <Text>version:{this.state.version}</Text>
          <Text>cache:{this.state.cacheSize}</Text>

          <TouchableOpacity

              onPress={() => {
                 this._cleanCache()
              }}
          >
            <View style={{marginTop:50}}>
              <Text>clear cache</Text>
            </View>
          </TouchableOpacity>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  iconStyle: {
    width: 23,
    height: 23,
  },
  textStyle: {
    color: '#999',
  },
  selectedTextStyle: {
    color: 'black',
  }
});

export default App
