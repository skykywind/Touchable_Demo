import React,{ Component } from 'react';
import{
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
var imgs=[
  'http://www.ituring.com.cn/bookcover/1442.796.jpg',
  'http://www.ituring.com.cn/bookcover/1668.553.jpg',
  'http://www.ituring.com.cn/bookcover/1521.260.jpg',
];
class ImgDemo extends Component {
  constructor(props) {
    super(props);
    var imgs = this.props.imgs;
    this.state = {
      imgs: imgs,
      count: 0
    };
  }
  goNext() {
    var count = this.state.count;
    count ++;
    if(count < imgs.length){
      this.setState({
        count: count
      });
    }
  }
  goPreview() {
    var count = this.state.count;
    count --;
    if (count >= 0) {
      this.setState({
        count: count,
      });
    }
  }
  render(){
    return(
      <View style={[styles.flex]}>
        <View style={styles.image}>
          <Image style={styles.img} source={require('./Imgs/spmr1.png')} resizeMode="contain" />
        </View>
        <View style={styles.btns}>
          <TouchableOpacity onPress={this.goPreview.bind(this)}>
           <View style={styles.btn}>
            <Text>上一张</Text>
           </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goNext.bind(this)}>
            <View style={styles.btn}>
              <Text>下一张</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
class MyImage extends Component {
  render(){
      return(
        <View style={[{flex: 1}, {marginTop: 65}]}>
          <ImgDemo imgs={imgs}></ImgDemo>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    borderWidth: 1,
    width: 300,
    height: 200,
    borderRadius: 5,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 300,
    width: 200
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  btn: {
    width: 60,
    height: 30,
    borderColor: '#0089FF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginRight: 20,
  },
});

export default MyImage;
